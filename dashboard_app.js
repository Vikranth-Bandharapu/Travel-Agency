
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.dash-nav-item');
    const panes = document.querySelectorAll('.tab-pane');
    
    // Sidebar Mobile Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if(overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // SPA Tab Navigation
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Handle Logout differently
            if(tab.getAttribute('data-target') === 'logout') {
                window.location.href = 'index.html';
                return;
            }

            // Remove active state
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active state to clicked tab
            tab.classList.add('active');
            
            const targetId = tab.getAttribute('data-target');
            
            // Fade out current pane
            let currentPane = document.querySelector('.tab-pane.active');
            if(currentPane) {
                currentPane.style.opacity = '0';
                currentPane.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    currentPane.classList.remove('active');
                    currentPane.style = '';
                    
                    // Fade in new pane
                    const newPane = document.getElementById(targetId);
                    newPane.classList.add('active');
                    // Force reflow
                    void newPane.offsetWidth;
                    
                    newPane.style.opacity = '1';
                    newPane.style.transform = 'translateY(0)';
                }, 300); // Wait for fade out
            } else {
                document.getElementById(targetId).classList.add('active');
            }

            // Close mobile sidebar on click
            if(window.innerWidth <= 992 && sidebar) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });

    // Current Date in Header
    const dateElement = document.getElementById('currentDate');
    if(dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }
});
