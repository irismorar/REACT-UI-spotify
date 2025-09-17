import { TinyIcon } from "../tidbits/TinyIcon";

export function MainHeader() {
  return (
    <header>
      <section>
        <div className="logo-spotify">Spotify</div>
      </section>

      <section>
        <button className="home-play-button"></button>
        <input type="text" placeholder="What do you want to play?" />
      </section>

      <section>
        <div className="header-account-container">
          <button>Install App</button>
          <TinyIcon />
          <TinyIcon />
          <div>
            <button className="user-logo">I</button>
          </div>
        </div>
      </section>
    </header>
  );
}
