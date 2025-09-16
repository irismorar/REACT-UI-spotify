import AsideLibrary from "./AsideLibrary";
import AsideCurrentSongInfos from "./AsideCurrentSongInfos";

export default function MainContent() {
  return (
    <main>
      <AsideLibrary />
      <section>MAIN B</section>
      <AsideCurrentSongInfos />
    </main>
  );
}
