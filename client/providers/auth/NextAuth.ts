import SpotifyProvider from 'next-auth/providers/spotify';
import { LOGIN_URL } from '@lib/spotify';
import NextAuth from 'next-auth';

import refreshAccessToken from './refreshAccessToken';
import { CustomToken } from './types';

const {
  SPOTIFY_CLIENT_SECRET = '',
  SPOTIFY_CLIENT_ID = '',
  JWT_SECRET,
} = process.env;

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
      const { accessTokenExpires } = token as CustomToken;

      const initialSignIn = account && user;
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

      if (tokenIsStillValid) {
        console.log('YOUR ACCESS TOKEN IS STILL VALID');
        return token;
      }

      console.log('YOUR ACCESS TOKEN IS EXPIRED');

      return refreshAccessToken(token as CustomToken);
    },

    async session({ session, token }) {
      const accessToken = token.accessToken as CustomToken['resfreshToken'];
      const refreshToken = token.refreshToken as CustomToken['resfreshToken'];
      const username = token.username as CustomToken['resfreshToken'];

      return {
        ...session,
        user: {
          ...session.user,
          accessToken,
          refreshToken,
          username,
        },
      };
    },
  },
});
