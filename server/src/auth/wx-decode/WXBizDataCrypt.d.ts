export default class {
  constructor(appId: string, sessionKey: string);

  decryptData(encryptedData: string, iv: string): UserInfo;
}

export interface UserInfo {
  openId: string,
  nickName: string,
  gender: 1 | 0,
  city: string,
  province: string,
  country: string,
  avatarUrl: string,
  unionId: string,
  watermark: {
    appid: string,
    timestamp: number
  }
}