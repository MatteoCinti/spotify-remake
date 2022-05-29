import SpotifyWebApi from 'spotify-web-api-node';

const { SPOTIFY_CLIENT_SECRET = '', SPOTIFY_CLIENT_ID = '' } = process.env;

const scopes = [
  /**
   * Users
   */
  'user-read-email',
  'user-read-private',

  /**
   * Spotify Connect
   */
  'user-read-currently-playing',
  'user-modify-playback-state',
  'user-read-playback-state',

  /**
   * Follow
   */
  'user-follow-read',

  /**
   * Playlists
   */
  'playlist-read-collaborative',
  'playlist-read-private',

  /**
   * Listening History
   */
  'user-read-recently-played',
  'user-read-playback-position',
  'user-top-read',

  /**
   * Library
   */
  'user-library-read',

  /**
   * Playback
   */
  'streaming',
].join(',');

const params = {
  scope: scopes,
};

const queryParams = new URLSearchParams(params);
export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParams}`;

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_SECRET,
  clientSecret: SPOTIFY_CLIENT_ID,
});

export default spotifyApi;
