"use client";
import { Box, Container, keyframes } from "@mui/material";
import WelcomeContent from "../molecules/WelcomeContent";
import AutoCompleteComponent from "./AutocompleteComponent";
import theme from "@/app/theme/theme";
import React from "react";

// Define keyframes for subtle floating animations
const float = keyframes`
  0% { transform: translateY(0px); opacity: 0.8; }
  50% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.8; }
`;

// Define the Tamil letter type
interface TamilLetter {
  left: string;
  top: string;
  letter: string;
  delay: string;
}

// Generate all 216 Tamil letters
const tamilLetters: TamilLetter[] = [];
const vowels = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
const consonants = ["க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர", "ல", "வ", "ழ", "ள", "ற", "ன"];
const markers = ["", "ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ"];

let topPosition = 10;
let leftPosition = 5;
let delay = 0;

// Populate the array with all 216 Tamil letters
for (let i = 0; i < consonants.length; i++) {
  for (let j = 0; j < markers.length; j++) {
    tamilLetters.push({
      left: `${leftPosition}%`,
      top: `${topPosition}%`,
      letter: consonants[i] + markers[j],
      delay: `${delay}s`
    });
    leftPosition += 8;
    delay += 0.1;
    if (leftPosition > 90) {
      leftPosition = 5;
      topPosition += 10;
    }
  }
}

// Generates Tamil letters in a rectangular shape around the container
const FloatingTamilLetters: React.FC = () => {
  return (
    <>
      {tamilLetters.map((item, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: item.left,
            top: item.top,
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#4044EE",
            opacity: 0.5,
            animation: `${float} 6s ease-in-out infinite`,
            animationDelay: item.delay,
            filter:'blur(2px)',
          }}
        >
          {item.letter}
        </div>
      ))}
    </>
  );
};

export default function WelcomeSection(): React.ReactElement {
  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 2, sm: 5, md: 8 },
        mt: 8,
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Floating Tamil letters */}
      <FloatingTamilLetters />

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
