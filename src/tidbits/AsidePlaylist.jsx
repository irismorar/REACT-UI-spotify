import { PlaylistLogo } from "./PlaylistLogo";

export function AsidePlaylist() {
  return (
    <ul className="library-playlist-list">
      {[
        {
          id: 1,
          isSelected: false,
        },
        {
          id: 2,
          isSelected: false,
        },
        {
          id: 3,
          isSelected: true,
        },
        {
          id: 4,
          isSelected: false,
        },
        {
          id: 5,
          isSelected: false,
        },
        {
          id: 6,
          isSelected: false,
        },
        {
          id: 7,
          isSelected: false,
        },
        {
          id: 8,
          isSelected: false,
        },
        {
          id: 9,
          isSelected: false,
        },
        {
          id: 10,
          isSelected: false,
        },
        {
          id: 11,
          isSelected: false,
        },
        {
          id: 12,
          isSelected: false,
        },
      ].map((playlist) => (
        <AsidePlaylistLi key={playlist.id} isSelected={playlist.isSelected} />
      ))}
    </ul>
  );
}

function AsidePlaylistLi({ isSelected }) {
  return (
    <li>
      <PlaylistLogo />
      <div className="playlist-info">
        <div
          style={{ color: isSelected ? "#28C83E" : "#fff", fontSize: "1.5rem" }}
        >
          Title
        </div>
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
    </li>
  );
}
