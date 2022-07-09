import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #eee",
        py: 2,
        mt: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary" textAlign="center">
        Copyright © {new Date().getFullYear()} Tennis Cup
      </Typography>
    </Box>
  );
};

export default Footer;
