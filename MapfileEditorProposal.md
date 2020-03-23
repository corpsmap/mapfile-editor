Mapfile Editor
Problem
We’ve got a bunch of mapfiles (https://www.mapserver.org/mapfile/) sitting on a server in AWS next to our Mapserver instance.  Editing mapfiles then uploading over SSH or FTP is annoying.  Can we have a website that allows users to edit and save mapfiles over the web?
Considerations
There are some considerations we need to account for in the design, these are mainly things we need to think about, and document in our design.:
	•	Versioning - do we, and if we do, how do we version files as users make changes?
	•	Indexing - how do we keep track of the files that exist?
	•	Authentication - what level of user access control do we want / need?
	•	Templates - do we provide template mapfile for users when creating a new one?
Technical requirements (boundaries)
The project must be built within the following constraints:
	•	Client will use React https://reactjs.org/ / redux-bundler https://reduxbundler.com/
	•	Recommend that we use Create-react-app https://create-react-app.dev/
	•	Client will use the Monaco Editor https://microsoft.github.io/monaco-editor/
	•	Server will use Node.js https://nodejs.org/ / Express https://expressjs.com/
	•	Code will be stored in the Git repository at Di2E https://www.di2e.net/
Tasks
	•	Kick-off webmeeting
	•	Create a high-level architecture (flow chart) showing all the logic of an application that allows users to (at a minimum)
	•	Log in to the tool
	•	See a list of mapfiles available
	•	Open a mapfile for editing
	•	Save an edited mapfile
	•	Create a new mapfile and open for editing
	•	Log out of the tool
	•	API Design - Design a web api that facilitates the asynchronous moving of data supporting the application architecture described in part 1.  What data will need to be passed to the client, what format does that take, how will the API endpoints be structured to handle these requests.
	•	Client Design - Mock up how you would like to design the front-end, this can be in graphics software or in code mock-up form.  The client design will specify what css framework will be used if one is going to be used, or specify why one will not be used.
5	•	Scope / Schedule Submittal
6	•	Web Server (API Server) development - build the back-end app.
7	•	Client-application Development - build the front-end app.
8	•	Testing / Refining
9	•	Present the application via webinar.
Schedule- brownbag vitually or at the district 
We should be able to finish the tasks above in a total of 6 weeks.  Tasks 2, 3 and 4 above should be built into a document including a rough schedule for the remaining tasks 6-9 and submitted as the deliverable for task 5.  
We will baseline the schedule based on the date for task 5 and go from there.  Task 5 should be completed 2 weeks from kick-off.
Team
Saphirah Pociluyko - Lead Developer / Designer
Will Breitkreutz - Developer, Reviewer