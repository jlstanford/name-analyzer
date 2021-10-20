# name-analyzer
Volley code challenge

## Usage
Pull the name analyzer down to your personal workspace. You must have node installed to your computer.
Navigate to the name-analyzer folder and run "node server.js" to start the api server. 
The user should provide a name and a tarot major arcana to the analysis route.

### /analysis/:name/:arcanaName 
The user will provide a name and arcana like: http://localhost:3000/analysis/jessica/death 
to return a json analysis

### /arcana
This endpoint will return a list of arcana choices by accessing http://localhost:3000/arcana

### /arcana/:arcanaName
This endpoint will return a meaning for the given arcana

### /name/:name
This endpoint will return an array of characteristics for a persons name 
