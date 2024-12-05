const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
   const publicDir = path.join('Meghana_travel_backend', 'public');

    if (event.path === '/') {
        // Serve index.html
        const filePath = path.join(publicDir, 'index.html');
        const content = fs.readFileSync(filePath, 'utf8');
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html' },
            body: content,
        };
    } else if (event.path === '/api') {
        // Serve data.json
        const filePath = path.join(publicDir, 'data.json');
        const content = fs.readFileSync(filePath, 'utf8');
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: content,
        };
    }
    // Handle 404 for other routes
    return {
        statusCode: 404,
        body: 'Not Found',
    };
};
