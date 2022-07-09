import { useState, useContext } from "react";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../contexts/auth";

const Login = () => {
  const authContext = useContext(AuthContext);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await authContext.login(
        data.get("email"),
        data.get("password")
      );
      console.log(res);
    } catch (err) {
      setError(err.message);
    }
  };

  const closeError = () => {
    setError(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        py={4}
        my={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={closeError}>
            {error}
          </Alert>
        )}

        <Typography component="h1" variant="h5">
          Prisijungti
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={1}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="El. paštas"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Slaptažodis"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Prisijungti
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot" style={{ textDecorationColor: "black" }}>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Pamiršai slaptažodį?
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" style={{ textDecorationColor: "black" }}>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Neturi paskyros? Prisiregistruok
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
