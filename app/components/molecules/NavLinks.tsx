import { Button, Stack } from "@mui/material";
import NavLink from "../atoms/NavLink";
import theme from "@/app/theme/theme";

const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/search", label: "Search" },
    // { href: "/login", label: "Login" },
    // { href: "/about", label: "About Us" }
];

export default function NavLinks() {
    return (
        <Stack direction="row" spacing={2}>
            {navLinks.map((link, idx) => (
                <Button
                    key={idx}
                    sx={{
                        position: "relative",
                        color: theme.palette.primary.light,
                        borderColor: theme.palette.primary.main,
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "0%",
                            height: "2px",
                            backgroundColor: theme.palette.primary.main,
                            transition: "width 0.3s ease-in-out",
                        },
                        "&:hover::after": {
                            width: "100%",
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
