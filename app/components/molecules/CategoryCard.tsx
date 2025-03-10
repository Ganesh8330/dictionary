import React from "react";
import { Box, Container, Paper, Stack, Typography, Divider } from "@mui/material";
import theme from "@/app/theme/theme";
import { categoryWords } from "../Data/catergoryData";
import Image from "next/image";

// Molecule: CategoryCard
interface CategoryCardProps {
  path: string;
  category: string;
  words: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ path, category, words }) => {
  return (
    <Paper
      elevation={1}
      variant="outlined"
      sx={{
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "200px",
        height: "200px",
        borderRadius: "4px",
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ width: "100%" }}>
        <Image src={path} alt="" height={50} width={50} />
        <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 600, fontFamily: "var(--font-anek-tamil)" }}>
          {category}
        </Typography>
        <Divider sx={{ width: "60%", my: 1, borderColor: theme.palette.primary.dark }} />
        <Typography variant="body2" color="textSecondary" sx={{ fontFamily: "var(--font-anek-tamil)", fontSize: 14 }}>
          {words} words
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CategoryCard;