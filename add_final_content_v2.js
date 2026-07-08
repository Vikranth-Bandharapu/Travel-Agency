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
                            <h2>24</h2>
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
                        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom: 15px;">Your flight AF102 departs from JFK at 18:30. Don't forget to pack light! Check your travel documents in the bookings tab.</p>
                        
                        <div style="background:#f4f7fe; padding:15px; border-radius:12px; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <h4 style="margin:0; font-size:0.9rem;">Flight AF102</h4>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">JFK -> CDG</span>
                            </div>
                            <span class="badge badge-warning">On Time</span>
                        </div>
                        
                        <button class="dash-btn dash-btn-primary" style="width:100%;">View Full Itinerary</button>
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
                                    <span style="font-size:0.75rem; color:#cbd5e1;">2 hours ago</span>
                                </div>
                            </div>
                            <div class="small-metric">
                                <div class="small-metric-icon" style="background:var(--accent-blue);"><i class='bx bx-file'></i></div>
                                <div>
                                    <h4 style="margin:0;">Visa Uploaded</h4>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Schengen Visa approved</p>
                                    <span style="font-size:0.75rem; color:#cbd5e1;">Yesterday at 14:30</span>
                                </div>
                            </div>
                            <div class="small-metric">
                                <div class="small-metric-icon" style="background:var(--accent-orange);"><i class='bx bx-star'></i></div>
                                <div>
                                    <h4 style="margin:0;">Points Earned</h4>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">+450 Points from Dubai Safari</p>
                                    <span style="font-size:0.75rem; color:#cbd5e1;">Oct 01, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h3 style="margin: 30px 0 20px 0;">Recommended For You</h3>
                <div class="dash-grid-4">
                    <div class="dash-card" style="padding:0; position:relative;">
                        <span class="badge badge-warning" style="position:absolute; top:10px; right:10px; background:var(--accent-orange); color:white;">Hot Deal</span>
                        <img src="assets/destination3.jpg" style="width:100%; height:120px; object-fit:cover;">
                        <div style="padding:15px;">
                            <h4 style="margin:0 0 5px 0;">Tokyo Explorer</h4>
                            <p style="margin:0 0 10px 0; color:var(--accent-blue); font-weight:700;">$2,400</p>
                            <button class="dash-btn dash-btn-outline" style="width:100%; padding:5px;">Explore</button>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination2.jpg" style="width:100%; height:120px; object-fit:cover;">
                        <div style="padding:15px;">
                            <h4 style="margin:0 0 5px 0;">Swiss Alps Ski</h4>
                            <p style="margin:0 0 10px 0; color:var(--accent-blue); font-weight:700;">$3,100</p>
                            <button class="dash-btn dash-btn-outline" style="width:100%; padding:5px;">Explore</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TAB 2: MY BOOKINGS -->
            <div id="tab-bookings" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Active & Upcoming Bookings</h3>
                        <button class="dash-btn dash-btn-outline"><i class='bx bx-download'></i> Download E-Tickets</button>
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
                                    <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                            <img src="assets/destination1.jpg" style="width:30px; height:30px; border-radius:5px; object-fit:cover;">
                                            Paris Romance Tour
                                        </div>
                                    </td>
                                    <td>Oct 12 - Oct 18, 2026</td>
                                    <td><span class="badge badge-success">Upcoming</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">View Details</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-9014</strong></td>
                                    <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                            <img src="assets/destination3.jpg" style="width:30px; height:30px; border-radius:5px; object-fit:cover;">
                                            Kyoto Sakura Festival
                                        </div>
                                    </td>
                                    <td>Apr 02 - Apr 12, 2027</td>
                                    <td><span class="badge badge-success">Upcoming</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">View Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="dash-card" style="margin-top: 25px;">
                    <div class="dash-card-header">
                        <h3>Past Bookings</h3>
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
                                <tr>
                                    <td><strong>#BKG-4419</strong></td>
                                    <td>New York Getaway</td>
                                    <td>Dec 20 - Dec 27, 2024</td>
                                    <td><span class="badge badge-warning">Completed</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Leave Review</button></td>
                                </tr>
                                <tr>
                                    <td><strong>#BKG-2991</strong></td>
                                    <td>Rome Ancient Tour</td>
                                    <td>May 10 - May 15, 2024</td>
                                    <td><span class="badge badge-warning">Completed</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">Invoice</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- TAB 3: SAVED TOURS -->
            <div id="tab-saved" class="tab-pane">
                <div class="dash-card-header">
                    <h3>Your Wishlist (8 Tours)</h3>
                    <div class="dash-form">
                        <input type="text" placeholder="Search saved tours..." style="max-width:250px;">
                    </div>
                </div>
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
                        <img src="assets/destination1.jpg" style="width:100%; height:160px; object-fit:cover; filter:hue-rotate(45deg);">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Santorini Sunset</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$1,850 <span style="color:var(--text-secondary); font-weight:400;">/ 8 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination2.jpg" style="width:100%; height:160px; object-fit:cover; filter:sepia(0.3);">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">London Explorer</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$1,450 <span style="color:var(--text-secondary); font-weight:400;">/ 5 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination3.jpg" style="width:100%; height:160px; object-fit:cover; filter:grayscale(0.2);">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Machu Picchu Hike</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$2,300 <span style="color:var(--text-secondary); font-weight:400;">/ 7 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination1.jpg" style="width:100%; height:160px; object-fit:cover; filter:invert(0.1);">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">Taj Mahal Tour</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$1,100 <span style="color:var(--text-secondary); font-weight:400;">/ 4 Days</span></p>
                            <div class="flex-between">
                                <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                                <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                    <div class="dash-card" style="padding:0;">
                        <img src="assets/destination2.jpg" style="width:100%; height:160px; object-fit:cover; filter:brightness(0.8);">
                        <div style="padding:20px;">
                            <h3 style="margin:0 0 10px 0;">African Safari</h3>
                            <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">$4,500 <span style="color:var(--text-secondary); font-weight:400;">/ 12 Days</span></p>
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
                        <div style="margin-top:20px;">
                            <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:5px;">Next Payment Due: <strong>Oct 01, 2026</strong></p>
                            <button class="dash-btn dash-btn-primary" style="width:100%;">Pay Installment ($500)</button>
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
                        
                        <div style="padding:15px; border:1px solid #e2e8f0; border-radius:12px; margin-bottom:10px; display:flex; align-items:center; gap:15px;">
                            <i class='bx bxl-mastercard' style="font-size:2rem; color:#eb001b;"></i>
                            <div style="flex:1;">
                                <strong style="display:block;">Mastercard ending in 8819</strong>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">Expires 05/27</span>
                            </div>
                        </div>
                        <button class="dash-btn dash-btn-outline" style="width:100%; margin-top:10px;">+ Add New Method</button>
                    </div>
                </div>
                
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Recent Transactions</h3>
                        <button class="dash-btn dash-btn-outline" style="padding:5px 15px;"><i class='bx bx-filter'></i> Filter</button>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr><th>Date</th><th>Description</th><th>Invoice #</th><th>Amount</th><th>Status</th><th>Receipt</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sep 12, 2026</td>
                                    <td>Deposit: Paris Romance Tour</td>
                                    <td><span style="color:var(--text-secondary);">INV-8892</span></td>
                                    <td><strong>$1,500.00</strong></td>
                                    <td><span class="badge badge-success">Success</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:4px 10px; font-size:0.8rem;"><i class='bx bx-download'></i> PDF</button></td>
                                </tr>
                                <tr>
                                    <td>Jan 05, 2026</td>
                                    <td>Full Payment: Dubai Safari</td>
                                    <td><span style="color:var(--text-secondary);">INV-7710</span></td>
                                    <td><strong>$850.00</strong></td>
                                    <td><span class="badge badge-success">Success</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:4px 10px; font-size:0.8rem;"><i class='bx bx-download'></i> PDF</button></td>
                                </tr>
                                <tr>
                                    <td>Aug 10, 2025</td>
                                    <td>Refund: Bali Retreat</td>
                                    <td><span style="color:var(--text-secondary);">REF-6022</span></td>
                                    <td><strong>+$450.00</strong></td>
                                    <td><span class="badge badge-success">Refunded</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:4px 10px; font-size:0.8rem;"><i class='bx bx-download'></i> PDF</button></td>
                                </tr>
                                <tr>
                                    <td>Dec 01, 2024</td>
                                    <td>Full Payment: New York</td>
                                    <td><span style="color:var(--text-secondary);">INV-4419</span></td>
                                    <td><strong>$1,200.00</strong></td>
                                    <td><span class="badge badge-success">Success</span></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding:4px 10px; font-size:0.8rem;"><i class='bx bx-download'></i> PDF</button></td>
                                </tr>
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
                                <label>Home Address</label>
                                <input type="text" value="123 Travel Lane, Explorer City, NY 10001">
                            </div>
                            <div class="dash-form-group full">
                                <label>Bio / Travel Preferences</label>
                                <textarea style="padding:12px 15px; border:1px solid #e2e8f0; border-radius:12px; font-family:inherit; outline:none; resize:vertical; min-height:80px;">Love historical sites and luxury resorts. Prefer direct flights when possible.</textarea>
                            </div>
                            <div class="dash-form-group full">
                                <button type="button" class="dash-btn dash-btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                    
                    <div style="display:flex; flex-direction:column; gap:20px;">
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">Security & Preferences</h3>
                            <form class="dash-form">
                                <div class="dash-form-group full">
                                    <label>Current Password</label>
                                    <input type="password" placeholder="Enter current password">
                                </div>
                                <div class="dash-form-group full">
                                    <label>New Password</label>
                                    <input type="password" placeholder="Enter new password">
                                </div>
                                <div class="dash-form-group">
                                    <label>Currency</label>
                                    <select><option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option></select>
                                </div>
                                <div class="dash-form-group">
                                    <label>Language</label>
                                    <select><option>English</option><option>Spanish</option><option>French</option></select>
                                </div>
                                <div class="dash-form-group full">
                                    <button type="button" class="dash-btn dash-btn-outline">Update Settings</button>
                                </div>
                            </form>
                        </div>
                        
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">Notification Settings</h3>
                            <div class="flex-between" style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #e2e8f0;">
                                <div>
                                    <strong>Email Alerts</strong>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Receive booking updates and receipts</p>
                                </div>
                                <input type="checkbox" checked style="width:20px; height:20px;">
                            </div>
                            <div class="flex-between" style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #e2e8f0;">
                                <div>
                                    <strong>SMS Notifications</strong>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Get flight delays and urgent updates</p>
                                </div>
                                <input type="checkbox" checked style="width:20px; height:20px;">
                            </div>
                            <div class="flex-between">
                                <div>
                                    <strong>Marketing Offers</strong>
                                    <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Exclusive deals and newsletter</p>
                                </div>
                                <input type="checkbox" style="width:20px; height:20px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
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
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
            
            if(pageTitle && titles[target]) {
                pageTitle.textContent = titles[target];
            }

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

const agentHtml = \`<!DOCTYPE html>
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
</html>\`;

fs.writeFileSync('dashboard.html', userHtml);
fs.writeFileSync('agent_dashboard.html', agentHtml);
console.log("Successfully enriched dashboards with final detailed content!");
