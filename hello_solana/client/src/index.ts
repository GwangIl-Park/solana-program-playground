import web3, { Connection, Keypair, Transaction, TransactionInstruction, sendAndConfirmTransaction } from '@solana/web3.js';
import fs from 'fs';

const run = async() => {
  let connection:Connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

  const keyPair:string = fs.readFileSync(`${__dirname}/../../../wallet/my-keypair.json`, 'utf-8');
  const account:Keypair = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(keyPair)));

  const programKeyPair = fs.readFileSync(`${__dirname}/../../hello_solana_program/target/deploy/hello_solana_program-keypair.json`, 'utf-8');
  const programAccount = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(programKeyPair)));

  const instruction = new TransactionInstruction({
    keys:[{pubkey:account.publicKey, isSigner:false, isWritable:true}],
    programId:programAccount.publicKey,
    data:Buffer.alloc(0),
  });
  await sendAndConfirmTransaction(
    connection,
    new Transaction().add(instruction),
    [account],
  )
}

run();