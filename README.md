# CourseProject
This is the CourseProject Repository
In the Spint1 and 2 of the project, following features were implemented

This Project uses following features
1.	FrontEnd – This App is an SPA that uses ReactJS framework to create the frontend. While building the frontend, we used following concepts and tools.

      a.  FLUX : The frontend of the App has used REDUX stores to adhere to the FLUX architectural concepts (Single-source of truth, State is read-only and Changes are made with pure functions)

      b.  Pure functions : Most of the code in this App uses Pure functions 

      1. function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments 
    
      2. The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.
    
      c. ES2015 syntax : for most part this app uses ES6 syntax and functionality.

      d. Other modules and libraries – This app uses redux and react-redux for FLUX.  And even if most part uses ES2016 syntax, in a few places, we have used underscore for data manipulation.
      
      
2.  BackEnd – Backend of this App uses .NETCORE to provide RESTful web API to process the data storage requests. While building the backend, we used following concepts and tools.

      a.  .NETCORE MVC framework - to create a scalable and loosely coupled architecture, MVC framework of .NETCORE was leveraged. Controller objects provided the RESTful API endpoints while attribute-based .NETCORE routing was used to implement HTTP methods (GET, POST, PUT and DELETE)
      
      b.  Repository pattern - To reduce network-traffic and calls to the Database, we used Repository pattern.
      
      c.  Singleton Pattern for DB connection - DB connection object is created once per App instance and  reused to query the DB. 
      
 3. Database - Azure CosmosDB (with SQL/DocumentDB API) was used as the database for the app.
    
      1. Azure CosmosDB is one of the most scalable, highest performing databases that gives us the flexibility to use any of the below APIs - SQL (Document), Mongo (Document), Table(Column Collection) 
