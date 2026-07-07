const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Remove background-attachment: fixed; from .hero
css = css.replace('background-attachment: fixed;', '');

// Remove fixed from .newsletter-contact background shorthand
css = css.replace("background: url('assets/opt_img_28.webp') center/cover fixed;", "background: url('assets/opt_img_28.webp') center/cover;");

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Fixed parallax scrolling in styles.css');
