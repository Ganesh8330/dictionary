import theme from "@/app/theme/theme";
import { Typography } from "@mui/material";

export default function FooterText() {
    return (
        <Typography variant="body2"sx={{color:theme.palette.common.white, fontFamily:'var(--font-anek-tamil)'} } >
             © {new Date().getFullYear()} தமிழ் பேரகரமுதலி. All rights reserved.
        </Typography>
    )
}