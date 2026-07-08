const fs = require('fs');

const destinations = [
    { name: "Paris Romance", loc: "France", dur: "7 Days", price: "$1,500", rating: "4.9", rev: "320", img: "assets/destination2.jpg" },
    { name: "Swiss Alps", loc: "Switzerland", dur: "5 Days", price: "$2,100", rating: "4.8", rev: "210", img: "assets/destination3.jpg" },
    { name: "Maldives Escape", loc: "Maldives", dur: "6 Days", price: "$3,200", rating: "5.0", rev: "450", img: "assets/destination1.jpg" },
    { name: "Kyoto Heritage", loc: "Japan", dur: "10 Days", price: "$2,800", rating: "4.9", rev: "280", img: "assets/destination2.jpg" },
    { name: "Grand Canyon", loc: "USA", dur: "4 Days", price: "$900", rating: "4.7", rev: "150", img: "assets/destination3.jpg" },
    { name: "Santorini Sunset", loc: "Greece", dur: "8 Days", price: "$1,850", rating: "4.8", rev: "300", img: "assets/destination1.jpg" },
    { name: "Rome Ancient Tour", loc: "Italy", dur: "6 Days", price: "$1,400", rating: "4.7", rev: "220", img: "assets/destination2.jpg" },
    { name: "Machu Picchu", loc: "Peru", dur: "7 Days", price: "$1,650", rating: "4.9", rev: "180", img: "assets/destination3.jpg" },
    { name: "Bali Retreat", loc: "Indonesia", dur: "12 Days", price: "$1,300", rating: "4.6", rev: "400", img: "assets/destination1.jpg" },
    { name: "Great Wall Hike", loc: "China", dur: "5 Days", price: "$1,100", rating: "4.5", rev: "120", img: "assets/destination2.jpg" },
    { name: "Safari Adventure", loc: "Kenya", dur: "9 Days", price: "$3,500", rating: "4.9", rev: "330", img: "assets/destination3.jpg" },
    { name: "Bora Bora Honeymoon", loc: "French Polynesia", dur: "7 Days", price: "$4,200", rating: "5.0", rev: "190", img: "assets/destination1.jpg" },
    { name: "Dubai Luxury", loc: "UAE", dur: "5 Days", price: "$2,500", rating: "4.8", rev: "410", img: "assets/destination2.jpg" },
    { name: "Northern Lights", loc: "Iceland", dur: "6 Days", price: "$2,200", rating: "4.9", rev: "250", img: "assets/destination3.jpg" },
    { name: "Phuket Beaches", loc: "Thailand", dur: "8 Days", price: "$1,050", rating: "4.6", rev: "380", img: "assets/destination1.jpg" },
];

const savedCardsHtml = destinations.map(d => `
<div class="dest-card">
    <div class="dest-img-wrap">
        <img src="${d.img}" alt="${d.name}">
        <div class="dest-badges">
            <span class="dest-price">${d.price}</span>
            <div class="dest-action-btn"><i class='bx bxs-heart'></i></div>
        </div>
    </div>
    <div class="dest-body">
        <div class="dest-location"><i class='bx bx-map'></i> ${d.loc}</div>
        <h3>${d.name}</h3>
        <div class="dest-metrics">
            <div class="dest-metric"><i class='bx bx-time-five'></i> ${d.dur}</div>
            <div class="dest-metric"><i class='bx bxs-star'></i> ${d.rating} (${d.rev})</div>
        </div>
        <div class="dest-footer">
            <button class="btn btn-outline" style="flex:1;">View Details</button>
            <button class="btn btn-primary" style="flex:1;">Book Now</button>
        </div>
    </div>
</div>
`).join('');


const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard | Premium Travel</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="user_dash.css">
</head>
<body>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-logo">
            <img src="assets/logo.webp" alt="Aura Travel">
        </div>
        <div class="nav-label">Main Menu</div>
        <a class="nav-item active" data-target="tab-dash">
            <i class='bx bx-home-alt'></i><span>Dashboard</span>
        </a>
        <a class="nav-item" data-target="tab-bookings">
            <i class='bx bx-briefcase'></i><span>My Bookings</span>
        </a>
        <a class="nav-item" data-target="tab-saved">
            <i class='bx bx-heart'></i><span>Saved Tours</span>
        </a>
        
        <div class="nav-label">Finance & Docs</div>
        <a class="nav-item" data-target="tab-payments">
            <i class='bx bx-wallet'></i><span>Payments</span>
        </a>
        <a class="nav-item" data-target="tab-docs">
            <i class='bx bx-file'></i><span>Travel Documents</span>
        </a>
        
        <div class="nav-label">Account</div>
        <a class="nav-item" data-target="tab-notif">
            <i class='bx bx-bell'></i><span>Notifications</span>
        </a>
        <a class="nav-item" data-target="tab-support">
            <i class='bx bx-support'></i><span>Support</span>
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
                <input type="text" placeholder="Search destinations, bookings, settings...">
            </div>
        </div>
        
        <div class="header-right">
            <div id="currentDate" style="color:var(--text-secondary); font-weight:600;"></div>
            <div class="header-icon">
                <i class='bx bx-bell'></i>
                <div class="badge-dot"></div>
            </div>
            <div class="profile-menu">
                <img src="https://ui-avatars.com/api/?name=Alex+Carter&background=4318ff&color=fff" alt="User">
                <div class="profile-info">
                    <span class="profile-name">Alex Carter</span>
                    <span class="profile-role">Premium Explorer</span>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        
        <!-- 1. DASHBOARD OVERVIEW -->
        <section id="tab-dash" class="tab-pane active">
            <!-- 1. Welcome Banner -->
            <div class="welcome-banner" style="margin-bottom:30px;">
                <div class="welcome-text">
                    <h1>Ready for your next adventure, Alex?</h1>
                    <p>You have <strong>1 upcoming trip</strong> to Paris in 12 days.<br>Check your itinerary and travel documents below.</p>
                </div>
                <img src="assets/destination2.jpg" alt="Hero" class="welcome-img" style="border-radius:20px; border:4px solid rgba(255,255,255,0.2);">
            </div>

            <!-- 2. Statistics -->
            <div class="grid-4" style="margin-bottom:30px;">
                <div class="card stat-widget">
                    <div class="stat-icon"><i class='bx bx-briefcase'></i></div>
                    <div class="stat-val"><h4>Total Bookings</h4><h2>14</h2></div>
                </div>
                <div class="card stat-widget">
                    <div class="stat-icon" style="color:var(--accent-orange);"><i class='bx bxs-star'></i></div>
                    <div class="stat-val"><h4>Loyalty Points</h4><h2>3,450</h2></div>
                </div>
                <div class="card stat-widget">
                    <div class="stat-icon" style="color:var(--accent-green);"><i class='bx bx-map-alt'></i></div>
                    <div class="stat-val"><h4>Countries Visited</h4><h2>8</h2></div>
                </div>
                <div class="card stat-widget">
                    <div class="stat-icon" style="color:var(--accent-red);"><i class='bx bx-heart'></i></div>
                    <div class="stat-val"><h4>Saved Tours</h4><h2>15</h2></div>
                </div>
            </div>

            <!-- 3. Grid 2-1 Layout -->
            <div class="grid-2-1" style="margin-bottom:30px;">
                
                <!-- Left Column -->
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <!-- Upcoming Trip -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class='bx bx-calendar-event'></i> Next Upcoming Trip</h3>
                            <span class="badge b-success">Confirmed</span>
                        </div>
                        <div style="display:flex; gap:20px; align-items:center;">
                            <img src="assets/destination1.jpg" style="width:120px; height:120px; border-radius:15px; object-fit:cover;">
                            <div>
                                <h2>Paris Romance Tour</h2>
                                <p style="color:var(--text-secondary); margin:5px 0 15px 0;">Oct 12, 2026 - Oct 18, 2026</p>
                                <div style="display:flex; gap:10px;">
                                    <button class="btn btn-primary">View Itinerary</button>
                                    <button class="btn btn-outline">Download Tickets</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Recommended Destinations -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class='bx bx-compass'></i> Recommended for You</h3>
                            <button class="btn btn-outline" style="padding:8px 15px;">View All</button>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:15px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; padding:15px; border:1px solid var(--border); border-radius:15px;">
                                <div style="display:flex; align-items:center; gap:15px;">
                                    <img src="assets/destination3.jpg" style="width:60px; height:60px; border-radius:10px;">
                                    <div>
                                        <h4 style="margin:0 0 5px 0;">Maldives Escape</h4>
                                        <span style="color:var(--text-secondary); font-size:0.9rem;">From $3,200 • 6 Days</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                            <div style="display:flex; align-items:center; justify-content:space-between; padding:15px; border:1px solid var(--border); border-radius:15px;">
                                <div style="display:flex; align-items:center; gap:15px;">
                                    <img src="assets/destination2.jpg" style="width:60px; height:60px; border-radius:10px;">
                                    <div>
                                        <h4 style="margin:0 0 5px 0;">Swiss Alps</h4>
                                        <span style="color:var(--text-secondary); font-size:0.9rem;">From $2,100 • 5 Days</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary" style="padding:8px 15px;">Book</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <!-- Countdown & Weather -->
                    <div class="card" style="text-align:center;">
                        <h3 style="margin-top:0;">Countdown to Paris</h3>
                        <div style="font-size:3rem; font-weight:800; color:var(--primary); line-height:1;">12</div>
                        <p style="color:var(--text-secondary); margin-bottom:20px;">Days Remaining</p>
                        <div style="background:var(--secondary); padding:15px; border-radius:15px; display:flex; align-items:center; justify-content:center; gap:10px;">
                            <i class='bx bx-cloud-light-rain' style="font-size:2rem; color:#475569;"></i>
                            <div style="text-align:left;">
                                <h4 style="margin:0;">18°C / 64°F</h4>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">Mostly Cloudy</span>
                            </div>
                        </div>
                    </div>

                    <!-- Activity Timeline -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"><i class='bx bx-history'></i> Activity</h3>
                        </div>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-icon"></div>
                                <div class="timeline-content">
                                    <h4>Payment Confirmed</h4>
                                    <p>$1,500 paid for Paris Tour</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon" style="background:var(--accent-orange);"></div>
                                <div class="timeline-content">
                                    <h4>Visa Approved</h4>
                                    <p>Schengen Visa uploaded</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-icon" style="background:var(--accent-green);"></div>
                                <div class="timeline-content">
                                    <h4>Booking Created</h4>
                                    <p>Paris Romance Tour booked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


        <!-- 2. MY BOOKINGS -->
        <section id="tab-bookings" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">My Bookings</h1>
            
            <div class="grid-3" style="margin-bottom:30px;">
                <div class="card stat-widget">
                    <div class="stat-icon" style="color:var(--accent-green);"><i class='bx bx-check-shield'></i></div>
                    <div class="stat-val"><h4>Upcoming Trips</h4><h2>1</h2></div>
                </div>
                <div class="card stat-widget">
                    <div class="stat-icon"><i class='bx bx-history'></i></div>
                    <div class="stat-val"><h4>Completed Trips</h4><h2>12</h2></div>
                </div>
                <div class="card stat-widget">
                    <div class="stat-icon" style="color:var(--accent-red);"><i class='bx bx-x-circle'></i></div>
                    <div class="stat-val"><h4>Cancelled Trips</h4><h2>1</h2></div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Booking History</h3>
                    <div style="display:flex; gap:10px;">
                        <input type="text" class="form-control" placeholder="Search bookings..." style="width:200px; padding:10px;">
                        <button class="btn btn-outline"><i class='bx bx-filter'></i> Filter</button>
                    </div>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Destination</th>
                                <th>Travel Dates</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong style="color:var(--primary);">#BKG-8992</strong></td>
                                <td><div style="display:flex; align-items:center; gap:10px;"><img src="assets/destination1.jpg" style="width:40px; height:40px; border-radius:8px;"> Paris Romance</div></td>
                                <td>Oct 12 - Oct 18, 2026</td>
                                <td>$1,500.00</td>
                                <td><span class="badge b-success">Upcoming</span></td>
                                <td style="display:flex; gap:10px;">
                                    <button class="btn btn-outline" style="padding:8px 12px; font-size:0.8rem;">Tickets</button>
                                    <button class="btn btn-danger" style="padding:8px 12px; font-size:0.8rem;">Cancel</button>
                                </td>
                            </tr>
                            <tr>
                                <td><strong style="color:var(--primary);">#BKG-7710</strong></td>
                                <td><div style="display:flex; align-items:center; gap:10px;"><img src="assets/destination2.jpg" style="width:40px; height:40px; border-radius:8px;"> Dubai Safari</div></td>
                                <td>Jan 05 - Jan 10, 2026</td>
                                <td>$850.00</td>
                                <td><span class="badge b-info">Completed</span></td>
                                <td style="display:flex; gap:10px;">
                                    <button class="btn btn-outline" style="padding:8px 12px; font-size:0.8rem;">Invoice</button>
                                </td>
                            </tr>
                            <tr>
                                <td><strong style="color:var(--primary);">#BKG-6022</strong></td>
                                <td><div style="display:flex; align-items:center; gap:10px;"><img src="assets/destination3.jpg" style="width:40px; height:40px; border-radius:8px;"> Bali Retreat</div></td>
                                <td>Aug 15 - Aug 20, 2025</td>
                                <td>$1,200.00</td>
                                <td><span class="badge b-danger">Cancelled</span></td>
                                <td style="display:flex; gap:10px;">
                                    <button class="btn btn-outline" style="padding:8px 12px; font-size:0.8rem;">Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 3. SAVED TOURS -->
        <section id="tab-saved" class="tab-pane">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
                <h1 style="margin:0;">Saved Tours</h1>
                <button class="btn btn-outline"><i class='bx bx-transfer'></i> Compare Selected</button>
            </div>
            <div class="grid-4">
                ${savedCardsHtml}
            </div>
        </section>

        <!-- 4. PAYMENTS -->
        <section id="tab-payments" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">Payments & Billing</h1>
            
            <div class="grid-2-1" style="margin-bottom:30px;">
                <!-- Payment Summary & Cards -->
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <div class="grid-2">
                        <div class="card stat-widget" style="background:linear-gradient(135deg, #1A1F71, #4318FF); color:white;">
                            <div class="stat-icon" style="background:rgba(255,255,255,0.2); color:white;"><i class='bx bx-wallet'></i></div>
                            <div class="stat-val"><h4 style="color:rgba(255,255,255,0.8);">Wallet Balance</h4><h2 style="color:white;">$450.00</h2></div>
                        </div>
                        <div class="card stat-widget" style="background:linear-gradient(135deg, #FFCE20, #F9A826); color:white;">
                            <div class="stat-icon" style="background:rgba(255,255,255,0.2); color:white;"><i class='bx bx-gift'></i></div>
                            <div class="stat-val"><h4 style="color:rgba(255,255,255,0.8);">Available Coupons</h4><h2 style="color:white;">3 Active</h2></div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header"><h3 class="card-title">Saved Payment Methods</h3><button class="btn btn-outline">Add New</button></div>
                        <div class="grid-2">
                            <div style="padding:20px; border:2px solid var(--primary); border-radius:15px; position:relative;">
                                <i class='bx bxl-visa' style="font-size:3rem; color:#1A1F71;"></i>
                                <h4 style="margin:10px 0;">**** **** **** 4242</h4>
                                <p style="margin:0; color:var(--text-secondary); font-size:0.9rem;">Expires 12/28</p>
                                <span class="badge b-info" style="position:absolute; top:20px; right:20px;">Primary</span>
                            </div>
                            <div style="padding:20px; border:2px solid var(--border); border-radius:15px;">
                                <i class='bx bxl-mastercard' style="font-size:3rem; color:#EB001B;"></i>
                                <h4 style="margin:10px 0;">**** **** **** 5555</h4>
                                <p style="margin:0; color:var(--text-secondary); font-size:0.9rem;">Expires 09/27</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Invoices -->
                <div class="card">
                    <div class="card-header"><h3 class="card-title">Recent Invoices</h3></div>
                    <div style="display:flex; flex-direction:column; gap:15px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid var(--border);">
                            <div>
                                <h4 style="margin:0 0 5px 0;">#INV-2026-899</h4>
                                <span style="font-size:0.85rem; color:var(--text-secondary);">Sep 12, 2026</span>
                            </div>
                            <div style="text-align:right;">
                                <h4 style="margin:0 0 5px 0;">$1,500.00</h4>
                                <span class="badge b-success">Paid</span>
                            </div>
                            <button class="btn btn-outline" style="padding:8px 12px;"><i class='bx bx-download'></i></button>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid var(--border);">
                            <div>
                                <h4 style="margin:0 0 5px 0;">#INV-2026-710</h4>
                                <span style="font-size:0.85rem; color:var(--text-secondary);">Jan 05, 2026</span>
                            </div>
                            <div style="text-align:right;">
                                <h4 style="margin:0 0 5px 0;">$850.00</h4>
                                <span class="badge b-success">Paid</span>
                            </div>
                            <button class="btn btn-outline" style="padding:8px 12px;"><i class='bx bx-download'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header"><h3 class="card-title">Transaction History</h3></div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>Txn ID</th><th>Date</th><th>Description</th><th>Method</th><th>Amount</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TXN-998822</td><td>Sep 12, 2026</td><td>Paris Romance Tour</td><td>Visa *4242</td><td>$1,500.00</td><td><span class="badge b-success">Success</span></td>
                            </tr>
                            <tr>
                                <td>TXN-881122</td><td>Jan 05, 2026</td><td>Dubai Safari</td><td>Wallet</td><td>$850.00</td><td><span class="badge b-success">Success</span></td>
                            </tr>
                            <tr>
                                <td>TXN-552211</td><td>Aug 10, 2025</td><td>Bali Retreat Refund</td><td>Mastercard *5555</td><td>+$1,200.00</td><td><span class="badge b-warning">Refunded</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 5. TRAVEL DOCUMENTS -->
        <section id="tab-docs" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">Travel Documents</h1>
            <div class="grid-3">
                <div class="card" style="text-align:center;">
                    <i class='bx bx-id-card' style="font-size:4rem; color:var(--primary); margin-bottom:15px;"></i>
                    <h3>Passport</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Verified • Expires 2030</p>
                    <button class="btn btn-outline" style="width:100%; margin-top:15px;">View Document</button>
                </div>
                <div class="card" style="text-align:center;">
                    <i class='bx bx-plane-alt' style="font-size:4rem; color:var(--accent-orange); margin-bottom:15px;"></i>
                    <h3>Flight Tickets</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Paris • AF-1029</p>
                    <button class="btn btn-primary" style="width:100%; margin-top:15px;"><i class='bx bx-download'></i> Download PDF</button>
                </div>
                <div class="card" style="text-align:center;">
                    <i class='bx bx-building-house' style="font-size:4rem; color:var(--accent-green); margin-bottom:15px;"></i>
                    <h3>Hotel Vouchers</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Le Meurice • 6 Nights</p>
                    <button class="btn btn-primary" style="width:100%; margin-top:15px;"><i class='bx bx-download'></i> Download PDF</button>
                </div>
                <div class="card" style="text-align:center;">
                    <i class='bx bx-shield-plus' style="font-size:4rem; color:var(--accent-red); margin-bottom:15px;"></i>
                    <h3>Travel Insurance</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Allianz Global • Active</p>
                    <button class="btn btn-outline" style="width:100%; margin-top:15px;">View Policy</button>
                </div>
            </div>
        </section>

        <!-- 6. NOTIFICATIONS -->
        <section id="tab-notif" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">Notifications</h1>
            <div class="card">
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-icon" style="background:var(--primary);"></div>
                        <div class="timeline-content">
                            <h4>Flight Time Changed</h4>
                            <p>Your flight AF-1029 to Paris has been moved up by 1 hour. New departure is 10:00 AM.</p>
                            <span style="font-size:0.8rem; color:var(--text-secondary); display:block; margin-top:5px;">2 hours ago</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon" style="background:var(--accent-green);"></div>
                        <div class="timeline-content">
                            <h4>Payment Received</h4>
                            <p>We received your payment of $1,500 for the Paris Romance Tour.</p>
                            <span style="font-size:0.8rem; color:var(--text-secondary); display:block; margin-top:5px;">2 days ago</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon" style="background:var(--accent-orange);"></div>
                        <div class="timeline-content">
                            <h4>Price Drop Alert</h4>
                            <p>The price for "Swiss Alps Expedition" has dropped by 15%!</p>
                            <span style="font-size:0.8rem; color:var(--text-secondary); display:block; margin-top:5px;">1 week ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. SUPPORT -->
        <section id="tab-support" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">Help & Support</h1>
            <div class="grid-2-1">
                <div class="card">
                    <h3 class="card-title">Contact Us</h3>
                    <form>
                        <div class="form-group">
                            <label>Subject</label>
                            <input type="text" class="form-control" required placeholder="How can we help?">
                            <div class="error-msg"></div>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea class="form-control" rows="5" required placeholder="Describe your issue in detail..."></textarea>
                            <div class="error-msg"></div>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Submit Ticket</button>
                    </form>
                </div>
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <div class="card" style="text-align:center; background:linear-gradient(135deg, var(--primary), var(--primary-light)); color:white;">
                        <i class='bx bx-support' style="font-size:4rem; margin-bottom:15px;"></i>
                        <h3 style="color:white; margin:0 0 10px 0;">Live Chat</h3>
                        <p style="opacity:0.9; font-size:0.9rem; margin-bottom:20px;">Our agents are online 24/7 to assist you.</p>
                        <button class="btn btn-outline" style="background:white; color:var(--primary); width:100%;">Start Chat</button>
                    </div>
                    <div class="card">
                        <h3 class="card-title">Ticket History</h3>
                        <p style="font-size:0.9rem;"><strong>#TKT-1029</strong> - Refund Delay <span class="badge b-success" style="float:right;">Resolved</span></p>
                        <hr style="border:none; border-top:1px solid var(--border); margin:15px 0;">
                        <p style="font-size:0.9rem;"><strong>#TKT-0988</strong> - Itinerary Change <span class="badge b-success" style="float:right;">Resolved</span></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 8. SETTINGS -->
        <section id="tab-settings" class="tab-pane">
            <h1 style="margin-top:0; margin-bottom:30px;">Account Settings</h1>
            
            <div class="grid-2-1">
                <!-- Profile & Security -->
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <div class="card">
                        <h3 class="card-title">Profile Information</h3>
                        <div style="display:flex; align-items:center; gap:25px; margin-bottom:30px;">
                            <img src="https://ui-avatars.com/api/?name=Alex+Carter&background=4318ff&color=fff" style="width:100px; height:100px; border-radius:50%; box-shadow:var(--shadow);">
                            <div>
                                <button class="btn btn-primary" style="margin-bottom:10px;">Upload New Photo</button>
                                <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Max file size 2MB</p>
                            </div>
                        </div>
                        <form>
                            <div class="grid-2">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" required value="Alex">
                                    <div class="error-msg"></div>
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" required value="Carter">
                                    <div class="error-msg"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="email" class="form-control" required value="alex.carter@example.com">
                                <div class="error-msg"></div>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" class="form-control" required value="+1 (555) 123-4567">
                                <div class="error-msg"></div>
                            </div>
                            <button type="submit" class="btn btn-primary" style="margin-top:10px;">Save Changes</button>
                        </form>
                    </div>

                    <div class="card">
                        <h3 class="card-title">Security & Password</h3>
                        <form>
                            <div class="form-group">
                                <label>Current Password</label>
                                <input type="password" class="form-control" required>
                                <div class="error-msg"></div>
                            </div>
                            <div class="grid-2">
                                <div class="form-group">
                                    <label>New Password</label>
                                    <input type="password" class="form-control" required>
                                    <div class="error-msg"></div>
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" required>
                                    <div class="error-msg"></div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline" style="margin-top:10px;">Update Password</button>
                        </form>
                    </div>
                </div>

                <!-- Preferences & Danger Zone -->
                <div style="display:flex; flex-direction:column; gap:30px;">
                    <div class="card">
                        <h3 class="card-title">Preferences</h3>
                        <div class="form-group">
                            <label>Currency</label>
                            <select class="form-control" required>
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                                <option>GBP (£)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Language</label>
                            <select class="form-control" required>
                                <option>English (US)</option>
                                <option>Spanish (ES)</option>
                                <option>French (FR)</option>
                            </select>
                        </div>
                        
                        <hr style="border:none; border-top:1px solid var(--border); margin:25px 0;">
                        
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                            <div>
                                <strong>Dark Mode</strong>
                                <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Toggle dark theme.</p>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                            <div>
                                <strong>Two-Factor Auth</strong>
                                <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Secure your account.</p>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <strong>Email Notifications</strong>
                                <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Promos & alerts.</p>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>

                    <div class="card" style="border:1px solid var(--accent-red);">
                        <h3 class="card-title" style="color:var(--accent-red);">Danger Zone</h3>
                        <p style="font-size:0.9rem; margin-bottom:20px;">Deleting your account is permanent. All data will be wiped immediately.</p>
                        <button class="btn btn-danger" style="width:100%;">Delete Account</button>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <script src="user_dash.js"></script>
</body>
</html>`;

fs.writeFileSync('dashboard.html', html);
console.log("User Dashboard (dashboard.html) successfully generated.");
