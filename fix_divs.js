const fs = require('fs');

let html = fs.readFileSync('dashboard.html', 'utf8');

// We will parse the HTML string and keep a stack of div tags.
// If we encounter a </div> and the stack is empty (or we're at the root level we care about), we remove it.
// Actually, because other tags are involved, counting only <div> and </div> is enough if we ignore self-closing or other tags since they balance themselves, BUT </div> must specifically match <div>.

let divCount = 0;
let newHtml = "";
let i = 0;

while (i < html.length) {
    if (html.substring(i, i + 4) === '<div') {
        divCount++;
        newHtml += '<div';
        i += 4;
    } else if (html.substring(i, i + 6) === '</div>') {
        if (divCount > 0) {
            divCount--;
            newHtml += '</div>';
        } else {
            // Unmatched closing div, skip it!
            console.log("Removed unmatched </div> at index", i);
        }
        i += 6;
    } else {
        newHtml += html[i];
        i++;
    }
}

fs.writeFileSync('dashboard.html', newHtml);
console.log('Final open divs left over:', divCount);
