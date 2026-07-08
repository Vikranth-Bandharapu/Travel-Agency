const fs = require('fs');

function normalizeNewlines(str) {
    return str.replace(/\r\n/g, '\n');
}

let d = normalizeNewlines(fs.readFileSync('dashboard.html', 'utf8'));

// 1. Dashboard Tab: Trending Destinations Grid (add 2 more cards)
const destSearch = `                              <img src="assets/dest_paris.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Paris, France</h4>
                              </div>
                          </div>`;
const destInject = `
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_10.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Tokyo, Japan</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_16.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Cape Town</h4>
                              </div>
                          </div>`;
if(d.includes(destSearch) && !d.includes('Tokyo, Japan')) {
    d = d.replace(destSearch, destSearch + destInject);
}

// 2. Dashboard Tab: Add-ons
const addonSearch = `                                      <h4 style="margin:0 0 5px 0;">Travel Insurance</h4>
                                      <span style="font-size:0.8rem; color:var(--text-secondary);">Comprehensive ? $120</span>
                                  </div>
                              </div>
                              <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Add</button>
                          </div>`;
const addonInject = `
                          <div class="flex-between" style="border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; margin-top: 15px;">
                              <div style="display:flex; align-items:center; gap: 15px;">
                                  <i class='bx bx-restaurant' style="font-size: 2rem; color: var(--accent-orange);"></i>
                                  <div>
                                      <h4 style="margin:0 0 5px 0;">Meal Plan Upgrade</h4>
                                      <span style="font-size:0.8rem; color:var(--text-secondary);">All-Inclusive Dining ? $200</span>
                                  </div>
                              </div>
                              <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Add</button>
                          </div>`;
if(d.includes(addonSearch) && !d.includes('Meal Plan Upgrade')) {
    d = d.replace(addonSearch, addonSearch + addonInject);
}


// 3. My Bookings Tab: Bookings Table (Add 2 MORE rows, to make it 4 or 5)
// Let's just find the closing </tbody> and inject right before it
const bookingTableBodySearch = `                              <tr>
                                  <td>Bali Bliss Retreat</td>
                                  <td>Mar 05 - Mar 15, 2026</td>
                                  <td>$3,200</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Book Again</button></td>
                              </tr>`;
const bookingTableInject = `
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
if(d.includes(bookingTableBodySearch) && !d.includes('African Safari')) {
    d = d.replace(bookingTableBodySearch, bookingTableBodySearch + bookingTableInject);
}


// 4. Saved Tours Tab: Categories Grid (Add 1 more)
const categorySearch = `                      <div class="dash-card" style="text-align: center; padding: 15px; cursor:pointer;" onclick="window.location.href='404.html'">
                          <i class='bx bx-buildings' style="font-size: 2rem; color: var(--accent-orange);"></i>
                          <h4 style="margin: 10px 0 0 0; font-size: 0.9rem;">Cities</h4>
                      </div>`;
const categoryInject = `
                      <div class="dash-card" style="text-align: center; padding: 15px; cursor:pointer;" onclick="window.location.href='404.html'">
                          <i class='bx bx-tree' style="font-size: 2rem; color: var(--accent-green);"></i>
                          <h4 style="margin: 10px 0 0 0; font-size: 0.9rem;">Nature</h4>
                      </div>`;
if(d.includes(categorySearch) && !d.includes('>Nature<')) {
    d = d.replace(categorySearch, categorySearch + categoryInject);
}


// 5. Saved Tours Tab: Recommended Grid (Add 2 more cards)
const recSearch = `                              <div>
                                  <h4 style="margin:0 0 5px 0;">Santorini Island Hopping</h4>
                                  <span style="font-size:0.8rem; color:var(--text-secondary);">Because you liked "Beaches"</span>
                              </div>
                          </div>
                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Explore</button>
                      </div>`;
const recInject = `
                      <div class="flex-between" style="border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; margin-top: 15px;">
                          <div style="display:flex; align-items:center; gap: 15px; flex:1;">
                              <img src="assets/opt_img_29.webp" style="width: 60px; height: 60px; border-radius: 10px; object-fit:cover;">
                              <div>
                                  <h4 style="margin:0 0 5px 0;">Dubai Desert Safari</h4>
                                  <span style="font-size:0.8rem; color:var(--text-secondary);">Trending in your area</span>
                              </div>
                          </div>
                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Explore</button>
                      </div>
                      <div class="flex-between" style="border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; margin-top: 15px;">
                          <div style="display:flex; align-items:center; gap: 15px; flex:1;">
                              <img src="assets/dest_paris.webp" style="width: 60px; height: 60px; border-radius: 10px; object-fit:cover;">
                              <div>
                                  <h4 style="margin:0 0 5px 0;">Paris Romance Tour</h4>
                                  <span style="font-size:0.8rem; color:var(--text-secondary);">Highly rated this week</span>
                              </div>
                          </div>
                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Explore</button>
                      </div>`;
if(d.includes(recSearch) && !d.includes('Dubai Desert Safari')) {
    d = d.replace(recSearch, recSearch + recInject);
}


// 6. Payments Tab: Saved Payment Methods
const payMethodSearch = `                                  <span style="font-size:0.8rem; color:var(--text-secondary);">Expires 12/28</span>
                              </div>
                          </div>
                          <div>
                              <button class="dash-btn dash-btn-outline" style="padding: 3px 10px; font-size: 0.7rem; border:none; color:var(--text-secondary);" onclick="window.location.href='404.html'">Remove</button>
                          </div>
                      </div>`;
const payMethodInject = `
                      <div class="flex-between" style="border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; margin-top: 15px;">
                          <div style="display:flex; align-items:center; gap: 15px;">
                              <div style="width: 40px; height: 25px; background: #eee; border-radius: 3px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:0.7rem; color:#333;">PYPL</div>
                              <div>
                                  <h4 style="margin:0 0 5px 0;">PayPal Account</h4>
                                  <span style="font-size:0.8rem; color:var(--text-secondary);">john.doe@example.com</span>
                              </div>
                          </div>
                          <div>
                              <button class="dash-btn dash-btn-outline" style="padding: 3px 10px; font-size: 0.7rem; border:none; color:var(--text-secondary);" onclick="window.location.href='404.html'">Remove</button>
                          </div>
                      </div>`;
if(d.includes(payMethodSearch) && !d.includes('PayPal Account')) {
    d = d.replace(payMethodSearch, payMethodSearch + payMethodInject);
}


// 7. Payments Tab: Invoices Table (Add 2 more rows)
const invoiceBodySearch = `                              <tr>
                                  <td>INV-2026-042</td>
                                  <td>Feb 01, 2026</td>
                                  <td>$3,200</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>`;
const invoiceInject = `
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
if(d.includes(invoiceBodySearch) && !d.includes('INV-2025-399')) {
    d = d.replace(invoiceBodySearch, invoiceBodySearch + invoiceInject);
}

fs.writeFileSync('dashboard.html', d);
console.log("Added more content to specific tabs!");
