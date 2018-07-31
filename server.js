const
    express = require('express');

const 
    app = express(),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => {
    res.send('Frontend');
});

app.listen(port, ip, () => {
    console.log('Server running on http://%s:%s', ip, port);
});
