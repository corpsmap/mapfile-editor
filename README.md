# Map File Editor

A polished web application that allows a user to edit and save mapfiles through a userinterface on Amazon Web Services connected to our map server.

For more information on map servers and IDEs apps for map files:
[Click Here](https://www.mapserver.org/about.html)

## Users Story

--As a user I want to be able to edit and save mapfiles on our
Map Instance inside the Amazon Web Server. So I don't have to
upload over file transfer protocol or secure shell protocol.--

## Business Context

Twitter or File updater

## Technology Requirements

- CSS Bootstrap
- React
- State Management using Redux-Bundler
- Microsoft MONACO IDE editor
- Node.JS
- Express.JS
- cilent side is static cilent
- applicaiton is self contained
- API endpoints for CRUD ops
- Using version control on https://bitbucket.di2e.net/ and https://github.com/corpsmap/mapfile-editor

## Application Flow Chart

![Flow Chart](assets\mapserver-App_flow-Page-2.png)

## Tasks

### Schedule of Scope

1. Research, Planning, Design of App month of April

2. Redux, API Routes and Front end logic May to June

3. Styling 3rd and 4th Week of Jun

4. Debug testing 1st and 2nd Week of July

5. Presentation to GIS branch and Engineering Staff July 17, 2020

## Notes

### Frontend (Cilent) Saphirah

A. React.js front end handle. -REACT.js handles the HTML

- /
- /files
- /editor

B. REDUX bundler data store on the front end

- auth-bundle
- files-bunfle
- editor-bundle

```
**via http**  --Bundler talks to Frontend and Backend--
```

### Backend (server) Will

C. Server web application written in Node.js; drawn in draw.io as a 6 sided polygon

- GET /api/files
- POST /api/files
- PUT /api/:id
- DELETE /api/files/:id
- GET /api/files/:id
- DELETE /api/files/:id
- GET /api/templates/:id

D. Database on the backend oracle, sequelize

- FS key off the file name since on a file system (EC2_linux)

  `npx create-react-app cilent`

## On Map files

_Mapserver renders the map file as an image, or JSON, or text from the backend._
_ We are using JSON or string
_ .map files are written in C or C++

## [Deployed Application on AWS](http://ec2-107-20-76-219.compute-1.amazonaws.com/mapfile-editor/app/)

## Views

![Landing Page](assets\landingpage.png)

![User Logged In](assets\signedInMapfile.png)

![Editor Page](assets\editorPage.png)
