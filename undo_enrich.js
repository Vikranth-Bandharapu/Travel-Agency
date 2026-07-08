const fs = require('fs');

const extractVar = (script, varName) => {
    let match = script.match(new RegExp('const ' + varName + ' = \\`([\\s\\S]*?)\\`;'));
    return match ? match[1] : '';
};

try {
    let enrichDash = fs.readFileSync('enrich_dashboard.js', 'utf8');
    let enrichAgent = fs.readFileSync('enrich_agent_dashboard.js', 'utf8');

    let dashHtml = fs.readFileSync('dashboard.html', 'utf8');
    let agentHtml = fs.readFileSync('agent_dashboard.html', 'utf8');

    ['tab1_additions', 'tab2_additions', 'tab3_additions', 'tab4_additions', 'tab5_additions'].forEach(v => {
        let snippet = extractVar(enrichDash, v);
        if (snippet) {
            dashHtml = dashHtml.replace(snippet, '');
        }
    });

    ['tab1_additions', 'tab2_additions', 'tab3_additions', 'tab4_additions', 'tab5_additions'].forEach(v => {
        let snippet = extractVar(enrichAgent, v);
        if (snippet) {
            agentHtml = agentHtml.replace(snippet, '');
        }
    });

    fs.writeFileSync('dashboard.html', dashHtml);
    fs.writeFileSync('agent_dashboard.html', agentHtml);
    console.log('Successfully reverted dashboard content!');
} catch(e) {
    console.error(e);
}
