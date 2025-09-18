import { SongWallpaper } from "./SongWallpaper";

export function SecondarySongsMenu({ title }) {
  return (
    <section className="secondary-songs-menu">
      <header>
        <div>{title}</div>
        <button className="show-all-button">Show all</button>
      </header>
      <section>
        <SongWallpaper />
        <SongWallpaper />
        <SongWallpaper />
        <SongWallpaper />
        <SongWallpaper />
      </section>
    </section>
  );
}
