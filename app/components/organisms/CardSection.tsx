import React from "react";
import { Paper, Typography, Box, Container, Divider } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { frequentlySearched } from "../Data/frequentlySearched";
import theme from "@/app/theme/theme";

interface CardSectionProps {}

const CardSection: React.FC<CardSectionProps> = () => {
  return (
    <Box sx={{ p: 6, textAlign: "center", background:'#ede7f6', }}>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{
          mb: 2,
          fontWeight: 400,
          fontSize: 30,
          fontFamily: "var(--font-anek-tamil)",
        }}
      >
        சொற்களஞ்சியத்தில்
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mb: 3,
          fontWeight: 600,
          fontSize: 24,
          fontFamily: "var(--font-anek-tamil)",
        }}
      >
        தேடப்பட்ட{" "}
        <span
          style={{
            color: theme.palette.primary.light,
            fontWeight: 700,
          }}
        >
          சொற்கள்
        </span>
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mb: 5,
          pt: 4,
        }}
      >
        {frequentlySearched.map((item, index) => (
          <Paper
            key={index}
            elevation={8}
            square
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              width: "25%",
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
            <LibraryBooksIcon
              sx={{
                color: theme.palette.primary.light,
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
                }}
              >
                {item.word}
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
                    color: theme.palette.primary.light,
                    fontWeight: 500,
                  }}
                >
                  பொருள்:
                </span>{" "}
                {item.meanings.join(", ")}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default CardSection;
