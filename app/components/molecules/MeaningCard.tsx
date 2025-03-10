import React from "react";
import { Box, Container, Typography, Paper, Divider } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import theme from "@/app/theme/theme";
import { frequentlySearched } from "../Data/frequentlySearched";

// Molecule: WordCard
interface MeaningCardProps {
  word: string;
  meanings: string[];
}

const MeaningCard: React.FC<MeaningCardProps> = ({ word, meanings }) => {
  return (
    <Paper
      elevation={1}
      variant="outlined"
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "25%",
        height: "200px",
        borderRadius: 1,
       
  
      }}
    >
      <LibraryBooksIcon
        sx={{
          color: theme.palette.primary.main, // Primary color for the icon
          fontSize: 35,
        }}
      />
      <Box sx={{ width: "100%", textAlign: "center", px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            fontFamily: "var(--font-anek-tamil)",
            color: '#000', // Dark primary color for the word
          }}
        >
          {word}
        </Typography>
        <Divider sx={{ my: 1, borderColor: theme.palette.primary.dark, width: "60%", mx: "auto" }} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            textOverflow: "ellipsis",
            fontFamily: "var(--font-anek-tamil)",
            fontSize: 16,
          }}
        >
          <span
            style={{
              color: '#000', // Main primary color for the label
              fontWeight: 500,
            }}
          >
            பொருள்:
          </span>{" "}
          {meanings.join(", ")}
        </Typography>
      </Box>
    </Paper>
  );
};

export default MeaningCard;
