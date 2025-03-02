import { Box, Divider, Drawer, Typography } from "@mui/material";
import DrawerList from "../molecules/DrawerList";
import theme from "@/app/theme/theme";

interface NavbarDrawerProps {
  container?: () => HTMLElement;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default function NavbarDrawer({
  container,
  mobileOpen,
  handleDrawerToggle,
}: NavbarDrawerProps) {
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, 
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Box>
        <Typography variant="h6" sx={{p:2, textAlign:'center', color:theme.palette.primary.light, fontSize:18, fontWeight:800,fontFamily:'var(--font-anek-tamil)'}}>தமிழ் பேரகரமுதலி</Typography>
        <Divider />
        <DrawerList />
      </Box>
    </Drawer>
  );
}
