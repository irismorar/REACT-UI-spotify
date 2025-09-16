import TinyIcon from "../tidbits/TinyIcon";
import AsidePlaylist from "../tidbits/AsidePlaylist";

export default function AsideLibrary() {
  return (
    <aside>
      <section>
        <h3>Your Library</h3>
        <div className="create-library-container">
          <button className="create-library-button">+ Create</button>
          <TinyIcon />
        </div>
      </section>

      <section>
        <button>Playlists</button>
        <button>Artists</button>
        <button>Albums</button>
      </section>

      <section className="library-playlist-container">
        <div className="library-playlist-container-menu">
          <TinyIcon />
          <div>
            <button>Recents</button>
            <TinyIcon />
          </div>
        </div>
        <AsidePlaylist />
      </section>
    </aside>
  );
}
