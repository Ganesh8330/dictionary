import { Box, Container, Paper, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import { languageWords } from "../Data/countryWords";
import theme from "@/app/theme/theme";

interface CountrySectionProps {}

const CountrySection: React.FC<CountrySectionProps> = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{
          textAlign: "center",
          mb: 3,
          fontSize: 30,
          fontFamily: "var(--font-anek-tamil)",
        }}
      >
        தமிழ் பேரகரமுதலி
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: 600,
          fontSize: 20,
          fontFamily: "var(--font-anek-tamil)",
        }}
      >
        பல்வேறு நாடுகளின் மொழிகள் மற்றும் அவற்றின் சொற்களின் எண்ணிக்கை
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ flexWrap: "wrap", gap: 5, mt: 3, pt: 4 }}
      >
        {languageWords.map((data, idx) => (
          <Paper
            key={idx}
            square
            elevation={8}
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: "25%",
              border: `1px solid #ccc`, 
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                borderColor: theme.palette.primary.light,
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                transform: "scale(1.02)",
              },
            }}
          >
            <img src={data.countryImage} width={50} alt="Country flag" />

            
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
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: "var(--font-anek-tamil)",
                }}
              >
                {data.language}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontFamily: "var(--font-anek-tamil)" }}
              >
                {data.count} words
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default CountrySection;
