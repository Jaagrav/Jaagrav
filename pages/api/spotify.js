// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { SPOTIFY_CLIENT_CODE, SPOTIFY_REFRESH_TOKEN } = process.env;

var axios = require("axios");
var qs = require("qs");

async function getAccessToken(res) {
  var data = qs.stringify({
    grant_type: "refresh_token",
    refresh_token: SPOTIFY_REFRESH_TOKEN,
  });
  var config = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: `Basic ${SPOTIFY_CLIENT_CODE}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

async function getCurrentlyPlaying(access_token, res) {
  var config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/player/currently-playing",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

async function getRecentlyPlayed(access_token, res) {
  var config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/player/recently-played",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

export default async function handler(req, res) {
  const { access_token } = await getAccessToken(res);

  res
    .status(200)
    .json({
      currently_playing: await getCurrentlyPlaying(access_token, res),
      recently_played: await getRecentlyPlayed(access_token, res),
    });
}
