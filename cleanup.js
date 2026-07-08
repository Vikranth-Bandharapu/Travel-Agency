const fs = require('fs');
const cheerio = require('cheerio');

// 1. DASHBOARD CLEANUP
let dHtml = fs.readFileSync('dashboard.html', 'utf8');
let $d = cheerio.load(dHtml);

const removeCardByH3 = (title) => {
    $d(`h3:contains("${title}")`).closest('.dash-card').remove();
};
const removeCardByH4 = (title) => {
    $d(`h4:contains("${title}")`).closest('.dash-card').remove();
};
const removeStatByH4 = (title) => {
    $d(`h4:contains("${title}")`).closest('.stat-widget').remove();
};
const removeGridCardByH4 = (title) => {
    $d(`h4:contains("${title}")`).closest('div[onclick]').remove();
};
const removeFlexByH4 = (title) => {
    $d(`h4:contains("${title}")`).closest('.flex-between').remove();
};
const removeTrByTd = (text) => {
    $d(`td:contains("${text}")`).closest('tr').remove();
};

// Undo `add_specific_sections.js`
removeCardByH3("Recent Activity");
removeCardByH3("Quick Actions");
removeCardByH3("Important Documents");
removeCardByH3("Special Requests");
removeCardByH3("Awaiting Your Review");
removeCardByH3("Price Drop Alerts");
removeCardByH3("Share Your Wishlist");
removeCardByH3("Compare Selected Tours");
removeCardByH3("Reward Points Balance");
removeCardByH3("Scheduled Installments");
removeCardByH3("Billing Information");
removeCardByH3("Developer API Access");
removeCardByH3("Connected Applications");
removeCardByH3("Privacy Settings");
$d(`h4:contains("Tip of the Day")`).closest('.dash-card').remove();

// Undo `add_super_content.js`
removeStatByH4("Saved Tours");
removeStatByH4("Reward Points");
removeGridCardByH4("Dubai, UAE");
removeGridCardByH4("Santorini");
removeGridCardByH4("Grand Canyon");
removeTrByTd("London Highlights");
removeTrByTd("Rome Ancient Tour");
removeTrByTd("Sydney Harbor Escape");
removeTrByTd("Egypt Pyramids");
removeGridCardByH4("Machu Picchu");
removeGridCardByH4("Taj Mahal");
removeGridCardByH4("Great Wall");
removeGridCardByH4("Bora Bora");
removeFlexByH4("Swiss Alps Expedition");
removeTrByTd("INV-2024-890");
removeTrByTd("INV-2024-712");
removeTrByTd("INV-2024-540");
removeTrByTd("INV-2024-331");
removeTrByTd("INV-2024-105");

// Undo `robust_inject.js` & `add_final_content.js`
removeFlexByH4("Meal Plan Upgrade");
removeTrByTd("African Safari");
removeTrByTd("New York Getaway");
removeGridCardByH4("Historical");
removeGridCardByH4("Nature");
removeGridCardByH4("Cape Town");
removeFlexByH4("Dubai Desert Safari");
removeFlexByH4("Paris Romance Tour");
removeFlexByH4("PayPal Account");
removeTrByTd("INV-2025-399");
removeTrByTd("INV-2025-210");

fs.writeFileSync('dashboard.html', $d.html());


// 2. AGENT DASHBOARD CLEANUP
let aHtml = fs.readFileSync('agent_dashboard.html', 'utf8');
let $a = cheerio.load(aHtml);

const removeAgentCardByH3 = (title) => {
    $a(`h3:contains("${title}")`).closest('.dash-card').remove();
};

// Undo `add_specific_sections.js`
removeAgentCardByH3("Monthly Target");
removeAgentCardByH3("Agency Announcements");
removeAgentCardByH3("Top Selling Regions (Your Portfolio)");
removeAgentCardByH3("Automation Rules");
removeAgentCardByH3("Revisions Needed");
removeAgentCardByH3("Recent Decisions");
removeAgentCardByH3("Portfolio Analytics");
removeAgentCardByH3("Recent Feedback");
// Note: "Unpublished Drafts" existed BEFORE my script as Section 8? Actually I injected Section 8!
// Let me look at my script: `<!-- Section 8: Draft Tours -->\n<div class="dash-card"`
// Wait, my script injected "Unpublished Drafts" for agentActiveTours. I will remove it.
removeAgentCardByH3("Unpublished Drafts");
removeAgentCardByH3("YTD Earnings");
removeAgentCardByH3("Current Tier");
removeAgentCardByH3("Linked Accounts");
removeAgentCardByH3("CRM Integrations");
removeAgentCardByH3("White-label Branding");
removeAgentCardByH3("Team Access");

fs.writeFileSync('agent_dashboard.html', $a.html());

console.log("Cleanup complete!");
