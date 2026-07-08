const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace all `<div class="tour-info">` with `<div class="tour-content">`
content = content.replace(/<div class="tour-info">/g, '<div class="tour-content">');

// We need to wrap the image directly following <div class="tour-card"...> in a <div class="tour-img">
// The structure is:
// <div class="tour-card" data-aos="...">
//     <img src="..." alt="...">
//     <div class="tour-content">
// Let's use a regex to match the tour-card div, and the img inside it.

content = content.replace(/(<div class="tour-card"[^>]*>\s*)<img src="([^"]+)" alt="([^"]+)">/g, 
  '$1<div class="tour-img"><img src="$2" alt="$3"></div>');

fs.writeFileSync('index.html', content);
console.log('Fixed index.html tour-card structures.');
