# Orm Back End Ecommerce Application


![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
  
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
  
## Description 
  
Application that provides the back end for an e-commerce site. The app uses an Express.js configured API and utilises Sequelize to interact with a MySQL database.

Database name, MySQL username, and MySQL password are inputted in an environment variable file (env), which allows connection to a database using Sequelize.

Schema and seed commands allow for a development database to be created and seeded with test data. 

The Node server.js command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```



## Installation
  
To install the project please use the following package manager: 
  
enter 'npm init' in the terminal 

enter 'npm install mysql' to install the express dev dependency

enter 'npm install table.console' to install the table.console dev dependency

enter 'npm install inquirer' to install the inquirer dev dependency

  
## Usage
  
Download, install NPM packages, enter node server.js to activate server and run the app


## Contributing
  
To contribute further on this project please:
  
n/a 
  
## Tests
  
n/a 
  
## Questions
  
For any further questions, please contact GitHub user: 
[ThomWilliams](https://www.github.com/ThomWilliams/) 

Or for direct enquiries please email the follower developer address: 
thomwilliams1990@gmail.com 
  

## Screenshot

![Screenshot of requests in the command line](./Assets/employee-tracker.png)

## Walkthrough Video

- [Watch Video](https://drive.google.com/file/d/1XZ8hIfcwywpOyK1Msj6XpY0rqC4S1EgC/view?usp=sharing)

## Deployment / Links

- Project Repository: [GitHub](https://github.com/ThomWilliams/employee-tracker-tew)

- Issue tracker: [GitHub Issues](https://github.com/ThomWilliams/employee-tracker-tew/issues)


## License
  
MIT 

Copyright (c) [2021] [Thomas Edward Williams]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


