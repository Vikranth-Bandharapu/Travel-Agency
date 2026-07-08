const fs = require('fs');

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
                    <div class="dash-card stat-widget">
                        <div class="stat-icon red"><i class='bx bx-group'></i></div>
                        <div class="stat-info"><h4>New Users</h4><h2>+428</h2></div>
                    </div>
                </div>
                
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Pending Approvals</h3>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:15px;">
                            <div class="flex-between" style="border-bottom:1px solid #e2e8f0; padding-bottom:10px;">
                                <div>
                                    <strong>#BKG-8992 - Paris Romance</strong>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Alex Carter</p>
                                </div>
                                <div style="display:flex; gap:5px;">
                                    <button class="dash-btn dash-btn-primary" style="padding:5px 10px; font-size:0.8rem;">Approve</button>
                                </div>
                            </div>
                            <div class="flex-between" style="border-bottom:1px solid #e2e8f0; padding-bottom:10px;">
                                <div>
                                    <strong>#BKG-9910 - Swiss Alps</strong>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Sarah Lee</p>
                                </div>
                                <div style="display:flex; gap:5px;">
                                    <button class="dash-btn dash-btn-primary" style="padding:5px 10px; font-size:0.8rem;">Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Performance Analytics</h3>
                        </div>
                        <div class="circle-progress-wrapper">
                            <div class="circle-progress-item">
                                <div class="circle-progress circle-blue" style="--p:85%;"><span>85%</span></div>
                                <p style="margin:10px 0 0 0; font-size:0.9rem; font-weight:500;">Conversion</p>
                            </div>
                            <div class="circle-progress-item">
                                <div class="circle-progress circle-green" style="--p:92%;"><span>92%</span></div>
                                <p style="margin:10px 0 0 0; font-size:0.9rem; font-weight:500;">Satisfaction</p>
                            </div>
                            <div class="circle-progress-item">
                                <div class="circle-progress circle-orange" style="--p:45%;"><span>45%</span></div>
                                <p style="margin:10px 0 0 0; font-size:0.9rem; font-weight:500;">Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="tab-bookings" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Manage All Bookings</h3>
                        <div class="dash-form"><input type="text" placeholder="Search booking ID..." style="max-width:200px;"></div>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr><th>ID</th><th>Customer</th><th>Package</th><th>Date</th><th>Status</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>#BKG-8992</strong></td>
                                    <td>Alex Carter</td>
                                    <td>Paris Romance</td>
                                    <td>Oct 12, 2026</td>
                                    <td><span class="badge badge-warning">Pending</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Review</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-8812</strong></td>
                                    <td>Sarah Lee</td>
                                    <td>Swiss Alps</td>
                                    <td>Nov 05, 2026</td>
                                    <td><span class="badge badge-success">Confirmed</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Details</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-7710</strong></td>
                                    <td>John Doe</td>
                                    <td>Dubai Safari</td>
                                    <td>Jan 05, 2026</td>
                                    <td><span class="badge badge-success">Completed</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Invoice</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-6622</strong></td>
                                    <td>Emma Stone</td>
                                    <td>Bali Retreat</td>
                                    <td>Aug 15, 2025</td>
                                    <td><span class="badge badge-success" style="background:#e2e8f0; color:#64748b;">Cancelled</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div id="tab-customers" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Customer Directory</h3>
                        <div class="dash-form"><input type="text" placeholder="Search customers..." style="max-width:200px;"></div>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr><th>Name</th><th>Email</th><th>Total Bookings</th><th>Loyalty Points</th><th>Status</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alex Carter</td><td>alex@example.com</td><td>14</td><td>3,450</td>
                                    <td><span class="badge badge-success">Premium</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Profile</button></td>
                                </tr>
                                <tr>
                                    <td>Sarah Lee</td><td>sarah.l@example.com</td><td>2</td><td>450</td>
                                    <td><span class="badge badge-success" style="background:#e0f2fe; color:#0284c7;">Standard</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Profile</button></td>
                                </tr>
                                <tr>
                                    <td>John Doe</td><td>john@example.com</td><td>12</td><td>2,450</td>
                                    <td><span class="badge badge-success">Premium</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Profile</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div id="tab-settings" class="tab-pane">
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <h3 style="margin-top:0; margin-bottom:20px;">Agency Profile</h3>
                        <form class="dash-form">
                            <div class="dash-form-group">
                                <label>Agency Name</label>
                                <input type="text" value="Aura Travel Agency">
                            </div>
                            <div class="dash-form-group">
                                <label>Support Email</label>
                                <input type="email" value="support@auratravel.com">
                            </div>
                            <div class="dash-form-group full">
                                <label>Business Address</label>
                                <input type="text" value="789 Agency Blvd, Suite 100, NY 10001">
                            </div>
                            <div class="dash-form-group full">
                                <button type="button" class="dash-btn dash-btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                    
                    <div class="dash-card">
                        <h3 style="margin-top:0; margin-bottom:20px;">System Preferences</h3>
                        <form class="dash-form">
                            <div class="dash-form-group full">
                                <label>Platform Fee (%)</label>
                                <input type="number" value="15">
                            </div>
                            <div class="dash-form-group">
                                <label>Default Currency</label>
                                <select><option>USD ($)</option><option>EUR (€)</option></select>
                            </div>
                            <div class="dash-form-group">
                                <label>Timezone</label>
                                <select><option>EST (UTC-5)</option><option>PST (UTC-8)</option></select>
                            </div>
                            <div class="dash-form-group full">
                                <button type="button" class="dash-btn dash-btn-outline">Save Preferences</button>
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
console.log("Successfully fixed agent_dashboard.html syntax error!");
