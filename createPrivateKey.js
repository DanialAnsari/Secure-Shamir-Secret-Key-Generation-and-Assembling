const crypto = require('crypto');

function generatePrivateKey() {
  const key = crypto.randomBytes(32);
  return key.toString('hex');
}

console.log(generatePrivateKey())