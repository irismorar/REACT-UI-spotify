import TinyIcon from "../tidbits/TinyIcon";

export default function MainFooter() {
  return (
    <footer>
      <section>
        <div></div>
        <div>
          <div>SONG NAME</div>
          <div>ARTIST NAME</div>
        </div>
        <TinyIcon isActive={true} />
      </section>

      <section>
        <div>
          <TinyIcon />
          <TinyIcon />
          <div></div>
          <TinyIcon />
          <TinyIcon isActive={true} />
        </div>

        <div>
          <div>1:18</div>
          <div className="progress-bar-song-container">
            <div className="progress-bar-song-white"></div>
            <div className="progress-bar-grey"></div>
          </div>
          <div>3:06</div>
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
