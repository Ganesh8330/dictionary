import React from "react";
import { Box, Container, Paper, Stack, Typography, Divider } from "@mui/material";
import theme from "@/app/theme/theme";
import { languageWords } from "../Data/countryWords";

// Molecule: CountryCard
interface CountryCardProps {
  countryImage: string;
  language: string;
  count: number;
}

const CountryCard: React.FC<CountryCardProps> = ({ countryImage, language, count }) => {
  return (
    <Paper
      square
      elevation={1}
      variant="outlined"
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "25%",
        borderRadius:1
       
      }}
    >
      <img src={countryImage} width={50} alt="Country flag" />
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: 50,
          mx: 1,
          borderRightWidth: 1,
          borderColor: theme.palette.primary.light,
        }}
      />
      <Stack>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontWeight: 600, fontFamily: "var(--font-anek-tamil)" }}
        >
          {language}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontFamily: "var(--font-anek-tamil)" }}>
          {count} words
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CountryCard