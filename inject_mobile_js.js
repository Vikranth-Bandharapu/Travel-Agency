const fs = require('fs');

const toggleScript = `
        // Mobile Sidebar Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const closeSidebarBtn = document.getElementById('closeSidebar');

        function closeSidebar() {
            if (sidebar) sidebar.classList.remove('active');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        }

        if (mobileMenuBtn && sidebar && sidebarOverlay) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.add('active');
                sidebarOverlay.classList.add('active');
            });

            sidebarOverlay.addEventListener('click', closeSidebar);
            
            if (closeSidebarBtn) {
                closeSidebarBtn.addEventListener('click', closeSidebar);
                // Ensure it's visible on mobile
                if (window.innerWidth <= 992) {
                    closeSidebarBtn.style.display = 'block';
                }
            }
        }

        // Also close sidebar when a nav link is clicked on mobile
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    closeSidebar();
                }
            });
        });
`;

function injectScript(filename) {
    let html = fs.readFileSync(filename, 'utf8');
    if (!html.includes('mobileMenuBtn.addEventListener')) {
        html = html.replace('</script>\n\n    <script>\n        window.addEventListener("load"', toggleScript + '\n    </script>\n\n    <script>\n        window.addEventListener("load"');
        fs.writeFileSync(filename, html, 'utf8');
        console.log('Injected into ' + filename);
    }
}

injectScript('dashboard.html');
injectScript('agent_dashboard.html');
