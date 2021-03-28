// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT'){
      var licenseBadge = 'MIT-yellow';
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
    if (license === ''){
      var licenseLink = "" ; 
  } else {
      var licenseLink = `[\r(https://img.shields.io/badge/License-${licenseBadge}.svg)](https://opensource.org/licenses/${license})`;
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
  To run tests, you need to run the following command: ${data.test}.

  # Questions
  If you have any questions about the repo https://github.com/${data.username} , open an issue or contact directly ${data.email}.
  `
  }

module.exports = generateMarkdown;
