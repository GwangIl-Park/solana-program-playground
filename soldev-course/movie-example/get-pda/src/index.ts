import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

const run = async() => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const accounts = await connection.getProgramAccounts(new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'));
  console.log(accounts);
  // const pubkey = new PublicKey("6dxc7pz5kawb1jfUZA2B5JeqWwbKEf5qLhHvRSPredDm");
  // const [pda, bump] = PublicKey.findProgramAddressSync([pubkey.toBuffer(), Buffer.from("gipark")], new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'))
  // console.log(pda.toBase58())
}

run();