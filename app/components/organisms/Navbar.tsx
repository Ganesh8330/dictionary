import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
} from "@mui/material";
import LogoTitle from "../atoms/LogoTitle";
import NavLinks from "../molecules/NavLinks";
import theme from "@/app/theme/theme";
import React from "react";
import { MenuOutlined } from "@mui/icons-material";
import NavbarDrawer from "../organisms/NavbarDrawer";

interface Props {
  window?: () => Window;
}

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: theme.palette.common.white }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2, display: { sm: "none" }, color: theme.palette.primary.light,
              "&:hover": {
                backgroundColor: "#ccccff",
              },
            }}
          >
            <MenuOutlined  />
          </IconButton>
          <LogoTitle />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLinks />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <NavbarDrawer
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>
    </Box>
  );
}
