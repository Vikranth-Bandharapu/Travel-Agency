const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    if (c.includes('class="header solid"')) {
        c = c.replace('class="header solid"', 'class="header"');
        fs.writeFileSync(f, c, 'utf8');
        console.log('Updated', f);
    }
});
