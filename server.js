const express = require('express');
let port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(port, console.log(`Listening on port ${port}`));
