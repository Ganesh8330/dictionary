import { Box } from "@mui/material";
import CardSection from "./components/organisms/CardSection";
import CountrySection from "./components/organisms/CountrySection";
import WelcomSection from "./components/organisms/WelcomSection";
import CategorySection from "./components/organisms/CategorySection";
import JoinUs from "./components/organisms/JoinUs";
import theme from "./theme/theme";



export default function Home() {
  return (
    <Box>
        <WelcomSection/>
        <Box component='section' sx={{bgcolor: theme.palette.secondary.light
        }}>
         <CardSection/>
        </Box>
        <Box component='section' sx={{ p:10, bgcolor:theme.palette.secondary.main}}>
          <CountrySection/>
        </Box>
        <Box component='section' sx={{p:10}}>
          <CategorySection/>
        </Box>
        <Box component='section' sx={{ p:10, bgcolor:theme.palette.secondary.light}}>
          <JoinUs/>
        </Box>
        
    </Box>
  );
}



