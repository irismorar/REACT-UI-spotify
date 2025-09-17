import { TinyIcon } from "../tidbits/TinyIcon";

export function MainFooter() {
  return (
    <footer>
      <section>
        <div className="current-song-logo"></div>
        <div className="current-song-infos">
          <div>Song name</div>
          <div>Artist name</div>
        </div>
        <TinyIcon isActive={true} />
      </section>

      <section>
        <div className="current-song-commands">
          <TinyIcon />
          <TinyIcon />
          <button className="home-play-button"></button>
          <TinyIcon />
          <TinyIcon isActive={true} />
        </div>

        <div className="current-song-timing">
          <div>1:06</div>
          <div className="progress-bar-song-container">
            <div className="progress-bar-song-white"></div>
            <div className="progress-bar-grey"></div>
          </div>
          <div>2:58</div>
        </div>
      </section>

      <section>
        <TinyIcon isActive={true} />
        <TinyIcon />
        <TinyIcon />
        <TinyIcon />
        <TinyIcon />
        <div className="progress-bar-volume-container">
          <div className="progress-bar-volume-white"></div>
          <div className="progress-bar-grey"></div>
        </div>
        <TinyIcon />
        <TinyIcon />
      </section>
    </footer>
  );
}
