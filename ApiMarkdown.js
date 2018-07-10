//template stirng
const stringTMP = `
## {::REQUEST_NAME::}

\`\`\`shell
{::BODY::}
\`\`\`


\`\`\`javascript
response status *{::RESPONSE_STATUS::}*
{::RESPONSE::}
\`\`\`

{::DESCRIPTION::}

### HTTP Request

\`{::TYPE::} {::ROUTE::}\`

### HEADERS

| Parameter | Value |
| --------- | ----- |
| {::HEADER_ID::} | {::HEADER_VALUE::} |

### URL Parameters

| Parameter | Value |
| --------- | ----- |
| {::PARAMETER_ID::} | {::PARAMETER_VALUE::} |
`;
//end template string

const exportStringTmp = `
# {::TITLE::}

{::DESC::}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{::CHILD_RESOURCE::}
`;

// get the base of the url path wihtout the host
function urlToPath(str) {
  var pathArray = str.split("/");
  var url = pathArray[0] + "//" + pathArray[2];

  return str.replace(url, "");
}

// function to return the body into a nicely formatted json
function bodyToStr(str) {
  if (str == "") {
    return str;
  }

  try {
    tmpJson = JSON.parse(str);
    tmp = JSON.stringify(tmpJson, undefined, 2);
  } catch (e) {
    tmp = str;
  }

  return tmp;
}

// function to return if the request is mulitpart or json format
function renderBody(request) {
  bodyToConvert = "";
  if (request.jsonBody != undefined) {
    bodyToConvert = JSON.stringify(request.jsonBody);
  }
  if (request.multipartBody != undefined) {
    bodyToConvert = JSON.stringify(request.multipartBody);
  }

  return bodyToStr(bodyToConvert);
}

// hace la primer letra de un string capital
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// function to print in file
function exportCode(context, requests, options) {
  var structure = {};
  var exportStrTmp = exportStringTmp;

  context.getAllGroups().forEach(element => {
    id =
      "_" + element.name.replace(/\s/g, "_").toLowerCase() + "-" + element.id;
    structure[id] = {
      name: capitalizeFirstLetter(element.name),
      requests: element.getChildRequests().map(ele => {
        return ele;
      })
    };
  });

  context.getRootRequests().forEach(element => {
    exportStrTmp = exportStrTmp.replace(
      "{::TITLE::}",
      capitalizeFirstLetter(element.name)
    );
    exportStrTmp = exportStrTmp.replace("{::DESC::}", element.description);
  });

  Object.keys(structure)
    .sort()
    .forEach(key => {
      var tmpString = "";

      tmpString += "# " + structure[key].name + "\n";

      structure[key].requests.forEach(ele => {
        tmpString += previewCode(ele);
      });

      exportStrTmp = exportStrTmp.replace("{::CHILD_RESOURCE::}", tmpString);

      exportStrTmp += `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{::CHILD_RESOURCE::}`;
    });

  exportStrTmp = exportStrTmp.replace("{::CHILD_RESOURCE::}", "");

  return exportStrTmp;
}

// function to print in preview
function previewCode(request) {
  var str_headers = "";
  request.getHeadersNames().forEach(ele => {
    str_headers += `| ${ele} | ${request.getHeaderByName(ele, false)} |\n`;
  });

  var str_url_params = "";
  request.getUrlParametersNames().forEach(ele => {
    str_url_params += `| ${ele} | ${request.getUrlParameterByName(
      ele,
      false
    )} |\n`;
  });

  // uncomment if you want to debug values
  // console.log("🛠🛠🛠🛠🛠");
  // console.log(request);
  // console.log(request.description);
  // console.log(request.method);
  // console.log(urlToPath(request.url));
  // console.log(str_headers);
  // console.log(str_url_params);
  // console.log(renderBody(request));
  // console.log(request.getLastExchange().responseStatusCode);
  // console.log(bodyToStr(request.getLastExchange().responseBody));
  // console.log("🛠🛠🛠🛠🛠");

  //replace tmpelate with actual values
  var strTmp = stringTMP;
  strTmp = strTmp.replace("{::REQUEST_NAME::}", request.name);
  strTmp = strTmp.replace("{::DESCRIPTION::}", request.description);
  strTmp = strTmp.replace("{::TYPE::}", request.method);
  strTmp = strTmp.replace("{::ROUTE::}", urlToPath(request.url));
  strTmp = strTmp.replace(
    "| {::HEADER_ID::} | {::HEADER_VALUE::} |",
    str_headers
  );

  strTmp = strTmp.replace(
    "| {::PARAMETER_ID::} | {::PARAMETER_VALUE::} |",
    str_url_params
  );

  strTmp = strTmp.replace("{::BODY::}", renderBody(request));
  strTmp = strTmp.replace(
    "{::RESPONSE_STATUS::}",
    request.getLastExchange()
      ? request.getLastExchange().responseStatusCode
      : ""
  );
  strTmp = strTmp.replace(
    "{::RESPONSE::}",
    bodyToStr(
      request.getLastExchange() ? request.getLastExchange().responseBody : ""
    )
  );

  return strTmp;
}

// Extensions are implemented as JavaScript classes
var ApiMarkdown = function() {
  // implement the generate() method to generate code
  this.generate = function(context, requests, options) {
    switch (context.runtimeInfo.task) {
      case "exportRequestSelection":
        return exportCode(context, requests, options);
      case "codeGenerationPreview":
        return previewCode(requests[0]);
    }
  };
};
// set the extension identifier (must be same as the directory name)
ApiMarkdown.identifier = "com.infinity0106.ApiMarkdown";
// give a display name to your Code Generator
ApiMarkdown.title = "Api Mark down generator";
// keyword identifying the language highlighter for the output
ApiMarkdown.languageHighlighter = "markdown";
// extension of the file
ApiMarkdown.fileExtension = "md";
// call to register function is required
registerCodeGenerator(ApiMarkdown);
