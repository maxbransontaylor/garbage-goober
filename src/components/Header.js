import React from "react";
import "../styles/Header.module.css";
import { Typography, Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
export default function Header() {
  return (
    <>
      <Box color="secondary.contrastText">
        <ResponsiveAppBar />
      </Box>
    </>
  );
}
