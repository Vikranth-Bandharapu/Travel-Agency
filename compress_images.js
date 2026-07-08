const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'assets');

async function processImages() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (!file.startsWith('temp_') && (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png'))) {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            
            if (stats.size > 95000 || !file.endsWith('.webp')) {
                console.log(`Compressing ${file} (${stats.size} bytes)`);
                const tempPath = path.join(dir, 'temp_' + file.replace(/\.(jpg|png)$/, '.webp'));
                
                try {
                    await sharp(filePath)
                        .webp({ quality: 50 })
                        .toFile(tempPath);
                    
                    const finalPath = path.join(dir, file.replace(/\.(jpg|png)$/, '.webp'));
                    
                    // safely replace
                    try {
                        const newBuffer = fs.readFileSync(tempPath);
                        fs.writeFileSync(finalPath, newBuffer); // overwrite existing
                        if (filePath !== finalPath) {
                            fs.unlinkSync(filePath); // delete original .jpg/.png if possible
                        }
                    } catch (e) {
                        console.log('Could not overwrite directly, file might be in use: ' + file);
                    }
                    
                    try { fs.unlinkSync(tempPath); } catch (e) {} // cleanup
                } catch(err) {
                    console.error('Error processing ' + file + ':', err);
                }
            }
        }
    }
    
    for (let i = 1; i <= 3; i++) {
        const destPath = path.join(dir, `destination${i}.webp`);
        if (!fs.existsSync(destPath)) {
            const srcPath = path.join(dir, `opt_img_${i}.webp`);
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log(`Created ${destPath}`);
            }
        }
    }
    
    const htmlFiles = ['dashboard.html', 'agent_dashboard.html', 'index.html', '404.html'];
    for (const html of htmlFiles) {
        if (fs.existsSync(html)) {
            let content = fs.readFileSync(html, 'utf8');
            content = content.replace(/\.jpg/g, '.webp');
            content = content.replace(/\.png/g, '.webp');
            fs.writeFileSync(html, content);
            console.log(`Updated references in ${html}`);
        }
    }
}

processImages().then(() => console.log('Done!')).catch(console.error);
