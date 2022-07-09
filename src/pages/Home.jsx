import React, { useContext } from "react";
import FeaturedPost from "../components/FeaturedPost";
import Highscore from "../components/Highscore";
import ActionBar from "../components/ActionBar";
import { Typography, Grid, Container } from "@mui/material";
import { AuthContext } from "../contexts/auth";

const Home = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <>
      <FeaturedPost
        post={{
          title: "Vasaros Teniso Turnyras",
          linkText: "Prisijunk - nario mokestis $5",
          image: "https://source.unsplash.com/random/?tennis",
          imageText: "Tennis",
          description:
            "Vasaros turnyras Lino Mugevičiaus teniso studentams sužaisti kartu",
        }}
      />
      <ActionBar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item p={4} xs={12} md={6} xl={4}>
            <Typography variant="h4" component="h2">
              ⭐ Top žaidėjai
            </Typography>
            <Highscore
              parameter="Game points:"
              scores={[
                {
                  name: "Petras Slekys",
                  gamePoints: 300,
                },
                {
                  name: "Jonas Kazlauskas",
                  gamePoints: 250,
                },
                {
                  name: "Arvydas Sabonis",
                  gamePoints: 150,
                },
              ]}
            />
          </Grid>

          <Grid item p={4} xs={12} md={6} xl={4}>
            <Typography variant="h4" component="h2">
              ⚡ Daugiausiai žaidimų
            </Typography>
            <Highscore
              parameter="Games:"
              scores={[
                {
                  name: "Petras Slekys",
                  gamePoints: 5,
                },
                {
                  name: "Jonas Kazlauskas",
                  gamePoints: 3,
                },
                {
                  name: "Arvydas Sabonis",
                  gamePoints: 1,
                },
              ]}
            />
          </Grid>

          <Grid item p={4} xs={12} md={6} xl={4}>
            <Typography variant="h4" component="h2">
              🤓 Naujausi žaidėjai
            </Typography>
            <Highscore
              scores={[
                {
                  name: "Petras Slekys",
                },
                {
                  name: "Jonas Kazlauskas",
                },
                {
                  name: "Arvydas Sabonis",
                },
                {
                  name: "Julius Tverkys",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
