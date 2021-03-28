// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT'){
      var licenseBadge = 'MIT-blue';
    } else if (license === 'GPL') {
      var licenseBadge = 'GPLv3-blue';
    } else if (license === 'Apache') {
      var licenseBadge = 'Apache%202.0-blue';
    } else {
      var licenseBadge = '';
    }
    return renderLicenseLink(license, licenseBadge) 
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseBadge) {
    if (license === 'MIT'){
      var licenseLink = `\r[![License](https://img.shields.io/badge/License-${licenseBadge}.svg)](https://opensource.org/licenses/${license})`;
  } else if (license === 'GPL') {
      var licenseTag = "gpl-3.0"
      var licenseLink = `\r[![License](https://img.shields.io/badge/License-${licenseBadge}.svg)](https://www.gnu.org/licenses/${licenseTag})`;
  } else if (license === 'Apache') {
      var licenseTag = "Apache-2.0"
      var licenseLink = `\r[![License](https://img.shields.io/badge/License-${licenseBadge}.svg)](https://opensource.org/licenses/${licenseTag})`;
  } else {
    var licenseLink = '';
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) 
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
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
  Entered command for test this app: ${data.test}.

  # Questions
  If you have any questions about the repo https://github.com/${data.username} , open an issue or contact directly ${data.email}.
  `
  }

module.exports = generateMarkdown;
