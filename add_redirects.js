const fs = require('fs');

const files = ['dashboard.html', 'agent_dashboard.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Update dash-logo
    // Find: <div class="dash-logo">
    // Replace with: <div class="dash-logo" style="cursor: pointer;" onclick="window.location.href='index.html'">
    content = content.replace(/<div class="dash-logo">/g, `<div class="dash-logo" style="cursor: pointer;" onclick="window.location.href='index.html'">`);
    
    // 2. Update dash-topbar-right
    // Find: <div class="dash-topbar-right">
    // Replace with: <div class="dash-topbar-right" style="cursor: pointer;" onclick="window.location.href='index.html'">
    content = content.replace(/<div class="dash-topbar-right">/g, `<div class="dash-topbar-right" style="cursor: pointer;" onclick="window.location.href='index.html'">`);

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
