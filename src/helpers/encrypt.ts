import * as os from 'os';
import Cryptr from 'cryptr';

const { username } = os.userInfo();

const cryptr = new Cryptr(username);

export const encryptApiKey = (APIKEY: string) => {
  return cryptr.encrypt(APIKEY);
};

export const decryptApiKey = (ENCRYPTED_APIKEY: string) => {
  return cryptr.decrypt(ENCRYPTED_APIKEY);
};