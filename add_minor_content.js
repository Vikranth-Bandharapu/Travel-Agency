const fs = require('fs');

try {
    let dash = fs.readFileSync('dashboard.html', 'utf8');

    // 1. Add to My Bookings
    const extraBooking = `
                              <!-- Additional Booking -->
                              <div style="border: 1px solid #eee; border-radius: 8px; padding: 20px; display: flex; gap: 20px; align-items: center; position: relative;">
                                  <span class="badge badge-success" style="position: absolute; top: 20px; right: 20px;">Completed</span>
                                  <img src="assets/opt_img_2.webp" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px;">
                                  <div style="flex: 1;">
                                      <h4 style="margin: 0 0 5px 0;">Maldives Island Escape</h4>
                                      <p style="color: #666; font-size: 0.9rem; margin: 0 0 10px 0;"><i class='bx bx-calendar'></i> Mar 10 - Mar 17, 2024 • 2 Travelers</p>
                                      <div style="display: flex; gap: 10px;">
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Leave a Review</button>
                                      </div>
                                  </div>
                              </div>
`;
    // Insert before the closing div of the dash-card in My Bookings
    if (dash.includes('Cancel Booking</button>')) {
        dash = dash.replace(/(<button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Cancel Booking<\/button>\s*<\/div>\s*<\/div>\s*<\/div>)/, '$1\n' + extraBooking);
    }

    // 2. Add to Saved Tours
    const extraSavedTours = `
                          <div class="dash-card" style="padding: 0; overflow: hidden;">
                              <img src="assets/opt_img_29.webp" style="width: 100%; height: 150px; object-fit: cover;">
                              <div style="padding: 15px;">
                                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                      <h4 style="margin: 0;">Dubai City Tour</h4>
                                      <span style="color: var(--color-accent); font-weight: bold;">$600</span>
                                  </div>
                                  <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;"><i class='bx bx-map'></i> United Arab Emirates</p>
                                  <div style="display: flex; gap: 10px;">
                                      <button class="dash-btn dash-btn-primary" style="flex: 1; padding: 8px;" onclick="window.location.href='404.html'">Book</button>
                                      <button class="dash-btn dash-btn-outline" style="padding: 8px;" onclick="window.location.href='404.html'"><i class='bx bxs-heart' style="color: #e2574c;"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div class="dash-card" style="padding: 0; overflow: hidden;">
                              <img src="assets/opt_img_16.webp" style="width: 100%; height: 150px; object-fit: cover;">
                              <div style="padding: 15px;">
                                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                      <h4 style="margin: 0;">Cape Town Safari</h4>
                                      <span style="color: var(--color-accent); font-weight: bold;">$2,100</span>
                                  </div>
                                  <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;"><i class='bx bx-map'></i> South Africa</p>
                                  <div style="display: flex; gap: 10px;">
                                      <button class="dash-btn dash-btn-primary" style="flex: 1; padding: 8px;" onclick="window.location.href='404.html'">Book</button>
                                      <button class="dash-btn dash-btn-outline" style="padding: 8px;" onclick="window.location.href='404.html'"><i class='bx bxs-heart' style="color: #e2574c;"></i></button>
                                  </div>
                              </div>
                          </div>
`;
    if (dash.includes('<h4>Bali Villa Upgrade</h4>')) {
        dash = dash.replace(/(<button class="dash-btn dash-btn-outline" style="padding: 8px;" onclick="window.location.href='404.html'"><i class='bx bxs-heart' style="color: #e2574c;"><\/i><\/button>\s*<\/div>\s*<\/div>\s*<\/div>)/, '$1\n' + extraSavedTours);
    }

    // 3. Add to Payments
    const extraPayments = `
                                  <tr>
                                      <td>Nov 05, 2025</td>
                                      <td>Swiss Alps Ski Trip</td>
                                      <td>Final Payment</td>
                                      <td>$1,500.00</td>
                                      <td><span class="badge badge-success">Paid</span></td>
                                      <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Receipt</button></td>
                                  </tr>
                                  <tr>
                                      <td>Aug 12, 2025</td>
                                      <td>Kyoto Autumn Tour</td>
                                      <td>Deposit</td>
                                      <td>$800.00</td>
                                      <td><span class="badge badge-success">Paid</span></td>
                                      <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Receipt</button></td>
                                  </tr>
`;
    if (dash.includes('<td>Deposit</td>')) {
        dash = dash.replace(/(<td><button class="dash-btn dash-btn-primary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Pay Now<\/button><\/td>\s*<\/tr>)/, '$1\n' + extraPayments);
    }

    fs.writeFileSync('dashboard.html', dash);

    // AGENT DASHBOARD
    let agent = fs.readFileSync('agent_dashboard.html', 'utf8');

    // 1. Approvals
    const extraApprovals = `
                                  <tr>
                                      <td>#B-9023</td>
                                      <td>Lisa Kudrow</td>
                                      <td>Rome City Break</td>
                                      <td>$1,800</td>
                                      <td><span class="badge badge-warning">Pending Review</span></td>
                                      <td>
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Approve</button>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">View</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>#B-9022</td>
                                      <td>Matt LeBlanc</td>
                                      <td>Bali Villa Upgrade</td>
                                      <td>$2,400</td>
                                      <td><span class="badge badge-success">Approved</span></td>
                                      <td>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">View</button>
                                      </td>
                                  </tr>
`;
    if (agent.includes('<td>#B-9025</td>')) {
        agent = agent.replace(/(<button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">View<\/button>\s*<\/td>\s*<\/tr>)/, '$1\n' + extraApprovals);
    }

    // 2. Active Tours
    const extraActiveTours = `
                                  <tr>
                                      <td>Bora Bora Premium</td>
                                      <td>Beach</td>
                                      <td>85</td>
                                      <td><i class='bx bxs-star' style="color: gold;"></i> 4.9</td>
                                      <td><span class="badge badge-success">Active</span></td>
                                      <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                                  </tr>
                                  <tr>
                                      <td>Cape Town Safari</td>
                                      <td>Wildlife</td>
                                      <td>60</td>
                                      <td><i class='bx bxs-star' style="color: gold;"></i> 4.7</td>
                                      <td><span class="badge badge-warning">Draft</span></td>
                                      <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                                  </tr>
`;
    if (agent.includes('<td>Santorini Escape</td>')) {
        agent = agent.replace(/(<td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit<\/button><\/td>\s*<\/tr>)/, '$1\n' + extraActiveTours);
    }

    // 3. Payouts
    const extraPayouts = `
                                  <tr>
                                      <td>Jan 15, 2026</td>
                                      <td>Commission (Dec)</td>
                                      <td>$4,120.00</td>
                                      <td><span class="badge badge-success">Paid</span></td>
                                  </tr>
                                  <tr>
                                      <td>Dec 15, 2025</td>
                                      <td>Commission (Nov)</td>
                                      <td>$2,850.00</td>
                                      <td><span class="badge badge-success">Paid</span></td>
                                  </tr>
`;
    if (agent.includes('<td>Feb 15, 2026</td>')) {
        agent = agent.replace(/(<td><span class="badge badge-warning">Pending<\/span><\/td>\s*<\/tr>)/, '$1\n' + extraPayouts);
    }

    fs.writeFileSync('agent_dashboard.html', agent);

    console.log('Minor additions applied!');

} catch (e) {
    console.error(e);
}
