import { PlaylistLogo } from "../tidbits/PlaylistLogo";
import { SongWallpaper } from "../tidbits/SongWallpaper";

export function MainMusicSection() {
  return (
    <section className="main-menu">
      <header>
        <button data-is-active={true}>All</button>
        <button>Music</button>
        <button>Podcasts</button>
      </header>

      <section className="playlists-menu">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
          return (
            <div className="playlist-main-menu-item">
              <div>
                <PlaylistLogo />
                <span>Playlist name</span>
              </div>
              <button></button>
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
    </section>
  );
}
