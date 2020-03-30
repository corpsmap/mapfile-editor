# Map File Editor
 A polished web application that allows a user to edit and save mapfiles through a userinterface on www.mapserver.org.



## Users Story
--As a user I want to be able to edit and save mapfiles on our 
Map Instance inside the Amazon Web Server. So I don't have to
upload over file transfer protocol or secure shell protocol.--

## Business Context
Twitter or File updater 


## Technology Requirements
* CSS Materialize
* React
* MONACO visio studo code module
* NODE JS
* EXPRESS.JS
* cilent side is static cilent 
* applicaiton is self contained
* API endpoints for CRUD ops 
* Using GIT on DI2E
* ...maybe postsql
* redux

## Tasks 
[Flow Chart](./assets/mapserver.html)

### Schedule of Scope

1. HTML and Web Pages                1st week of April

2. API Routes and Front end logic    2nd Week of April

3. Styling                           3rd and 4th Week of April 

4. Debug testing                     1st Week of May


Notes
------

#### Frontend (Cilent) Saphirah
React.js front end handle. -REACT.js handles the HTML 
*   /
*   /files
*   /editor

REDUX bundler data store on the front end
*   auth-bundle 
*   files-bunfle
*   editor-bundle

**via http**  _Bundler talks to Frontend and Backend_

#### Backend (server) Will 
Server web application written in Node.js; drawn in draw.io as a 6 sided polygon
*   GET /api/files
*   POST /api/files
*   PUT /api/:id 
*   DELETE /api/files/:id
*   GET /api/files/:id
*   DELETE /api/files/:id
*   GET /api/templates/:id

Database on the backend oracle, sequelize
* FS key off the file name since on a file system (EC2_linux)

    ```npx create-react-app cilent```

### Map files

*Mapserver renders the map file as an image, or JSON, or text from the backend.*
    * We are using JSON or string 
    * .map files are written in C or C++  
    
changing the data scource, 

Set up a brownbag and DEMO with KANSAS city 
    
    