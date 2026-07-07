const fs=require("fs"); let c=fs.readFileSync("index.html", "utf8"); let idx = c.indexOf(`<div class="container" style="margin-top: 50px;">`); console.log(idx);
