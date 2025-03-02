import theme from "@/app/theme/theme";
import { SearchSharp } from "@mui/icons-material";
import { Autocomplete, Box, Button, InputAdornment, Snackbar, TextField, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import { tamilLetters } from "../Data/tamilLetters";
import { useRouter, useSearchParams } from "next/navigation";

interface AutoCompleteComponentProps {
  options: string[];
}

const AutoCompleteComponent: React.FC<AutoCompleteComponentProps> = ({ options }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search") || ""; 
  console.log(searchParams);
  console.log(searchValue);
  

  const [inputValue, setInputValue] = useState(searchValue);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length < 3) {
      setOpenSnackbar(true);
      return;
    }
    console.log('input value', encodeURIComponent(inputValue));
    router.push(`/results?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Autocomplete
          freeSolo
          disablePortal
          disableClearable
          options={options}
          value={inputValue}
          onInputChange={(e, newInputValue) => {
            const convertedValue = tamilLetters(newInputValue);
            setInputValue(convertedValue);
          }}
          sx={{
            m: "0 auto",
            mt: 3,
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: 1,
            borderColor: "#E0E3E7",
            width: "70%",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 10px",
            },
          }}
          // filterOptions={(options) => (inputValue.trim().length > 3 ? options : ['No options'])}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                fontFamily: "var(--font-anek-tamil)",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    border: 1,
                    borderColor: theme.palette.primary.light,
                  },
                },
              }}
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                  placeholder: "சொற்களை இங்கே இடுக...",
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchSharp />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        disableFocusRipple
                        variant="outlined"
                        type="submit"
                        sx={{
                          width: "100%",
                          color: theme.palette.primary.light,
                          borderColor: theme.palette.primary.light,
                          borderRadius: 0,
                          transition: "all 0.2s ease-in-out",
                          "&:hover": {
                            background: "#ccccff",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          },
                        }}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          sx={{
            backgroundColor: "#000000",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Please enter more than 3 letters
        </Alert>
      </Snackbar>
    </>
  );
};

export default AutoCompleteComponent;
