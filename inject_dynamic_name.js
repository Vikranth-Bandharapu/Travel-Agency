const fs = require('fs');

const files = ['dashboard.html', 'agent_dashboard.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // The old script was:
    // <script>
    // document.addEventListener('DOMContentLoaded', () => {
    //     const userEmail = localStorage.getItem('userEmail');
    // ...
    // </script>
    // </body>

    // Let's replace the whole script block at the end.
    // First, find everything from `<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n    const userEmail` to `</script>\n</body>`
    
    // We will just do a regex replace from `const userEmail = localStorage.getItem('userEmail');` to the end of that script.
    
    const newScript = `
<script>
document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        // Set email display
        const topbarEmail = document.getElementById('topbarEmail');
        if (topbarEmail) topbarEmail.textContent = userEmail;
        
        const settingsEmail = document.getElementById('settingsEmail');
        if (settingsEmail) settingsEmail.value = userEmail;

        // Generate Name from Email (e.g. "john.smith@..." -> "John Smith")
        let namePart = userEmail.split('@')[0];
        namePart = namePart.replace(/[._-]/g, ' '); // Replace dots/underscores with spaces
        let userName = namePart.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        // Update Welcome Text
        const pageSubtitle = document.getElementById('pageSubtitle');
        if (pageSubtitle) {
            pageSubtitle.textContent = 'Welcome back, ' + userName + '!';
        }

        // Update Topbar Name
        const topbarUserDiv = document.querySelector('.dash-topbar-user h4');
        if (topbarUserDiv) {
            topbarUserDiv.textContent = userName;
        }

        // Update Avatar Image
        const avatarImg = document.querySelector('.dash-topbar-right img');
        if (avatarImg && avatarImg.src.includes('ui-avatars.com')) {
            avatarImg.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userName) + '&background=4318ff&color=fff';
        }
    }
});
</script>
</body>`;

    // Remove old script by matching `<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n    const userEmail` up to `</body>`
    const regex = /<script>\s*document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{\s*const userEmail = localStorage\.getItem\('userEmail'\);[\s\S]*?<\/script>\s*<\/body>/;
    
    if (regex.test(content)) {
        content = content.replace(regex, newScript);
        fs.writeFileSync(file, content);
        console.log(`Updated dynamic name logic in ${file}`);
    } else {
        console.log(`Could not find regex match in ${file}`);
    }
});
