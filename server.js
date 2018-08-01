const
    path = require('path'),
    express = require('express');

const 
    app = express(),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'build')));

let hitCount = 0;
app.get('/api/hit-count', (req, res) => {
    hitCount++;
    res.json({ hitCount });
});

app.listen(port, ip, () => {
    console.log('Server running on http://%s:%s', ip, port);
});
