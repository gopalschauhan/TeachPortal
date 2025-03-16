* How to run the solution on local laptop/desk top
* This solotion has two components, one is backend services developed using .net core 8 and Frontend devloped using ReactJS.
* Download or clone the solution
* For backend services open the solution in Visual Studio 2022 solution file is at this location \\TeachPortal\TeachPortal.sln
* Restore nuget packages and build the solution in VS 2022
* Make sure SQL server installed locally on laptop or Desktop and Windows authentication enabled.
* Go to this location TeachPortal\src\Infrastructure\TeachPortal.Identity, and open cmd or powershell terminal 
* Run these commands 1. "dotnet tool install dotnet-ef -g" and then "dotnet ef database update -s ..\..\API\TeachPortal.API\TeachPortal.API.csproj --context AuthDbCont"
* Go to this locaiton \\TeachPortal\src\Infrastructure\TeachPortal.Persistent, , and open cmd or powershell terminal
* Run this command "dotnet ef database update -s -s ..\..\API\TeachPortal.API\TeachPortal.API.csproj --context TeachPortalDbContext"
* Now set "\\TeachPortal\src\API\TeachPortal.API\TeachPortal.API.csproj" as startup project and run the application from VS 2022, it will open the swagger UI for backend services.
* For Front end go to \\TeachPortal\src\UI\teachportal.ui and make sure node is installed on local laptop/desktop
* Now open terminal here and run "npm install", wait for it's success
* Now run "npm start", and UI application will be opened in browser.
