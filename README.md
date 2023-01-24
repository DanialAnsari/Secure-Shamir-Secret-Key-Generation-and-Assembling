# Secure-Shamir-Secret-Key-Generation-and-Assembling
Script created on node js to take a secret and generate 3 shares from it using shamirs secret algorithm. After which you will need any 2 shares to regenerate the secret.

## Steps
1) run npm i to install the dependencies
2) run **node generateShares.js**, input your secret along with a password which will be used as an encryption key to secure your shares.
3) 3 shares will be outputted, copy and secure them in a manner you see fit.
4) When you need to reassemble your key, run **node assembleShares.js**
5) input any 2 of the 3 shares provided to you initially along with the password you provided.
6) The pv_key will be displayed after which you can choose to send USDT to a recipient on ethereum mainnet.

## Precaution
Please validate that you are able to regenerate the shares properly with the shares you have generated using all 3 combinations.
