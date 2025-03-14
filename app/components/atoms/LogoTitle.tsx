// components/atoms/LogoTitle.tsx
import { Typography, Box } from "@mui/material";
import Image from "next/image";

const LogoTitle: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          color: "#000",
          ml: 1,
          fontFamily: "var(--font-anek-tamil)",
        }}
      >
        தமிழ் பேரகரமுதலி
      </Typography>
    </Box>
  );
};

export default LogoTitle;
