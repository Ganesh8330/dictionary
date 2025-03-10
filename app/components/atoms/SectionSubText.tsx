import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";

export default function SectionSubText({text}:{text:string}) {
    return(
        <Box justifyContent='center'>
        <Typography  sx={{fontSize:14,fontFamily:'var(--font-anek-tamil)',textAlign:'justify', color:'#000',lineHeight:2, wordWrap:'break-word', fontWeight:theme.typography.fontWeightLight}}>
            {text}
        </Typography>
        </Box>
    )
}