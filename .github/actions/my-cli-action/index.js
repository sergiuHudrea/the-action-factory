// const core = require('@actions/core');
// const { execSync } = require('child_process');

// async function run() {
//   try {
//     const version = core.getInput('version') || 'latest';
    
//     console.log(`Installing MyCLI version: ${version}...`);

//     execSync(`curl -fsSL https://cli.example.com/install.sh | sh`, { stdio: 'inherit' });

//     console.log("MyCLI installed successfully.");
//   } catch (error) {
//     core.setFailed(`Installation failed: ${error.message}`);
//   }
// }

// run();

const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
  try {
    console.log("Installing bat CLI...");

    execSync(`sudo apt-get update && sudo apt-get install -y bat`, { stdio: 'inherit' });

    console.log("bat installed successfully.");
  } catch (error) {
    core.setFailed(`Installation failed: ${error.message}`);
  }
}

run();
