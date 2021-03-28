// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown =  require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        },
        {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
        },
        {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Please five description of your project.',
        name: 'description',
        },
        // {
        // type: 'checkbox',
        // message: 'Please check your Table of Contents.',
        // choices: ["Description", "Installation", "Usage", "Test", "License", "Contributions"],
        // name: 'contents',
        // },
        {
        type: 'input',
        message: 'What necessary Installation for this app',
        name: 'Installation',
        },
        {
        type: 'input',
        message: 'What is this app used for?',
        name: 'Usage',
        },
        {
        type: 'list',
        message: 'what license used for this app? enter for skip.',
        choices: ["Apache", "MIT", "GPL"],
        name: 'license',
        },
        {
        type: 'input',
        message: 'Please add contribution',
        name: 'contribution',
        },
        {
        type: 'input',
        message: 'Please enter command for test this app',
        name: 'Test',
        },
        {
        type: 'input',
        message: 'Any quesiton for this app',
        name: 'Question',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            return console.log(err);
        } else {
            console.log("Successfully generate file:" + fileName);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md",generatorMarkdown(data))
    })
}

// Function call to initialize app
init();
