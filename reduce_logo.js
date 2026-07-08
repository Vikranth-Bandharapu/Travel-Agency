const fs = require('fs');

const files = ['index.html', 'login.html', 'signup.html', '404.html', 'dashboard.html', 'agent_dashboard.html', 'blog.html', 'contact.html', 'destinations.html', 'services.html', 'tours.html'];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/height:\s*40px/g, 'height: 26px');
        content = content.replace(/max-height:\s*40px/g, 'max-height: 26px');
        fs.writeFileSync(file, content);
    }
}

// Update css
if (fs.existsSync('dashboard_v5.css')) {
    let css = fs.readFileSync('dashboard_v5.css', 'utf8');
    css = css.replace(/max-height: 40px;/g, 'max-height: 26px;');
    fs.writeFileSync('dashboard_v5.css', css);
}

if (fs.existsSync('styles.css')) {
    let css = fs.readFileSync('styles.css', 'utf8');
    css = css.replace(/height:\s*70px/g, 'height: 40px'); // Also reduce page loader logo size if needed
    fs.writeFileSync('styles.css', css);
}

console.log('Logo size reduced across all files.');
