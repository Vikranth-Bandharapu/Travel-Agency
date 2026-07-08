const fs = require('fs');

const lines = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity\\brain\\b2cde132-5d52-4828-86fc-d3b76bb5adf0\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');

let bestHtml = null;

for (let line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        
        // Search in tool calls (if I wrote it or viewed it before)
        if (obj.tool_calls) {
            for (let t of obj.tool_calls) {
                if ((t.name === 'default_api:write_to_file' || t.name === 'write_to_file') && t.arguments && t.arguments.TargetFile && t.arguments.TargetFile.endsWith('404.html')) {
                    if (t.arguments.CodeContent && !t.arguments.CodeContent.includes('background: #F4F7FE')) {
                        bestHtml = t.arguments.CodeContent;
                    }
                }
            }
        }
        
        // Search in responses (if I viewed it)
        if (obj.type === 'PLANNER_RESPONSE' || obj.type === 'MODEL_RESPONSE' || obj.type === 'TOOL_RESPONSE' || obj.type === 'SYSTEM_CALL_RESPONSE') {
            if (obj.content && obj.content.includes('<title>404 - Page Not Found</title>') && !obj.content.includes('background: #F4F7FE')) {
                // Try to extract HTML
                const match = obj.content.match(/<!DOCTYPE html>[\s\S]*?<\/html>/);
                if (match) {
                    bestHtml = match[0];
                }
            }
        }
    } catch(e) {}
}

if (bestHtml) {
    fs.writeFileSync('404_recovered.html', bestHtml);
    console.log("Recovered 404.html!");
} else {
    console.log("Could not find previous 404.html. Will search other properties.");
}
