import { PlaylistLogo } from "./PlaylistLogo";
import { TinyIcon } from "./TinyIcon";

export function PredictionIcon() {
  return (
    <section>
      <p>Prediction info</p>
      <div>
        <section className="prediction-icon-header">
          <PlaylistLogo />
          <div className="playlist-info">
            <div>Title</div>
            <div>
              <div>Type</div>
              <div
                style={{
                  margin: ".5rem",
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "#fff",
                }}
              ></div>
              <div>Author</div>
            </div>
          </div>
        </section>
        <section>
          <p>Music Description</p>
          <footer className="prediction-footer">
            <button className="aside-artist-info-button">Preview</button>
            <div>
              <TinyIcon />
              <TinyIcon />
              <button className="home-play-button"></button>
            </div>
          </footer>
        </section>
      </div>
    </section>
  );
}
