const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');
if (!css.includes('#page-loader')) {
    css += `\n\n/* Page Loader */\n#page-loader {\n    position: fixed;\n    top: 0; left: 0;\n    width: 100%; height: 100%;\n    background: #000000;\n    z-index: 999999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: opacity 0.5s ease;\n}\n@keyframes pulseLoader {\n    0% { transform: scale(1); opacity: 0.8; }\n    50% { transform: scale(1.1); opacity: 1; }\n    100% { transform: scale(1); opacity: 0.8; }\n}\n#page-loader img {\n    height: 60px;\n    width: auto;\n    animation: pulseLoader 1.5s infinite ease-in-out;\n}\n`;
    fs.writeFileSync('styles.css', css, 'utf8');
    console.log('Updated styles.css');
}

const loaderHTML = `\n    <!-- Page Loader -->\n    <div id="page-loader">\n        <img src="assets/logo.webp" alt="Loading...">\n    </div>`;

const loaderScript = `\n    <script>\n        window.addEventListener("load", function() {\n            setTimeout(function() {\n                const loader = document.getElementById('page-loader');\n                if (loader) {\n                    loader.style.opacity = '0';\n                    setTimeout(() => loader.style.display = 'none', 500);\n                }\n            }, 2000);\n        });\n    </script>\n`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let html = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    if (!html.includes('id="page-loader"')) {
        const bodyRegex = /<body[^>]*>/i;
        const match = html.match(bodyRegex);
        if (match) {
            html = html.replace(bodyRegex, match[0] + loaderHTML);
            changed = true;
        }
    }
    
    if (!html.includes("loader.style.opacity = '0'")) {
        html = html.replace('</body>', loaderScript + '</body>');
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(f, html, 'utf8');
        console.log('Updated', f);
    }
});
