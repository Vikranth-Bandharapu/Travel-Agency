const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function fixHero() {
    const src = 'assets/hero_bg.webp';
    const dest = 'assets/hero_bg_small.webp';
    if (fs.existsSync(src)) {
        await sharp(src).webp({quality: 40}).toFile(dest);
        
        // update references
        const files = ['styles.css', '404.html', 'index.html'];
        for (const file of files) {
            if (fs.existsSync(file)) {
                let content = fs.readFileSync(file, 'utf8');
                content = content.replace(/hero_bg\.webp/g, 'hero_bg_small.webp');
                fs.writeFileSync(file, content);
            }
        }
        
        try { 
            fs.unlinkSync(src); 
            console.log('Deleted original hero_bg.webp');
        } catch(e) { 
            console.log('Could not delete original:', e.message); 
        }
        console.log('Fixed hero_bg');
    }
}
fixHero();
