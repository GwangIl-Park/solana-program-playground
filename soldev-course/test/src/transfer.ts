import { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import fs from 'fs';

const run = async() => {
  const connection:Connection = new Connection(clusterApiUrl("devnet"), "confirmed");


  const keyPair = fs.readFileSync(`${__dirname}/../../wallet/my-keypair.json`, 'utf-8');

  const account = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(keyPair)));

  let senderBalance = await connection.getBalance(account.publicKey);

  console.log(`[BEFORE] ${"sender".padEnd(8)} ${account.publicKey.toString()} balance : ${senderBalance}`);

  const receiverAddess = new PublicKey('6dxc7pz5kawb1jfUZA2B5JeqWwbKEf5qLhHvRSPredDm')

  let receiverBalance = await connection.getBalance(receiverAddess);

  console.log(`[BEFORE] receiver ${`6dxc7pz5kawb1jfUZA2B5JeqWwbKEf5qLhHvRSPredDm`} balance : ${receiverBalance}`);

  const transaction = new Transaction();

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey:account.publicKey,
    toPubkey:receiverAddess,
    lamports:LAMPORTS_PER_SOL
  })

  transaction.add(sendSolInstruction);

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [account]
  );

  console.log(`signature : ${signature}`);

  senderBalance = await connection.getBalance(account.publicKey);

  console.log(`[AFTER] ${"sender".padEnd(8)} ${account.publicKey.toString()} balance : ${senderBalance}`);

  receiverBalance = await connection.getBalance(receiverAddess);

  console.log(`[AFTER] receiver ${'6dxc7pz5kawb1jfUZA2B5JeqWwbKEf5qLhHvRSPredDm'} balance : ${receiverBalance}`);
}

run();