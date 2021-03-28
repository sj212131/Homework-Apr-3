// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT'){
      return licenseBadge = 'MIT-yellow';
    } else if (license === 'GPL') {
      return licenseBadge = 'GPLv3-blue';
    } else if (license === 'Apache') {
      return licenseBadge = 'Apache%202.0-blue';
    } else {
      licenseBadge = '';
    }
    renderLicenseLink(license, licenseBadge) 
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseBadge) {
    if (license === ''){
      return licenseLink = "" ; 
  } else {
    licenseLink = `\r(https://img.shields.io/badge/License-${licenseBadge}.svg)](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}

  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.installation}

  # Usage
  ​This application is used for ${data.usage}.

  # License
  This project is license under the ${data.license} license.

  # Contributing
  ​Contributors: ${data.contribution}

  # Tests
  To run tests, you need to run the following command: ${data.test}.

  # Questions
  If you have any questions about the repo https://github.com/${data.userName} , open an issue or contact directly ${data.email}.
  `
  }

module.exports = generateMarkdown;
