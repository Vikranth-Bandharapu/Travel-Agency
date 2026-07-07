const fs = require('fs');
let html = fs.readFileSync('agent_dashboard.html', 'utf8');
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
                                    <p style="margin-bottom: 5px; color: #666; font-style: italic;">"I am looking for a family tour in Japan this December..."</p>
                                    <span style="font-size: 0.8rem; color: #999;"><i class='bx bx-time'></i> 2 hours ago</span>
                                </div>
                            </div>
                            <div class="booking-item" style="align-items: flex-start;">
                                <img src="https://ui-avatars.com/api/?name=Michael+T&background=random" style="border-radius: 50%;">
                                <div class="booking-info">
                                    <h4>Michael Torres</h4>
                                    <p style="margin-bottom: 5px; color: #666; font-style: italic;">"Can we upgrade our Maldives resort to a water villa?"</p>
                                    <span style="font-size: 0.8rem; color: #999;"><i class='bx bx-time'></i> 5 hours ago</span>
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
                                    <h4>Santorini Premium Escape</h4>
                                    <p style="color: #666;">42 Bookings this month</p>
                                </div>
                                <div style="color: var(--color-emerald); font-weight: 600; font-size: 1.1rem;"><i class='bx bx-trending-up'></i> 12%</div>
                            </div>
                            <div class="booking-item">
                                <img src="assets/opt_img_13.webp" alt="Venice">
                                <div class="booking-info">
                                    <h4>Magical Venice & Rome</h4>
                                    <p style="color: #666;">28 Bookings this month</p>
                                </div>
                                <div style="color: var(--color-emerald); font-weight: 600; font-size: 1.1rem;"><i class='bx bx-trending-up'></i> 5%</div>
                            </div>
                        </div>
                    </div>
                </div>
`;
if (!html.includes('Recent Client Inquiries')) {
    html = html.replace('<!-- TAB 2: MANAGE BOOKINGS -->', agentContent + '\n\n            <!-- TAB 2: MANAGE BOOKINGS -->');
    fs.writeFileSync('agent_dashboard.html', html, 'utf8');
    console.log('Injected agent content successfully');
}
