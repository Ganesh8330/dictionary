import { Box } from "@mui/material";
import React from "react";
import CounterTypo from "../atoms/CounterTypo";

const count = 3;

export default function ResultCounter() {
  return (
    <Box component="section" sx={{ background: "#ccc", textAlign: "center", mt: 5, p: 2 }}>
      <CounterTypo count={count} />
    </Box>
  );
}
