"use client";
import { Box, Container } from "@mui/material";
import WelcomeContent from "../molecules/WelcomeContent";
import AutoCompleteComponent from "./AutocompleteComponent";


// Define keyframes for subtle floating animations
// const float = keyframes`
//   0% { transform: translateY(0px); opacity: 0.8; }
//   50% { transform: translateY(-10px); opacity: 1; }
//   100% { transform: translateY(0px); opacity: 0.8; }
// `;

// Fixed circle positions and sizes
const circles = [
  { left: 1400, top: 150, size: 80, delay: "0s" },
  { left: 300, top: 500, size: 120, delay: "1s" },
  { left: 700, top: 390, size: 100, delay: "2s" },
  { left: 900, top: 100, size: 140, delay: "0.5s" },
  { left: 50, top: 100, size: 90, delay: "1.5s" },
  { left: 800, top: 600, size: 110, delay: "2.5s" },
  { left: 400, top: 200, size: 130, delay: "3s" },
  { left: 1300, top: 500, size: 70, delay: "0.8s" },
  { left: 2000, top: 700, size: 150, delay: "1.2s" },
  { left: 1000, top: 300, size: 125, delay: "2.8s" },
];

// Generates circles as div elements with fixed positions and sizes
const FixedCircles = () => {
  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${circle.left}px`,
            top: `${circle.top}px`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor:"#4044EE",
            borderRadius: "50%",
            opacity: 0.8,
            // animation: `${float} 6s ease-in-out infinite`,
            animationDelay: circle.delay,
            filter: "blur(5px)", // Optional: Adds a soft glowing effect
          }}
        />
      ))}
    </>
  );
};

export default function WelcomeSection() {
  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 2, sm: 5, md: 8 },
        mt: 8,
        height: "100vh",
        // bgcolor: theme.palette.secondary.light,
        overflow: "hidden",
        // background: "rgba(160, 171, 221, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Fixed circles */}
      <FixedCircles />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <WelcomeContent />
        <AutoCompleteComponent />
      </Container>
    </Box>
  );
}
