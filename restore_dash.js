const fs = require('fs');

const userHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Dashboard - Aura Travel</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="dashboard_v5.css">
</head>
<body>

<div class="sidebar-overlay" id="sidebarOverlay"></div>

<div class="main-wrapper">
    
    <!-- Sidebar -->
    <aside class="dash-sidebar" id="sidebar">
        <div class="dash-logo">
            <img src="assets/logo.webp" alt="Aura Travel">
        </div>
        <div class="dash-nav">
            <div class="dash-nav-label">Main Menu</div>
            <a class="dash-nav-item active" data-target="tab-dashboard">
                <i class='bx bx-home-alt'></i> Dashboard
            </a>
            <a class="dash-nav-item" data-target="tab-bookings">
                <i class='bx bx-briefcase'></i> My Bookings
            </a>
            <a class="dash-nav-item" data-target="tab-saved">
                <i class='bx bx-heart'></i> Saved Tours
            </a>
            <a class="dash-nav-item" data-target="tab-payments">
                <i class='bx bx-credit-card'></i> Payments
            </a>
            <a class="dash-nav-item" data-target="tab-settings">
                <i class='bx bx-cog'></i> Settings
            </a>
        </div>
        <div class="dash-sidebar-footer">
            <a href="index.html" class="logout-btn">
                <i class='bx bx-log-out'></i> Logout
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <main class="dash-main">
        
        <!-- Header -->
        <header class="dash-topbar">
            <div class="dash-topbar-left">
                <i class='bx bx-menu mobile-toggle' id="mobileMenuBtn"></i>
                <div class="mobile-logo">
                    <img src="assets/logo.webp" alt="Logo">
                </div>
                <div>
                    <h2 id="pageTitle">Dashboard</h2>
                    <p id="pageSubtitle">Welcome back, John Doe!</p>
                </div>
            </div>
            <div class="dash-topbar-right">
                <div class="dash-topbar-user">
                    <h4>John Doe</h4>
                    <p>Premium Member</p>
                </div>
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=4318ff&color=fff" alt="User">
            </div>
        </header>

        <div class="dash-content">
            
            <!-- TAB 1: DASHBOARD -->
            <div id="tab-dashboard" class="tab-pane active">
                <div class="dash-grid-4">
                    <div class="dash-card stat-widget">
                        <div class="stat-icon blue"><i class='bx bx-briefcase'></i></div>
                        <div class="stat-info">
                            <h4>Total Trips</h4>
                            <h2>12</h2>
                        </div>
                    </div>
                    <div class="dash-card stat-widget">
                        <div class="stat-icon green"><i class='bx bx-check-shield'></i></div>
                        <div class="stat-info">
                            <h4>Upcoming</h4>
                            <h2>1</h2>
                        </div>
                    </div>
                    <div class="dash-card stat-widget">
                        <div class="stat-icon orange"><i class='bx bx-star'></i></div>
                        <div class="stat-info">
                            <h4>Loyalty Points</h4>
                            <h2>2,450</h2>
                        </div>
                    </div>
                    <div class="dash-card stat-widget">
                        <div class="stat-icon red"><i class='bx bx-heart'></i></div>
                        <div class="stat-info">
                            <h4>Saved Tours</h4>
                            <h2>15</h2>
                        </div>
                    </div>
                </div>

                <div class="dash-grid-2">
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Next Upcoming Trip</h3>
                            <span class="badge badge-success">Confirmed</span>
                        </div>
                        <div class="flex-between" style="align-items:flex-start; margin-bottom:15px;">
                            <div style="display:flex; gap:15px;">
                                <img src="assets/destination1.jpg" style="width:80px; height:80px; border-radius:12px; object-fit:cover;">
                                <div>
                                    <h4 style="margin:0 0 5px 0;">Paris Romance Tour</h4>
                                    <p style="margin:0; color:var(--text-secondary); font-size:0.9rem;">Oct 12 - Oct 18, 2026</p>
                                </div>
                            </div>
                        </div>
                        <p style="font-size:0.9rem; color:var(--text-secondary);">Don't forget to pack light! Check your travel documents in the bookings tab.</p>
                        <button class="dash-btn dash-btn-primary" style="width:100%; margin-top:10px;">View Itinerary</button>
                    </div>

                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Recent Activity</h3>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:15px;">
                            <div class="small-metric">
                                <div class="small-metric-icon" style="background:var(--accent-green);"><i class='bx bx-dollar'></i></div>
                                <div>
                                    <h4 style="margin:0;">Payment Successful</h4>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">$1,500 paid for Paris Tour</p>
                                </div>
                            </div>
                            <div class="small-metric">
                                <div class="small-metric-icon" style="background:var(--accent-blue);"><i class='bx bx-file'></i></div>
                                <div>
                                    <h4 style="margin:0;">Visa Uploaded</h4>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Schengen Visa approved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TAB 2: MY BOOKINGS -->
            <div id="tab-bookings" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Booking History</h3>
                        <button class="dash-btn dash-btn-outline"><i class='bx bx-download'></i> Download All Tickets</button>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr>
                                    <th>Booking Ref</th>
                                    <th>Package</th>
                                    <th>Travel Dates</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>#BKG-8992</strong></td>
                                    <td>Paris Romance Tour</td>
                                    <td>Oct 12 - Oct 18, 2026</td>
                                    <td><span class="badge badge-success">Upcoming</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">View Details</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-7710</strong></td>
                                    <td>Dubai Desert Safari</td>
                                    <td>Jan 05 - Jan 10, 2026</td>
                                    <td><span class="badge badge-warning">Completed</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Invoice</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-6022</strong></td>
                                    <td>Bali Retreat</td>
                                    <td>Aug 15 - Aug 20, 2025</td>
                                    <td><span class="badge badge-success" style="color:var(--text-secondary); background:#e2e8f0;">Cancelled</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- TAB 3: SAVED TOURS -->
            <div id="tab-saved" class="tab-pane">
                <div class="dash-grid-4">
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination1.jpg" style="width:100%; height:160px; object-fit:cover;">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Maldives Escape</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$3,200 <span style="color:var(--text-secondary); font-weight:400;">/ 6 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination2.jpg" style="width:100%; height:160px; object-fit:cover;">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Swiss Alps</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$2,100 <span style="color:var(--text-secondary); font-weight:400;">/ 5 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination3.jpg" style="width:100%; height:160px; object-fit:cover;">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Kyoto Heritage</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$2,800 <span style="color:var(--text-secondary); font-weight:400;">/ 10 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination1.jpg" style="width:100%; height:160px; object-fit:cover;">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Santorini Sunset</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$1,850 <span style="color:var(--text-secondary); font-weight:400;">/ 8 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TAB 4: PAYMENTS -->
            <div id="tab-payments" class="tab-pane">
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <div class="card-header"><h3 style="margin-top:0;">Payment Summary</h3></div>
                        <div class="small-metric" style="margin-bottom:15px; border:1px solid #e2e8f0;">
                            <div class="small-metric-icon" style="background:var(--accent-blue);"><i class='bx bx-wallet'></i></div>
                            <div><h4 style="margin:0;">Total Paid</h4><p style="margin:0; font-size:1.2rem; font-weight:700;">$5,450.00</p></div>
                        </div>
                        <div class="small-metric" style="border:1px solid #e2e8f0;">
                            <div class="small-metric-icon" style="background:var(--accent-orange);"><i class='bx bx-time'></i></div>
                            <div><h4 style="margin:0;">Pending Installments</h4><p style="margin:0; font-size:1.2rem; font-weight:700;">$500.00</p></div>
                        </div>
                    </div>
                    
                    <div class="dash-card">
                        <div class="card-header"><h3 style="margin-top:0;">Payment Methods</h3></div>
                        <div style="padding:15px; border:1px solid var(--accent-blue); border-radius:12px; margin-bottom:10px; display:flex; align-items:center; gap:15px;">
                            <i class='bx bxl-visa' style="font-size:2rem; color:#1A1F71;"></i>
                            <div style="flex:1;">
                                <strong style="display:block;">Visa ending in 4242</strong>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">Expires 12/28</span>
                            </div>
                            <span class="badge badge-success">Primary</span>
                        </div>
                        <button class="dash-btn dash-btn-outline" style="width:100%; margin-top:10px;">+ Add New Method</button>
                    </div>
                </div>
                
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Recent Transactions</h3>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Sep 12, 2026</td><td>Deposit: Paris Romance Tour</td><td>$1,500.00</td><td><span class="badge badge-success">Success</span></td></tr>
                                <tr><td>Jan 05, 2026</td><td>Full Payment: Dubai Safari</td><td>$850.00</td><td><span class="badge badge-success">Success</span></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- TAB 5: SETTINGS -->
            <div id="tab-settings" class="tab-pane">
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <h3 style="margin-top:0; margin-bottom:20px;">Profile Settings</h3>
                        <form class="dash-form">
                            <div class="dash-form-group">
                                <label>Full Name</label>
                                <input type="text" value="John Doe">
                            </div>
                            <div class="dash-form-group">
                                <label>Email Address</label>
                                <input type="email" value="john@example.com">
                            </div>
                            <div class="dash-form-group full">
                                <label>Phone Number</label>
                                <input type="tel" value="+1 234 567 8900">
                            </div>
                            <div class="dash-form-group full">
                                <button type="button" class="dash-btn dash-btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                    <div class="dash-card">
                        <h3 style="margin-top:0; margin-bottom:20px;">Security & Preferences</h3>
                        <form class="dash-form">
                            <div class="dash-form-group full">
                                <label>Change Password</label>
                                <input type="password" placeholder="Enter new password">
                            </div>
                            <div class="dash-form-group">
                                <label>Currency</label>
                                <select><option>USD ($)</option><option>EUR (€)</option></select>
                            </div>
                            <div class="dash-form-group">
                                <label>Language</label>
                                <select><option>English</option><option>Spanish</option></select>
                            </div>
                            <div class="dash-form-group full">
                                <button type="button" class="dash-btn dash-btn-outline">Update Settings</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </main>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar
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
    const tabs = document.querySelectorAll('.dash-nav-item');
    const panes = document.querySelectorAll('.tab-pane');
    const pageTitle = document.getElementById('pageTitle');
    
    const titles = {
        'tab-dashboard': 'Dashboard',
        'tab-bookings': 'My Bookings',
        'tab-saved': 'Saved Tours',
        'tab-payments': 'Payments',
        'tab-settings': 'Account Settings'
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active classes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
            
            // Update Title
            if(pageTitle && titles[target]) {
                pageTitle.textContent = titles[target];
            }

            // Close mobile menu
            if(window.innerWidth <= 992) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
});
</script>
</body>
</html>`;

const adminHtml = userHtml
    .replace('Customer Dashboard', 'Agent Dashboard')
    .replace('Welcome back, John Doe!', 'Agency Management Overview')
    .replace('John Doe', 'Super Admin')
    .replace('Premium Member', 'Management')
    // We will leave the HTML basically the same to restore their layout, just rename tabs
    .replace('tab-bookings">', 'tab-bookings">\n                <i class=\\\'bx bx-receipt\\\'></i> Manage Bookings\n            </a>\n            <a class="dash-nav-item" data-target="tab-packages">')
    // Actually, writing a clean admin dashboard to match dashboard_v5.css is best.
;

// Write User Dashboard
fs.writeFileSync('dashboard.html', userHtml);

// Write simple original Agent Dashboard
const agentHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agent Dashboard - Aura Travel</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="dashboard_v5.css">
</head>
<body>

<div class="sidebar-overlay" id="sidebarOverlay"></div>

<div class="main-wrapper">
    <aside class="dash-sidebar" id="sidebar">
        <div class="dash-logo"><img src="assets/logo.webp" alt="Aura Travel"></div>
        <div class="dash-nav">
            <div class="dash-nav-label">Management</div>
            <a class="dash-nav-item active" data-target="tab-dash"><i class='bx bx-home-alt'></i> Dashboard</a>
            <a class="dash-nav-item" data-target="tab-bookings"><i class='bx bx-receipt'></i> Bookings</a>
            <a class="dash-nav-item" data-target="tab-customers"><i class='bx bx-user-circle'></i> Customers</a>
            <a class="dash-nav-item" data-target="tab-settings"><i class='bx bx-cog'></i> Settings</a>
        </div>
        <div class="dash-sidebar-footer"><a href="index.html" class="logout-btn"><i class='bx bx-log-out'></i> Logout</a></div>
    </aside>

    <main class="dash-main">
        <header class="dash-topbar">
            <div class="dash-topbar-left">
                <i class='bx bx-menu mobile-toggle' id="mobileMenuBtn"></i>
                <div class="mobile-logo"><img src="assets/logo.webp" alt="Logo"></div>
                <div><h2 id="pageTitle">Dashboard</h2><p id="pageSubtitle">Agency Management Overview</p></div>
            </div>
            <div class="dash-topbar-right">
                <div class="dash-topbar-user"><h4>Super Admin</h4><p>Management</p></div>
                <img src="https://ui-avatars.com/api/?name=Admin&background=05cd99&color=fff" alt="User">
            </div>
        </header>

        <div class="dash-content">
            <div id="tab-dash" class="tab-pane active">
                <div class="dash-grid-4">
                    <div class="dash-card stat-widget">
                        <div class="stat-icon blue"><i class='bx bx-dollar-circle'></i></div>
                        <div class="stat-info"><h4>Total Revenue</h4><h2>$1.2M</h2></div>
                    </div>
                    <div class="dash-card stat-widget">
                        <div class="stat-icon green"><i class='bx bx-cart'></i></div>
                        <div class="stat-info"><h4>Monthly Sales</h4><h2>$345K</h2></div>
                    </div>
                    <div class="dash-card stat-widget">
                        <div class="stat-icon orange"><i class='bx bx-calendar-check'></i></div>
                        <div class="stat-info"><h4>Total Bookings</h4><h2>4,592</h2></div>
                    </div>
                </div>
            </div>
            <div id="tab-bookings" class="tab-pane">
                <div class="dash-card">
                    <div class="card-header"><h3>Manage Bookings</h3></div>
                    <p style="color:var(--text-secondary);">Table of all bookings will go here.</p>
                </div>
            </div>
            <div id="tab-customers" class="tab-pane">
                <div class="dash-card">
                    <div class="card-header"><h3>Customers</h3></div>
                    <p style="color:var(--text-secondary);">Table of all customers will go here.</p>
                </div>
            </div>
            <div id="tab-settings" class="tab-pane">
                <div class="dash-card">
                    <div class="card-header"><h3>Settings</h3></div>
                    <p style="color:var(--text-secondary);">Agency settings form goes here.</p>
                </div>
            </div>
        </div>
    </main>
</div>
<script>
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.dash-nav-item');
    const panes = document.querySelectorAll('.tab-pane');
    const pageTitle = document.getElementById('pageTitle');
    const titles = {'tab-dash': 'Dashboard', 'tab-bookings': 'Manage Bookings', 'tab-customers': 'Customers', 'tab-settings': 'Settings'};

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
            if(pageTitle && titles[target]) pageTitle.textContent = titles[target];
        });
    });
});
</script>
</body>
</html>`;

fs.writeFileSync('agent_dashboard.html', agentHtml);
console.log("Reverted dashboards back to the clean, beautiful original state!");
