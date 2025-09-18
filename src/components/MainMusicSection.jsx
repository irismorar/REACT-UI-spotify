import { PlaylistLogo } from "../tidbits/PlaylistLogo";
import { SongWallpaper } from "../tidbits/SongWallpaper";
import { SecondarySongsMenu } from "../tidbits/Secondary-songs-menu";
import { PredictionIcon } from "../tidbits/PredictionIcon";
import { TinyIcon } from "../tidbits/TinyIcon";

export function MainMusicSection() {
  return (
    <section className="main-menu">
      <header>
        <button data-is-active={true}>All</button>
        <button>Music</button>
        <button>Podcasts</button>
      </header>

      <section className="playlists-main-menu">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
          return (
            <div className="playlist-main-menu-item">
              <div>
                <PlaylistLogo />
                <span>Playlist name</span>
              </div>
              <button className="play-song-button"></button>
            </div>
          );
        })}
      </section>

      <section>
        <section className="getting-started-music-section">
          <header>
            <div>Getting started</div>
            <div>
              <button>{"<"}</button>
              <button>{">"}</button>
            </div>
          </header>
          <div className="tips-container">
            <div>
              <button>Search</button>
              <button className="show-all-button">Show more tips</button>
            </div>
          </div>
        </section>
        <section className="for-you-music-section">
          <header>
            <span>Made for</span>
            <div>
              <div>User name</div>
              <button className="show-all-button">Show all</button>
            </div>
          </header>
          <section>
            <SongWallpaper />
            <SongWallpaper />
            <SongWallpaper />
          </section>
        </section>
      </section>
      <SecondarySongsMenu title={"Jump back in"} />
      <SecondarySongsMenu title={"Recently played"} />
      <SecondarySongsMenu title={"Party"} />
      <SecondarySongsMenu title={"Recommended Stations"} />
      <SecondarySongsMenu title={"Your top mixes"} />
      <SecondarySongsMenu title={"Throwback"} />
      <SecondarySongsMenu title={"Adrenaline Rush"} />
      <SecondarySongsMenu title={"Based on your recent listening"} />
      <SecondarySongsMenu title={"Chill"} />
      <SecondarySongsMenu title={"Popular Radio"} />
      <section className="main-menu-prediction-container">
        <PredictionIcon />
        <PredictionIcon />
        <PredictionIcon />
        <PredictionIcon />
        <PredictionIcon />
        <PredictionIcon />
        <PredictionIcon />
        <PredictionIcon />
      </section>
      <hr />
      <section className="website-info">
        <section>
          <h4>Company</h4>
          <div>About</div>
          <div>Jobs</div>
          <div>For the Record</div>
        </section>
        <section>
          <h4>Communities</h4>
          <div>For Artists</div>
          <div>Developers</div>
          <div>Advertising</div>
          <div>Investors</div>
          <div>Vendors</div>
        </section>
        <section>
          <h4>Useful Links</h4>
          <div>Support</div>
          <div>Free Mobile App</div>
          <div>Popular by Country</div>
          <div>Import your music</div>
        </section>
        <section>
          <h4>Spotify plans</h4>
          <div>Premium Individual</div>
          <div>Premium Duo</div>
          <div>Premium Family</div>
          <div>Premium Student</div>
          <div>Spotify Free</div>
        </section>
        <div>
          <TinyIcon />
          <TinyIcon />
          <TinyIcon />
        </div>
      </section>
      <hr />
      <footer className="website-footer-info">
        <section>
          <div>Legal</div>
          <div>Safety&Privacy Center</div>
          <div>Privacy Policy</div>
          <div>Cookie Settings</div>
          <div>About Adds</div>
          <div>Accessibility</div>
        </section>
        <div>2025 Spotify AB</div>
      </footer>
    </section>
  );
}
