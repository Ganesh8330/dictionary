import { Link } from "@mui/material";

interface NavLinkProps {
    href: string;
    label: string;
}

export default function NavLink({href, label}: NavLinkProps) {

    return(
        <Link href={href} underline="none" color="inherit" sx={{mx:1, cursor:'pointer', fontSize:'14px', textTransform:'uppercase', fontFamily:'var(--font-anek-tamil)'}}>
            {label}
        </Link>
    )
}