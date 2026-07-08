const fs = require('fs');

const css = `
:root {
    --primary: #4318FF;
    --secondary: #F4F7FE;
    --text-main: #2B3674;
    --text-secondary: #A3AED0;
    --white: #FFFFFF;
    --border: #E0E5F2;
    --shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
    --hover-shadow: 0px 20px 50px rgba(112, 144, 176, 0.2);
    --accent-green: #05CD99;
    --accent-orange: #FFCE20;
    --accent-red: #EE5D50;
    --sidebar-width: 280px;
    --transition: all 0.3s ease;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Outfit', sans-serif;
    background-color: var(--secondary);
    color: var(--text-main);
    overflow-x: hidden;
}

/* Sidebar */
.dash-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;
    background: var(--white);
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    transition: var(--transition);
}

.dash-logo {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
    padding: 0 10px;
}
.dash-logo img { height: 35px; }

.dash-nav { flex: 1; }
.dash-nav-label {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    margin: 20px 0 10px 10px;
    letter-spacing: 1px;
}

.dash-nav-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 15px;
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 600;
    border-radius: 12px;
    margin-bottom: 5px;
    transition: var(--transition);
    cursor: pointer;
}
.dash-nav-item i { font-size: 1.2rem; }
.dash-nav-item:hover {
    background: rgba(67, 24, 255, 0.05);
    color: var(--primary);
    transform: translateX(5px);
}
.dash-nav-item.active {
    background: var(--primary);
    color: var(--white);
    box-shadow: 0 10px 20px rgba(67, 24, 255, 0.2);
}

/* Header */
.dash-topbar {
    position: fixed;
    top: 0;
    left: var(--sidebar-width);
    right: 0;
    height: 90px;
    background: rgba(244, 247, 254, 0.8);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    z-index: 900;
    transition: var(--transition);
}

.search-box {
    background: var(--white);
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: var(--shadow);
    width: 300px;
}
.search-box input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-family: inherit;
    color: var(--text-main);
}
.search-box i { color: var(--text-secondary); }

.topbar-right {
    display: flex;
    align-items: center;
    gap: 25px;
}
.current-date {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.9rem;
}
.notification-icon {
    position: relative;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 1.5rem;
    transition: var(--transition);
}
.notification-icon:hover { color: var(--primary); }
.notification-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    background: var(--accent-red);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--secondary);
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.user-profile img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow);
}
.user-info { display: flex; flex-direction: column; }
.user-name { font-weight: 700; font-size: 1rem; }
.user-role { font-size: 0.8rem; color: var(--text-secondary); }

/* Main Content */
.dash-content {
    margin-top: 90px;
    margin-left: var(--sidebar-width);
    padding: 40px;
    min-height: calc(100vh - 90px);
    transition: var(--transition);
}

/* SPA Sections */
.tab-pane {
    display: none;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.tab-pane.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

/* Layouts */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

/* Cards */
.dash-card {
    background: var(--white);
    border-radius: 20px;
    padding: 25px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}
.dash-card:hover {
    box-shadow: var(--hover-shadow);
    transform: translateY(-5px);
}
.dash-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.dash-card-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
}

/* Specific Widgets */
.welcome-card {
    background: linear-gradient(135deg, var(--primary), #868CFF);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px;
}
.welcome-card h2 { margin: 0 0 10px 0; font-size: 1.8rem; }
.welcome-card p { margin: 0; opacity: 0.9; }
.welcome-card img { height: 120px; }

.stat-card {
    display: flex;
    align-items: center;
    gap: 20px;
}
.stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--primary);
}
.stat-info h4 { margin: 0; color: var(--text-secondary); font-weight: 500; font-size: 0.9rem;}
.stat-info h2 { margin: 5px 0 0 0; font-size: 1.5rem; }

/* Tour Cards (Saved Tours) */
.tour-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}
.tour-card:hover { transform: translateY(-8px); box-shadow: var(--hover-shadow); }
.tour-img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    position: relative;
}
.tour-save {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255,255,255,0.9);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-red);
    cursor: pointer;
    font-size: 1.2rem;
    transition: var(--transition);
}
.tour-save:hover { transform: scale(1.1); }
.tour-info { padding: 20px; }
.tour-info h3 { margin: 0 0 5px 0; font-size: 1.2rem; }
.tour-loc { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 15px; display:flex; align-items:center; gap:5px; }
.tour-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 0.9rem;
    font-weight: 600;
}
.tour-actions { display: flex; gap: 10px; }
.btn-outline {
    flex: 1;
    padding: 10px;
    border: 1px solid var(--primary);
    color: var(--primary);
    background: transparent;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}
.btn-outline:hover { background: var(--primary); color: var(--white); }
.btn-primary {
    flex: 1;
    padding: 10px;
    border: none;
    color: var(--white);
    background: var(--primary);
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}
.btn-primary:hover { opacity: 0.9; }

/* Tables */
table { width: 100%; border-collapse: collapse; }
th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid var(--border);
}
th { color: var(--text-secondary); font-weight: 500; }
tr:hover td { background: var(--secondary); }

/* Badges */
.badge {
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}
.badge-success { background: rgba(5, 205, 153, 0.1); color: var(--accent-green); }
.badge-warning { background: rgba(255, 206, 32, 0.1); color: var(--accent-orange); }
.badge-danger { background: rgba(238, 93, 80, 0.1); color: var(--accent-red); }

/* Forms */
.form-group { margin-bottom: 20px; }
.form-group label { display: block; margin-bottom: 8px; font-weight: 500; color: var(--text-secondary); }
.form-group input, .form-group select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--border);
    border-radius: 10px;
    font-family: inherit;
    box-sizing: border-box;
    transition: var(--transition);
}
.form-group input:focus { border-color: var(--primary); outline: none; }

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}
.toggle-switch input { opacity: 0; width: 0; height: 0; }
.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
}
.slider:before {
    position: absolute;
    content: "";
    height: 16px; width: 16px;
    left: 4px; bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}
input:checked + .slider { background-color: var(--primary); }
input:checked + .slider:before { transform: translateX(26px); }

/* Mobile */
.mobile-toggle { display: none; font-size: 1.5rem; cursor: pointer; color: var(--text-main); }
.sidebar-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
}

@media (max-width: 992px) {
    .dash-sidebar { transform: translateX(-100%); }
    .dash-sidebar.active { transform: translateX(0); }
    .sidebar-overlay.active { display: block; }
    .dash-topbar, .dash-content { left: 0; margin-left: 0; }
    .mobile-toggle { display: block; }
    .search-box { display: none; }
    .grid-4, .grid-3 { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
    .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .dash-content { padding: 20px; }
    .dash-topbar { padding: 0 20px; }
    .welcome-card { flex-direction: column; text-align: center; gap: 20px; }
    .welcome-card img { height: 80px; }
    .user-info { display: none; }
}
`;

fs.writeFileSync('dashboard_v6.css', css);

const js = `
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
`;

fs.writeFileSync('dashboard_app.js', js);

console.log("CSS and JS generated!");
