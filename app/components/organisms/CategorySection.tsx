import { Container, Stack, Typography } from "@mui/material";
import CategoryCard from "../molecules/CategoryCard";
import { categoryWords } from "../Data/catergoryData";

const CategorySection: React.FC = () => {
  return (
    <Container>
      <Typography variant="h6" color="textSecondary" sx={{ textAlign: "center", mb: 3, fontSize: 30, fontFamily: "var(--font-anek-tamil)" }}>
        தமிழ் பேரகரமுதலி
      </Typography>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 3, fontWeight: 600, fontSize: 20, fontFamily: "var(--font-anek-tamil)" }}>
        வகைப்பாடுகள்
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ flexWrap: "wrap", gap: 5, mt: 3, pt: 4 }}>
        {categoryWords.map((data, idx) => (
          <CategoryCard key={idx} path={data.path} category={data.category} words={data.words} />
        ))}
      </Stack>
    </Container>
  );
};

export default CategorySection;