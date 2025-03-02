import { Button, Stack } from "@mui/material";
import NavLink from "../atoms/NavLink";
import theme from "@/app/theme/theme";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Search" },
    { href: "/login", label: "Login" },
    { href: "/about", label: "About Us" }
];

export default function NavLinks() {
    return (
        <Stack direction="row" spacing={2}>
            {navLinks.map((link, idx) => (
                <Button
                    key={idx}
                    sx={{
                        color: theme.palette.primary.light,
                        borderColor: theme.palette.primary.main,
                        transition: "background-color 0.3s",
                        "&:hover": {
                            backgroundColor: "#ccccff", 
                        },
                    }}
                    disableElevation
                >
                    <NavLink href={link.href} label={link.label} />
                </Button>
            ))}
        </Stack>
    );
}
