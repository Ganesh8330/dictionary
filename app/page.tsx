import { Box } from "@mui/material";
import CardSection from "./components/organisms/CardSection";
import CountrySection from "./components/organisms/CountrySection";
import WelcomSection from "./components/organisms/WelcomSection";
import CategorySection from "./components/organisms/CategorySection";
import JoinUs from "./components/organisms/JoinUs";



export default function Home() {
  return (
    <Box>
        <WelcomSection/>
        <Box component='section'>
         <CardSection/>
        </Box>
        <Box component='section' sx={{background:'#f2f2f2', p:10}}>
          <CountrySection/>
        </Box>
        <Box component='section' sx={{p:10}}>
          <CategorySection/>
        </Box>
        <Box component='section' sx={{background:'#f2f2f2', p:10}}>
          <JoinUs/>
        </Box>
        
    </Box>
  );
}



