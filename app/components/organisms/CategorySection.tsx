import { Box, Container, Paper, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import { categoryWords } from "../Data/catergoryData";
import Image from "next/image";
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
        வகைப்பாடுகள்
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{
          flexWrap: "wrap",
          gap: 5,
          mt: 3,
          pt: 4,
        }}
      >
        {categoryWords.map((data, idx) => (
          <Paper
            key={idx}
            elevation={8}
            sx={{
              padding: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "200px",
              height: "200px",
              borderRadius: "4px",
              background: "#ccccff",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ width: "100%" }}>
              <Image src={data.path} alt="" height={50} width={50} />
              <Typography
                variant="h6"
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: "var(--font-anek-tamil)",
                }}
              >
                {data.category}
              </Typography>

              {/* Elegant Divider */}
              <Divider sx={{ width: "60%", my: 1, borderColor: theme.palette.primary.dark }} />

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontFamily: "var(--font-anek-tamil)",
                  fontSize: 14,
                }}
              >
                {data.words} words
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default CountrySection;
