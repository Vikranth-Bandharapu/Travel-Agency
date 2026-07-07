const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/admin/Desktop/Travel Agency';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove "Book Now" button in header
    content = content.replace(/<a href="[^"]*" class="btn btn-primary">Book Now<\/a>\s*/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
}
