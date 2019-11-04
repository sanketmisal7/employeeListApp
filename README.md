# Employee List Application
This application is built for listing the employee data such as Name, Email and Age. It shows the live bar chart for No. of Employees you have within a Date Range. Application uses MongoDb as the database and has various API calls. Application is built using Express JS, Node JS, Angular JS and MongoDb. For the live chart utilization chart.js is used

# Usage
Installing MongoDb
- To use this application you need to download MongoDb server [here](https://www.mongodb.com/download-center/enterprise)
- Once you download and install the server, Open your command prompt to navigate to the path where the Database is installed. 
- Use 'mongod' command to start the server.
- Open another command prompt to the same path and use command "mongo" to start the mongodb terminal
- After it starts, create a collection named "employeelist"


Launching the application
- Clone the Repository
- Run 'npm i' in the project repository to download local dependencies for the project
- Run 'node server' to launch the application
- You should now be able to use your application on http://localhost:3000/ 

Use
- You can Add, Remove, Edit, Update Employee records such as Employee name, Employee email and Employee age.
- After each operation you will see live bar chart being updated for the employee age range.
- Bar chart displays the number of employees you have within the specific date range.  
