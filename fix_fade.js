const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('fade-down')) {
        content = content.replace(/fade-down/g, 'fade-up');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed fade-down in', file);
    }
});
