const { createClient } = require('redis');  // Import Redis client

// Create Redis client instance
const redisClient = createClient({
    url: 'redis://localhost:6379'  // Redis connection string (default Redis host and port)
});

// Connect to Redis
redisClient.connect()
    .then(() => {
        console.log('Connected to Redis');
    })
    .catch((err) => {
        console.error('Error connecting to Redis:', err);
    });

// Handle Redis errors
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = redisClient;
