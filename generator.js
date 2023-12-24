const fs = require('fs');
const path = require('path');

/**
 * Generates a file structure based on the provided configuration.
 * @param {Object} config - The configuration for the file structure.
 */
function generate(config) {
  // Create the output directory if it doesn't exist
  if (!fs.existsSync(config.outputDirectory)) {
    fs.mkdirSync(config.outputDirectory);
  }

  // Generate the file structure
  generateDirectory(config.outputDirectory, config.customizationOptions.directoryDepth, config.customizationOptions.filesPerDirectory, config.customizationOptions.fileTypes);
}

/**
 * Recursively generates a directory structure.
 * @param {string} dirPath - The path of the current directory.
 * @param {number} depth - The remaining directory depth.
 * @param {number} filesPerDirectory - The number of files per directory.
 * @param {Array} fileTypes - The types of files to generate.
 */
function generateDirectory(dirPath, depth, filesPerDirectory, fileTypes) {
  if (depth === 0) {
    return;
  }

  // Generate files
  for (let i = 0; i < filesPerDirectory; i++) {
    const fileType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
    const filePath = path.join(dirPath, `file${i}.${fileType}`);
    fs.writeFileSync(filePath, '');
  }

  // Generate subdirectories
  for (let i = 0; i < filesPerDirectory; i++) {
    const subDirPath = path.join(dirPath, `dir${i}`);
    fs.mkdirSync(subDirPath);
    generateDirectory(subDirPath, depth - 1, filesPerDirectory, fileTypes);
  }
}

module.exports = {
  generate
};
