const fs = require('fs');

let css = fs.readFileSync('dashboard_v5.css', 'utf8');

if (!css.includes('font-size: 1.2rem; /* mobile h2 */')) {
    const additionalMobileCss = `
    .dash-topbar-left {
        gap: 10px !important;
        flex-wrap: wrap;
    }
    .dash-topbar-left h2 {
        font-size: 1.2rem; /* mobile h2 */
    }
    .dash-topbar-left p {
        font-size: 0.75rem;
    }
    `;
    
    // Inject into @media (max-width: 576px)
    // We already added @media (max-width: 576px) at the end of the file earlier
    css = css.replace(/@media \(max-width: 576px\) {/, '@media (max-width: 576px) {\n' + additionalMobileCss);
    
    fs.writeFileSync('dashboard_v5.css', css);
    console.log('Fixed mobile topbar title sizing.');
} else {
    console.log('Already fixed.');
}
