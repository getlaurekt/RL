import React, { useState } from "react";
import "./App.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Grid,
} from "@mantine/core";
import NavbarNested from "./Components/Navbar/Navbar";
import ThumbGroup from "./Components/ThumbGroup/ThumbGroup";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Grid grow style={{ margin: 0 }}>
            <NavbarNested />
            <Grid.Col span={8}>
              <ThumbGroup />
            </Grid.Col>
          </Grid>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
