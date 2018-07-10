# API Generator RUBY

This app generates a markdown to generate a slate automated documentation

## pre-require

have paw installed in your computer

[PAW](https://mac-torrent-download.net/paw-3-1-7)

## steps

the strucutre of your paw document should have at the begining a introduction
endoint that is the first page in slate

then for every resource geenrate a group with respective endpintos it should look
something like This

introduction
.
├── introduction (doesnt make any call just get the description)
├── Users_app
| ├── GET users
| └── POST user
.
.
.

1.  get the extension and save it in your extension directory
2.  exporte <kbd>⌘</kbd><kbd>shift</kbd><kbd>E</kbd>
3.  save it at root of your documentation project
4.  copy the file setup.sh (is in extension folder)
5.  run ./setup.sh <name of file exported from paw>
6.  cd into slate
7.  run bundle exec middleman server

#### note

- I have a hook that doesn't allow you to push changes until you update your CHANGELOS.md
- You can change the shell file inside the make-setup with the command nexe index.js -n setup.sh
