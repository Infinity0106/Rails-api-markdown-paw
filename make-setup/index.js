const fs = require("fs");
const ora = require("ora");
const cmd = require("node-cmd");

const spinner = ora({
  text: "start"
}).start();

cmd.get(
  `
  ssh-add ~/.ssh/id_rsa_me
  cd slate || (git clone git@github.com:Infinity0106/slate.git && cd slate && git remote rm origin)
  `,
  (err, data, stderr) => {
    if (err) {
      spinner.fail(stderr);
      process.exit(1);
    }
    if (process.argv[2] == undefined) {
      spinner.fail("name of file missing");
      process.exit(1);
    }

    var arrInclude = [];

    if (!fs.existsSync("slate/source/includes")) {
      fs.mkdirSync("slate/source/includes");
    }

    fs.readFile(process.argv[2], "utf8", (err, data) => {
      arrInfo = data.split("_______________________________________");
      arrInfo.splice(-1, 1);
      arrInfo.forEach(element => {
        iInicio = element.indexOf("# ");
        iFin = element.indexOf("\n", iInicio + 1);
        fileName =
          "_" +
          element
            .substring(iInicio + 2, iFin)
            .toLowerCase()
            .replace(/\s/g, "_");

        fs.writeFileSync("slate/source/includes/" + fileName + ".md", element);
        arrInclude.push(fileName.slice(1));
      });

      fs.readFile("slate/source/index.html.md", "utf8", (err, data) => {
        var iInit = data.indexOf("#{::INCLUDES_01::}") + 18;
        var iFin = data.indexOf("#{::INCLUDES_02::}");
        var strTmp =
          data.substring(0, iInit) +
          "\n{::INCLUDES::}\n" +
          data.substring(iFin, data.length);

        arrInclude.forEach(ele => {
          strTmp = strTmp.replace(
            "{::INCLUDES::}",
            `  - ${ele}\n{::INCLUDES::}`
          );
        });
        strTmp = strTmp.replace("{::INCLUDES::}", "");

        fs.writeFile("slate/source/index.html.md", strTmp, err => {
          if (err) {
            spinner.fail("error escribir");
            process.exit(1);
          }

          cmd.get(
            `
            cd slate && bundle install
          `,
            (err, data, stderr) => {
              if (err) {
                spinner.fail(stderr);
                process.exit(1);
              }

              spinner.succeed(
                "ya quedo, corre el comando {cd slate && bundle exec middleman server} to start server"
              );
              process.exit(0);
            }
          );
        });
      });
    });
  }
);
