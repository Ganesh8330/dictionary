import theme from "@/app/theme/theme";
import { Link } from "@mui/material";

interface NavLinkProps {
    href: string;
    label: string;
}

export default function NavLink({href, label}: NavLinkProps) {

    return(
        <Link href={href} underline="none"  sx={{mx:1, cursor:'pointer', fontSize:'14px',color:theme.palette.primary.main, textTransform:'uppercase', fontFamily:'var(--font-anek-tamil)'}}>
            {label}
        </Link>
    )
}