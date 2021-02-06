module.exports = {
  "name": "default",
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": true,
  "logging": true,
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "entities": [
    `./dist/entities/*.js`
  ],
  "migrations": [
    `./dist/database/migrations/*.js`
  ],
  "cli": {
    "migrationsDir": `./dist/database/migrations`
  }
}