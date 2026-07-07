const fs = require('fs');

function updateDashboard(filename, isAgent) {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');
    let changed = false;

    // 1. Add Sidebar Overlay
    if (!html.includes('id="sidebarOverlay"')) {
        html = html.replace('<aside class="sidebar">', '<div class="sidebar-overlay" id="sidebarOverlay"></div>\n        <aside class="sidebar" id="sidebar">');
        changed = true;
    }

    // 2. Add Mobile Header
    const mobileHeader = `
            <!-- Mobile Header -->
            <div class="mobile-dash-header d-lg-none" id="mobileHeader">
                <a href="index.html"><img src="assets/logo.webp" alt="Aura Travel" class="mobile-dash-logo"></a>
                <i class='bx bx-menu mobile-dash-toggle' id="mobileMenuBtn"></i>
            </div>
    `;
    if (!html.includes('id="mobileHeader"')) {
        html = html.replace('<main class="main-content">', '<main class="main-content">\n' + mobileHeader);
        changed = true;
    }

    // 3. Add Close Button to Sidebar
    if (!html.includes('id="closeSidebar"')) {
        html = html.replace('class="sidebar-header">', 'class="sidebar-header" style="display: flex; justify-content: space-between; align-items: center;">');
        html = html.replace('width: auto;"></a>', 'width: auto;"></a>\n                <i class=\'bx bx-x d-lg-none\' id="closeSidebar" style="font-size: 2rem; color: white; cursor: pointer; display: none;"></i>');
        // Actually, CSS rules will hide/show the close button. Let's rely on standard class 'd-lg-none' if we had it, or inline styles.
        changed = true;
    }

    // 4. Inject Content Full Sections
    if (!isAgent && !html.includes('NEXT ADVENTURE')) {
        const adventureCard = `
                <!-- Upcoming Adventure Card -->
                <div class="dash-section" style="background: url('assets/opt_img_12.webp') center/cover; border-radius: var(--radius-md); padding: 40px; color: white; position: relative; overflow: hidden; margin-bottom: 30px; box-shadow: var(--shadow-strong);">
                    <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to right, rgba(10,35,46,0.95), rgba(10,35,46,0.3)); z-index: 1;"></div>
                    <div style="position: relative; z-index: 2;">
                        <span style="background: var(--color-accent); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; margin-bottom: 15px; display: inline-block;">NEXT ADVENTURE</span>
                        <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-family: var(--font-secondary);">Santorini Premium Escape</h2>
                        <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 25px;"><i class='bx bx-calendar'></i> August 14 - August 21, 2026</p>
                        <div style="display: flex; gap: 15px;">
                            <div style="text-align: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); padding: 15px; border-radius: 10px; min-width: 80px;">
                                <h3 style="font-size: 1.8rem; margin:0;">38</h3>
                                <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px;">Days</span>
                            </div>
                            <div style="text-align: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); padding: 15px; border-radius: 10px; min-width: 80px;">
                                <h3 style="font-size: 1.8rem; margin:0;">12</h3>
                                <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px;">Hrs</span>
                            </div>
                        </div>
                        <button class="btn btn-primary" style="margin-top: 30px; padding: 10px 25px; font-size: 0.9rem;">View Itinerary</button>
                    </div>
                </div>
        `;
        html = html.replace('<div class="dash-stats">', adventureCard + '\n                <div class="dash-stats">');
        changed = true;
    }

    if (isAgent && !html.includes('Top Performing Packages')) {
        const agentContent = `
                <div class="grid-2" style="margin-top: 30px;">
                    <div class="dash-section">
                        <div class="dash-section-header">
                            <h3 style="color: #333; font-size: 1.3rem;">Recent Client Inquiries</h3>
                            <a href="#" style="color: var(--color-secondary); font-size: 0.9rem; font-weight: 600;">View All</a>
                        </div>
                        <div class="booking-list">
                            <div class="booking-item" style="align-items: flex-start;">
                                <img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" style="border-radius: 50%;">
                                <div class="booking-info">
                                    <h4>Sarah Jenkins</h4>
                                    <p style="margin-bottom: 5px;">"I am looking for a family tour in Japan this December..."</p>
                                    <span style="font-size: 0.8rem; color: #999;">2 hours ago</span>
                                </div>
                            </div>
                            <div class="booking-item" style="align-items: flex-start;">
                                <img src="https://ui-avatars.com/api/?name=Michael+T&background=random" style="border-radius: 50%;">
                                <div class="booking-info">
                                    <h4>Michael Torres</h4>
                                    <p style="margin-bottom: 5px;">"Can we upgrade our Maldives resort to a water villa?"</p>
                                    <span style="font-size: 0.8rem; color: #999;">5 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dash-section">
                        <div class="dash-section-header">
                            <h3 style="color: #333; font-size: 1.3rem;">Top Performing Packages</h3>
                        </div>
                        <div class="booking-list">
                            <div class="booking-item">
                                <img src="assets/opt_img_12.webp" alt="Santorini">
                                <div class="booking-info">
                                    <h4>Santorini Premium</h4>
                                    <p>42 Bookings this month</p>
                                </div>
                                <div style="color: var(--color-emerald); font-weight: 600;">+12%</div>
                            </div>
                            <div class="booking-item">
                                <img src="assets/opt_img_13.webp" alt="Venice">
                                <div class="booking-info">
                                    <h4>Magical Venice</h4>
                                    <p>28 Bookings this month</p>
                                </div>
                                <div style="color: var(--color-emerald); font-weight: 600;">+5%</div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        html = html.replace('<!-- TAB 2: -->', agentContent + '\n            <!-- TAB 2: -->'); // insert before tab 2
        changed = true;
    }

    // 5. Inject JS Toggle Logic
    if (!html.includes('mobileMenuBtn')) {
        const scriptLogic = `
            // Mobile Sidebar Toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const closeSidebarBtn = document.getElementById('closeSidebar');
            const sidebar = document.getElementById('sidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');

            function toggleSidebar() {
                sidebar.classList.toggle('active');
                sidebarOverlay.classList.toggle('active');
            }

            if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
            if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
            if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);
            
            // Close sidebar when a nav link is clicked on mobile
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('active');
                        sidebarOverlay.classList.remove('active');
                    }
                });
            });
        `;
        html = html.replace('// Load stored email', scriptLogic + '\n            // Load stored email');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filename, html, 'utf8');
        console.log('Updated', filename);
    }
}

updateDashboard('dashboard.html', false);
updateDashboard('agent_dashboard.html', true);
