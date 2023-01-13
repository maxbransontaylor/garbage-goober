import React from "react";
import { Typography, Box, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        mt: "auto",
        backgroundColor: "#232629",
        color: "secondary.contrastText",
      }}
    >
      <footer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          <Typography>Questions? Get in touch:</Typography>
          <Link underline="none" href="tel:9199719765">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CallIcon color="secondary" />
              &nbsp; (919) 971-9765
            </Box>
          </Link>
          <Link underline="none" href="mailto:GarbageGooberToday@gmail.com">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon color="secondary" />
              &nbsp; GarbageGooberToday@gmail.com
            </Box>
          </Link>
        </Box>
        <Typography variant="h7" color="secondary.dark">
          &copy; {year} Garbage Goober{" "}
        </Typography>
      </footer>
    </Box>
  );
}
