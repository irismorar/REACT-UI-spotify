import { AsideLibrary } from "./AsideLibrary";
import { AsideCurrentSongInfo } from "./AsideCurrentSongInfo";
import { MainMusicSection } from "./MainMusicSection";

export function MainContent() {
  return (
    <main>
      <AsideLibrary />
      <MainMusicSection />
      <AsideCurrentSongInfo />
    </main>
  );
}
