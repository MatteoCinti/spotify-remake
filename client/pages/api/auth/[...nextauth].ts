import SpotifyProvider from 'next-auth/providers/spotify';
import type { JWT } from 'next-auth/jwt';
import type {
  Account,
  Awaitable,
  CallbacksOptions,
  User,
} from 'next-auth/core/types';
import NextAuth from 'next-auth';

const {
  SPOTIFY_CLIENT_SECRET = '',
  SPOTIFY_CLIENT_ID = '',
  JWT_SECRET,
} = process.env;
import { LOGIN_URL } from '@root/lib/spotify';

interface CustomToken extends JWT {
  accessToken: Account['access_token'];
  resfreshToken: Account['refresh_token'];
  username: Account['providerAccountId'];
  accessTokenExpires: Account['expires_at'];
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: SPOTIFY_CLIENT_SECRET,
      clientSecret: SPOTIFY_CLIENT_ID,
      authorization: LOGIN_URL,
    }),
  ],
  secret: JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      const initialSignIn = account && user;
      const { accessTokenExpires } = token as CustomToken;
      const tokenIsStillValid =
        accessTokenExpires && Date.now() < accessTokenExpires;

      if (initialSignIn) {
        return {
          ...token,
          accessToken: account.access_token,
          resfreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at && account.expires_at * 1000,
        };
      }
    },
  },
});
