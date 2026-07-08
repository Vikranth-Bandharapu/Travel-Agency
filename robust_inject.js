const fs = require('fs');

let d = fs.readFileSync('dashboard.html', 'utf8');

function injectBefore(searchStr, injectStr) {
    if (d.includes(injectStr)) return; // Already injected
    const idx = d.indexOf(searchStr);
    if (idx !== -1) {
        d = d.slice(0, idx) + injectStr + '\n' + d.slice(idx);
    } else {
        console.log("Could not find:", searchStr);
    }
}

function injectAfter(searchStr, injectStr) {
    if (d.includes(injectStr)) return; // Already injected
    const idx = d.indexOf(searchStr);
    if (idx !== -1) {
        const insertIdx = idx + searchStr.length;
        d = d.slice(0, insertIdx) + '\n' + injectStr + d.slice(insertIdx);
    } else {
        console.log("Could not find:", searchStr);
    }
}

// 1. DASHBOARD: Add to Add-ons (Find Travel Insurance, inject after its container)
const addonMatch = `onclick="window.location.href='404.html'">Add</button>\n                          </div>\n                      </div>\n                  </div>\n  \n              </div>`;
injectBefore(addonMatch, `                          <div class="flex-between" style="border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; margin-top: 15px;">
                              <div style="display:flex; align-items:center; gap: 15px;">
                                  <i class='bx bx-restaurant' style="font-size: 2rem; color: var(--accent-orange);"></i>
                                  <div>
                                      <h4 style="margin:0 0 5px 0;">Meal Plan Upgrade</h4>
                                      <span style="font-size:0.8rem; color:var(--text-secondary);">All-Inclusive Dining ? $200</span>
                                  </div>
                              </div>
                              <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Add</button>
                          </div>`);

// 2. MY BOOKINGS: Add rows to Bookings Table
// Find the first </tbody> in tab-bookings
const bookingsTabIdx = d.indexOf('<!-- TAB 2: MY BOOKINGS -->');
if (bookingsTabIdx !== -1) {
    const tbodyIdx = d.indexOf('</tbody>', bookingsTabIdx);
    if (tbodyIdx !== -1) {
        const rows = `
                              <tr>
                                  <td>New York Getaway</td>
                                  <td>Dec 01 - Dec 05, 2025</td>
                                  <td>$1,500</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>
                              <tr>
                                  <td>African Safari</td>
                                  <td>Aug 10 - Aug 24, 2025</td>
                                  <td>$8,400</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>`;
        if (!d.includes('African Safari')) {
            d = d.slice(0, tbodyIdx) + rows + '\n' + d.slice(tbodyIdx);
        }
    }
}

// 3. SAVED TOURS: Add to Categories
const categoriesSearch = `<!-- Section 2: Saved Grid -->`;
injectBefore(categoriesSearch, `                      <div class="dash-card" style="text-align: center; padding: 15px; cursor:pointer;" onclick="window.location.href='404.html'">
                          <i class='bx bx-tree' style="font-size: 2rem; color: var(--accent-green);"></i>
                          <h4 style="margin: 10px 0 0 0; font-size: 0.9rem;">Nature</h4>
                      </div>
                      <div class="dash-card" style="text-align: center; padding: 15px; cursor:pointer;" onclick="window.location.href='404.html'">
                          <i class='bx bx-history' style="font-size: 2rem; color: var(--accent-red);"></i>
                          <h4 style="margin: 10px 0 0 0; font-size: 0.9rem;">Historical</h4>
                      </div>
                      </div>\n`);
// Fix the closing div for the grid by removing the one we just bypassed
d = d.replace(`\n                      </div>\n                  </div>\n  \n                  <!-- Section 2: Saved Grid -->`, `\n                  </div>\n  \n                  <!-- Section 2: Saved Grid -->`);


// 4. PAYMENTS: Add to Invoices Table
const paymentsTabIdx = d.indexOf('<!-- TAB 4: PAYMENTS -->');
if (paymentsTabIdx !== -1) {
    const tbodyIdx = d.indexOf('</tbody>', paymentsTabIdx);
    if (tbodyIdx !== -1) {
        const rows = `
                              <tr>
                                  <td>INV-2025-399</td>
                                  <td>Nov 15, 2025</td>
                                  <td>$1,500</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>
                              <tr>
                                  <td>INV-2025-210</td>
                                  <td>Jul 20, 2025</td>
                                  <td>$8,400</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>`;
        if (!d.includes('INV-2025-399')) {
            d = d.slice(0, tbodyIdx) + rows + '\n' + d.slice(tbodyIdx);
        }
    }
}

// 5. SAVED TOURS: Add to Saved Grid
const savedGridSearch = `<!-- Section 3: Price Alerts -->`;
injectBefore(savedGridSearch, `                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_16.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Cape Town</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_29.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Dubai, UAE</h4>
                              </div>
                          </div>
                      </div>\n`);
// Fix closing div
d = d.replace(`\n                      </div>\n                  </div>\n  \n                  <!-- Section 3: Price Alerts -->`, `\n                  </div>\n  \n                  <!-- Section 3: Price Alerts -->`);


fs.writeFileSync('dashboard.html', d);
console.log("Super robust injection completed!");
