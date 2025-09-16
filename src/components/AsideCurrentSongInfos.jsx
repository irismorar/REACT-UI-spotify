import TinyIcon from "../tidbits/TinyIcon";
import BigSongIcon from "../tidbits/BigSongIcon";

export default function AsideCurrentSongInfos() {
  return (
    <aside>
      <header>
        <div className="aside-header-song-name-container">
          <TinyIcon />
          <div>Song name</div>
        </div>
        <div>
          <TinyIcon />
          <TinyIcon />
        </div>
      </header>

      <section className="aside-song-infos-container">
        <BigSongIcon />
        <section className="song-infos-container">
          <div>
            <div className="song-name-info">Song name</div>
            <div>Artist name</div>
          </div>
          <div>
            <TinyIcon />
            <TinyIcon isActive={true} />
          </div>
        </section>

        <section>
          <div className="aside-info-about-artist-foto"></div>
          <section className="infos-about-artist-section artist-section">
            <div>
              <div>Artist name</div>
              <div>infos</div>
              <div>infos</div>
            </div>
            <button>Follow</button>
          </section>

          <section className="infos-about-artist-section">
            <div>
              <div>infos</div>
              <div>infos</div>
              <div>infos</div>
            </div>
            <button>Follow</button>
          </section>

          <section>
            <div>Your queue is empty</div>
            <button>Search for something new</button>
          </section>
        </section>
      </section>
    </aside>
  );
}
