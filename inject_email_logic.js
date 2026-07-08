const fs = require('fs');

function processDashboard(file) {
    let content = fs.readFileSync(file, 'utf8');

    // Add ID to topbar subtitle so we can replace it with email
    content = content.replace(/<div class="dash-topbar-user"><h4>([^<]+)<\/h4><p>([^<]+)<\/p><\/div>/, '<div class="dash-topbar-user"><h4>$1</h4><p id="topbarEmail">$2</p></div>');
    
    // Add ID to settings email input
    // User dashboard
    content = content.replace(/<input type="email" value="john@example.com">/, '<input type="email" id="settingsEmail" value="john@example.com">');
    // Agent dashboard
    content = content.replace(/<input type="email" value="support@auratravel.com">/, '<input type="email" id="settingsEmail" value="support@auratravel.com">');
    
    // Inject the script
    const injection = `
<script>
document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const topbarEmail = document.getElementById('topbarEmail');
        if (topbarEmail) topbarEmail.textContent = userEmail;
        
        const settingsEmail = document.getElementById('settingsEmail');
        if (settingsEmail) settingsEmail.value = userEmail;
    }
});
</script>
</body>`;
    
    // Check if we already injected
    if (!content.includes('localStorage.getItem(\'userEmail\')')) {
        content = content.replace('</body>', injection);
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file} with dynamic email logic.`);
}

processDashboard('dashboard.html');
processDashboard('agent_dashboard.html');
