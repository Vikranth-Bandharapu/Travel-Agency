const fs = require('fs');

let d = fs.readFileSync('dashboard.html', 'utf8');

function injectBefore(searchStr, injectStr) {
    if (d.includes(injectStr)) return;
    const idx = d.indexOf(searchStr);
    if (idx !== -1) {
        d = d.slice(0, idx) + injectStr + '\n' + d.slice(idx);
    }
}

// ==========================================
// 1. DASHBOARD (OVERVIEW) TAB
// ==========================================

// Add 2 more stats widgets
const statsSearch = `<!-- Section 3: Bookings Table -->`;
injectBefore(statsSearch, `                      <div class="dash-card stat-widget" style="margin-top:20px;">
                          <div class="stat-icon" style="background:var(--accent-red); color:white;"><i class='bx bx-heart'></i></div>
                          <div class="stat-info">
                              <h4>Saved Tours</h4>
                              <h2>24</h2>
                          </div>
                      </div>
                      <div class="dash-card stat-widget" style="margin-top:20px;">
                          <div class="stat-icon" style="background:var(--accent-blue); color:white;"><i class='bx bx-award'></i></div>
                          <div class="stat-info">
                              <h4>Reward Points</h4>
                              <h2>8,450</h2>
                          </div>
                      </div>
                      </div>\n`);
// Fix grid closing
d = d.replace(`\n                      </div>\n                  </div>\n  \n                  <!-- Section 3: Bookings Table -->`, `\n                  </div>\n  \n                  <!-- Section 3: Bookings Table -->`);

// Add 3 more destinations to Trending
const trendingSearch = `<!-- Section 4: Travel Documents -->`;
injectBefore(trendingSearch, `                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_29.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Dubai, UAE</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/dest_greece.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Santorini</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_16.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Grand Canyon</h4>
                              </div>
                          </div>
                      </div>\n`);
d = d.replace(`\n                      </div>\n                  </div>\n  \n                  <!-- Section 4: Travel Documents -->`, `\n                  </div>\n  \n                  <!-- Section 4: Travel Documents -->`);


// ==========================================
// 2. MY BOOKINGS TAB
// ==========================================

// Add 4 more rows to the Bookings table
const bookingsTabIdx = d.indexOf('<!-- TAB 2: MY BOOKINGS -->');
if (bookingsTabIdx !== -1) {
    const tbodyIdx = d.indexOf('</tbody>', bookingsTabIdx);
    if (tbodyIdx !== -1) {
        const rows = `
                              <tr>
                                  <td>London Highlights</td>
                                  <td>Jun 12 - Jun 18, 2025</td>
                                  <td>$2,800</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>
                              <tr>
                                  <td>Rome Ancient Tour</td>
                                  <td>Apr 05 - Apr 12, 2025</td>
                                  <td>$3,100</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>
                              <tr>
                                  <td>Sydney Harbor Escape</td>
                                  <td>Jan 10 - Jan 20, 2025</td>
                                  <td>$4,500</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>
                              <tr>
                                  <td>Egypt Pyramids</td>
                                  <td>Oct 15 - Oct 25, 2024</td>
                                  <td>$2,200</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>`;
        if (!d.includes('London Highlights')) {
            d = d.slice(0, tbodyIdx) + rows + '\n' + d.slice(tbodyIdx);
        }
    }
}


// ==========================================
// 3. SAVED TOURS TAB
// ==========================================

// Add 4 more cards to Saved Grid
const priceAlertsSearch = `<!-- Section 3: Price Alerts -->`;
injectBefore(priceAlertsSearch, `                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/dest_paris.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Machu Picchu</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/dest_greece.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Taj Mahal</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_10.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Great Wall</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/dest_maldives.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Bora Bora</h4>
                              </div>
                          </div>
                      </div>\n`);
d = d.replace(`\n                      </div>\n                  </div>\n  \n                  <!-- Section 3: Price Alerts -->`, `\n                  </div>\n  \n                  <!-- Section 3: Price Alerts -->`);

// Add another Price Alert
const recSearch = `<!-- Section 4: Recommended -->`;
injectBefore(recSearch, `                      <div class="flex-between" style="border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; margin-top: 15px;">
                          <div style="display:flex; align-items:center; gap: 15px; flex:1;">
                              <i class='bx bx-trending-down' style="font-size: 2rem; color: var(--accent-green);"></i>
                              <div>
                                  <h4 style="margin:0 0 5px 0;">Swiss Alps Expedition</h4>
                                  <span style="font-size:0.8rem; color:var(--text-secondary);">Price dropped by $200 for January dates!</span>
                              </div>
                          </div>
                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Now</button>
                      </div>
                  </div>\n`);
d = d.replace(`\n                  </div>\n  \n                  <!-- Section 4: Recommended -->`, `\n                  <!-- Section 4: Recommended -->`);


// ==========================================
// 4. PAYMENTS TAB
// ==========================================

// Add 5 more rows to Invoices Table
const paymentsTabIdx2 = d.indexOf('<!-- TAB 4: PAYMENTS -->');
if (paymentsTabIdx2 !== -1) {
    const tbodyIdx = d.indexOf('</tbody>', paymentsTabIdx2);
    if (tbodyIdx !== -1) {
        const rows = `
                              <tr>
                                  <td>INV-2024-890</td>
                                  <td>Dec 05, 2024</td>
                                  <td>$2,800</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>
                              <tr>
                                  <td>INV-2024-712</td>
                                  <td>Oct 12, 2024</td>
                                  <td>$3,100</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>
                              <tr>
                                  <td>INV-2024-540</td>
                                  <td>Aug 22, 2024</td>
                                  <td>$4,500</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>
                              <tr>
                                  <td>INV-2024-331</td>
                                  <td>May 10, 2024</td>
                                  <td>$1,200</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>
                              <tr>
                                  <td>INV-2024-105</td>
                                  <td>Feb 28, 2024</td>
                                  <td>$2,200</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>`;
        if (!d.includes('INV-2024-890')) {
            d = d.slice(0, tbodyIdx) + rows + '\n' + d.slice(tbodyIdx);
        }
    }
}

fs.writeFileSync('dashboard.html', d);
console.log("Massive content injection completed for the 4 tabs!");
