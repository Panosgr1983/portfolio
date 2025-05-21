const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const buildDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.resolve(buildDir, 'index.html');
const outputDir = path.resolve(__dirname, '../export');
const outputHtmlPath = path.resolve(outputDir, 'panagiotis-portfolio.html');

async function exportSingleHtml() {
  console.log('Starting export process...');
  
  // Ensure the output directory exists
  await fs.ensureDir(outputDir);
  
  try {
    // Check if the build directory exists
    if (!fs.existsSync(buildDir)) {
      console.error(`Build directory not found: ${buildDir}`);
      console.error('Please make sure the build process completed successfully.');
      process.exit(1);
    }

    // Check if index.html exists
    if (!fs.existsSync(indexHtmlPath)) {
      console.error(`Index HTML file not found: ${indexHtmlPath}`);
      console.error('Please make sure the build process completed successfully.');
      process.exit(1);
    }

    // Use html-inline to inline all assets
    console.log('Inlining all assets...');
    execSync(`npx html-inline -i ${indexHtmlPath} -o ${outputHtmlPath}`, { stdio: 'inherit' });
    
    console.log('\nExport completed successfully!');
    console.log(`Single HTML file created at: ${outputHtmlPath}`);
    
    // Get file size
    const stats = await fs.stat(outputHtmlPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`File size: ${fileSizeInMB} MB`);
    
  } catch (error) {
    console.error('Export failed:', error);
    process.exit(1);
  }
}

exportSingleHtml();