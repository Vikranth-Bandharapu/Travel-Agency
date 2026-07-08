const fs = require('fs');

// 1. Add table responsive CSS to dashboard_v5.css
let css = fs.readFileSync('dashboard_v5.css', 'utf8');
if (!css.includes('.table-responsive')) {
    css += `
/* Responsive tables */
.table-responsive {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 15px;
}
.table-responsive table {
    min-width: 800px;
}
@media (max-width: 992px) {
    .dash-topbar-right {
        margin-left: auto;
    }
}
@media (max-width: 576px) {
    .dash-topbar {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    .dash-topbar-right {
        margin-left: 0;
        width: 100%;
        justify-content: flex-start;
    }
    .mobile-logo { display: none; } /* Hide logo on small mobile if it breaks flex */
}
`;
    fs.writeFileSync('dashboard_v5.css', css);
    console.log('Updated dashboard_v5.css');
}

// 2. Wrap tables in HTML
const htmlFiles = ['dashboard.html', 'agent_dashboard.html'];
for (const file of htmlFiles) {
    let html = fs.readFileSync(file, 'utf8');
    
    // Simple logic: we find <table class="dash-table"> and </table>
    // And if it's not already wrapped in <div class="table-responsive">, we wrap it.
    
    // We can do this safely using regex
    if (!html.includes('<div class="table-responsive">')) {
        // Replace <table class="dash-table">
        html = html.replace(/<table class="dash-table">/g, '<div class="table-responsive">\n<table class="dash-table">');
        // Replace </table>
        html = html.replace(/<\/table>/g, '</table>\n</div>');
        fs.writeFileSync(file, html);
        console.log(`Wrapped tables in ${file}`);
    }
}

console.log('Responsiveness fixes applied.');
