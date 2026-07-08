const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'dashboard.html' && f !== 'agent_dashboard.html');
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    // Header
    if (c.includes('<li><a href="services.html"') && !c.includes('<li><a href="about.html" class="nav-link"')) {
        c = c.replace(/<li><a href="services.html" class="nav-link(.*?)>Services<\/a><\/li>/, '<li><a href="services.html" class="nav-link$1>Services</a></li>\n                    <li><a href="about.html" class="nav-link">About Us</a></li>');
        changed = true;
    }
    
    // Footer
    if (c.includes('<li><a href="services.html" style="color: #A0B2BA;') && !c.includes('<li><a href="about.html" style="color: #A0B2BA;')) {
        c = c.replace(/<li style="margin-bottom: 12px;"><a href="services.html".*?>Services<\/a><\/li>/, '$&\n                        <li style="margin-bottom: 12px;"><a href="about.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'#A0B2BA\'">About Us</a></li>');
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(f, c, 'utf8');
        console.log("Updated nav in", f);
    }
});
