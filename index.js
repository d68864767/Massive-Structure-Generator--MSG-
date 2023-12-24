const fs = require('fs');
const path = require('path');
const generator = require('./generator');
const aiOptimizer = require('./ai_optimizer');

// Load configuration
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));

// Check if AI optimization is enabled
if (config.aiOptimization) {
  aiOptimizer.optimize(config);
}

// Generate file structure
generator.generate(config);

console.log('Massive Structure Generator has completed the file structure generation.');
