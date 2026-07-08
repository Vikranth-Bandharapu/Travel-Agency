const fs = require('fs');

let html = fs.readFileSync('agent_dashboard.html', 'utf8');

// TAB 1 Additions
const tab1_additions = `
                <!-- Section 5: Quick Actions Hub -->
                <div class="dash-section" style="margin-top: 20px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Quick Actions Hub</h3>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 15px;">
                        <button class="dash-btn" style="background: rgba(10,35,46,0.05); color: var(--color-primary); border: 1px dashed var(--color-primary); padding: 20px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;" onclick="window.location.href='404.html'">
                            <i class='bx bx-file-blank' style="font-size: 2rem;"></i> Create Quote
                        </button>
                        <button class="dash-btn" style="background: rgba(10,35,46,0.05); color: var(--color-primary); border: 1px dashed var(--color-primary); padding: 20px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;" onclick="window.location.href='404.html'">
                            <i class='bx bx-message-square-dots' style="font-size: 2rem;"></i> Message Client
                        </button>
                        <button class="dash-btn" style="background: rgba(10,35,46,0.05); color: var(--color-primary); border: 1px dashed var(--color-primary); padding: 20px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;" onclick="window.location.href='404.html'">
                            <i class='bx bx-calendar-event' style="font-size: 2rem;"></i> Schedule Call
                        </button>
                        <button class="dash-btn" style="background: rgba(10,35,46,0.05); color: var(--color-primary); border: 1px dashed var(--color-primary); padding: 20px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;" onclick="window.location.href='404.html'">
                            <i class='bx bx-money' style="font-size: 2rem;"></i> Send Invoice
                        </button>
                    </div>
                </div>
`;

// TAB 2 Additions
const tab2_additions = `
                <!-- Section 2: Needs Revision -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Needs Revision</h3>
                        <span class="badge badge-warning">2 Action Required</span>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>Tour</th>
                                    <th>Issue</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sam Wilson</td>
                                    <td>Bora Bora Premium</td>
                                    <td>Missing Passport Scans</td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Send Reminder</button></td>
                                </tr>
                                <tr>
                                    <td>Lydia Martin</td>
                                    <td>Paris Honeymoon</td>
                                    <td>Payment Declined</td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Update Billing</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section 3: Recently Approved -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Recently Approved (Last 48h)</h3>
                    </div>
                    <div class="dash-grid-3">
                        <div style="padding: 15px; border: 1px solid #eee; border-radius: 8px; border-left: 4px solid var(--accent-green); background: white;">
                            <h4 style="margin: 0 0 5px 0;">Tom Hardy</h4>
                            <p style="font-size: 0.8rem; color: #666; margin: 0;">Swiss Alps • 2 Pax</p>
                        </div>
                        <div style="padding: 15px; border: 1px solid #eee; border-radius: 8px; border-left: 4px solid var(--accent-green); background: white;">
                            <h4 style="margin: 0 0 5px 0;">Zendaya Coleman</h4>
                            <p style="font-size: 0.8rem; color: #666; margin: 0;">Tokyo Spring • 1 Pax</p>
                        </div>
                        <div style="padding: 15px; border: 1px solid #eee; border-radius: 8px; border-left: 4px solid var(--accent-green); background: white;">
                            <h4 style="margin: 0 0 5px 0;">Chris Evans</h4>
                            <p style="font-size: 0.8rem; color: #666; margin: 0;">Rome City Break • 4 Pax</p>
                        </div>
                    </div>
                </div>

                <div class="dash-grid-2" style="margin-top: 30px;">
                    <!-- Section 4: Urgent Client Messages -->
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Urgent Messages</h3>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
                            <div style="padding-bottom: 15px; border-bottom: 1px solid #eee;">
                                <div class="flex-between"><strong>Sarah J.</strong> <span style="font-size: 0.8rem; color: #666;">10m ago</span></div>
                                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: var(--color-primary);">"Can we upgrade to business class?"</p>
                                <a href="404.html" style="font-size: 0.8rem; color: var(--color-accent); text-decoration: none; font-weight: bold; margin-top: 5px; display: inline-block;">Reply Now</a>
                            </div>
                            <div>
                                <div class="flex-between"><strong>Mark T.</strong> <span style="font-size: 0.8rem; color: #666;">1h ago</span></div>
                                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: var(--color-primary);">"I need to add my daughter to the booking."</p>
                                <a href="404.html" style="font-size: 0.8rem; color: var(--color-accent); text-decoration: none; font-weight: bold; margin-top: 5px; display: inline-block;">Reply Now</a>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Approval Rules -->
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Automation Rules</h3>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>Auto-Approve VIPs</strong>
                                    <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary);">Bypass manual review for Aura Gold members.</p>
                                </div>
                                <label class="toggle-switch"><input type="checkbox" checked><span class="slider"></span></label>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px;">
                                <div>
                                    <strong>Auto-Send Invoices</strong>
                                    <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary);">Send payment links immediately upon approval.</p>
                                </div>
                                <label class="toggle-switch"><input type="checkbox" checked><span class="slider"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
`;

// TAB 3 Additions
const tab3_additions = `
                <!-- Section 3: Tour Analytics -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Tour Analytics (30 Days)</h3>
                    </div>
                    <div class="dash-grid-3">
                        <div class="dash-card text-center">
                            <i class='bx bx-show' style="font-size: 2.5rem; color: var(--color-primary); margin-bottom: 10px;"></i>
                            <h2 style="margin: 0;">12.4k</h2>
                            <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Total Views</p>
                        </div>
                        <div class="dash-card text-center">
                            <i class='bx bx-heart' style="font-size: 2.5rem; color: var(--accent-orange); margin-bottom: 10px;"></i>
                            <h2 style="margin: 0;">840</h2>
                            <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Times Saved</p>
                        </div>
                        <div class="dash-card text-center">
                            <i class='bx bx-cart' style="font-size: 2.5rem; color: var(--accent-green); margin-bottom: 10px;"></i>
                            <h2 style="margin: 0;">4.2%</h2>
                            <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">Conversion Rate</p>
                        </div>
                    </div>
                </div>

                <div class="dash-grid-2" style="margin-top: 30px;">
                    <!-- Section 4: Guest Feedback -->
                    <div class="dash-card">
                        <div class="dash-card-header">
                            <h3>Recent Guest Feedback</h3>
                        </div>
                        <div style="margin-top: 15px;">
                            <div style="background: rgba(10,35,46,0.05); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                                <div class="flex-between"><strong>"Perfect Honeymoon"</strong> <div style="color: gold;"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></div></div>
                                <p style="font-size: 0.85rem; font-style: italic; margin: 10px 0 0 0; color: #555;">"The Maldives package was literally flawless. The agent was incredibly responsive."</p>
                            </div>
                            <div style="background: rgba(10,35,46,0.05); padding: 15px; border-radius: 8px;">
                                <div class="flex-between"><strong>"Great Guide, Rushed Schedule"</strong> <div style="color: gold;"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i></div></div>
                                <p style="font-size: 0.85rem; font-style: italic; margin: 10px 0 0 0; color: #555;">"Loved Rome, but packing 4 cities into 6 days was exhausting."</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Promoted Tours -->
                    <div class="dash-card" style="background: linear-gradient(135deg, #1a4254, var(--color-primary)); color: white;">
                        <div class="dash-card-header">
                            <h3 style="color: white;">Marketplace Promotions</h3>
                        </div>
                        <div style="margin-top: 15px; text-align: center;">
                            <i class='bx bxs-rocket' style="font-size: 4rem; color: var(--accent-orange); margin-bottom: 15px;"></i>
                            <h4 style="margin-bottom: 10px;">Boost Your Visibility</h4>
                            <p style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 20px;">Get your tours featured on the Aura homepage for 30 days and increase bookings by up to 40%.</p>
                            <button class="dash-btn" style="background: var(--accent-orange); color: white; width: 100%; border: none;" onclick="window.location.href='404.html'">Start a Campaign</button>
                        </div>
                    </div>
                </div>
`;

// TAB 4 Additions
const tab4_additions = `
                <!-- Section 4: Commission Tier Status -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Commission Tier Status</h3>
                        <span class="badge badge-success">Current: Pro (12%)</span>
                    </div>
                    <div style="background: #0A232E; color: white; padding: 25px; border-radius: var(--radius-sm); position: relative; overflow: hidden;">
                        <i class='bx bx-diamond' style="position: absolute; right: -20px; top: -20px; font-size: 8rem; color: rgba(255,255,255,0.05);"></i>
                        <h4 style="color: var(--color-accent); font-family: var(--font-secondary); font-size: 1.5rem; margin-bottom: 5px;">$15,500 to Elite Tier</h4>
                        <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 20px;">Hit $100k in annual sales to unlock 15% commissions and dedicated support.</p>
                        
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 15px;">
                            <div style="width: 84.5%; height: 100%; background: var(--color-accent); border-radius: 4px;"></div>
                        </div>
                        <div class="flex-between" style="font-size: 0.8rem; opacity: 0.9;">
                            <span>Pro Tier ($50k)</span>
                            <span>Elite Tier ($100k)</span>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Connected Bank Accounts -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Connected Bank Accounts</h3>
                        <button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">+ Add Account</button>
                    </div>
                    <div class="grid-2">
                        <div style="padding: 20px; border: 2px solid var(--accent-green); border-radius: 8px; position: relative;">
                            <span class="badge badge-success" style="position: absolute; top: -10px; right: 10px;">Default</span>
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <i class='bx bxs-bank' style="font-size: 2.5rem; color: var(--color-primary);"></i>
                                <div>
                                    <h4 style="margin: 0;">Chase Business Checking</h4>
                                    <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">**** **** **** 8821</p>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 20px; border: 1px solid #eee; border-radius: 8px; background: #fafafa;">
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <i class='bx bxl-paypal' style="font-size: 2.5rem; color: #003087;"></i>
                                <div>
                                    <h4 style="margin: 0;">PayPal Business</h4>
                                    <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">payments@auratravel.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`;

// TAB 5 Additions
const tab5_additions = `
                          <!-- Section 4: API & Integrations -->
                          <div class="dash-card" style="margin-top: 20px;">
                              <div class="dash-card-header">
                                  <h3>API & Integrations</h3>
                              </div>
                              <div style="margin-top: 15px;">
                                  <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                                      <div style="display: flex; align-items: center; gap: 15px;">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" style="height: 30px;">
                                          <div><strong>Salesforce CRM</strong><p style="margin: 0; font-size: 0.8rem; color: #666;">Sync bookings to Salesforce</p></div>
                                      </div>
                                      <button class="dash-btn" style="background: #f1f5f9; color: #333;" onclick="window.location.href='404.html'">Configure</button>
                                  </div>
                                  <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 15px;">
                                      <div style="display: flex; align-items: center; gap: 15px;">
                                          <i class='bx bx-code-alt' style="font-size: 2rem; color: var(--color-primary);"></i>
                                          <div><strong>Developer API Key</strong><p style="margin: 0; font-size: 0.8rem; color: #666;">Access Aura Marketplace data</p></div>
                                      </div>
                                      <button class="dash-btn" style="background: var(--color-primary); color: white;" onclick="window.location.href='404.html'">Generate</button>
                                  </div>
                              </div>
                          </div>

                          <!-- Section 5: White-label Branding -->
                          <div class="dash-card" style="margin-top: 20px;">
                              <div class="dash-card-header">
                                  <h3>White-label Branding</h3>
                                  <span class="badge badge-warning">Pro Feature</span>
                              </div>
                              <div style="margin-top: 15px;">
                                  <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Customize the look and feel of client invoices and itineraries with your own agency branding.</p>
                                  <div class="dash-form-group">
                                      <label>Primary Brand Color</label>
                                      <div style="display: flex; gap: 10px; align-items: center;">
                                          <input type="color" value="#0a232e" style="height: 40px; width: 60px; padding: 0; border: none;">
                                          <span style="font-family: monospace;">#0A232E</span>
                                      </div>
                                  </div>
                                  <div class="dash-form-group" style="margin-top: 15px;">
                                      <label>Custom Agency Domain</label>
                                      <input type="text" placeholder="e.g. portal.myagency.com">
                                  </div>
                                  <button class="dash-btn dash-btn-outline" style="margin-top: 15px; width: 100%;" onclick="window.location.href='404.html'">Upgrade to Pro</button>
                              </div>
                          </div>
`;

// Inject into HTML
html = html.replace('<!-- TAB 2: APPROVALS -->', tab1_additions + '\n            <!-- TAB 2: APPROVALS -->');
html = html.replace('<!-- TAB 3: ACTIVE TOURS -->', tab2_additions + '\n            <!-- TAB 3: ACTIVE TOURS -->');
html = html.replace('<!-- TAB 4: PAYOUTS -->', tab3_additions + '\n            <!-- TAB 4: PAYOUTS -->');
html = html.replace('<!-- TAB 5: SETTINGS -->', tab4_additions + '\n            <!-- TAB 5: SETTINGS -->');

// Replace before </main> or ending div tags depending on structure.
if (html.includes('</main>')) {
    html = html.replace('</div>\n    </main>', tab5_additions + '\n                      </div>\n                  </div>\n              </div>\n          </div>\n    </main>');
} else if (html.includes('</script>\n</div>\n</body>')) {
    html = html.replace('</script>\n</div>\n</body>', tab5_additions + '\n                      </div>\n                  </div>\n              </div>\n          </div>\n</script>\n</div>\n</body>');
} else {
    // Attempt general injection
    html = html.replace('<!-- Tab 5 Settings Ends Here -->', tab5_additions); // fallback if it existed, otherwise just find end of file
}


fs.writeFileSync('agent_dashboard.html', html, 'utf8');
console.log('Agent Dashboard Enriched!');
