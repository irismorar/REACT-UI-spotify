import SongLogo from "./SongLogo";

export default function AsidePlaylist() {
  return (
    <ul className="library-playlist-list">
      {[
        {
          isSelected: false,
          name: "Playlist 1",
          type: "playlist",
          artist: "User 1",
        },
        {
          isSelected: false,
          name: "Playlist 583",
          type: "playlist",
          artist: "User 21",
        },
        {
          isSelected: true,
          name: "Album 7",
          type: "album",
          artist: "Artist 549763",
        },
        {
          isSelected: false,
          name: "Playlist 106",
          type: "playlist",
          artist: "User 97",
        },
        {
          isSelected: false,
          name: "Album 130",
          type: "album",
          artist: "Artist 2530",
        },
        {
          isSelected: false,
          name: "Album 9",
          type: "album",
          artist: "Artist 881",
        },
        {
          isSelected: false,
          name: "Album 60",
          type: "album",
          artist: "Artist 7821",
        },
        {
          isSelected: false,
          name: "Album 1052",
          type: "album",
          artist: "Artist 6604",
        },
        {
          isSelected: false,
          name: "Playlist 40329",
          type: "playlist",
          artist: "User 203",
        },
        {
          isSelected: false,
          name: "Playlist 55096",
          type: "playlist",
          artist: "User 19",
        },
        {
          isSelected: false,
          name: "Playlist 10287",
          type: "playlist",
          artist: "User 6",
        },
        {
          isSelected: false,
          name: "Album 17754",
          type: "album",
          artist: "Artist 7273",
        },
        {
          isSelected: false,
          name: "Album 22271",
          type: "album",
          artist: "Artist 65497",
        },
        {
          isSelected: false,
          name: "Album 674621",
          type: "album",
          artist: "Artist 563",
        },
        {
          isSelected: false,
          name: "Album 2520",
          type: "album",
          artist: "Artist 41",
        },
        {
          isSelected: false,
          name: "Album 3098",
          type: "album",
          artist: "Artist 3",
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
      <SongLogo />
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
