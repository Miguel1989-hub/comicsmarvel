import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import CardComics from "../../components/CardComics";
import NavBar from "../../components/NavBar";
import React, { useContext, useState } from "react";
import { ComicsContext } from "../../context";
import LoadingButton from '@mui/lab/LoadingButton';


const Home = () => {
  const { comics, setComics, loading, setloading } = useContext(ComicsContext);
  const [count, setCount] = useState(12);
  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (

    <>
      <ThemeProvider theme={darkTheme}>
        <NavBar setMode={setMode} mode={mode} />
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {comics.slice(0, count).map((comic, key) => {
              return (
                <CardComics
                  key={comic.id}
                  comicTitle={comic.title}
                  comicImg={comic.images[0].path}
                  comicExt={comic.images[0].extension}
                  comicAuthor={comic.creators.items[0].name}
                  comicDesc={comic.description}
                  comicSeries={comic.series.name}
                />
              )
            })}

            <LoadingButton
              size="large"
              color="error"
              loading={loading}
              variant="text"
              onClick={() => setCount(count + count)}
              sx={{
                marginTop: "10px",
                marginBottom: "20px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#e62429",
                  transition: "1s"
                }

              }}
            >
              Carregar mais
            </LoadingButton>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Home;