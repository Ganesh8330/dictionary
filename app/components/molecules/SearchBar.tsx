import { Autocomplete, Box, Button, InputAdornment, TextField, Paper } from "@mui/material";
import { SearchSharp } from "@mui/icons-material";
import React from "react";
import theme from "@/app/theme/theme";

interface SearchBarProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  options: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ inputValue, setInputValue, handleSubmit, options }) => {
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Autocomplete
        value={inputValue}
        disableClearable
        options={options}
        onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
        sx={{
          background: "#fff",
          borderRadius: 1,
          width: { xs: "90%", sm: "80%", md: "70%" },
          "& .MuiInputBase-root": {
            borderRadius: 1,
          },

        }}
        slots={{
          paper: (props) => (
            <Paper
              {...props}
              sx={{
                background: "#fff",
                borderRadius: "2px",
                mt: 1,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,

              }}
            />
          ),
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="சொற்களை இங்கே இடுக..."
            sx={{
              fontFamily: "var(--font-anek-tamil)",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor:theme.palette.primary.light , 
                },
                "&.Mui-focused fieldset": {
                  border: 1,
                  borderColor: theme.palette.primary.light,
                  boxShadow: '0px 2px 8px rgba(99, 102, 241, 0.15)'
                },


              },
            }}
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchSharp />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" sx={{ height: "100%" }}>
                    <Button
                      disableFocusRipple
                      variant="outlined"
                      type="submit"
                      sx={{
                        color: '#fff',
                        borderColor: theme.palette.primary.light,
                        borderRadius: 0,
                        height: "100%",
                        transition: "all 0.2s ease-in-out",
                        position: "absolute",
                        right: 0,
                        borderBottomRightRadius: 3,
                        borderTopRightRadius: 3,
                        outline: "none",
                        background: theme.palette.primary.main,
                        "&:hover": {
                          background: theme.palette.primary.main,
                          outline: 'none',
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
  );
};

export default SearchBar;
