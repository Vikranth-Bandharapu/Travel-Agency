const fs = require('fs');

function getSections(tabName) {
    return `
                <!-- Added Section 1: ${tabName} Analytics -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.1rem; font-weight: 600;">${tabName} Analytics</h3>
                    </div>
                    <div class="dash-card" style="padding: 20px; background: white; border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid #eee;">
                        <p style="margin: 0; color: #555; font-size: 0.9rem;">Your analytics for this section are currently processing. Data will appear here soon.</p>
                    </div>
                </div>

                <!-- Added Section 2: ${tabName} History -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.1rem; font-weight: 600;">${tabName} History</h3>
                    </div>
                    <div class="dash-card" style="padding: 20px; background: white; border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid #eee;">
                        <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 0.9rem;">
                            <li style="margin-bottom: 5px;">Viewed recent items in ${tabName}</li>
                            <li>Updated preferences for ${tabName}</li>
                        </ul>
                    </div>
                </div>

                <!-- Added Section 3: ${tabName} Support -->
                <div class="dash-section" style="margin-top: 30px;">
                    <div class="dash-section-header">
                        <h3 style="color: #333; font-size: 1.1rem; font-weight: 600;">${tabName} Support</h3>
                    </div>
                    <div class="dash-card" style="padding: 20px; background: white; border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid #eee;">
                        <p style="margin: 0; color: #555; font-size: 0.9rem;">Need help with ${tabName}? Contact our support team at <strong style="color: var(--color-primary);">support@auratravel.com</strong>.</p>
                    </div>
                </div>
`;
}

try {
    // DASHBOARD.HTML
    let d = fs.readFileSync('dashboard.html', 'utf8');
    
    // Tab 1
    d = d.replace('<!-- TAB 2: MY BOOKINGS -->', getSections('Overview') + '\n            <!-- TAB 2: MY BOOKINGS -->');
    // Tab 2
    d = d.replace('<!-- TAB 3: SAVED TOURS -->', getSections('Bookings') + '\n            <!-- TAB 3: SAVED TOURS -->');
    // Tab 3
    d = d.replace('<!-- TAB 4: PAYMENTS -->', getSections('Saved Tours') + '\n            <!-- TAB 4: PAYMENTS -->');
    // Tab 4
    d = d.replace('<!-- TAB 5: SETTINGS -->', getSections('Payments') + '\n            <!-- TAB 5: SETTINGS -->');
    // Tab 5
    let d_inject = d.lastIndexOf('</main>');
    if (d_inject !== -1) {
        // Need to close the form/div correctly before injecting. 
        // We know from before that settings tab ends with form and cards.
        // It's safer to just inject right before </main>
        d = d.slice(0, d_inject) + getSections('Settings') + '\n    ' + d.slice(d_inject);
    }
    
    fs.writeFileSync('dashboard.html', d);
    
    // AGENT_DASHBOARD.HTML
    let a = fs.readFileSync('agent_dashboard.html', 'utf8');
    
    // Tab 1
    a = a.replace('<!-- TAB 2: APPROVALS -->', getSections('Agent Overview') + '\n            <!-- TAB 2: APPROVALS -->');
    // Tab 2
    a = a.replace('<!-- TAB 3: ACTIVE TOURS -->', getSections('Approvals') + '\n            <!-- TAB 3: ACTIVE TOURS -->');
    // Tab 3
    a = a.replace('<!-- TAB 4: PAYOUTS -->', getSections('Active Tours') + '\n            <!-- TAB 4: PAYOUTS -->');
    // Tab 4
    a = a.replace('<!-- TAB 5: SETTINGS -->', getSections('Payouts') + '\n            <!-- TAB 5: SETTINGS -->');
    // Tab 5
    let a_inject = a.lastIndexOf('</main>');
    if (a_inject !== -1) {
        a = a.slice(0, a_inject) + getSections('Agent Settings') + '\n    ' + a.slice(a_inject);
    }
    
    fs.writeFileSync('agent_dashboard.html', a);
    
    console.log("3 sections added to EVERY tab successfully!");

} catch (e) {
    console.error(e);
}
