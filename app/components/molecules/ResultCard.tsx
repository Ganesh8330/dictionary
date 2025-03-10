import React from "react";
import {
  Box,
  Paper,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import theme from "@/app/theme/theme";

interface WordData {
  id: number;
  word: string;
  meaning: string[];
  languages: string;
}

interface ResultCardProps {
  wordData: WordData | null;
 
}

const ResultCard: React.FC<ResultCardProps> = ({ wordData }) => {
  if (!wordData) return null;

  return (
    <Box mt={4}>
      {/* Display search details */}
     

      <Paper
        key={wordData.id}
        elevation={1}
        variant="outlined"
        sx={{
          width: "100%",
          borderRadius: 1,
          p: 2,
          bgcolor: "#fff",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "var(--font-anek-tamil)" }}>
            {wordData.word}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton sx={{ color: theme.palette.primary.light }}>
              <VolumeUpIcon />
            </IconButton>
            <Chip
              label={wordData.languages}
              sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.common.black, borderRadius: 0, fontWeight: "bold", fontFamily: "var(--font-anek-tamil)" }}
            />
          </Box>
        </Box>

        <Box mt={2} mb={1} borderBottom="1px solid #ddd" />

       
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Typography fontWeight="bold" sx={{ fontFamily: "var(--font-anek-tamil)" }}>பொருள்:</Typography>
          {wordData.meaning.map((item, index) => (
            <Chip key={index} label={item} sx={{ bgcolor: theme.palette.secondary.main, borderRadius: "0", color: theme.palette.common.black }} />
          ))}
        </Box>

        <Box mt={2} mb={1} borderBottom="1px solid #ddd" />

     
        <Box display="flex" justifyContent="flex-end" gap={1}>
          <IconButton sx={{ color: "#1877F2" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#E1306C" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "#128c7e" }}>
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResultCard;
