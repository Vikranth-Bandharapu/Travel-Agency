const fs = require('fs');

const lines = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity\\brain\\b2cde132-5d52-4828-86fc-d3b76bb5adf0\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');

let bestHtml = null;

for (let line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (let t of obj.tool_calls) {
                if (t.name === 'default_api:write_to_file' || t.name === 'write_to_file') {
                    if (t.arguments && t.arguments.TargetFile && t.arguments.TargetFile.endsWith('dashboard.html')) {
                        if (t.arguments.CodeContent && t.arguments.CodeContent.includes('Aura Travel') && !t.arguments.CodeContent.includes('user_dash.css')) {
                            bestHtml = t.arguments.CodeContent;
                        }
                    }
                }
            }
        }
    } catch(e) {}
}

if (bestHtml) {
    fs.writeFileSync('dashboard_recovered.html', bestHtml);
    console.log("Recovered dashboard.html!");
} else {
    console.log("Could not find previous dashboard.html");
}
