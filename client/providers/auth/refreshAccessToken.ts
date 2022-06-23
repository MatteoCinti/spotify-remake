import spotifyApi from '@root/lib/spotify';
import { getToken } from 'next-auth/jwt';
import { CustomToken, TokenRefreshError } from './types';

async function refreshAccessToken(
  token: CustomToken,
): Promise<CustomToken | TokenRefreshError> {
  try {
    if (!token.accessToken || !token.resfreshToken) {
      throw new Error('accessToken Invalid');
    }

    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.resfreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.resfreshToken,
    };
  } catch (e) {
    const error = e as Error;
    console.error(error.message);

    return {
      ...getToken,
      error: 'refreshAccessTokenError',
    };
  }
}

export default refreshAccessToken;
