const fs = require('fs');

const processFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to add onclick="window.location.href='404.html'" to all <button> elements
    // But we need to make sure we don't duplicate it if we run it multiple times.
    
    // First remove any existing onclick from buttons just in case
    content = content.replace(/<button([^>]*?)onclick="[^"]*"([^>]*?)>/g, '<button$1$2>');
    
    // Add onclick to all buttons
    content = content.replace(/<button([^>]*?)>/g, (match, p1) => {
        // If it's a submit button, we might want to prevent default, but window.location.href works fine
        return `<button onclick="window.location.href='404.html'"${p1}>`;
    });
    
    fs.writeFileSync(file, content);
    console.log(`Updated all buttons in ${file}`);
};

processFile('dashboard.html');
processFile('agent_dashboard.html');
