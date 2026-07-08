const fs = require('fs');

try {
    let dash = fs.readFileSync('dashboard.html', 'utf8');

    // Dashboard: Bookings Table
    const bookingMatch = `                              <tr>
                                  <td>Magical Venice & Rome</td>
                                  <td>Nov 10 - Nov 17, 2026</td>
                                  <td>$5,100</td>
                                  <td><span class="badge badge-warning">Upcoming</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Manage</button></td>
                              </tr>`;
    const bookingExtra = `
                              <tr>
                                  <td>Kyoto Sakura Tour</td>
                                  <td>Apr 02 - Apr 10, 2027</td>
                                  <td>$3,800</td>
                                  <td><span class="badge badge-warning">Upcoming</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Manage</button></td>
                              </tr>
                              <tr>
                                  <td>Maldives Escape</td>
                                  <td>Jan 15 - Jan 22, 2027</td>
                                  <td>$4,200</td>
                                  <td><span class="badge badge-warning">Upcoming</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Manage</button></td>
                              </tr>`;
    dash = dash.replace(bookingMatch, bookingMatch + bookingExtra);

    // Dashboard: Invoices Table
    const invoiceMatch = `                              <tr>
                                  <td>INV-2026-089</td>
                                  <td>Sep 12, 2026</td>
                                  <td>$5,100</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>`;
    const invoiceExtra = `
                              <tr>
                                  <td>INV-2026-112</td>
                                  <td>Oct 05, 2026</td>
                                  <td>$2,400</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>
                              <tr>
                                  <td>INV-2026-120</td>
                                  <td>Nov 22, 2026</td>
                                  <td>$800</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>`;
    dash = dash.replace(invoiceMatch, invoiceMatch + invoiceExtra);

    fs.writeFileSync('dashboard.html', dash);

    // Agent Dashboard
    let agent = fs.readFileSync('agent_dashboard.html', 'utf8');

    // Agent: Approvals Table
    const approvalMatch = `                              <tr>
                                  <td>#A-9082</td>
                                  <td>Sarah Jenkins</td>
                                  <td>Kyoto Temples</td>
                                  <td>Apr 12 - Apr 20, 2026</td>
                                  <td>
                                      <div style="display:flex; gap:10px;">
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Approve</button>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem; border-color: var(--accent-red); color: var(--accent-red);" onclick="window.location.href='404.html'">Decline</button>
                                      </div>
                                  </td>
                              </tr>`;
    const approvalExtra = `
                              <tr>
                                  <td>#A-9083</td>
                                  <td>Michael Ross</td>
                                  <td>Dubai Luxury</td>
                                  <td>May 05 - May 10, 2026</td>
                                  <td>
                                      <div style="display:flex; gap:10px;">
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Approve</button>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem; border-color: var(--accent-red); color: var(--accent-red);" onclick="window.location.href='404.html'">Decline</button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>#A-9084</td>
                                  <td>Emily Chen</td>
                                  <td>Swiss Alps</td>
                                  <td>Jun 15 - Jun 22, 2026</td>
                                  <td>
                                      <div style="display:flex; gap:10px;">
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Approve</button>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem; border-color: var(--accent-red); color: var(--accent-red);" onclick="window.location.href='404.html'">Decline</button>
                                      </div>
                                  </td>
                              </tr>`;
    agent = agent.replace(approvalMatch, approvalMatch + approvalExtra);

    // Agent: Active Tours Table
    const activeMatch = `                              <tr>
                                  <td>Magical Venice & Rome</td>
                                  <td>18 / 20</td>
                                  <td><span class="badge badge-success">Active</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                              </tr>`;
    const activeExtra = `
                              <tr>
                                  <td>Kyoto Autumn Leaves</td>
                                  <td>12 / 15</td>
                                  <td><span class="badge badge-success">Active</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                              </tr>
                              <tr>
                                  <td>New York Winter</td>
                                  <td>5 / 25</td>
                                  <td><span class="badge badge-warning">Filling Fast</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                              </tr>`;
    agent = agent.replace(activeMatch, activeMatch + activeExtra);

    // Agent: Payouts Table
    const payoutMatch = `                              <tr>
                                  <td>Oct 01, 2026</td>
                                  <td>$12,400.00</td>
                                  <td>**** **** 5678</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                              </tr>`;
    const payoutExtra = `
                              <tr>
                                  <td>Nov 01, 2026</td>
                                  <td>$14,200.00</td>
                                  <td>**** **** 5678</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                              </tr>
                              <tr>
                                  <td>Dec 01, 2026</td>
                                  <td>$8,900.00</td>
                                  <td>**** **** 5678</td>
                                  <td><span class="badge badge-warning">Processing</span></td>
                              </tr>`;
    agent = agent.replace(payoutMatch, payoutMatch + payoutExtra);

    fs.writeFileSync('agent_dashboard.html', agent);

    console.log('Added table rows!');
} catch (e) {
    console.error(e);
}
