const fs = require('fs');

function addMoreSectionsTraveler() {
    let html = fs.readFileSync('dashboard.html', 'utf8');
    
    const additionalTravelerSections = `
                <div class="grid-2" style="margin-top: 30px;">
                    <!-- Travel Documents -->
                    <div class="dash-section">
                        <div class="dash-section-header">
                            <h3 style="color: #333; font-size: 1.3rem;">Travel Documents</h3>
                        </div>
                        <ul style="list-style: none; padding: 0;">
                            <li style="display: flex; align-items: center; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid #eee;">
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="background: rgba(10, 35, 46, 0.1); color: var(--color-primary); padding: 10px; border-radius: 8px;"><i class='bx bx-file-blank' style="font-size: 1.5rem;"></i></div>
                                    <div>
                                        <h4 style="margin: 0; color: #333; font-size: 1rem;">E-Ticket - Santorini</h4>
                                        <span style="font-size: 0.8rem; color: #666;">PDF • 2.4 MB</span>
                                    </div>
                                </div>
                                <a href="#" style="color: var(--color-accent); font-size: 1.2rem;"><i class='bx bx-download'></i></a>
                            </li>
                            <li style="display: flex; align-items: center; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid #eee;">
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div style="background: rgba(10, 35, 46, 0.1); color: var(--color-primary); padding: 10px; border-radius: 8px;"><i class='bx bx-map-alt' style="font-size: 1.5rem;"></i></div>
                                    <div>
                                        <h4 style="margin: 0; color: #333; font-size: 1rem;">Full Itinerary</h4>
                                        <span style="font-size: 0.8rem; color: #666;">PDF • 1.1 MB</span>
                                    </div>
                                </div>
                                <a href="#" style="color: var(--color-accent); font-size: 1.2rem;"><i class='bx bx-download'></i></a>
                            </li>
                        </ul>
                    </div>

                    <!-- Loyalty Progress -->
                    <div class="dash-section">
                        <div class="dash-section-header">
                            <h3 style="color: #333; font-size: 1.3rem;">Aura Loyalty Status</h3>
                        </div>
                        <div style="background: #0A232E; color: white; padding: 25px; border-radius: var(--radius-sm); position: relative; overflow: hidden;">
                            <i class='bx bxs-star' style="position: absolute; right: -20px; top: -20px; font-size: 8rem; color: rgba(255,255,255,0.05);"></i>
                            <h4 style="color: var(--color-accent); font-family: var(--font-secondary); font-size: 1.5rem; margin-bottom: 5px;">Gold Member</h4>
                            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 20px;">4,500 / 10,000 Points to Platinum</p>
                            
                            <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 15px;">
                                <div style="width: 45%; height: 100%; background: var(--color-accent); border-radius: 4px;"></div>
                            </div>
                            <p style="font-size: 0.8rem; opacity: 0.9;">Earn 500 points on your next booking to unlock free lounge access.</p>
                        </div>
                    </div>
                </div>
    `;

    if (!html.includes('Travel Documents')) {
        // Find the end of the overview tab content to inject this.
        // It's just before <!-- TAB 2: BOOKINGS -->
        html = html.replace('<!-- TAB 2: BOOKINGS -->', additionalTravelerSections + '\n\n            <!-- TAB 2: BOOKINGS -->');
        fs.writeFileSync('dashboard.html', html, 'utf8');
        console.log('Added sections to dashboard.html');
    }
}

function addMoreSectionsAgent() {
    let html = fs.readFileSync('agent_dashboard.html', 'utf8');
    
    const additionalAgentSections = `
                <!-- Quick Actions & Upcoming -->
                <div class="grid-2" style="margin-top: 30px;">
                    <!-- Quick Actions -->
                    <div class="dash-section">
                        <h3 style="color: #333; font-size: 1.3rem; margin-bottom: 20px;">Quick Actions</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <button class="btn btn-primary" style="padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-file-blank' style="font-size: 1.8rem;"></i> Create Quote
                            </button>
                            <button class="btn btn-secondary" style="background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-message-square-dots' style="font-size: 1.8rem;"></i> Message Client
                            </button>
                            <button class="btn btn-secondary" style="background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-calendar-event' style="font-size: 1.8rem;"></i> Schedule Call
                            </button>
                            <button class="btn btn-secondary" style="background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-money' style="font-size: 1.8rem;"></i> Send Invoice
                            </button>
                        </div>
                    </div>

                    <!-- Upcoming Departures -->
                    <div class="dash-section">
                        <div class="dash-section-header">
                            <h3 style="color: #333; font-size: 1.3rem;">Upcoming Departures (Next 7 Days)</h3>
                        </div>
                        <div class="booking-list">
                            <div class="booking-item">
                                <div style="background: rgba(229, 124, 35, 0.1); color: var(--color-accent); padding: 15px; border-radius: 8px; font-weight: bold; text-align: center; min-width: 60px;">
                                    <div style="font-size: 1.5rem;">12</div>
                                    <div style="font-size: 0.7rem; text-transform: uppercase;">Aug</div>
                                </div>
                                <div class="booking-info">
                                    <h4>The Henderson Family (4)</h4>
                                    <p>Flight AF120 • Paris CDG</p>
                                </div>
                                <div class="booking-status status-upcoming">Tomorrow</div>
                            </div>
                            <div class="booking-item">
                                <div style="background: rgba(10, 35, 46, 0.1); color: var(--color-primary); padding: 15px; border-radius: 8px; font-weight: bold; text-align: center; min-width: 60px;">
                                    <div style="font-size: 1.5rem;">15</div>
                                    <div style="font-size: 0.7rem; text-transform: uppercase;">Aug</div>
                                </div>
                                <div class="booking-info">
                                    <h4>David Smith</h4>
                                    <p>Flight EK30 • Dubai DXB</p>
                                </div>
                                <div class="booking-status status-completed">In 4 Days</div>
                            </div>
                        </div>
                    </div>
                </div>
    `;

    if (!html.includes('Quick Actions & Upcoming')) {
        html = html.replace('<!-- TAB 2: MANAGE BOOKINGS -->', additionalAgentSections + '\n\n            <!-- TAB 2: MANAGE BOOKINGS -->');
        fs.writeFileSync('agent_dashboard.html', html, 'utf8');
        console.log('Added sections to agent_dashboard.html');
    }
}

addMoreSectionsTraveler();
addMoreSectionsAgent();
