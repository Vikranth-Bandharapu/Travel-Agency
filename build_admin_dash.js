const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard | Aura Travel</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="admin_dash.css">
</head>
<body>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-logo">
            <img src="assets/logo.webp" alt="Aura Travel Admin">
        </div>
        <div class="nav-label">Management</div>
        <a class="nav-item active" data-target="tab-dash">
            <i class='bx bx-grid-alt'></i><span>Dashboard</span>
        </a>
        <a class="nav-item" data-target="tab-bookings">
            <i class='bx bx-receipt'></i><span>Bookings</span>
        </a>
        <a class="nav-item" data-target="tab-packages">
            <i class='bx bx-package'></i><span>Tour Packages</span>
        </a>
        <a class="nav-item" data-target="tab-destinations">
            <i class='bx bx-map-alt'></i><span>Destinations</span>
        </a>
        
        <div class="nav-label">Operations</div>
        <a class="nav-item" data-target="tab-customers">
            <i class='bx bx-user-circle'></i><span>Customers</span>
        </a>
        <a class="nav-item" data-target="tab-payments">
            <i class='bx bx-credit-card'></i><span>Payments</span>
        </a>
        <a class="nav-item" data-target="tab-reviews">
            <i class='bx bx-star'></i><span>Reviews</span>
        </a>
        <a class="nav-item" data-target="tab-staff">
            <i class='bx bx-group'></i><span>Staff</span>
        </a>
        
        <div class="nav-label">System</div>
        <a class="nav-item" data-target="tab-reports">
            <i class='bx bx-bar-chart-alt-2'></i><span>Reports</span>
        </a>
        <a class="nav-item" data-target="tab-settings">
            <i class='bx bx-cog'></i><span>Settings</span>
        </a>
        <a class="nav-item" data-target="logout" style="color:var(--accent-red); margin-top:20px;">
            <i class='bx bx-log-out'></i><span>Logout</span>
        </a>
    </aside>

    <!-- Header -->
    <header class="header">
        <div style="display:flex; align-items:center; gap:20px;">
            <i class='bx bx-menu mobile-toggle' id="mobileMenuBtn"></i>
            <div class="search-wrapper">
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search orders, customers, tours...">
            </div>
        </div>
        
        <div class="header-right">
            <div id="currentDate" style="color:var(--text-secondary); font-weight:600;"></div>
            <div class="header-icon">
                <i class='bx bx-envelope'></i>
                <div class="badge-dot" style="background:var(--accent-orange);"></div>
            </div>
            <div class="header-icon">
                <i class='bx bx-bell'></i>
                <div class="badge-dot"></div>
            </div>
            <div class="profile-menu">
                <img src="https://ui-avatars.com/api/?name=Admin+User&background=EE5D50&color=fff" alt="Admin">
                <div class="profile-info">
                    <span class="profile-name">Super Admin</span>
                    <span class="profile-role">Management</span>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        
        <!-- ==================== TAB 1: DASHBOARD ==================== -->
        <section id="tab-dash" class="tab-pane active">
            
            <!-- 1. Top Stats (6 widgets) -->
            <div class="grid-3" style="margin-bottom:25px;">
                <div class="card stat-widget" style="padding:20px;">
                    <div class="stat-icon" style="background:var(--primary); color:white;"><i class='bx bx-dollar-circle'></i></div>
                    <div class="stat-val"><h4>Total Revenue</h4><h2>$1.2M</h2></div>
                </div>
                <div class="card stat-widget" style="padding:20px;">
                    <div class="stat-icon" style="background:var(--accent-green); color:white;"><i class='bx bx-cart'></i></div>
                    <div class="stat-val"><h4>Monthly Sales</h4><h2>$345K</h2></div>
                </div>
                <div class="card stat-widget" style="padding:20px;">
                    <div class="stat-icon" style="background:var(--accent-orange); color:white;"><i class='bx bx-calendar-check'></i></div>
                    <div class="stat-val"><h4>Total Bookings</h4><h2>4,592</h2></div>
                </div>
                <div class="card stat-widget" style="padding:20px;">
                    <div class="stat-icon" style="background:var(--accent-purple); color:white;"><i class='bx bx-paper-plane'></i></div>
                    <div class="stat-val"><h4>Active Tours</h4><h2>148</h2></div>
                </div>
                <div class="card stat-widget" style="padding:20px;">
                    <div class="stat-icon" style="background:var(--text-main); color:white;"><i class='bx bx-group'></i></div>
                    <div class="stat-val"><h4>New Customers</h4><h2>+890</h2></div>
                </div>
                <div class="card stat-widget" style="padding:20px;">
                    <div class="stat-icon" style="background:var(--accent-red); color:white;"><i class='bx bx-error-circle'></i></div>
                    <div class="stat-val"><h4>Pending Bookings</h4><h2>42</h2></div>
                </div>
            </div>

            <!-- 2. Charts & Middle Section (4 widgets) -->
            <div class="grid-2-1" style="margin-bottom:25px;">
                <div class="card" style="min-height:350px;">
                    <div class="card-header"><h3 class="card-title">Revenue Chart & Sales Overview</h3></div>
                    <div style="width:100%; height:250px; background:linear-gradient(180deg, rgba(67,24,255,0.1) 0%, rgba(255,255,255,0) 100%); border-bottom:2px solid var(--primary); position:relative;">
                        <svg width="100%" height="100%" viewBox="0 0 500 250" preserveAspectRatio="none">
                            <polyline fill="none" stroke="var(--primary)" stroke-width="4" points="0,200 50,150 100,180 150,100 200,120 250,50 300,90 350,40 400,60 450,20 500,40" />
                        </svg>
                    </div>
                </div>
                
                <div style="display:flex; flex-direction:column; gap:25px;">
                    <div class="card">
                        <div class="card-header"><h3 class="card-title">Popular Destinations</h3></div>
                        <ul style="list-style:none; padding:0; margin:0;">
                            <li style="display:flex; justify-content:space-between; margin-bottom:15px;"><span>Paris, France</span> <strong>28%</strong></li>
                            <li style="display:flex; justify-content:space-between; margin-bottom:15px;"><span>Bali, Indonesia</span> <strong>21%</strong></li>
                            <li style="display:flex; justify-content:space-between; margin-bottom:15px;"><span>Swiss Alps</span> <strong>18%</strong></li>
                            <li style="display:flex; justify-content:space-between;"><span>Kyoto, Japan</span> <strong>15%</strong></li>
                        </ul>
                    </div>
                    <div class="card">
                        <div class="card-header"><h3 class="card-title">Booking Analytics</h3></div>
                        <div style="display:flex; align-items:center; justify-content:space-between;">
                            <div style="text-align:center;">
                                <h2 style="margin:0; color:var(--primary);">85%</h2>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">Conversion Rate</span>
                            </div>
                            <div style="text-align:center;">
                                <h2 style="margin:0; color:var(--accent-green);">12%</h2>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Bottom Section (2 widgets) -->
            <div class="grid-2">
                <div class="card">
                    <div class="card-header"><h3 class="card-title">Recent Activities</h3></div>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-icon"></div>
                            <div class="timeline-content"><h4>New booking: Paris Tour</h4><p>By Alex Carter - $1,500</p></div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon" style="background:var(--accent-red);"></div>
                            <div class="timeline-content"><h4>Booking Cancelled</h4><p>Ref: #BKG-1122</p></div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon" style="background:var(--accent-green);"></div>
                            <div class="timeline-content"><h4>Review Approved</h4><p>5 Stars for Swiss Alps</p></div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header"><h3 class="card-title">Customer Growth</h3></div>
                    <div style="width:100%; height:200px; display:flex; align-items:flex-end; gap:10px;">
                        <div style="flex:1; background:var(--primary); height:40%; border-radius:5px 5px 0 0;"></div>
                        <div style="flex:1; background:var(--primary-light); height:60%; border-radius:5px 5px 0 0;"></div>
                        <div style="flex:1; background:var(--primary); height:80%; border-radius:5px 5px 0 0;"></div>
                        <div style="flex:1; background:var(--primary-light); height:50%; border-radius:5px 5px 0 0;"></div>
                        <div style="flex:1; background:var(--primary); height:90%; border-radius:5px 5px 0 0;"></div>
                        <div style="flex:1; background:var(--primary-light); height:100%; border-radius:5px 5px 0 0;"></div>
                    </div>
                </div>
            </div>
        </section>


        <!-- ==================== TAB 2: BOOKINGS ==================== -->
        <section id="tab-bookings" class="tab-pane">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Manage Bookings</h3>
                    <div style="display:flex; gap:10px;">
                        <input type="text" class="form-control" placeholder="Search by ID, Name...">
                        <button class="btn btn-primary"><i class='bx bx-export'></i> Export</button>
                    </div>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>ID</th><th>Customer</th><th>Package</th><th>Date</th><th>Status</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>#BK-991</strong></td>
                                <td>Alex Carter</td>
                                <td>Paris Romance</td>
                                <td>Oct 12, 2026</td>
                                <td><span class="badge b-warning">Pending</span></td>
                                <td>
                                    <button class="btn btn-outline" style="padding:5px 10px; font-size:0.8rem;">Approve</button>
                                    <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;">Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>#BK-990</strong></td>
                                <td>Sarah Lee</td>
                                <td>Swiss Alps</td>
                                <td>Nov 05, 2026</td>
                                <td><span class="badge b-success">Confirmed</span></td>
                                <td>
                                    <button class="btn btn-outline" style="padding:5px 10px; font-size:0.8rem;">Details</button>
                                    <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;">Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 3: TOUR PACKAGES ==================== -->
        <section id="tab-packages" class="tab-pane">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
                <h1 style="margin:0;">Tour Packages</h1>
                <button class="btn btn-primary"><i class='bx bx-plus'></i> Add New Package</button>
            </div>
            
            <div class="grid-3">
                <div class="card">
                    <img src="assets/destination2.jpg" style="width:100%; height:150px; object-fit:cover; border-radius:15px; margin-bottom:15px;">
                    <h3>Paris Romance</h3>
                    <p style="color:var(--text-secondary);">$1,500 • 7 Days</p>
                    <div style="display:flex; gap:10px; margin-top:15px;">
                        <button class="btn btn-outline" style="flex:1;">Edit</button>
                        <button class="btn btn-danger" style="flex:1;">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <img src="assets/destination3.jpg" style="width:100%; height:150px; object-fit:cover; border-radius:15px; margin-bottom:15px;">
                    <h3>Swiss Alps</h3>
                    <p style="color:var(--text-secondary);">$2,100 • 5 Days</p>
                    <div style="display:flex; gap:10px; margin-top:15px;">
                        <button class="btn btn-outline" style="flex:1;">Edit</button>
                        <button class="btn btn-danger" style="flex:1;">Delete</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 4: DESTINATIONS ==================== -->
        <section id="tab-destinations" class="tab-pane">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Manage Destinations</h3>
                    <button class="btn btn-primary"><i class='bx bx-plus'></i> Add Destination</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>Location</th><th>Country</th><th>Active Packages</th><th>Status</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Paris</td><td>France</td><td>12</td><td><span class="badge b-success">Active</span></td>
                                <td><button class="btn btn-outline" style="padding:5px 10px;">Edit</button></td>
                            </tr>
                            <tr>
                                <td>Kyoto</td><td>Japan</td><td>8</td><td><span class="badge b-success">Active</span></td>
                                <td><button class="btn btn-outline" style="padding:5px 10px;">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 5: CUSTOMERS ==================== -->
        <section id="tab-customers" class="tab-pane">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Customer Directory</h3>
                    <input type="text" class="form-control" placeholder="Search customers..." style="width:250px;">
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>Name</th><th>Email</th><th>Total Bookings</th><th>Loyalty Points</th><th>Status</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alex Carter</td><td>alex.carter@example.com</td><td>14</td><td>3,450</td><td><span class="badge b-success">Premium</span></td>
                                <td><button class="btn btn-outline" style="padding:5px 10px;">View Profile</button></td>
                            </tr>
                            <tr>
                                <td>Sarah Lee</td><td>sarah.l@example.com</td><td>2</td><td>450</td><td><span class="badge b-info">Standard</span></td>
                                <td><button class="btn btn-outline" style="padding:5px 10px;">View Profile</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 6: PAYMENTS ==================== -->
        <section id="tab-payments" class="tab-pane">
            <div class="grid-2" style="margin-bottom:25px;">
                <div class="card">
                    <h3 class="card-title">Recent Transactions</h3>
                    <ul style="list-style:none; padding:0; margin:0;">
                        <li style="display:flex; justify-content:space-between; padding:15px 0; border-bottom:1px solid var(--border);">
                            <div><strong>#TXN-9988</strong><br><span style="font-size:0.85rem; color:var(--text-secondary);">Alex Carter</span></div>
                            <div style="text-align:right;"><strong>$1,500.00</strong><br><span class="badge b-success">Success</span></div>
                        </li>
                    </ul>
                </div>
                <div class="card">
                    <h3 class="card-title">Refund Requests</h3>
                    <ul style="list-style:none; padding:0; margin:0;">
                        <li style="display:flex; justify-content:space-between; padding:15px 0; border-bottom:1px solid var(--border); align-items:center;">
                            <div><strong>#REF-1122</strong><br><span style="font-size:0.85rem; color:var(--text-secondary);">John Doe - $800.00</span></div>
                            <button class="btn btn-outline" style="padding:5px 10px;">Process</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 7: REVIEWS ==================== -->
        <section id="tab-reviews" class="tab-pane">
            <div class="card">
                <div class="card-header"><h3 class="card-title">Manage Reviews</h3></div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>Customer</th><th>Package</th><th>Rating</th><th>Review</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alex Carter</td><td>Paris Romance</td><td>⭐⭐⭐⭐⭐</td><td>"Absolutely amazing trip!"</td>
                                <td>
                                    <button class="btn btn-outline" style="padding:5px 10px;">Reply</button>
                                    <button class="btn btn-danger" style="padding:5px 10px;">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td><td>Bali Retreat</td><td>⭐⭐⭐</td><td>"Good, but hotel was okay."</td>
                                <td>
                                    <button class="btn btn-outline" style="padding:5px 10px;">Approve</button>
                                    <button class="btn btn-danger" style="padding:5px 10px;">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 8: STAFF ==================== -->
        <section id="tab-staff" class="tab-pane">
            <div class="card">
                <div class="card-header"><h3 class="card-title">Employee Directory</h3><button class="btn btn-primary">Add Staff</button></div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>Name</th><th>Role</th><th>Contact</th><th>Status</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Emily Chen</td><td>Travel Agent</td><td>emily@aura.com</td><td><span class="badge b-success">Active</span></td>
                                <td><button class="btn btn-outline" style="padding:5px 10px;">Edit</button></td>
                            </tr>
                            <tr>
                                <td>Michael Smith</td><td>Support Manager</td><td>michael@aura.com</td><td><span class="badge b-success">Active</span></td>
                                <td><button class="btn btn-outline" style="padding:5px 10px;">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 9: REPORTS ==================== -->
        <section id="tab-reports" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">Analytics & Reports</h1>
            <div class="grid-3">
                <div class="card" style="text-align:center;">
                    <i class='bx bx-line-chart' style="font-size:4rem; color:var(--primary); margin-bottom:15px;"></i>
                    <h3>Revenue Report</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Q3 2026 Financials</p>
                    <div style="display:flex; gap:10px; margin-top:15px;">
                        <button class="btn btn-primary" style="flex:1;">PDF</button>
                        <button class="btn btn-outline" style="flex:1;">Excel</button>
                    </div>
                </div>
                <div class="card" style="text-align:center;">
                    <i class='bx bx-pie-chart-alt-2' style="font-size:4rem; color:var(--accent-green); margin-bottom:15px;"></i>
                    <h3>Booking Report</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Sep 2026 Analytics</p>
                    <div style="display:flex; gap:10px; margin-top:15px;">
                        <button class="btn btn-primary" style="flex:1;">PDF</button>
                        <button class="btn btn-outline" style="flex:1;">Excel</button>
                    </div>
                </div>
                <div class="card" style="text-align:center;">
                    <i class='bx bx-user-pin' style="font-size:4rem; color:var(--accent-orange); margin-bottom:15px;"></i>
                    <h3>Customer Report</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Demographics & Growth</p>
                    <div style="display:flex; gap:10px; margin-top:15px;">
                        <button class="btn btn-primary" style="flex:1;">PDF</button>
                        <button class="btn btn-outline" style="flex:1;">Excel</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 10: SETTINGS ==================== -->
        <section id="tab-settings" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">System Settings</h1>
            
            <div class="grid-2-1">
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <div class="card">
                        <h3 class="card-title">Company Profile</h3>
                        <form>
                            <div class="form-group">
                                <label>Company Name</label>
                                <input type="text" class="form-control" required value="Aura Travel Agency">
                                <div class="error-msg"></div>
                            </div>
                            <div class="form-group">
                                <label>Support Email</label>
                                <input type="email" class="form-control" required value="support@auratravel.com">
                                <div class="error-msg"></div>
                            </div>
                            <div class="form-group">
                                <label>Logo Upload</label>
                                <input type="file" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                </div>
                
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <div class="card">
                        <h3 class="card-title">SMTP & Email Settings</h3>
                        <form>
                            <div class="form-group">
                                <label>SMTP Host</label>
                                <input type="text" class="form-control" required value="smtp.mailgun.org">
                                <div class="error-msg"></div>
                            </div>
                            <div class="form-group">
                                <label>Port</label>
                                <input type="number" class="form-control" required value="587">
                                <div class="error-msg"></div>
                            </div>
                            <button type="submit" class="btn btn-outline">Test Connection</button>
                        </form>
                    </div>
                    
                    <div class="card">
                        <h3 class="card-title">Platform Preferences</h3>
                        <div class="form-group">
                            <label>Default Currency</label>
                            <select class="form-control" required>
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Taxes (%)</label>
                            <input type="number" class="form-control" required value="10">
                            <div class="error-msg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <script src="admin_dash.js"></script>
</body>
</html>`;

fs.writeFileSync('agent_dashboard.html', html);
console.log("Admin Dashboard (agent_dashboard.html) successfully generated.");
