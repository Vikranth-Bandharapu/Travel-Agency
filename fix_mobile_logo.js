const fs = require('fs');

let css = fs.readFileSync('dashboard_v5.css', 'utf8');

// Replace `.mobile-logo img { filter: invert(1) opacity(0.8); }`
// With `.mobile-logo img { filter: invert(1) opacity(0.8); max-height: 25px; width: auto; }`

css = css.replace(/\.mobile-logo img\s*\{\s*filter:\s*invert\(1\)\s*opacity\(0\.8\);\s*\}/, 
    '.mobile-logo img {\n        filter: invert(1) opacity(0.8);\n        max-height: 25px;\n        width: auto;\n    }');

fs.writeFileSync('dashboard_v5.css', css);
console.log('Fixed mobile-logo size.');
