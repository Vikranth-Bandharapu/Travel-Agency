const fs = require('fs');

try {
    let dash = fs.readFileSync('dashboard.html', 'utf8');

    const match = `<div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_10.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Tokyo, Japan</h4>
                              </div>
                          </div>`;
    
    const extra = `
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_16.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Cape Town</h4>
                              </div>
                          </div>
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_29.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Dubai, UAE</h4>
                              </div>
                          </div>`;

    if (dash.includes(match)) {
        dash = dash.replace(match, match + '\n' + extra);
        fs.writeFileSync('dashboard.html', dash);
        console.log('Added cards to Saved Grid!');
    } else {
        console.log('Match not found.');
    }
} catch (e) {
    console.error(e);
}
