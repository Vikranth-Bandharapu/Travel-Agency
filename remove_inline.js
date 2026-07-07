const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    const target = '<div class="footer-grid" style="grid-template-columns: 2fr 1fr 1fr 1.5fr;">';
    if (c.includes(target)) {
        c = c.replace(target, '<div class="footer-grid">');
        fs.writeFileSync(f, c, 'utf8');
        console.log('Updated', f);
    }
});
