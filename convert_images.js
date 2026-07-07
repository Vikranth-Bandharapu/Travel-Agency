const sharp = require('sharp');
const path = require('path');

const srcDir = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\b2cde132-5d52-4828-86fc-d3b76bb5adf0\\';
const destDir = 'assets\\';

const images = [
    { src: 'michael_scott_profile_1783399857450.png', dest: 'opt_img_24.webp' },
    { src: 'jim_halpert_profile_1783399876501.png', dest: 'opt_img_25.webp' },
    { src: 'pam_beesley_profile_1783399895845.png', dest: 'opt_img_26.webp' }
];

async function processImages() {
    for (let img of images) {
        const inputPath = path.join(srcDir, img.src);
        const outputPath = path.join(destDir, img.dest);
        
        await sharp(inputPath)
            .resize(400, 400, { fit: 'cover' })
            .webp({ quality: 60 }) // 60 quality to ensure it's well under 100kb
            .toFile(outputPath);
            
        console.log(`Processed ${img.src} -> ${img.dest}`);
    }
}

processImages().catch(err => console.error(err));
