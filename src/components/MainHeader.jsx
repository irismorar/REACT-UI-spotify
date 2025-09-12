import TinyIcon from "../tidbits/TinyIcon";

export default function MainHeader() {
  return (
    <header>
      <section>
        <div></div>
      </section>

      <section>
        <div></div>
        <input type="text" placeholder="What do you want to play?" />
      </section>

      <section>
        <div>
          <div>Install App</div>
          <TinyIcon />
          <TinyIcon />
          <div>
            <div className="user-logo">I</div>
          </div>
        </div>
      </section>
    </header>
  );
}
