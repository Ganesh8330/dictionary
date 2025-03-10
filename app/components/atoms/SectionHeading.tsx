import theme from "@/app/theme/theme";
import { Typography } from "@mui/material";

export default function SecitonHeading({title}:{title:string}) {
    return (
        <Typography  variant="h1" sx={{textAlign:'center',fontWeight:theme.typography.fontWeightBold,color:'#000' , fontSize:40, fontFamily:'var(--font-anek-tamil)'}}>
            {title}
        </Typography>
    )
}