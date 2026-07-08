const fs = require('fs');

function injectBeforeTab(content, nextTabLabel, injectHTML) {
    const idx = content.indexOf(nextTabLabel);
    if (idx === -1) return content;
    
    // Find the nearest </div> before the next tab label.
    // That </div> is the closing tag for the PREVIOUS tab-pane.
    const substr = content.slice(0, idx);
    const lastDivIdx = substr.lastIndexOf('</div>');
    
    if (lastDivIdx === -1) return content;
    
    // Inject right before that last </div>
    return content.slice(0, lastDivIdx) + '\n' + injectHTML + '\n' + content.slice(lastDivIdx);
}

function injectBeforeMainClose(content, injectHTML) {
    const idx = content.lastIndexOf('</main>');
    if (idx === -1) return content;
    
    // Find nearest </div> before </main> which closes the tab-pane
    const substr = content.slice(0, idx);
    const lastDivIdx = substr.lastIndexOf('</div>');
    
    if (lastDivIdx === -1) return content;
    
    return content.slice(0, lastDivIdx) + '\n' + injectHTML + '\n' + content.slice(lastDivIdx);
}

// ==========================================
// CUSTOMER DASHBOARD TEMPLATES
// ==========================================
const custOverview = `
                  <!-- Section 6: Recent Activity Timeline -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Recent Activity</h3>
                      </div>
                      <ul style="list-style:none; padding:0; margin:0; color:var(--text-secondary); font-size:0.9rem;">
                          <li style="margin-bottom:10px; padding-bottom:10px; border-bottom:1px solid #eee;">
                              <i class='bx bx-log-in' style="color:var(--accent-blue); margin-right:5px;"></i> Logged in from Windows PC <span style="float:right;">2 mins ago</span>
                          </li>
                          <li style="margin-bottom:10px; padding-bottom:10px; border-bottom:1px solid #eee;">
                              <i class='bx bx-search' style="color:var(--accent-green); margin-right:5px;"></i> Searched for "Maldives Resorts" <span style="float:right;">1 hour ago</span>
                          </li>
                      </ul>
                  </div>
                  <!-- Section 7: Quick Actions -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Quick Actions</h3>
                      </div>
                      <div style="display:flex; gap:10px;">
                          <button class="dash-btn dash-btn-outline" style="flex:1;"><i class='bx bx-message-square-dots'></i> Contact Agent</button>
                          <button class="dash-btn dash-btn-outline" style="flex:1;"><i class='bx bx-wallet'></i> Add Funds</button>
                          <button class="dash-btn dash-btn-outline" style="flex:1;"><i class='bx bx-compass'></i> New Search</button>
                      </div>
                  </div>
                  <!-- Section 8: Travel Tip -->
                  <div class="dash-card" style="margin-top: 20px; background: rgba(0,212,255,0.05); border: 1px solid var(--accent-blue);">
                      <div style="display:flex; align-items:center; gap:15px;">
                          <i class='bx bx-bulb' style="font-size:2rem; color:var(--accent-blue);"></i>
                          <div>
                              <h4 style="margin:0 0 5px 0;">Tip of the Day</h4>
                              <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Pack light and roll your clothes to save space. Always keep important documents in your carry-on!</p>
                          </div>
                      </div>
                  </div>
`;

const custBookings = `
                  <!-- Section 4: Travel Documents Box -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Important Documents</h3>
                      </div>
                      <div style="display:flex; gap:10px;">
                          <div style="border:1px solid #eee; padding:15px; border-radius:var(--radius-md); flex:1; display:flex; align-items:center; justify-content:space-between;">
                              <div><i class='bx bxs-file-pdf' style="color:var(--accent-red); margin-right:5px;"></i> Itinerary.pdf</div>
                              <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem;">Download</button>
                          </div>
                          <div style="border:1px solid #eee; padding:15px; border-radius:var(--radius-md); flex:1; display:flex; align-items:center; justify-content:space-between;">
                              <div><i class='bx bxs-file-pdf' style="color:var(--accent-red); margin-right:5px;"></i> E-Visa_Copy.pdf</div>
                              <button class="dash-btn dash-btn-outline" style="padding:5px 10px; font-size:0.8rem;">Download</button>
                          </div>
                      </div>
                  </div>
                  <!-- Section 5: Special Requests -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Special Requests</h3>
                      </div>
                      <textarea style="width:100%; padding:10px; border:1px solid #ccc; border-radius:var(--radius-md); min-height:80px; font-family:inherit;" placeholder="E.g., Dietary restrictions, accessibility needs..."></textarea>
                      <button class="dash-btn dash-btn-primary" style="margin-top:10px;">Submit Request</button>
                  </div>
                  <!-- Section 6: Post-Trip Reviews -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Awaiting Your Review</h3>
                      </div>
                      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #eee; border-radius:var(--radius-md);">
                          <div><strong>Paris Explorer</strong> <span style="color:var(--text-secondary); font-size:0.8rem; margin-left:10px;">Completed 2 weeks ago</span></div>
                          <div style="color:#f39c12; font-size:1.2rem;"><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i></div>
                      </div>
                  </div>
`;

const custSaved = `
                  <!-- Section 6: Price Drop Alerts -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Price Drop Alerts</h3>
                      </div>
                      <div style="padding:15px; background:rgba(46, 204, 113, 0.1); border-left:4px solid var(--accent-green); border-radius:var(--radius-sm);">
                          <strong>Swiss Alps Adventure</strong> - Price dropped by $150 for your selected dates!
                          <a href="#" style="float:right; color:var(--accent-green); font-weight:bold; text-decoration:none;">Book Now</a>
                      </div>
                  </div>
                  <!-- Section 7: Share With Friends -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Share Your Wishlist</h3>
                      </div>
                      <p style="font-size:0.9rem; color:var(--text-secondary);">Planning a group trip? Share your saved tours with friends and family to vote on the best options.</p>
                      <div style="display:flex; gap:10px;">
                          <button class="dash-btn dash-btn-outline"><i class='bx bxl-whatsapp'></i> WhatsApp</button>
                          <button class="dash-btn dash-btn-outline"><i class='bx bx-link'></i> Copy Link</button>
                      </div>
                  </div>
                  <!-- Section 8: Compare Tours -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Compare Selected Tours</h3>
                      </div>
                      <div style="display:flex; gap:15px; align-items:center; padding:15px; border:1px dashed #ccc; border-radius:var(--radius-md); text-align:center; color:var(--text-secondary);">
                          <div style="flex:1;">Select Tour A</div>
                          <div>VS</div>
                          <div style="flex:1;">Select Tour B</div>
                      </div>
                      <button class="dash-btn dash-btn-primary" style="margin-top:15px; width:100%;" disabled>Compare Now</button>
                  </div>
`;

const custPayments = `
                  <!-- Section 5: Reward Points -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Reward Points Balance</h3>
                      </div>
                      <div style="display:flex; align-items:center; gap:20px;">
                          <div style="width:60px; height:60px; background:var(--accent-blue); color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem;">
                              <i class='bx bx-award'></i>
                          </div>
                          <div>
                              <h2 style="margin:0; color:var(--text-primary);">12,450 pts</h2>
                              <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">Equivalent to $124.50 off your next booking.</p>
                          </div>
                      </div>
                  </div>
                  <!-- Section 6: Upcoming Auto-Payments -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Scheduled Installments</h3>
                      </div>
                      <table class="dash-table">
                          <tbody>
                              <tr>
                                  <td>Magical Venice Installment 2/3</td>
                                  <td>Oct 15, 2026</td>
                                  <td>$1,500</td>
                                  <td><span class="badge badge-warning">Pending</span></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <!-- Section 7: Billing & Tax Info -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Billing Information</h3>
                      </div>
                      <div style="font-size:0.9rem; color:var(--text-secondary); border:1px solid #eee; padding:15px; border-radius:var(--radius-md);">
                          <strong>John Smith</strong><br>
                          123 Travel Avenue, Suite 4B<br>
                          New York, NY 10001<br>
                          Tax ID: Not Provided
                          <div style="margin-top:10px;"><a href="#" style="color:var(--accent-blue);">Edit Address</a></div>
                      </div>
                  </div>
`;

const custSettings = `
                  <!-- Section 6: API Access -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Developer API Access</h3>
                      </div>
                      <p style="font-size:0.85rem; color:var(--text-secondary);">Generate keys to integrate Aura Travel with your personal finance tools.</p>
                      <button class="dash-btn dash-btn-outline">Generate New Key</button>
                  </div>
                  <!-- Section 7: Connected Apps -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Connected Applications</h3>
                      </div>
                      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; border-bottom:1px solid #eee;">
                          <div><strong>Google Calendar</strong> <span style="color:var(--text-secondary); font-size:0.8rem; display:block;">Syncs your itineraries automatically</span></div>
                          <span class="badge badge-success">Connected</span>
                      </div>
                  </div>
                  <!-- Section 8: Privacy & Data -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Privacy Settings</h3>
                      </div>
                      <label style="display:flex; align-items:center; gap:10px; font-size:0.9rem; margin-bottom:10px;">
                          <input type="checkbox" checked> Allow analytics tracking
                      </label>
                      <label style="display:flex; align-items:center; gap:10px; font-size:0.9rem; color:var(--accent-red);">
                          <input type="checkbox"> Request account deletion
                      </label>
                  </div>
`;


// ==========================================
// AGENT DASHBOARD TEMPLATES
// ==========================================
const agentOverview = `
                  <!-- Section 5: Commission Goal Tracker -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Monthly Target</h3>
                      </div>
                      <div style="display:flex; justify-content:space-between; margin-bottom:5px; font-size:0.9rem;">
                          <span>$32,450 / $50,000</span>
                          <span>65%</span>
                      </div>
                      <div style="width:100%; height:8px; background:#eee; border-radius:4px; overflow:hidden;">
                          <div style="width:65%; height:100%; background:var(--accent-green);"></div>
                      </div>
                  </div>
                  <!-- Section 6: Announcements -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Agency Announcements</h3>
                      </div>
                      <div style="padding:15px; background:rgba(0,212,255,0.05); border-left:4px solid var(--accent-blue);">
                          <strong>New Fall Packages Released</strong><br>
                          <span style="font-size:0.85rem; color:var(--text-secondary);">Start promoting our new Alpine Ski packages for Q4. High commission rates apply!</span>
                      </div>
                  </div>
                  <!-- Section 7: Top Regions -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Top Selling Regions (Your Portfolio)</h3>
                      </div>
                      <ul style="margin:0; padding-left:20px; color:var(--text-secondary); font-size:0.9rem;">
                          <li>Europe (45%)</li>
                          <li>South-East Asia (30%)</li>
                          <li>Caribbean (25%)</li>
                      </ul>
                  </div>
`;

const agentApprovals = `
                  <!-- Section 5: Auto-Approve Rules -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Automation Rules</h3>
                      </div>
                      <label style="display:flex; align-items:center; gap:10px; font-size:0.9rem; margin-bottom:10px;">
                          <input type="checkbox" checked> Auto-approve VIP returning clients
                      </label>
                      <label style="display:flex; align-items:center; gap:10px; font-size:0.9rem;">
                          <input type="checkbox"> Auto-decline bookings under 24h notice
                      </label>
                  </div>
                  <!-- Section 6: Pending Revisions -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Revisions Needed</h3>
                      </div>
                      <p style="font-size:0.85rem; color:var(--text-secondary);">No bookings currently flagged for revision.</p>
                  </div>
                  <!-- Section 7: Approval History -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Recent Decisions</h3>
                      </div>
                      <ul style="list-style:none; padding:0; margin:0; font-size:0.85rem; color:var(--text-secondary);">
                          <li style="margin-bottom:5px;"><span style="color:var(--accent-green); font-weight:bold;">Approved</span> - Booking #A-9081 (Smith)</li>
                          <li style="margin-bottom:5px;"><span style="color:var(--accent-red); font-weight:bold;">Declined</span> - Booking #A-9080 (Johnson) - Payment Failed</li>
                      </ul>
                  </div>
`;

const agentActiveTours = `
                  <!-- Section 6: Tour Analytics -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Portfolio Analytics</h3>
                      </div>
                      <div class="dash-grid-2">
                          <div style="border:1px solid #eee; padding:15px; border-radius:var(--radius-md); text-align:center;">
                              <h2 style="margin:0; color:var(--accent-blue);">84%</h2>
                              <span style="font-size:0.8rem; color:var(--text-secondary);">Avg Capacity</span>
                          </div>
                          <div style="border:1px solid #eee; padding:15px; border-radius:var(--radius-md); text-align:center;">
                              <h2 style="margin:0; color:var(--accent-green);">4.8/5</h2>
                              <span style="font-size:0.8rem; color:var(--text-secondary);">Avg Rating</span>
                          </div>
                      </div>
                  </div>
                  <!-- Section 7: Guest Feedback -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Recent Feedback</h3>
                      </div>
                      <blockquote style="margin:0; padding:10px; border-left:3px solid #ccc; font-style:italic; font-size:0.9rem; color:var(--text-secondary);">
                          "The Venice tour was phenomenal. The agent was incredibly helpful in securing dinner reservations."
                          <div style="font-style:normal; margin-top:5px; font-weight:bold;">- Maria D.</div>
                      </blockquote>
                  </div>
                  <!-- Section 8: Draft Tours -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Unpublished Drafts</h3>
                      </div>
                      <table class="dash-table">
                          <tbody>
                              <tr>
                                  <td>Tokyo Winter Special</td>
                                  <td>Missing Pricing</td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 3px 10px; font-size: 0.75rem;">Edit Draft</button></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
`;

const agentPayouts = `
                  <!-- Section 6: Payout History -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>YTD Earnings</h3>
                      </div>
                      <h2 style="margin:0;">$84,350.00</h2>
                      <p style="font-size:0.85rem; color:var(--accent-green);">+12% compared to last year</p>
                  </div>
                  <!-- Section 7: Commission Tier -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Current Tier</h3>
                      </div>
                      <div style="display:flex; align-items:center; gap:15px;">
                          <div style="width:50px; height:50px; background:linear-gradient(45deg, gold, yellow); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#333; font-size:1.5rem; font-weight:bold;">P</div>
                          <div>
                              <h4 style="margin:0;">Platinum Agent</h4>
                              <span style="font-size:0.8rem; color:var(--text-secondary);">18% base commission rate</span>
                          </div>
                      </div>
                  </div>
                  <!-- Section 8: Linked Bank Accounts -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Linked Accounts</h3>
                      </div>
                      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #eee; border-radius:var(--radius-md);">
                          <div><strong>Chase Checking</strong> <span style="color:var(--text-secondary); font-size:0.8rem;">****9012</span></div>
                          <span class="badge badge-success">Primary</span>
                      </div>
                      <button class="dash-btn dash-btn-outline" style="margin-top:10px; width:100%;">Add New Account</button>
                  </div>
`;

const agentSettings = `
                  <!-- Section 6: CRM Integrations -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>CRM Integrations</h3>
                      </div>
                      <p style="font-size:0.85rem; color:var(--text-secondary);">Connect your sales tools.</p>
                      <button class="dash-btn dash-btn-outline" style="margin-right:10px;">Connect Salesforce</button>
                      <button class="dash-btn dash-btn-outline">Connect HubSpot</button>
                  </div>
                  <!-- Section 7: Branding -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>White-label Branding</h3>
                      </div>
                      <div style="margin-bottom:10px;">
                          <label style="display:block; font-size:0.85rem; margin-bottom:5px;">Agency Logo</label>
                          <button class="dash-btn dash-btn-outline"><i class='bx bx-upload'></i> Upload File</button>
                      </div>
                      <div style="margin-bottom:10px;">
                          <label style="display:block; font-size:0.85rem; margin-bottom:5px;">Primary Hex Color</label>
                          <input type="text" value="#004e92" style="padding:8px; border:1px solid #ccc; border-radius:4px;">
                      </div>
                  </div>
                  <!-- Section 8: Team Permissions -->
                  <div class="dash-card" style="margin-top: 20px;">
                      <div class="dash-card-header">
                          <h3>Team Access</h3>
                      </div>
                      <table class="dash-table">
                          <tbody>
                              <tr>
                                  <td>Sarah Jenkins</td>
                                  <td>Sub-Agent</td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 3px 10px; font-size: 0.75rem;">Edit</button></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
`;

try {
    let d = fs.readFileSync('dashboard.html', 'utf8');
    
    // CUSTOMER DASHBOARD
    d = injectBeforeTab(d, '<!-- TAB 2: MY BOOKINGS -->', custOverview);
    d = injectBeforeTab(d, '<!-- TAB 3: SAVED TOURS -->', custBookings);
    d = injectBeforeTab(d, '<!-- TAB 4: PAYMENTS -->', custSaved);
    d = injectBeforeTab(d, '<!-- TAB 5: SETTINGS -->', custPayments);
    d = injectBeforeMainClose(d, custSettings);
    
    fs.writeFileSync('dashboard.html', d);
    
    // AGENT DASHBOARD
    let a = fs.readFileSync('agent_dashboard.html', 'utf8');
    
    a = injectBeforeTab(a, '<!-- TAB 2: APPROVALS -->', agentOverview);
    a = injectBeforeTab(a, '<!-- TAB 3: ACTIVE TOURS -->', agentApprovals);
    a = injectBeforeTab(a, '<!-- TAB 4: PAYOUTS -->', agentActiveTours);
    a = injectBeforeTab(a, '<!-- TAB 5: SETTINGS -->', agentPayouts);
    a = injectBeforeMainClose(a, agentSettings);
    
    fs.writeFileSync('agent_dashboard.html', a);
    
    console.log("Successfully injected all 3 highly specific sections into every tab!");
} catch (e) {
    console.error(e);
}
