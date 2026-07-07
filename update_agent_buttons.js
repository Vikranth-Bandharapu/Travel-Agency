const fs = require('fs');

let html = fs.readFileSync('agent_dashboard.html', 'utf8');

html = html.replace(
    `<button class="btn btn-primary" style="padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-file-blank' style="font-size: 1.8rem;"></i> Create Quote
                            </button>`,
    `<button class="btn btn-primary" onclick="window.location.href='404.html'" style="cursor: pointer; padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-file-blank' style="font-size: 1.8rem;"></i> Create Quote
                            </button>`
);

html = html.replace(
    `<button class="btn btn-secondary" style="background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-message-square-dots' style="font-size: 1.8rem;"></i> Message Client
                            </button>`,
    `<button class="btn btn-secondary" onclick="window.location.href='404.html'" style="cursor: pointer; background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-message-square-dots' style="font-size: 1.8rem;"></i> Message Client
                            </button>`
);

html = html.replace(
    `<button class="btn btn-secondary" style="background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-calendar-event' style="font-size: 1.8rem;"></i> Schedule Call
                            </button>`,
    `<button class="btn btn-secondary" onclick="window.location.href='404.html'" style="cursor: pointer; background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-calendar-event' style="font-size: 1.8rem;"></i> Schedule Call
                            </button>`
);

html = html.replace(
    `<button class="btn btn-secondary" style="background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-money' style="font-size: 1.8rem;"></i> Send Invoice
                            </button>`,
    `<button class="btn btn-secondary" onclick="window.location.href='404.html'" style="cursor: pointer; background: rgba(10,35,46,0.1); color: var(--color-primary); padding: 15px; font-size: 0.9rem; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <i class='bx bx-money' style="font-size: 1.8rem;"></i> Send Invoice
                            </button>`
);

fs.writeFileSync('agent_dashboard.html', html, 'utf8');
console.log('done');
