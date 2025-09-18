import { BigSongIcon } from "../tidbits/BigSongIcon";

export function AsideCurrentSongInfo() {
  return (
    <aside>
      <BigSongIcon />
      <section className="aside-song-info-container">
        <section>
          <div className="aside-info-about-artist-foto"></div>
          <section className="info-about-artist-section artist-section">
            <div>
              <div>Artist</div>
              <div>info</div>
            </div>
            <button className="aside-artist-info-button">Follow</button>
          </section>

          <section className="info-about-artist-section">
            <div>
              <div>Credits</div>
              <div>info</div>
              <div>info</div>
            </div>
            <div>
              <button className="show-all-button">Show all</button>
              <button className="aside-artist-info-button">Follow</button>
            </div>
          </section>

          <section>
            <div>Your queue is empty</div>
            <button className="aside-artist-info-button">
              Search for something new
            </button>
          </section>
        </section>
      </section>
    </aside>
  );
}
