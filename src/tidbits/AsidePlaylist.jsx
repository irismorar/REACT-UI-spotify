import { PlaylistLogo } from "./PlaylistLogo";

export function AsidePlaylist() {
  return (
    <ul className="library-playlist-list">
      {[
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: true,
          name: "Album name",
          type: "Album",
          artist: "Album creator",
        },
        {
          isSelected: false,
          name: "Compilation name",
          type: "Compilation",
          artist: "Compilation creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "EP name",
          type: "EP",
          artist: "EP creator",
        },
        {
          isSelected: false,
          name: "Album name",
          type: "Album",
          artist: "Album creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "Album name",
          type: "Album",
          artist: "Album creator",
        },
        {
          isSelected: false,
          name: "Compilation name",
          type: "Compilation",
          artist: "Compilation creator",
        },
        {
          isSelected: false,
          name: "Album name",
          type: "Album",
          artist: "Album creator",
        },
        {
          isSelected: false,
          name: "Playlist name",
          type: "Playlist",
          artist: "Playlist creator",
        },
        {
          isSelected: false,
          name: "EP name",
          type: "EP",
          artist: "EP creator",
        },
      ].map((playlist, index) => (
        <AsidePlaylistLi
          key={index}
          isSelected={playlist.isSelected}
          playlistname={playlist.name}
          playlisttype={playlist.type}
          playlistartist={playlist.artist}
        />
      ))}
    </ul>
  );
}

function AsidePlaylistLi({
  isSelected,
  playlistname,
  playlisttype,
  playlistartist,
}) {
  return (
    <li>
      <PlaylistLogo />
      <div className="playlist-infos">
        <div
          style={{ color: isSelected ? "#28C83E" : "#fff", fontSize: "1.5rem" }}
        >
          {playlistname}
        </div>
        <div>
          <div>{playlisttype}</div>
          <div
            style={{
              margin: ".5rem",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#fff",
            }}
          ></div>
          <div>{playlistartist}</div>
        </div>
      </div>
    </li>
  );
}
