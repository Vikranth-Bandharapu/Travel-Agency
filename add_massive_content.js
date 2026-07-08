const fs = require('fs');

// --- Helper Functions to Generate Massive Content ---
const generateBookingRows = (count, type = 'user') => {
    const destinations = ['Paris Romance', 'Kyoto Sakura', 'Swiss Alps', 'Dubai Safari', 'Bali Retreat', 'New York Getaway', 'Rome Ancient Tour', 'African Safari', 'London Explorer', 'Machu Picchu Hike', 'Taj Mahal Tour', 'Santorini Sunset', 'Maldives Escape'];
    const statuses = ['Upcoming', 'Completed', 'Cancelled'];
    let html = '';
    
    for (let i = 0; i < count; i++) {
        const id = Math.floor(Math.random() * 9000) + 1000;
        const dest = destinations[Math.floor(Math.random() * destinations.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const imgIndex = (i % 3) + 1;
        
        let statusBadge = '';
        if(status === 'Upcoming') statusBadge = '<span class="badge badge-success">Upcoming</span>';
        else if(status === 'Completed') statusBadge = '<span class="badge badge-warning">Completed</span>';
        else statusBadge = '<span class="badge badge-success" style="color:var(--text-secondary); background:#e2e8f0;">Cancelled</span>';

        if (type === 'user') {
            html += `
                <tr>
                    <td><strong>#BKG-${id}</strong></td>
                    <td>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src="assets/destination${imgIndex}.jpg" style="width:30px; height:30px; border-radius:5px; object-fit:cover;">
                            ${dest}
                        </div>
                    </td>
                    <td>Oct 12 - Oct 18, 2026</td>
                    <td>${statusBadge}</td>
                    <td><button class="dash-btn dash-btn-outline" style="padding:5px 15px; font-size:0.8rem;">View Details</button></td>
                </tr>`;
        } else {
            const names = ['Alex Carter', 'Sarah Lee', 'John Doe', 'Emma Stone', 'Michael Smith', 'Emily Davis', 'Chris Evans'];
            const name = names[Math.floor(Math.random() * names.length)];
            let agentBadge = '';
            if(status === 'Upcoming') agentBadge = '<span class="badge badge-warning">Pending</span>';
            else if(status === 'Completed') agentBadge = '<span class="badge badge-success">Confirmed</span>';
            else agentBadge = '<span class="badge badge-success" style="background:#e2e8f0; color:#64748b;">Cancelled</span>';
            
            html += `
                <tr>
                    <td><strong>#BKG-${id}</strong></td>
                    <td>${name}</td>
                    <td>${dest}</td>
                    <td>Oct 12, 2026</td>
                    <td>${agentBadge}</td>
                    <td>
                        <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem;">Review</button>
                        <button class="dash-btn dash-btn-primary" style="padding:5px 10px; font-size:0.8rem;">Action</button>
                    </td>
                </tr>`;
        }
    }
    return html;
};

const generateSavedCards = (count) => {
    const destinations = [
        {name: 'Maldives Escape', price: '$3,200', days: '6 Days'},
        {name: 'Swiss Alps', price: '$2,100', days: '5 Days'},
        {name: 'Kyoto Heritage', price: '$2,800', days: '10 Days'},
        {name: 'Santorini Sunset', price: '$1,850', days: '8 Days'},
        {name: 'London Explorer', price: '$1,450', days: '5 Days'},
        {name: 'Machu Picchu', price: '$2,300', days: '7 Days'},
        {name: 'Taj Mahal', price: '$1,100', days: '4 Days'},
        {name: 'African Safari', price: '$4,500', days: '12 Days'}
    ];
    let html = '';
    for (let i = 0; i < count; i++) {
        const dest = destinations[i % destinations.length];
        const imgIndex = (i % 3) + 1;
        const filters = ['hue-rotate(45deg)', 'sepia(0.3)', 'grayscale(0.2)', 'invert(0.1)', 'brightness(0.8)', 'saturate(1.5)', 'contrast(1.2)', 'none'];
        const filter = filters[i % filters.length];
        html += `
            <div class="dash-card" style="padding:0;">
                <img src="assets/destination${imgIndex}.jpg" style="width:100%; height:160px; object-fit:cover; filter:${filter};">
                <div style="padding:20px;">
                    <h3 style="margin:0 0 10px 0;">${dest.name}</h3>
                    <p style="margin:0 0 15px 0; color:var(--accent-blue); font-weight:700;">${dest.price} <span style="color:var(--text-secondary); font-weight:400;">/ ${dest.days}</span></p>
                    <div class="flex-between">
                        <button class="dash-btn dash-btn-outline" style="padding:8px 15px;">Details</button>
                        <button class="dash-btn dash-btn-primary" style="padding:8px 15px;">Book Now</button>
                    </div>
                </div>
            </div>`;
    }
    return html;
};

const generateTransactions = (count) => {
    const desc = ['Deposit: Paris Romance', 'Full Payment: Dubai Safari', 'Refund: Bali Retreat', 'Installment: New York', 'Upgrade: First Class Flight', 'Excursion: Desert Safari'];
    let html = '';
    for(let i=0; i<count; i++) {
        const d = desc[Math.floor(Math.random() * desc.length)];
        const amount = Math.floor(Math.random() * 2000) + 100;
        const id = Math.floor(Math.random() * 9000) + 1000;
        let badge = '<span class="badge badge-success">Success</span>';
        if(d.includes('Refund')) badge = '<span class="badge badge-warning" style="background:#fef08a; color:#a16207;">Refunded</span>';
        
        html += `
            <tr>
                <td>Sep 12, 2026</td>
                <td>${d}</td>
                <td><span style="color:var(--text-secondary);">INV-${id}</span></td>
                <td><strong>$${amount}.00</strong></td>
                <td>${badge}</td>
                <td><button class="dash-btn dash-btn-outline" style="padding:4px 10px; font-size:0.8rem;"><i class='bx bx-download'></i> PDF</button></td>
            </tr>`;
    }
    return html;
};

const generateCustomers = (count) => {
    const names = ['Alex Carter', 'Sarah Lee', 'John Doe', 'Emma Stone', 'Michael Smith', 'Emily Davis', 'Chris Evans', 'Jessica Alba', 'Tom Hardy', 'Megan Fox'];
    let html = '';
    for(let i=0; i<count; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const points = Math.floor(Math.random() * 5000);
        const b = Math.floor(Math.random() * 20) + 1;
        const status = points > 3000 ? '<span class="badge badge-success">Premium</span>' : '<span class="badge badge-success" style="background:#e0f2fe; color:#0284c7;">Standard</span>';
        html += `
            <tr>
                <td>${name}</td><td>${name.split(' ')[0].toLowerCase()}@example.com</td><td>${b}</td><td>${points}</td>
                <td>${status}</td>
                <td>
                    <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem;">Profile</button>
                    <button class="dash-btn dash-btn-primary" style="padding:5px 10px; font-size:0.8rem;">Contact</button>
                </td>
            </tr>`;
    }
    return html;
};

const generateActivity = (count) => {
    const acts = ['Payment Successful for $1500', 'Visa Uploaded for Schengen', 'Points Earned +450', 'New Booking: Bali Retreat', 'Profile Updated', 'Password Changed', 'Inquiry sent for Japan Tour', 'Newsletter subscribed'];
    const icons = ['bx-dollar', 'bx-file', 'bx-star', 'bx-briefcase', 'bx-user', 'bx-lock', 'bx-envelope', 'bx-news'];
    const colors = ['var(--accent-green)', 'var(--accent-blue)', 'var(--accent-orange)', 'var(--text-primary)', 'var(--accent-red)', 'var(--text-secondary)', 'var(--accent-green)', 'var(--accent-blue)'];
    let html = '';
    for(let i=0; i<count; i++) {
        const idx = Math.floor(Math.random() * acts.length);
        html += `
            <div class="small-metric">
                <div class="small-metric-icon" style="background:${colors[idx]};"><i class='bx ${icons[idx]}'></i></div>
                <div>
                    <h4 style="margin:0;">${acts[idx]}</h4>
                    <span style="font-size:0.75rem; color:#cbd5e1;">${Math.floor(Math.random()*24)+1} hours ago</span>
                </div>
            </div>`;
    }
    return html;
}


// --- USER HTML ---
const userHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Dashboard - Aura Travel</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="dashboard_v5.css">
    <style>
        /* Extra scrollbar styling for massive lists to keep cards neat */
        .scrollable-list { max-height: 400px; overflow-y: auto; padding-right: 10px; }
        .scrollable-list::-webkit-scrollbar { width: 6px; }
        .scrollable-list::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    </style>
</head>
<body>
<div class="sidebar-overlay" id="sidebarOverlay"></div>
<div class="main-wrapper">
    <aside class="dash-sidebar" id="sidebar">
        <div class="dash-logo"><img src="assets/logo.webp" alt="Aura Travel"></div>
        <div class="dash-nav">
            <div class="dash-nav-label">Main Menu</div>
            <a class="dash-nav-item active" data-target="tab-dashboard"><i class='bx bx-home-alt'></i> Dashboard</a>
            <a class="dash-nav-item" data-target="tab-bookings"><i class='bx bx-briefcase'></i> My Bookings</a>
            <a class="dash-nav-item" data-target="tab-saved"><i class='bx bx-heart'></i> Saved Tours</a>
            <a class="dash-nav-item" data-target="tab-payments"><i class='bx bx-credit-card'></i> Payments</a>
            <a class="dash-nav-item" data-target="tab-settings"><i class='bx bx-cog'></i> Settings</a>
        </div>
        <div class="dash-sidebar-footer"><a href="index.html" class="logout-btn"><i class='bx bx-log-out'></i> Logout</a></div>
    </aside>

    <main class="dash-main">
        <header class="dash-topbar">
            <div class="dash-topbar-left">
                <i class='bx bx-menu mobile-toggle' id="mobileMenuBtn"></i>
                <div class="mobile-logo"><img src="assets/logo.webp" alt="Logo"></div>
                <div><h2 id="pageTitle">Dashboard</h2><p id="pageSubtitle">Welcome back, John Doe!</p></div>
            </div>
            <div class="dash-topbar-right">
                <div class="dash-topbar-user"><h4>John Doe</h4><p>Premium Member</p></div>
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=4318ff&color=fff" alt="User">
            </div>
        </header>

        <div class="dash-content">
            
            <!-- TAB 1: DASHBOARD -->
            <div id="tab-dashboard" class="tab-pane active">
                <div class="dash-grid-4">
                    <div class="dash-card stat-widget"><div class="stat-icon blue"><i class='bx bx-briefcase'></i></div><div class="stat-info"><h4>Total Trips</h4><h2>34</h2></div></div>
                    <div class="dash-card stat-widget"><div class="stat-icon green"><i class='bx bx-check-shield'></i></div><div class="stat-info"><h4>Upcoming</h4><h2>3</h2></div></div>
                    <div class="dash-card stat-widget"><div class="stat-icon orange"><i class='bx bx-star'></i></div><div class="stat-info"><h4>Loyalty Points</h4><h2>12,450</h2></div></div>
                    <div class="dash-card stat-widget"><div class="stat-icon red"><i class='bx bx-heart'></i></div><div class="stat-info"><h4>Saved Tours</h4><h2>56</h2></div></div>
                </div>

                <div class="dash-grid-2">
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Next Upcoming Trips</h3>
                        </div>
                        <div class="scrollable-list">
                            ${generateBookingRows(5, 'user').replace(/<tr>/g, '<div style="margin-bottom:15px; border-bottom:1px solid #e2e8f0; padding-bottom:15px;">').replace(/<\/tr>/g, '</div>').replace(/<td>/g, '<div>').replace(/<\/td>/g, '</div>')}
                        </div>
                    </div>

                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Recent Activity Stream</h3>
                        </div>
                        <div class="scrollable-list" style="display:flex; flex-direction:column; gap:15px;">
                            ${generateActivity(12)}
                        </div>
                    </div>
                </div>
                
                <h3 style="margin: 30px 0 20px 0;">Massive Recommendations (Just For You)</h3>
                <div class="dash-grid-4">
                    ${generateSavedCards(12)}
                </div>
            </div>

            <!-- TAB 2: MY BOOKINGS -->
            <div id="tab-bookings" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Active & Upcoming Bookings</h3>
                        <button class="dash-btn dash-btn-outline"><i class='bx bx-download'></i> Download E-Tickets</button>
                    </div>
                    <div class="table-responsive" style="max-height: 400px; overflow-y: auto;">
                        <table class="dash-table">
                            <thead><tr><th>Booking Ref</th><th>Package</th><th>Travel Dates</th><th>Status</th><th>Action</th></tr></thead>
                            <tbody>
                                ${generateBookingRows(15, 'user')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="dash-card" style="margin-top: 25px;">
                    <div class="dash-card-header">
                        <h3>Massive Booking History (Past 5 Years)</h3>
                    </div>
                    <div class="table-responsive" style="max-height: 500px; overflow-y: auto;">
                        <table class="dash-table">
                            <thead><tr><th>Booking Ref</th><th>Package</th><th>Travel Dates</th><th>Status</th><th>Action</th></tr></thead>
                            <tbody>
                                ${generateBookingRows(40, 'user').replace(/badge-success/g, 'badge-warning').replace(/Upcoming/g, 'Completed')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- TAB 3: SAVED TOURS -->
            <div id="tab-saved" class="tab-pane">
                <div class="dash-card-header flex-between" style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                    <h3 style="margin:0;">Your Massive Wishlist (56 Tours)</h3>
                    <div class="dash-form" style="margin:0;">
                        <input type="text" placeholder="Search saved tours..." style="max-width:300px; margin:0;">
                    </div>
                </div>
                <div class="dash-grid-4">
                    ${generateSavedCards(40)}
                </div>
            </div>

            <!-- TAB 4: PAYMENTS -->
            <div id="tab-payments" class="tab-pane">
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <div class="card-header"><h3 style="margin-top:0;">Payment Summary</h3></div>
                        <div class="dash-grid-2" style="margin:0;">
                            <div class="small-metric" style="border:1px solid #e2e8f0; margin-bottom:10px;">
                                <div class="small-metric-icon" style="background:var(--accent-blue);"><i class='bx bx-wallet'></i></div>
                                <div><h4 style="margin:0;">Total Paid</h4><p style="margin:0; font-size:1.2rem; font-weight:700;">$45,450.00</p></div>
                            </div>
                            <div class="small-metric" style="border:1px solid #e2e8f0; margin-bottom:10px;">
                                <div class="small-metric-icon" style="background:var(--accent-orange);"><i class='bx bx-time'></i></div>
                                <div><h4 style="margin:0;">Pending</h4><p style="margin:0; font-size:1.2rem; font-weight:700;">$1,500.00</p></div>
                            </div>
                            <div class="small-metric" style="border:1px solid #e2e8f0; margin-bottom:10px;">
                                <div class="small-metric-icon" style="background:var(--accent-green);"><i class='bx bx-check'></i></div>
                                <div><h4 style="margin:0;">Refunded</h4><p style="margin:0; font-size:1.2rem; font-weight:700;">$800.00</p></div>
                            </div>
                            <div class="small-metric" style="border:1px solid #e2e8f0; margin-bottom:10px;">
                                <div class="small-metric-icon" style="background:var(--accent-red);"><i class='bx bx-gift'></i></div>
                                <div><h4 style="margin:0;">Credits</h4><p style="margin:0; font-size:1.2rem; font-weight:700;">$200.00</p></div>
                            </div>
                        </div>
                        <div style="margin-top:20px;">
                            <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:5px;">Next Payment Due: <strong>Oct 01, 2026</strong></p>
                            <button class="dash-btn dash-btn-primary" style="width:100%;">Pay Installment ($500)</button>
                        </div>
                    </div>
                    
                    <div class="dash-card">
                        <div class="card-header"><h3 style="margin-top:0;">Linked Payment Methods</h3></div>
                        <div class="scrollable-list" style="max-height: 250px;">
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
                            <div style="padding:15px; border:1px solid #e2e8f0; border-radius:12px; margin-bottom:10px; display:flex; align-items:center; gap:15px;">
                                <i class='bx bxl-paypal' style="font-size:2rem; color:#003087;"></i>
                                <div style="flex:1;">
                                    <strong style="display:block;">PayPal Account</strong>
                                    <span style="font-size:0.8rem; color:var(--text-secondary);">john@example.com</span>
                                </div>
                            </div>
                            <div style="padding:15px; border:1px solid #e2e8f0; border-radius:12px; margin-bottom:10px; display:flex; align-items:center; gap:15px;">
                                <i class='bx bxl-apple' style="font-size:2rem; color:#000;"></i>
                                <div style="flex:1;">
                                    <strong style="display:block;">Apple Pay</strong>
                                    <span style="font-size:0.8rem; color:var(--text-secondary);">Linked to iPhone</span>
                                </div>
                            </div>
                        </div>
                        <button class="dash-btn dash-btn-outline" style="width:100%; margin-top:10px;">+ Add New Method</button>
                    </div>
                </div>
                
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Massive Transaction History</h3>
                        <button class="dash-btn dash-btn-outline" style="padding:5px 15px;"><i class='bx bx-filter'></i> Filter</button>
                    </div>
                    <div class="table-responsive" style="max-height: 500px; overflow-y: auto;">
                        <table class="dash-table">
                            <thead><tr><th>Date</th><th>Description</th><th>Invoice #</th><th>Amount</th><th>Status</th><th>Receipt</th></tr></thead>
                            <tbody>
                                ${generateTransactions(50)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- TAB 5: SETTINGS -->
            <div id="tab-settings" class="tab-pane">
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <h3 style="margin-top:0; margin-bottom:20px;">Comprehensive Profile Settings</h3>
                        <form class="dash-form">
                            <div class="dash-form-group"><label>First Name</label><input type="text" value="John"></div>
                            <div class="dash-form-group"><label>Last Name</label><input type="text" value="Doe"></div>
                            <div class="dash-form-group"><label>Email Address</label><input type="email" value="john@example.com"></div>
                            <div class="dash-form-group"><label>Phone Number</label><input type="tel" value="+1 234 567 8900"></div>
                            <div class="dash-form-group"><label>Date of Birth</label><input type="date" value="1990-05-15"></div>
                            <div class="dash-form-group"><label>Passport Number</label><input type="text" value="A123456789"></div>
                            <div class="dash-form-group full"><label>Home Address</label><input type="text" value="123 Travel Lane, Explorer City, NY 10001"></div>
                            <div class="dash-form-group"><label>City</label><input type="text" value="New York"></div>
                            <div class="dash-form-group"><label>Zip Code</label><input type="text" value="10001"></div>
                            <div class="dash-form-group full"><label>Bio / Travel Preferences</label><textarea style="padding:12px 15px; border:1px solid #e2e8f0; border-radius:12px; font-family:inherit; outline:none; resize:vertical; min-height:80px;">Love historical sites and luxury resorts. Prefer direct flights when possible.</textarea></div>
                            <div class="dash-form-group full"><button type="button" class="dash-btn dash-btn-primary">Save All Changes</button></div>
                        </form>
                    </div>
                    
                    <div style="display:flex; flex-direction:column; gap:20px;">
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">Security & Preferences</h3>
                            <form class="dash-form">
                                <div class="dash-form-group full"><label>Current Password</label><input type="password" placeholder="Enter current password"></div>
                                <div class="dash-form-group full"><label>New Password</label><input type="password" placeholder="Enter new password"></div>
                                <div class="dash-form-group"><label>Currency</label><select><option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option></select></div>
                                <div class="dash-form-group"><label>Language</label><select><option>English</option><option>Spanish</option><option>French</option></select></div>
                                <div class="dash-form-group full"><button type="button" class="dash-btn dash-btn-outline">Update Settings</button></div>
                            </form>
                        </div>
                        
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">Connected Social Accounts</h3>
                            <div class="flex-between" style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #e2e8f0;">
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <i class='bx bxl-google' style="font-size:1.5rem; color:#DB4437;"></i>
                                    <strong>Google</strong>
                                </div>
                                <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem; color:var(--text-secondary); border-color:#e2e8f0;">Disconnect</button>
                            </div>
                            <div class="flex-between" style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #e2e8f0;">
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <i class='bx bxl-facebook-circle' style="font-size:1.5rem; color:#4267B2;"></i>
                                    <strong>Facebook</strong>
                                </div>
                                <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem;">Connect</button>
                            </div>
                            <div class="flex-between">
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <i class='bx bxl-apple' style="font-size:1.5rem; color:#000;"></i>
                                    <strong>Apple</strong>
                                </div>
                                <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem;">Connect</button>
                            </div>
                        </div>
                        
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">Notification Settings</h3>
                            <div class="flex-between" style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #e2e8f0;"><div><strong>Email Alerts</strong><p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Receive booking updates</p></div><input type="checkbox" checked style="width:20px; height:20px;"></div>
                            <div class="flex-between" style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #e2e8f0;"><div><strong>SMS Notifications</strong><p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Get flight delays</p></div><input type="checkbox" checked style="width:20px; height:20px;"></div>
                            <div class="flex-between"><div><strong>Marketing Offers</strong><p style="margin:0; font-size:0.8rem; color:var(--text-secondary);">Exclusive deals</p></div><input type="checkbox" style="width:20px; height:20px;"></div>
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
    if(mobileBtn) { mobileBtn.addEventListener('click', () => { sidebar.classList.add('active'); overlay.classList.add('active'); }); }
    if(overlay) { overlay.addEventListener('click', () => { sidebar.classList.remove('active'); overlay.classList.remove('active'); }); }

    const tabs = document.querySelectorAll('.dash-nav-item');
    const panes = document.querySelectorAll('.tab-pane');
    const pageTitle = document.getElementById('pageTitle');
    const titles = { 'tab-dashboard': 'Dashboard', 'tab-bookings': 'My Bookings', 'tab-saved': 'Saved Tours', 'tab-payments': 'Payments', 'tab-settings': 'Account Settings' };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
            if(pageTitle && titles[target]) { pageTitle.textContent = titles[target]; }
            if(window.innerWidth <= 992) { sidebar.classList.remove('active'); overlay.classList.remove('active'); }
        });
    });
});
</script>
</body>
</html>`;

const agentHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agent Dashboard - Aura Travel</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="dashboard_v5.css">
    <style>
        .scrollable-list { max-height: 400px; overflow-y: auto; padding-right: 10px; }
        .scrollable-list::-webkit-scrollbar { width: 6px; }
        .scrollable-list::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    </style>
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
                    <div class="dash-card stat-widget"><div class="stat-icon blue"><i class='bx bx-dollar-circle'></i></div><div class="stat-info"><h4>Total Revenue</h4><h2>$4.8M</h2></div></div>
                    <div class="dash-card stat-widget"><div class="stat-icon green"><i class='bx bx-cart'></i></div><div class="stat-info"><h4>Monthly Sales</h4><h2>$845K</h2></div></div>
                    <div class="dash-card stat-widget"><div class="stat-icon orange"><i class='bx bx-calendar-check'></i></div><div class="stat-info"><h4>Total Bookings</h4><h2>14,592</h2></div></div>
                    <div class="dash-card stat-widget"><div class="stat-icon red"><i class='bx bx-group'></i></div><div class="stat-info"><h4>New Users</h4><h2>+1,428</h2></div></div>
                </div>
                
                <div class="dash-grid-2">
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Massive Pending Approvals Queue</h3>
                            <span class="badge badge-warning">48 Pending</span>
                        </div>
                        <div class="scrollable-list" style="display:flex; flex-direction:column; gap:15px;">
                            ${generateBookingRows(15, 'agent').replace(/<tr>/g, '<div class="flex-between" style="border-bottom:1px solid #e2e8f0; padding-bottom:10px;">').replace(/<\/tr>/g, '</div>').replace(/<td>/g, '<div>').replace(/<\/td>/g, '</div>').replace(/<button class="dash-btn dash-btn-outline".*?<\/button>/g, '')}
                        </div>
                    </div>
                    
                    <div style="display:flex; flex-direction:column; gap:20px;">
                        <div class="dash-card">
                            <div class="dash-card-header">
                                <h3>Performance Analytics</h3>
                            </div>
                            <div class="circle-progress-wrapper">
                                <div class="circle-progress-item"><div class="circle-progress circle-blue" style="--p:85%;"><span>85%</span></div><p style="margin:10px 0 0 0; font-size:0.9rem; font-weight:500;">Conversion</p></div>
                                <div class="circle-progress-item"><div class="circle-progress circle-green" style="--p:92%;"><span>92%</span></div><p style="margin:10px 0 0 0; font-size:0.9rem; font-weight:500;">Satisfaction</p></div>
                                <div class="circle-progress-item"><div class="circle-progress circle-orange" style="--p:65%;"><span>65%</span></div><p style="margin:10px 0 0 0; font-size:0.9rem; font-weight:500;">Growth</p></div>
                            </div>
                        </div>
                        <div class="dash-card">
                            <div class="dash-card-header">
                                <h3>Agency Live Feed</h3>
                            </div>
                            <div class="scrollable-list" style="max-height: 200px; display:flex; flex-direction:column; gap:10px;">
                                ${generateActivity(20)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="tab-bookings" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Manage Massive Bookings Database (14,592 Records)</h3>
                        <div class="dash-form"><input type="text" placeholder="Search booking ID..." style="max-width:300px;"></div>
                    </div>
                    <div class="table-responsive" style="max-height: 600px; overflow-y: auto;">
                        <table class="dash-table">
                            <thead><tr><th>ID</th><th>Customer</th><th>Package</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
                            <tbody>
                                ${generateBookingRows(80, 'agent')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div id="tab-customers" class="tab-pane">
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Massive Customer Directory (8,421 Users)</h3>
                        <div class="dash-form"><input type="text" placeholder="Search customers..." style="max-width:300px;"></div>
                    </div>
                    <div class="table-responsive" style="max-height: 600px; overflow-y: auto;">
                        <table class="dash-table">
                            <thead><tr><th>Name</th><th>Email</th><th>Total Bookings</th><th>Loyalty Points</th><th>Status</th><th>Actions</th></tr></thead>
                            <tbody>
                                ${generateCustomers(60)}
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
                            <div class="dash-form-group"><label>Agency Name</label><input type="text" value="Aura Travel Agency"></div>
                            <div class="dash-form-group"><label>Registration ID</label><input type="text" value="REG-991823-NY"></div>
                            <div class="dash-form-group full"><label>Support Email</label><input type="email" value="support@auratravel.com"></div>
                            <div class="dash-form-group full"><label>Business Address</label><input type="text" value="789 Agency Blvd, Suite 100, NY 10001"></div>
                            <div class="dash-form-group"><label>Tax ID / VAT</label><input type="text" value="US123456789"></div>
                            <div class="dash-form-group"><label>Support Phone</label><input type="text" value="+1 800 555 1234"></div>
                            <div class="dash-form-group full"><button type="button" class="dash-btn dash-btn-primary">Update Profile</button></div>
                        </form>
                    </div>
                    
                    <div style="display:flex; flex-direction:column; gap:20px;">
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">System Preferences</h3>
                            <form class="dash-form">
                                <div class="dash-form-group full"><label>Platform Fee (%)</label><input type="number" value="15"></div>
                                <div class="dash-form-group"><label>Default Currency</label><select><option>USD ($)</option><option>EUR (€)</option></select></div>
                                <div class="dash-form-group"><label>Timezone</label><select><option>EST (UTC-5)</option><option>PST (UTC-8)</option></select></div>
                                <div class="dash-form-group full"><button type="button" class="dash-btn dash-btn-outline">Save Preferences</button></div>
                            </form>
                        </div>
                        <div class="dash-card">
                            <h3 style="margin-top:0; margin-bottom:20px;">SMTP Configuration</h3>
                            <form class="dash-form">
                                <div class="dash-form-group full"><label>SMTP Server</label><input type="text" value="smtp.mailgun.org"></div>
                                <div class="dash-form-group"><label>Port</label><input type="number" value="587"></div>
                                <div class="dash-form-group"><label>Security</label><select><option>TLS</option><option>SSL</option></select></div>
                                <div class="dash-form-group full"><label>Username</label><input type="text" value="postmaster@auratravel.com"></div>
                                <div class="dash-form-group full"><button type="button" class="dash-btn dash-btn-outline">Test Connection</button></div>
                            </form>
                        </div>
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

fs.writeFileSync('dashboard.html', userHtml);
fs.writeFileSync('agent_dashboard.html', agentHtml);
console.log("Massive amounts of content successfully injected without breaking the layout!");
