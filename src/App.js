/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { SongList } from "./components/SongList/SongList";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SongList/>
    </ThemeProvider>
  );
}

export default App;
