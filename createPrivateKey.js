const crypto = require('crypto');
const ripemd160 = require('ripemd160');
ethUtil = require('ethereumjs-util');


function generatePrivateKey() {
  const privateKey = crypto.randomBytes(32);
  console.log(`Public Address: 0x${privateKey.toString('hex')}`);

  const privateKeyBuffer = Buffer.from(privateKey, 'hex');
  const publicKey = ethUtil.privateToPublic(privateKeyBuffer);
  const publicAddress = ethUtil.publicToAddress(publicKey).toString('hex');
  console.log(`Public Address: 0x${publicAddress}`);
}

generatePrivateKey()

