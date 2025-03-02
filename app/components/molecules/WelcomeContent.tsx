import { Stack } from "@mui/material";
import SecitonHeading from "../atoms/SectionHeading";
import SectionSubText from "../atoms/SectionSubText";

export default function WelcomeContent() {

    return(
         <Stack spacing={2} alignItems='center' sx={{px:5}}>
            <SecitonHeading title="தமிழ் பேரகரமுதலி"/>
            <SectionSubText text="தமிழ் மொழியின் செழுமையான சொற்களஞ்சியம் - பழமையான மற்றும் நவீன சொற்களின் பொருள், விளக்கம் மற்றும் பயன்பாடுகளைக் காணலாம்."/>
        </Stack>
        
    )
}