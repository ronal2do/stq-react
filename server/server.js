'use strict';

const app = require('./app');

const PORT = process.env.SERVERPORT || 3005;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
