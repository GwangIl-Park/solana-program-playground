import { Keypair } from '@solana/web3.js';
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import fs from 'fs';
import "dotenv/config";

//1. 키 생성
const newKeypair = Keypair.generate();

console.log(`newKeypair publicKey : ${newKeypair.publicKey.toBase58()}`);
console.log(`newKeypair secretKey : ${newKeypair.secretKey}`);

//2. 파일로부터 키 쌍 로드
const keyPairPath = fs.readFileSync(`${__dirname}/../../../wallet/my-keypair.json`, 'utf-8');

const keyPairFromFile = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(keyPairPath)));

console.log(`fileKeypair publicKey : ${keyPairFromFile.publicKey.toBase58()}`);
console.log(`fileKeypair secretKey : ${keyPairFromFile.secretKey}`);

//3. .env파일로부터 키 쌍 로드
const envKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`envKeypair publicKey : ${envKeypair.publicKey.toBase58()}`);
console.log(`envKeypair secretKey : ${envKeypair.secretKey}`);