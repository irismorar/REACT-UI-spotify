import { TinyIcon } from "./TinyIcon";

export function BigSongIcon() {
  return (
    <div className="big-song-icon">
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
      <section className="song-info-container">
        <div>
          <div className="song-name-info">Song name</div>
          <div>Artist</div>
        </div>
        <div>
          <TinyIcon />
          <TinyIcon isActive={true} />
        </div>
      </section>
    </div>
  );
}
