const
    path = require('path'),
    express = require('express');

const 
    app = express(),
    port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

let hitCount = 0;
app.get('/api/hit-count', (req, res) => {
    hitCount++;
    res.json({ hitCount });
});

app.listen(port, () => {
    console.log('Server running on http://127.0.0.1:%s', port);
});
