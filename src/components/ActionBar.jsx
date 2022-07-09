import {
  Paper,
  Container,
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  "Užsiregistruok sistemoje",
  "Sumokėk metinį €10 mokestį",
  "Išsirink tinkamą laiką žaisti",
];

const ActionBar = () => {
  const navigate = useNavigate();

  return (
    <Paper sx={{ background: "#8cb369" }} elevation={0} square>
      <Container maxWidth="xl">
        <Box py={4}>
          <Typography
            sx={{ fontWeight: "light" }}
            variant="h4"
            component="h2"
            color="white"
            textAlign="center"
          >
            Ištroškęs sužaist su bendraminčiais?
          </Typography>

          <Box p={3} mt={2}>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Stepper activeStep={0} orientation="vertical">
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography color="white">{label}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography color="white">{label}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>

          <Box textAlign="center" mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/register")}
            >
              Užsiregistruok pirmam žaidimui
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default ActionBar;
