import { Container, Typography, Box } from "@mui/material";
import { frequentlySearched } from "../Data/frequentlySearched";
import theme from "@/app/theme/theme";
import MeaningCard from "../molecules/MeaningCard";

const CardSection: React.FC = () => {
  return (
    <Box sx={{ p: 6, textAlign: "center" }}>
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
          <MeaningCard key={index} word={item.word} meanings={item.meanings} />
        ))}
      </Container>
    </Box>
  );
};

export default CardSection;