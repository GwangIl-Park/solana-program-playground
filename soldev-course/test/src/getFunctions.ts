import { Connection, Keypair, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL, SystemProgram } from '@solana/web3.js';
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import fs from "fs";
import "dotenv/config";

const run = async() => {
  const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balance = await connection.getBalance(address);
console.log(balance)
console.log(balance/LAMPORTS_PER_SOL);
console.log(SystemProgram.programId);
  // const connection:Connection = new web3.Connection(web3.clusterApiUrl("devnet"));

  // const slot = await connection.getSlot();
  // console.log(`getSlot : ${slot}`);

  // const blockHeight = await connection.getBlockHeight();
  // console.log(`getBlockHeight : ${blockHeight}`);

  // const block = await connection.getBlock(slot);
  // console.log(`getBlock : ${block}`);

  // const keyPairPath = fs.readFileSync(`${__dirname}/../../wallet/my-keypair.json`, 'utf-8');

  // const keyPairFromFile = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(keyPairPath)));

  // console.log(`fileKeypair publicKey : ${keyPairFromFile.publicKey.toBase58()}`);
  // console.log(`fileKeypair secretKey : ${keyPairFromFile.secretKey}`);

  // const accountInfo = await connection.getAccountInfo(keyPairFromFile.publicKey);

  // console.log(`accountInfo : ${accountInfo}`);

  // const balance = await connection.getBalance(keyPairFromFile.publicKey);

  // console.log(`balance : ${balance}`);

  // const newKeypair = Keypair.generate();

  // console.log(`newKeypair publicKey : ${newKeypair.publicKey.toBase58()}`);
  // console.log(`newKeypair secretKey : ${newKeypair.secretKey}`);

  // const envKeypair = getKeypairFromEnvironment("SECRET_KEY");

  // console.log(`envKeypair publicKey : ${envKeypair.publicKey.toBase58()}`);
  // console.log(`envKeypair secretKey : ${envKeypair.secretKey}`);
}

run();