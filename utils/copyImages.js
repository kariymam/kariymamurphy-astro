const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyImagesToRoot(srcDir, destDir) {
    try {
        // Read the contents of the srcDir
        const entries = await readdir(srcDir, { withFileTypes: true });

        // Iterate over the entries
        for (const entry of entries) {
            const srcPath = path.join(srcDir, entry.name);

            // Check if entry is a directory
            if (entry.isDirectory()) {
                // If the directory is named "img", copy its contents to the destination directory
                if (entry.name === 'img') {
                    await copyImages(srcPath, destDir);
                } else {
                    // Recursively call copyImagesToRoot for subdirectories
                    await copyImagesToRoot(srcPath, destDir);
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function copyImages(srcDir, destDir) {
    try {
        // Read the contents of the srcDir
        const entries = await readdir(srcDir);

        // Iterate over the files in the directory
        for (const entry of entries) {
            const srcPath = path.join(srcDir, entry);
            const destPath = path.join(destDir, entry);

            // Copy the file to the destination directory
            await copyFile(srcPath, destPath);
            console.log(`Copied ${srcPath} to ${destPath}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Usage: node copyImages.js
(async () => {
    const blogDir = path.join(__dirname, '..', 'src', 'blog'); // Assuming blog is in the src directory
    const destDir = path.join(__dirname, '..', 'src', 'img'); // Path to /img within the src directory

    // Create the destination directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    }

    await copyImagesToRoot(blogDir, destDir);
})();
