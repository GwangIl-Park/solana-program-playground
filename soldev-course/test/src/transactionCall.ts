import { Connection, clusterApiUrl, Keypair, PublicKey, TransactionInstruction, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import fs from 'fs';

const run = async() => {
  const connection:Connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const keyPair = fs.readFileSync(`${__dirname}/../../wallet/my-keypair.json`, 'utf-8');

  const account = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(keyPair)));

  const PING_PROGRAM_ADDRESS = new PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa');
  const PING_PROGRAM_DATA_ADDRESS =  new PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod');

  const transaction = new Transaction();
  const programId = new PublicKey(PING_PROGRAM_ADDRESS);
  const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS);

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: pingProgramDataId,
        isSigner: false,
        isWritable: true
      },
    ],
    programId
  });

  transaction.add(instruction);

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [account]
  );

  console.log(`signature : ${signature}`);
}

run();