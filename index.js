// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown =  require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
        {
        type: 'checkbox',
        message: 'Please check your Table of Contents.',
        choices: ["Description", "Installation", "Usage", "Test", "License", "Contributions"],
        name: 'Contents',
        },
        {
        type: 'checkbox',
        message: 'What necessary Installation for this app',
        choices: ["inquirer", "fs", "JavaScript", "VScode", "HTML", "CSS"],
        name: 'Installation',
        },
        {
        type: 'input',
        message: 'What is this app used for?',
        name: 'Usage',
        },
        {
        type: 'input',
        message: 'What license is your license badge name? enter for skip.',
        name: 'licenseBadge',
        },
        {
        type: 'input',
        message: 'What license is your license Link? enter for skip.',
        name: 'licenseLink',
        },
        {
        type: 'input',
        message: 'What license is your license section? enter for skip.',
        name: 'licenseSection',
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
