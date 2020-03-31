# Mapfile Editor Server

This repository is home to the server-side portion of the mapfile editor. See below for more info on the API, it's pretty simple, but should get the job done.

The idea behind mapfile editor is to provide a web ui in front of a folder full of mapfiles that are being served using Mapserver. This application can be run on any server, either on the server itself, or inside a docker container. It just needs a couple of environment variables set to tell it where the mapfiles live (and the user running the app will need access to those files).

## API Reference

**GET `/`** serves the client application.

**GET `/api/files`** returns a list of files that exist inside the mapfile folder. This is not recursive, so won't look inside any directories included in the mapfile folder. (Pull requests welcome)

**GET `/api/templates/:template`** returns a template file if the template name (including extension) matches a file in the templates folder.

**GET `/api/files/:filename`** returns a mapfile from the mapfile folder if the name (including extension) matches an existing file.

**POST `/api/files`** creates a new mapfile in the mapfiles folder using the data sent as a JSON payload. The payload should include `filename` and `content` keys, something like this:

```json
{
  "filename": "test.map",
  "content": "MAP\n..."
}
```

**PUT `/api/files/:filename`** edits an existing mapfile using the name passed in the url to find the file, you can change the filename by passing a different name in the body, the body should be JSON and include a `content` key and an optional `filename` key used to overwrite the existing filename.

**DELETE `/api/files/:filename`** deletes a file by matching the `filename` parameter to an existing file within the mapfiles directory.

## Run in development mode

You can run this app in visual studio code debug mode for development, which is super handy. Follow these steps to get going with that.

1. Pull the repository down using `git clone`, move into the server directory using `cd mapfile-editor/server`, then install our dependencies using `npm install`.

2. Set up your launch configuration in the .vscode folder by creating a `launch.json` file, you can tell VSCode to create a basic node.js one for you.

3. Edit `launch.json` to add the needed environment variables, for example, my `launch.json` looks like this:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/server.js",
      "env": {
        "PORT": "3030",
        "MAPFILE_PATH": "/Users/rdcrlwlb/code/mapfile-editor/server/mapfiles",
        "TEMPLATE_PATH": "/Users/rdcrlwlb/code/mapfile-editor/server/templates"
      }
    }
  ]
}
```

4. Run in debug mode, click the little bug/play button on the left sidebar, then the play button at the top of the panel to start it up. In the Debug Console you should see a message that says `mapfile-editor listening on port 3030` if everything goes to plan.

## Run for production

To run in production you follow the same basic steps as for development, only you do it from the command line on the server your're interested in running on. You will also need to set the environment variables on your system prior to running, but once you get the code set up and ready to go, you can start the app using `node server.js` from within the `.../mapfile-editor/server/` directory.

You'll probably want to set up a reverse proxy on top of the node.js app, that way you can handle TLS and run HTTPS via apache or your server of choice.
