import React, { useState, useEffect } from "react";
import { tamilLetters } from "../Data/tamilLetters";
import SearchBar from "../molecules/SearchBar";
import SnackbarAlert from "../atoms/SnackbarAlert";
import ResultCard from "../molecules/ResultCard";
import { Box, Container, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import theme from "@/app/theme/theme";

interface WordData {
  id: number;
  word: string;
  meaning: string[];
  languages: string;
}

const AutoCompleteComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<WordData[] | null>(null);
  const [searchCount, setSearchCount] = useState<number>(0);
  const [language, setLanguage] = useState("தமிழ்");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [allWords, setAllWords] = useState<WordData[]>([]);

  useEffect(() => {
    const fetchAllWords = async () => {
      try {
        const response = await fetch("https://67c2bed71851890165ad2322.mockapi.io/words");
        if (!response.ok) throw new Error("Failed to fetch words");
        const data = await response.json();
        setAllWords(data);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchAllWords();
  }, []);

  useEffect(() => {
    if (inputValue.length >= 3) {
      const filtered = allWords
        .filter(word => word.word.toLowerCase().includes(inputValue.toLowerCase()))
        .map(word => word.word);
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [inputValue, allWords]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length < 3) {
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await fetch(`https://67c2bed71851890165ad2322.mockapi.io/words?search=${inputValue}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const results = await response.json();

      setSearchResult(results);
      setSearchCount(results.length);
      setSearchedTerm(inputValue);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        setInputValue={(value) => setInputValue(tamilLetters(value))}
        handleSubmit={handleSubmit}
        options={filteredOptions}
      />
      <SnackbarAlert
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message="Please enter more than 3 letters"
      />

      <Container>
        {searchResult && searchResult.length > 0 && (
          <Stack direction='row' alignItems='baseline' justifyContent='space-between' pt={2}>
       <Typography
  variant="subtitle1"
  sx={{ fontWeight: "bold", fontFamily: "var(--font-anek-tamil)", mt: 3 }}
>
  <span style={{ fontWeight: "bold" }}>&quot;{searchedTerm}&quot;</span> - {searchCount} result{searchCount !== 1 ? "s" : ""} found
</Typography>

            <RadioGroup row value={language} onChange={(e) => setLanguage(e.target.value)}>
              <FormControlLabel value="தமிழ்" control={<Radio sx={{
                "&.Mui-checked": {
                  color: theme.palette.primary.main
                }
              }} />} label="தமிழ்" sx={{ "& .MuiFormControlLabel-label": { fontFamily: 'var(--font-anek-tamil)' } }} />
              <FormControlLabel value="சம்ஸ்கிருதம்" control={<Radio sx={{
                "&.Mui-checked": {
                  color: theme.palette.primary.main
                }
              }} />} label="சம்ஸ்கிருதம்" sx={{ "& .MuiFormControlLabel-label": { fontFamily: 'var(--font-anek-tamil)' } }} />
              <FormControlLabel value="பிரஞ்சு" control={<Radio sx={{
                "&.Mui-checked": {
                  color: theme.palette.primary.main
                }
              }} />} label="பிரஞ்சு" sx={{ "& .MuiFormControlLabel-label": { fontFamily: 'var(--font-anek-tamil)' } }} />
              <FormControlLabel value="உருது" control={<Radio sx={{
                "&.Mui-checked": {
                  color: theme.palette.primary.main
                }
              }} />} label="உருது" sx={{ "& .MuiFormControlLabel-label": { fontFamily: 'var(--font-anek-tamil)' } }} />
            </RadioGroup>
          </Stack>
        )}

        <Box sx={{ overflowY: "auto", maxHeight: { xs: "350px", md: "500px" }, pb: 14, pt: 1, px: 4 }}>
          {searchResult?.map((word: WordData) => (
            <ResultCard key={word.id} wordData={word} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default AutoCompleteComponent;