import 'next-auth';
import { Account } from 'next-auth';
import { JWT } from 'next-auth/jwt';

/* Not sure if this is needed. */
// declare module 'next-auth' {
//   export interface Session {
//     uid: string
//   }
// }

export interface CustomToken extends JWT {
  accessToken: Account['access_token'];
  resfreshToken: Account['refresh_token'];
  username: Account['providerAccountId'];
  accessTokenExpires: Account['expires_at'];
}

export interface TokenRefreshError extends JWT {
  error?: string;
}

declare module 'next-auth' {
  export interface Session {
    uid: string;
    user: {
      accessToken?: CustomToken['accessToken'];
      refreshToken?: CustomToken['resfreshToken'];
      name?: string;
      username?: string;
    };
    token: CustomToken;
  }
}
