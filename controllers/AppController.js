const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  static async getStatus(request, response) {
    response.status(200).json({
      redis: await redisClient.isAlive(),
      db: await dbClient.isAlive(),
    });
  }

  static async getStats(request, response) {
    response.status(200).json({
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    });
  }
}

module.exports = AppController;
