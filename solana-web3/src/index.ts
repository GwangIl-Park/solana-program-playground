import web3, { Connection, Keypair } from '@solana/web3.js';
import fs from 'fs';

const run = async() => {
  const connection:Connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

  const slot = await connection.getSlot();
  console.log(`getSlot : ${slot}`);

  const blockHeight = await connection.getBlockHeight();
  console.log(`getBlockHeight : ${blockHeight}`);

  const block = await connection.getBlock(slot);
  console.log(`getBlock : ${block}`);

  const keyPair = fs.readFileSync(`${__dirname}/../../wallet/my-keypair.json`, 'utf-8');

  const account = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(keyPair)));

  console.log(`Public Key ${account.publicKey.toString()}`);

  const accountInfo = await connection.getAccountInfo(account.publicKey);

  console.log(`accountInfo : ${accountInfo}`);

  const balance = await connection.getBalance(account.publicKey);

  console.log(`balance : ${balance}`);
}

run();