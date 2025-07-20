/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { SongList } from "./components/SongList/SongList";

const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    year: "2020",
    albumArt:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
  },
  {
    id: 2,
    title: "Wub Aynama",
    artist: "Tilahun Gessesse",
    year: "1992",
    albumArt: "https://i.ytimg.com/vi/Z1w2iiolVQw/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Barcelona",
    artist: "Ed Sheeran",
    year: "2017",
    albumArt:
      "https://images.genius.com/11d6dfb73fe30af8c34457fdac6a7115.720x720x1.jpg",
  },
  {
    id: 4,
    title: "Moussolou",
    artist: "Oumou Sangaré",
    year: "1989",
    albumArt: "https://i1.sndcdn.com/artworks-000118740984-a0wcn5-t500x500.jpg",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SongList songs={songs} />
    </ThemeProvider>
  );
}

export default App;
