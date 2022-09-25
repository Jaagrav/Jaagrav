/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { SubHeader } from "../";

export default function SpotifySection() {
  const [featuredSong, setFeaturedSong] = useState(null),
    [recentlyPlayed, setRecentlyPlayed] = useState(null),
    [audio, setAudio] = useState(null),
    [isPlaying, setIsPlaying] = useState(false);

  const playPreview = () => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    axios.get("api/spotify").then((res) => {
      const { currently_playing, recently_played } = res.data;

      if (currently_playing)
        setFeaturedSong({
          now_playing: true,
          name: currently_playing.item.name,
          artists: `by ${currently_playing.item.artists
            .map((artist) => artist.name)
            .join(", ")}`,
          preview_url: currently_playing.item.preview_url,
          spotify_url: currently_playing.item.external_urls.spotify,
          album_art: currently_playing.item.album.images[1].url,
        });
      else
        setFeaturedSong({
          now_playing: false,
          name: recently_played.items[0].track.name,
          artists: `by ${recently_played.items[0].track.artists
            .map((artist) => artist.name)
            .join(", ")}`,
          preview_url: recently_played.items[0].track.preview_url,
          spotify_url: recently_played.items[0].track.external_urls.spotify,
          album_art: recently_played.items[0].track.album.images[1].url,
        });

      setRecentlyPlayed(
        recently_played.items
          .map((item) => {
            const { track } = item;
            return {
              name: track.name,
              album_art: track.album.images[0].url,
              spotify_url: track.external_urls.spotify,
            };
          })
          .reverse()
          .filter((_, i) => i <= 3)
      );
    });
  }, []);

  useEffect(() => {
    if (featuredSong) {
      const tempAudio = new Audio(featuredSong.preview_url);
      tempAudio.loop = true;
      setAudio(tempAudio);
    }
  }, [featuredSong, recentlyPlayed]);

  if (!recentlyPlayed) return;

  return (
    <div>
      <SubHeader
        title="What I am listening..."
        caption="If I am listening to music then you'll see the 'now playing' pop up here, otherwise here's some of the recently played music that I like."
      />
      <div className="relative z-10 px-10 pb-24 mx-auto md:px-32">
        <div className="max-w-screen-xl grid md:grid-cols-[24rem_1fr_24rem] gap-10 md:gap-6 mx-auto">
          <div className="">
            <img
              src={featuredSong.album_art}
              alt="Album Art"
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                {featuredSong.now_playing && (
                  <div className="mb-2 px-4 py-1 bg-[#63FF85] shadow-md shadow-[#63FF855E] rounded-full w-fit">
                    Now Playing
                  </div>
                )}
                <div
                  className="h-8 w-8 bg-[#63FF85] shadow-md shadow-[#63FF855E] rounded-full flex items-center justify-center cursor-pointer"
                  onClick={playPreview}
                >
                  {!isPlaying ? (
                    <FaPlay className="text-sm text-bgColor" />
                  ) : (
                    <FaPause className="text-sm text-bgColor" />
                  )}
                </div>
              </div>
              <div className="text-5xl text-bgColor dark:text-white">
                {featuredSong.name}
              </div>
              <div className="text-5xl text-border">
                {featuredSong.artists.replace(/,(?=[^,]*$)/, " and")}
              </div>
            </div>
            <a href={featuredSong.spotify_url} target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center gap-4 text-3xl text-bgColor dark:text-white">
                <span>Listen on </span>
                <img
                  src="/assets/images/spotify-logo.webp"
                  className="h-10"
                  alt="Spotify logo"
                />
              </div>
            </a>
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-4 h-96">
              {recentlyPlayed.map((track, i) => (
                <a
                  href={track.spotify_url}
                  className="transition-all hover:scale-105"
                  key={`track-${i}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={track.album_art}
                    alt={track.name}
                    className="w-full h-full rounded-lg"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
