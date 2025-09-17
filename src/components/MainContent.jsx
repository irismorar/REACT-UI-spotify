import { AsideLibrary } from "./AsideLibrary";
import { AsideCurrentSongInfos } from "./AsideCurrentSongInfos";
import { MainMusicSection } from "./MainMusicSection";

export function MainContent() {
  return (
    <main>
      <AsideLibrary />
      <MainMusicSection />
      <AsideCurrentSongInfos />
    </main>
  );
}
