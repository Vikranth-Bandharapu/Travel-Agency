const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aura Travel | Customer Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="dashboard_v6.css">
</head>
<body>
<div class="main-wrapper">

    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <aside class="dash-sidebar" id="sidebar">
        <div class="dash-logo">
            <img src="assets/logo.webp" alt="Aura Travel" style="height: 35px; width: auto;">
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
                <i class='bx bx-wallet'></i> Payments
            </a>
            <a class="dash-nav-item" data-target="tab-settings">
                <i class='bx bx-cog'></i> Settings
            </a>
        </div>
        <div class="dash-sidebar-footer">
            <a class="dash-nav-item" data-target="logout" style="color: var(--accent-red);">
                <i class='bx bx-log-out'></i> Logout
            </a>
        </div>
    </aside>

    <!-- Header -->
    <header class="dash-topbar">
        <div style="display:flex; align-items:center; gap:20px;">
            <i class='bx bx-menu mobile-toggle' id="mobileMenuBtn"></i>
            <div class="search-box">
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search destinations, bookings...">
            </div>
        </div>
        
        <div class="topbar-right">
            <div class="current-date" id="currentDate">Loading Date...</div>
            <div class="notification-icon">
                <i class='bx bx-bell'></i>
                <div class="notification-badge"></div>
            </div>
            <div class="user-profile">
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=4318ff&color=fff" alt="User Avatar">
                <div class="user-info">
                    <span class="user-name">John Doe</span>
                    <span class="user-role">Premium Member</span>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content Area -->
    <main class="dash-content">
        
        <!-- ==================== TAB 1: DASHBOARD ==================== -->
        <section id="tab-dashboard" class="tab-pane active">
            
            <div class="dash-card welcome-card" style="margin-bottom: 20px;">
                <div>
                    <h2>Welcome back, John!</h2>
                    <p>Ready for your next adventure? You have 1 upcoming trip in 12 days.</p>
                </div>
                <img src="assets/destination1.jpg" alt="Travel Graphic" style="border-radius:15px; width:150px; object-fit:cover;">
            </div>

            <div class="grid-3" style="margin-bottom: 20px;">
                <div class="dash-card stat-card">
                    <div class="stat-icon"><i class='bx bx-briefcase'></i></div>
                    <div class="stat-info">
                        <h4>Total Trips</h4>
                        <h2>14</h2>
                    </div>
                </div>
                <div class="dash-card stat-card">
                    <div class="stat-icon" style="color:var(--accent-orange);"><i class='bx bx-star'></i></div>
                    <div class="stat-info">
                        <h4>Loyalty Points</h4>
                        <h2>2,450</h2>
                    </div>
                </div>
                <div class="dash-card stat-card">
                    <div class="stat-icon" style="color:var(--accent-green);"><i class='bx bx-check-shield'></i></div>
                    <div class="stat-info">
                        <h4>Booking Status</h4>
                        <h2>Confirmed</h2>
                    </div>
                </div>
            </div>

            <div class="grid-2" style="margin-bottom: 20px;">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3 class="dash-card-title">Upcoming Trip</h3>
                    </div>
                    <div style="display:flex; gap:15px; align-items:center;">
                        <img src="assets/destination2.jpg" alt="Paris" style="width:100px; height:100px; border-radius:15px; object-fit:cover;">
                        <div>
                            <h4 style="margin:0 0 5px 0;">Paris Romance Tour</h4>
                            <p style="margin:0; color:var(--text-secondary); font-size:0.9rem;">Oct 12 - Oct 18, 2026</p>
                            <span class="badge badge-success" style="display:inline-block; margin-top:10px;">Confirmed</span>
                        </div>
                    </div>
                </div>
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3 class="dash-card-title">Booking Summary</h3>
                    </div>
                    <p style="margin:0 0 10px 0; font-size:0.9rem;"><strong>Ref:</strong> #BKG-8992</p>
                    <p style="margin:0 0 10px 0; font-size:0.9rem;"><strong>Passengers:</strong> 2 Adults</p>
                    <p style="margin:0 0 10px 0; font-size:0.9rem;"><strong>Total Paid:</strong> $2,450.00</p>
                </div>
            </div>

            <div class="grid-3">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3 class="dash-card-title">Recent Activity</h3>
                    </div>
                    <ul style="list-style:none; padding:0; margin:0; font-size:0.9rem; color:var(--text-secondary);">
                        <li style="margin-bottom:15px;"><i class='bx bx-check-circle' style="color:var(--accent-green);"></i> Payment successful for Paris Tour</li>
                        <li style="margin-bottom:15px;"><i class='bx bx-heart' style="color:var(--accent-red);"></i> Saved "Swiss Alps Expedition"</li>
                        <li><i class='bx bx-user'></i> Updated profile picture</li>
                    </ul>
                </div>
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3 class="dash-card-title">Recommended</h3>
                    </div>
                    <div style="display:flex; gap:10px; align-items:center; margin-bottom:15px;">
                        <img src="assets/destination3.jpg" alt="Maldives" style="width:60px; height:60px; border-radius:10px; object-fit:cover;">
                        <div>
                            <strong style="font-size:0.9rem;">Maldives Escape</strong>
                            <p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Starts at $1,200</p>
                        </div>
                    </div>
                </div>
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3 class="dash-card-title">Travel Tips & Notifications</h3>
                    </div>
                    <p style="font-size:0.9rem; margin-bottom:10px;">💡 Pack light! The weather in Paris will be around 18°C.</p>
                    <p style="font-size:0.9rem;">🔔 Don't forget to upload your passport copy before Oct 1st.</p>
                </div>
            </div>
        </section>


        <!-- ==================== TAB 2: MY BOOKINGS ==================== -->
        <section id="tab-bookings" class="tab-pane">
            <div class="grid-3" style="margin-bottom: 20px;">
                <div class="dash-card">
                    <h3 class="dash-card-title" style="margin-bottom:15px;">Upcoming Bookings</h3>
                    <h2>1</h2>
                </div>
                <div class="dash-card">
                    <h3 class="dash-card-title" style="margin-bottom:15px;">Completed Trips</h3>
                    <h2>12</h2>
                </div>
                <div class="dash-card">
                    <h3 class="dash-card-title" style="margin-bottom:15px;">Cancelled Trips</h3>
                    <h2>1</h2>
                </div>
            </div>

            <div class="dash-card">
                <div class="dash-card-header">
                    <h3 class="dash-card-title">Booking Details</h3>
                </div>
                <div style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Destination</th>
                                <th>Dates</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#BKG-8992</td>
                                <td>Paris Romance Tour</td>
                                <td>Oct 12 - Oct 18, 2026</td>
                                <td><span class="badge badge-success">Confirmed</span></td>
                                <td style="display:flex; gap:10px;">
                                    <button class="btn-primary" style="padding:5px 15px; font-size:0.8rem;">View Booking</button>
                                    <button class="btn-outline" style="padding:5px 15px; font-size:0.8rem;">Download Ticket</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#BKG-7710</td>
                                <td>Dubai Desert Safari</td>
                                <td>Jan 05 - Jan 10, 2026</td>
                                <td><span class="badge badge-warning">Completed</span></td>
                                <td style="display:flex; gap:10px;">
                                    <button class="btn-outline" style="padding:5px 15px; font-size:0.8rem;">View Booking</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#BKG-6022</td>
                                <td>Bali Retreat</td>
                                <td>Aug 15 - Aug 20, 2025</td>
                                <td><span class="badge badge-danger">Cancelled</span></td>
                                <td style="display:flex; gap:10px;">
                                    <button class="btn-outline" style="padding:5px 15px; font-size:0.8rem;">View Booking</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>


        <!-- ==================== TAB 3: SAVED TOURS ==================== -->
        <section id="tab-saved" class="tab-pane">
            <h2 style="margin-top:0;">Saved Destinations</h2>
            <div class="grid-4">
                <!-- Card 1 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination1.jpg" alt="Kyoto" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Japan</div>
                        <h3>Kyoto Heritage</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$1,450</span>
                            <span>⭐ 4.9 (120)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 7 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination2.jpg" alt="Swiss Alps" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Switzerland</div>
                        <h3>Swiss Alps Expedition</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$2,100</span>
                            <span>⭐ 4.8 (85)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 5 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination3.jpg" alt="Maldives" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Maldives</div>
                        <h3>Maldives Escape</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$3,500</span>
                            <span>⭐ 5.0 (200)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 6 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination1.jpg" alt="Santorini" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Greece</div>
                        <h3>Santorini Sunsets</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$1,800</span>
                            <span>⭐ 4.7 (150)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 8 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 5 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination2.jpg" alt="Grand Canyon" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> USA</div>
                        <h3>Grand Canyon Trek</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$950</span>
                            <span>⭐ 4.6 (90)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 3 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 6 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination3.jpg" alt="Machu Picchu" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Peru</div>
                        <h3>Machu Picchu Hike</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$1,250</span>
                            <span>⭐ 4.9 (310)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 5 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 7 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination1.jpg" alt="Rome" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Italy</div>
                        <h3>Rome Ancient Tour</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$1,100</span>
                            <span>⭐ 4.8 (220)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 4 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <!-- Card 8 -->
                <div class="tour-card">
                    <div class="tour-save"><i class='bx bxs-heart'></i></div>
                    <img src="assets/destination2.jpg" alt="Cairo" class="tour-img">
                    <div class="tour-info">
                        <div class="tour-loc"><i class='bx bx-map'></i> Egypt</div>
                        <h3>Egypt Pyramids</h3>
                        <div class="tour-meta">
                            <span style="color:var(--primary);">$1,600</span>
                            <span>⭐ 4.7 (180)</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px;">Duration: 7 Days</div>
                        <div class="tour-actions">
                            <button class="btn-outline">View Details</button>
                            <button class="btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- ==================== TAB 4: PAYMENTS ==================== -->
        <section id="tab-payments" class="tab-pane">
            <div class="grid-2" style="margin-bottom:20px;">
                <div class="dash-card stat-card" style="background:var(--primary); color:white;">
                    <div class="stat-icon" style="background:rgba(255,255,255,0.2); color:white;"><i class='bx bx-check-circle'></i></div>
                    <div class="stat-info">
                        <h4 style="color:rgba(255,255,255,0.8);">Total Amount Paid</h4>
                        <h2 style="color:white;">$12,450.00</h2>
                    </div>
                </div>
                <div class="dash-card stat-card">
                    <div class="stat-icon" style="color:var(--accent-orange);"><i class='bx bx-time-five'></i></div>
                    <div class="stat-info">
                        <h4>Pending Amount</h4>
                        <h2>$500.00</h2>
                        <span class="badge badge-warning" style="margin-top:5px; display:inline-block;">Due Oct 1</span>
                    </div>
                </div>
            </div>

            <div class="grid-3" style="margin-bottom:20px;">
                <div class="dash-card">
                    <h3 class="dash-card-title" style="margin-bottom:15px;">Payment Methods</h3>
                    <div style="padding:15px; border:1px solid var(--border); border-radius:10px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <i class='bx bxl-visa' style="font-size:2rem; color:#1A1F71;"></i>
                            <strong>**** 4242</strong>
                        </div>
                        <span class="badge badge-success">Primary</span>
                    </div>
                    <div style="padding:15px; border:1px solid var(--border); border-radius:10px; display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <i class='bx bxl-mastercard' style="font-size:2rem; color:#EB001B;"></i>
                            <strong>**** 5555</strong>
                        </div>
                    </div>
                    <button class="btn-outline" style="width:100%; margin-top:15px;">+ Add New Method</button>
                </div>

                <div class="dash-card" style="grid-column: span 2;">
                    <div class="dash-card-header">
                        <h3 class="dash-card-title">Upcoming Payments</h3>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:15px; border-bottom:1px solid var(--border);">
                        <div>
                            <strong>Final Installment: Paris Tour</strong>
                            <p style="margin:5px 0 0 0; font-size:0.85rem; color:var(--text-secondary);">Due: Oct 1, 2026</p>
                        </div>
                        <div style="text-align:right;">
                            <strong style="display:block; font-size:1.2rem;">$500.00</strong>
                            <button class="btn-primary" style="padding:5px 15px; font-size:0.8rem; margin-top:5px;">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dash-card">
                <div class="dash-card-header">
                    <h3 class="dash-card-title">Payment History & Invoices</h3>
                </div>
                <div style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#INV-8992-1</td>
                                <td>Sep 01, 2026</td>
                                <td>Deposit: Paris Romance Tour</td>
                                <td>$1,950.00</td>
                                <td><span class="badge badge-success">Paid</span></td>
                                <td><button class="btn-outline" style="padding:5px 15px; font-size:0.8rem;">Download Invoice</button></td>
                            </tr>
                            <tr>
                                <td>#INV-7710-F</td>
                                <td>Dec 15, 2025</td>
                                <td>Full Payment: Dubai Safari</td>
                                <td>$850.00</td>
                                <td><span class="badge badge-success">Paid</span></td>
                                <td><button class="btn-outline" style="padding:5px 15px; font-size:0.8rem;">Download Invoice</button></td>
                            </tr>
                            <tr>
                                <td>#INV-6022-R</td>
                                <td>Jul 10, 2025</td>
                                <td>Refund: Bali Retreat</td>
                                <td>-$1,200.00</td>
                                <td><span class="badge badge-warning">Refunded</span></td>
                                <td><button class="btn-outline" style="padding:5px 15px; font-size:0.8rem;">Download Invoice</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>


        <!-- ==================== TAB 5: SETTINGS ==================== -->
        <section id="tab-settings" class="tab-pane">
            <div class="grid-2">
                
                <div class="dash-card">
                    <h3 class="dash-card-title" style="margin-bottom:20px;">Profile Settings</h3>
                    <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                        <img src="https://ui-avatars.com/api/?name=John+Doe&background=4318ff&color=fff" alt="Profile" style="width:80px; height:80px; border-radius:50%;">
                        <button class="btn-outline">Change Avatar</button>
                    </div>
                    <form>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" value="John Doe">
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" value="john.doe@example.com">
                        </div>
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="tel" value="+1 (555) 123-4567">
                        </div>
                        <div class="form-group">
                            <label>Home Address</label>
                            <input type="text" value="123 Travel Lane, Explorer City">
                        </div>
                        <button type="button" class="btn-primary" style="width:100%; margin-top:10px;">Save Profile</button>
                    </form>
                </div>

                <div style="display:flex; flex-direction:column; gap:20px;">
                    <div class="dash-card">
                        <h3 class="dash-card-title" style="margin-bottom:20px;">Security</h3>
                        <form>
                            <div class="form-group">
                                <label>Change Password</label>
                                <input type="password" placeholder="Enter new password">
                            </div>
                            <button type="button" class="btn-outline" style="margin-bottom:20px;">Update Password</button>
                        </form>
                        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:20px; border-top:1px solid var(--border);">
                            <div>
                                <strong>Two-Factor Authentication</strong>
                                <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Add an extra layer of security.</p>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>

                    <div class="dash-card">
                        <h3 class="dash-card-title" style="margin-bottom:20px;">Preferences</h3>
                        <div class="grid-2">
                            <div class="form-group">
                                <label>Currency</label>
                                <select>
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Language</label>
                                <select>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>
                        </div>
                        
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                            <strong>Email Notifications</strong>
                            <label class="toggle-switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong>Dark Mode</strong>
                            <label class="toggle-switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>

                    <div class="dash-card" style="border: 1px solid var(--accent-red);">
                        <h3 class="dash-card-title" style="margin-bottom:15px; color:var(--accent-red);">Account Actions</h3>
                        <p style="font-size:0.9rem; margin-bottom:20px;">Once you delete your account, there is no going back. Please be certain.</p>
                        <div style="display:flex; gap:10px;">
                            <button class="btn-primary" style="background:var(--accent-red);">Delete Account</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </main>

</div>

<script src="dashboard_app.js"></script>
</body>
</html>
`;

fs.writeFileSync('dashboard.html', html);
console.log("dashboard.html successfully generated!");
