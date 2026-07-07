const fs=require("fs");
const newFooter = `    <div class="footer-inner" style="background-color: #000000; padding: 60px 0 0;">
        <div class="container">
            <div class="footer-grid" style="grid-template-columns: 2fr 1fr 1fr 1.5fr;">
                <div class="footer-col" data-aos="fade-up">
                    <a href="index.html" class="logo">
                        <img src="assets/logo.webp" alt="Aura Travel" style="height: 40px; width: auto; margin-bottom: 20px;">
                    </a>
                    <p style="color: #A0B2BA; line-height: 1.6; max-width: 250px;">Enterprise luxury travel engineered for exceptional experiences. We curate bespoke itineraries and exclusive destinations, providing unparalleled service and extreme attention to detail for the modern traveler.</p>
                </div>
                <div class="footer-col" data-aos="fade-up" data-aos-delay="100">
                    <h3 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 20px;">Quick Links</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 12px;"><a href="index.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Home</a></li>
                        <li style="margin-bottom: 12px;"><a href="destinations.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Destinations</a></li>
                        <li style="margin-bottom: 12px;"><a href="tours.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Tours</a></li>
                        <li style="margin-bottom: 12px;"><a href="services.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Services</a></li>
                        <li style="margin-bottom: 12px;"><a href="blog.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Blog</a></li>
                        <li style="margin-bottom: 12px;"><a href="contact.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col" data-aos="fade-up" data-aos-delay="200">
                    <h3 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 20px;">Portal</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 12px;"><a href="404.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Login</a></li>
                        <li style="margin-bottom: 12px;"><a href="404.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Sign Up</a></li>
                        <li style="margin-bottom: 12px;"><a href="404.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Travel Portal</a></li>
                        <li style="margin-bottom: 12px;"><a href="404.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Partner Login</a></li>
                        <li style="margin-bottom: 12px;"><a href="404.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Agent Dashboard</a></li>
                        <li style="margin-bottom: 12px;"><a href="404.html" style="color: #A0B2BA; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='#A0B2BA'">Submit Inquiry</a></li>
                    </ul>
                </div>
                <div class="footer-col" data-aos="fade-up" data-aos-delay="300">
                    <h3 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 20px;">Contact Us</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 12px; color: #A0B2BA;"><i class='bx bx-envelope'></i> hello@aura.com</li>
                        <li style="margin-bottom: 12px; color: #A0B2BA;"><i class='bx bx-phone'></i> 9182736450</li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding: 20px 0; text-align: center; margin-top: 40px; background-color: #000000;">
            <p style="color: #666; font-size: 0.85rem; letter-spacing: 1px; margin: 0;">&copy; 2026 AURA TRAVEL. ALL RIGHTS RESERVED.</p>
        </div>
    </div>
</footer>`;

const files = fs.readdirSync(".").filter(f => f.endsWith(".html"));
files.forEach(f => {
    let c = fs.readFileSync(f, "utf8");
    const startIdx = c.indexOf('<div class="footer-inner"');
    if (startIdx !== -1) {
        const endIdx = c.indexOf('</footer>', startIdx);
        if (endIdx !== -1) {
            c = c.substring(0, startIdx) + newFooter + c.substring(endIdx + 9);
            fs.writeFileSync(f, c, "utf8");
            console.log("Updated", f);
        }
    }
});
