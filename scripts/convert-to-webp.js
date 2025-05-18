import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTFOLIO_DIR = path.join(__dirname, '../src/assets/Portfolio');

// Function to convert a single image
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .rotate() // This will automatically rotate based on EXIF orientation
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

// Function to process a directory
async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath);
    } else if (stat.isFile() && item.toLowerCase().endsWith('.jpg')) {
      // Convert JPG to WebP
      const webpPath = fullPath.replace(/\.jpg$/i, '.webp');
      await convertToWebP(fullPath, webpPath);
    }
  }
}

// Main function
async function main() {
  try {
    console.log('Starting conversion to WebP...');
    await processDirectory(PORTFOLIO_DIR);
    console.log('Conversion completed!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

main(); 