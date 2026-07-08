const fs = require('fs');

['dashboard.html', 'agent_dashboard.html'].forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    let start = (c.match(/<div/gi) || []).length;
    let end = (c.match(/<\/div>/gi) || []).length;
    
    if (end > start) {
        let diff = end - start;
        for (let i = 0; i < diff; i++) {
            c = c.replace(/<\/div>\s*(?![\s\S]*<\/div>)/i, '');
        }
        console.log(f, 'removed', diff, 'closing divs');
    } else if (start > end) {
        let diff = start - end;
        let injectLoc = c.lastIndexOf('</main>');
        if (injectLoc !== -1) {
            c = c.slice(0, injectLoc) + '</div>\n'.repeat(diff) + c.slice(injectLoc);
        } else {
            let idx = c.lastIndexOf('</body>');
            if(idx !== -1) c = c.slice(0, idx) + '</div>\n'.repeat(diff) + c.slice(idx);
        }
        console.log(f, 'added', diff, 'closing divs');
    } else {
        console.log(f, 'is BALANCED');
    }
    
    fs.writeFileSync(f, c, 'utf8');
});
