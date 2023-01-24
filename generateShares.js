const sss = require('shamirs-secret-sharing')
const prompt = require('prompt');
const crypto = require('crypto');



async function generateEncryptedShares(){
  try{
    prompt.start()
    let key = await prompt.get(['pv_key','password'])
    const shares = sss.split(key.pv_key, { shares: 3, threshold: 2 })
    let share1 = encryptPrivateKeyShare(shares[0].toString('base64'),key.password)
    let share2 = encryptPrivateKeyShare(shares[1].toString('base64'),key.password)
    let share3 = encryptPrivateKeyShare(shares[2].toString('base64'),key.password)

    console.log(share1,'\n')
    console.log(share2,'\n')
    console.log(share3,'\n')
  }
  catch(e){
    console.log("Error, please make sure inputs were entered correctly")
  }
}


encryptPrivateKeyShare = (share,password) => {
    let salt = crypto.randomBytes(16);
    let iv = crypto.randomBytes(16);
    let key = crypto.pbkdf2Sync(
      password,
      salt,
      100000,
      256 / 8,
      'sha256',
    );
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    cipher.write(share);
    cipher.end();
    let encrypted = cipher.read();
    return Buffer.concat([salt, iv, encrypted]).toString('base64');
  };

  generateEncryptedShares()