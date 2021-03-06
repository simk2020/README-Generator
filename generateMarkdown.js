// function to generate markdown for README
function generateReadme(answers) {
  return `# ${answers.title}
 
  ## Table of Contents
  * [Description] (#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Contribution
  ${answers.contribution}
  
  ## Test
  ${answers.tests}
 
  ## Questions :
  ${answers.questions}

  please feel free to contact me directly if you have any questions via
  - ${answers.github} 
  - ${answers.email}
`;
}
module.exports = generateReadme;
