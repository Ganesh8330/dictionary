'use client';
import { Box, Container, Typography } from "@mui/material";
import ResultCounter from "../components/organisms/ResultCounter";
import AutoCompleteComponent from "../components/organisms/AutocompleteComponent";
import ResultSection from "../components/organisms/ResultSection";





export default function Result() {
    return(
        <Box sx={{pt:8}}>
            <Typography variant="h6"
                color="textSecondary"
                sx={{
                mb: 2,
                fontWeight: 600,
                fontSize: 30,
                textAlign:'center',
                fontFamily: "var(--font-anek-tamil)",
        }}>தமிழ் பொருள் அறிக</Typography>
            <AutoCompleteComponent/>
            <ResultCounter/>
            <ResultSection/>
        </Box>
    )
}