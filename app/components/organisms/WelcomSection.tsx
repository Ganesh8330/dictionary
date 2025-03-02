'use client';
import { Box, Container, Grid2 } from "@mui/material";
import WelcomeContent from "../molecules/WelcomeContent";
import AutoCompleteComponent from "../molecules/AutocompleteComponent.tsx";


const options =["அகம்பாவம் ","கதிரை","அறிவு" ]

export default function WelcomSection() {
    return(
        <Box sx={{p:10, backgroundColor:'#f2f2f2'}}>

                <Container >
                        <WelcomeContent/>
                        <AutoCompleteComponent options={options}/>
                </Container>
           
        </Box>
    )
}