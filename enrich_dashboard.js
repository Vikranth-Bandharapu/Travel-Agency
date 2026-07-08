const fs = require('fs');

let html = fs.readFileSync('dashboard.html', 'utf8');

// TAB 1 Additions
const tab1_additions = `
                <!-- Section 4: Trip Countdown -->
                <div class="dash-section" style="margin-top: 20px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Next Adventure</h3>
                    </div>
                    <div style="background: linear-gradient(135deg, var(--color-primary), #1a4254); color: white; padding: 30px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h4 style="font-size: 1.5rem; margin-bottom: 5px;">Santorini Escape</h4>
                            <p style="opacity: 0.8;"><i class='bx bx-calendar'></i> Departing in</p>
                        </div>
                        <div style="display: flex; gap: 15px; text-align: center;">
                            <div style="background: rgba(255,255,255,0.1); padding: 10px 15px; border-radius: 8px;">
                                <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-accent);">14</div>
                                <div style="font-size: 0.8rem; text-transform: uppercase;">Days</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.1); padding: 10px 15px; border-radius: 8px;">
                                <div style="font-size: 1.8rem; font-weight: bold;">08</div>
                                <div style="font-size: 0.8rem; text-transform: uppercase;">Hours</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Exclusive Offers -->
                <div class="dash-section" style="margin-top: 20px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Exclusive Aura Offers</h3>
                    </div>
                    <div class="dash-grid-2">
                        <div style="background: white; border: 1px solid #eee; border-radius: 8px; display: flex; overflow: hidden;">
                            <img src="assets/opt_img_16.webp" style="width: 120px; object-fit: cover;">
                            <div style="padding: 15px;">
                                <span class="badge badge-warning" style="margin-bottom: 10px; display: inline-block;">Limited Time</span>
                                <h4 style="margin: 0 0 5px 0;">Bali Villa Upgrade</h4>
                                <p style="font-size: 0.8rem; color: #666; margin: 0 0 10px 0;">50% off pool villa upgrades for Aura Gold members.</p>
                                <a href="404.html" style="color: var(--color-primary); font-size: 0.9rem; font-weight: bold; text-decoration: none;">Claim Offer &rarr;</a>
                            </div>
                        </div>
                        <div style="background: white; border: 1px solid #eee; border-radius: 8px; display: flex; overflow: hidden;">
                            <img src="assets/opt_img_1.webp" style="width: 120px; object-fit: cover;">
                            <div style="padding: 15px;">
                                <span class="badge badge-success" style="margin-bottom: 10px; display: inline-block;">Double Points</span>
                                <h4 style="margin: 0 0 5px 0;">Tokyo Spring Tour</h4>
                                <p style="font-size: 0.8rem; color: #666; margin: 0 0 10px 0;">Book now to earn double loyalty points.</p>
                                <a href="404.html" style="color: var(--color-primary); font-size: 0.9rem; font-weight: bold; text-decoration: none;">Claim Offer &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
`;

// TAB 2 Additions
const tab2_additions = `
                <!-- Section 5: Past Trips History -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Past Trips History</h3>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr>
                                    <th>Destination</th>
                                    <th>Date</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Swiss Alps Ski Trip</strong></td>
                                    <td>Feb 2025</td>
                                    <td><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                                </tr>
                                <tr>
                                    <td><strong>Rome City Break</strong></td>
                                    <td>Oct 2024</td>
                                    <td><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i><i class='bx bxs-star' style="color: gold;"></i><i class='bx bx-star' style="color: #ccc;"></i></td>
                                    <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
`;

// TAB 3 Additions
const tab3_additions = `
                <!-- Section 3: Price Drop Alerts -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Price Drop Alerts</h3>
                    </div>
                    <div style="background: rgba(40, 167, 69, 0.1); border: 1px solid rgba(40, 167, 69, 0.2); padding: 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <i class='bx bx-trending-down' style="font-size: 2rem; color: var(--accent-green);"></i>
                            <div>
                                <h4 style="margin: 0; color: #333;">Kyoto Autumn Leaves Tour</h4>
                                <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">Price dropped by 15% ($250 savings) for November dates!</p>
                            </div>
                        </div>
                        <button class="dash-btn" style="background: var(--accent-green); color: white;" onclick="window.location.href='404.html'">Book Now</button>
                    </div>
                </div>

                <!-- Section 4: Compare Tours -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Compare Saved Tours</h3>
                    </div>
                    <div style="background: white; border: 1px dashed #ccc; padding: 30px; text-align: center; border-radius: 8px;">
                        <i class='bx bx-git-compare' style="font-size: 3rem; color: #ccc; margin-bottom: 10px;"></i>
                        <h4 style="color: #333;">Select up to 3 tours to compare side-by-side.</h4>
                        <button class="dash-btn dash-btn-outline" style="margin-top: 15px;" onclick="window.location.href='404.html'">Start Comparison</button>
                    </div>
                </div>

                <!-- Section 5: AI Recommendations -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Because You Saved "Maldives"</h3>
                    </div>
                    <div class="dash-grid-3">
                        <div class="dash-card" style="padding: 0; overflow: hidden;">
                            <img src="assets/opt_img_2.webp" style="width: 100%; height: 120px; object-fit: cover;">
                            <div style="padding: 15px;">
                                <h4 style="margin: 0 0 5px 0;">Seychelles Retreat</h4>
                                <p style="font-size: 0.8rem; color: #666; margin: 0 0 10px 0;">Similar pristine beaches, 12% cheaper.</p>
                                <a href="404.html" style="color: var(--color-primary); font-size: 0.9rem; font-weight: bold; text-decoration: none;">View Details &rarr;</a>
                            </div>
                        </div>
                        <div class="dash-card" style="padding: 0; overflow: hidden;">
                            <img src="assets/opt_img_29.webp" style="width: 100%; height: 120px; object-fit: cover;">
                            <div style="padding: 15px;">
                                <h4 style="margin: 0 0 5px 0;">Bora Bora Premium</h4>
                                <p style="font-size: 0.8rem; color: #666; margin: 0 0 10px 0;">Ultimate overwater bungalow experience.</p>
                                <a href="404.html" style="color: var(--color-primary); font-size: 0.9rem; font-weight: bold; text-decoration: none;">View Details &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
`;

// TAB 4 Additions
const tab4_additions = `
                <!-- Section 3: Transaction History -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Transaction History</h3>
                    </div>
                    <div class="table-responsive">
                        <table class="dash-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jun 12, 2026</td>
                                    <td>Santorini Escape - Deposit</td>
                                    <td>$800.00</td>
                                    <td><span class="badge badge-success">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>Jan 05, 2026</td>
                                    <td>Swiss Alps Ski Trip - Final</td>
                                    <td>$2,100.00</td>
                                    <td><span class="badge badge-success">Completed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section 4: Reward Points Ledger -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Reward Points Ledger</h3>
                        <span style="font-weight: bold; color: var(--color-accent);">Balance: 4,500 pts</span>
                    </div>
                    <div style="background: white; border: 1px solid #eee; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; padding: 15px; border-bottom: 1px solid #eee;">
                            <div><strong>Earned: Swiss Alps Ski Trip</strong><br><span style="font-size: 0.8rem; color: #666;">Jan 05, 2026</span></div>
                            <div style="color: var(--accent-green); font-weight: bold;">+2,100 pts</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 15px;">
                            <div><strong>Redeemed: Airport Lounge Access</strong><br><span style="font-size: 0.8rem; color: #666;">Feb 10, 2026</span></div>
                            <div style="color: var(--accent-red); font-weight: bold;">-500 pts</div>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Invoices & Receipts -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.3rem;">Invoices & Receipts</h3>
                    </div>
                    <div class="grid-2">
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px; border: 1px solid #eee; border-radius: 8px; background: white;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <i class='bx bxs-file-pdf' style="font-size: 2rem; color: #e2574c;"></i>
                                <div><h4 style="margin: 0;">2026 Tax Summary</h4><span style="font-size: 0.8rem; color: #666;">PDF • 1.2 MB</span></div>
                            </div>
                            <button class="dash-btn dash-btn-outline" style="padding: 5px 10px;" onclick="window.location.href='404.html'">Download</button>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px; border: 1px solid #eee; border-radius: 8px; background: white;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <i class='bx bx-archive-in' style="font-size: 2rem; color: var(--color-primary);"></i>
                                <div><h4 style="margin: 0;">Bulk Export (ZIP)</h4><span style="font-size: 0.8rem; color: #666;">All 2025 Receipts</span></div>
                            </div>
                            <button class="dash-btn dash-btn-outline" style="padding: 5px 10px;" onclick="window.location.href='404.html'">Download</button>
                        </div>
                    </div>
                </div>
`;

// TAB 5 Additions
const tab5_additions = `
                          <!-- Section 5: Notification Preferences -->
                          <div class="dash-card" style="margin-top: 20px;">
                              <div class="dash-card-header">
                                  <h3>Notification Preferences</h3>
                              </div>
                              <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
                                  <div style="display: flex; justify-content: space-between; align-items: center;">
                                      <div>
                                          <strong>Email Notifications</strong>
                                          <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary);">Receive updates about bookings and payments.</p>
                                      </div>
                                      <label class="toggle-switch">
                                          <input type="checkbox" checked>
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                  <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px;">
                                      <div>
                                          <strong>SMS Alerts</strong>
                                          <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary);">Receive urgent alerts and flight changes.</p>
                                      </div>
                                      <label class="toggle-switch">
                                          <input type="checkbox" checked>
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                  <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px;">
                                      <div>
                                          <strong>Marketing & Promos</strong>
                                          <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary);">Exclusive deals and Aura Travel Club offers.</p>
                                      </div>
                                      <label class="toggle-switch">
                                          <input type="checkbox">
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                              </div>
                          </div>
`;

// Inject into HTML
html = html.replace('<!-- TAB 2: MY BOOKINGS -->', tab1_additions + '\n            <!-- TAB 2: MY BOOKINGS -->');
html = html.replace('<!-- TAB 3: SAVED TOURS -->', tab2_additions + '\n            <!-- TAB 3: SAVED TOURS -->');
html = html.replace('<!-- TAB 4: PAYMENTS -->', tab3_additions + '\n            <!-- TAB 4: PAYMENTS -->');
html = html.replace('<!-- TAB 5: SETTINGS -->', tab4_additions + '\n            <!-- TAB 5: SETTINGS -->');
html = html.replace('</div>\n    </main>', tab5_additions + '\n                      </div>\n                  </div>\n              </div>\n          </div>\n    </main>');

fs.writeFileSync('dashboard.html', html, 'utf8');
console.log('Customer Dashboard Enriched!');
