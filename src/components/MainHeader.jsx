import TinyIcon from "../tidbits/TinyIcon";

export default function MainHeader() {
  return (
    <header>
      <section>
        <div></div>
      </section>

      <section>
        <button></button>
        <input type="text" placeholder="What do you want to play?" />
      </section>

      <section>
        <div>
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
