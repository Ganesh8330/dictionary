'use client';
import { Box, Container, Typography } from "@mui/material";
import AutoCompleteComponent from "../components/molecules/AutocompleteComponent.tsx";
import ResultCounter from "../components/organisms/ResultCounter";


const options =["அகம்பாவம் ","கதிரை","அறிவு" ]


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
            <AutoCompleteComponent options={options}/>
            <ResultCounter/>
        </Box>
    )
}