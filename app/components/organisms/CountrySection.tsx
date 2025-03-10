import { Container, Stack, Typography } from "@mui/material";
import { languageWords } from "../Data/countryWords";
import CountryCard from "../molecules/CountryCard";

const CountrySection: React.FC = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{ textAlign: "center", mb: 3, fontSize: 30, fontFamily: "var(--font-anek-tamil)" }}
      >
        தமிழ் பேரகரமுதலி
      </Typography>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", mb: 3, fontWeight: 600, fontSize: 20, fontFamily: "var(--font-anek-tamil)" }}
      >
        பல்வேறு நாடுகளின் மொழிகள் மற்றும் அவற்றின் சொற்களின் எண்ணிக்கை
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ flexWrap: "wrap", gap: 5, mt: 3, pt: 4 }}>
        {languageWords.map((data, idx) => (
          <CountryCard key={idx} countryImage={data.countryImage} language={data.language} count={data.count} />
        ))}
      </Stack>
    </Container>
  );
};

export default CountrySection;
