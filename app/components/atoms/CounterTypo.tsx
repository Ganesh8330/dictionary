import theme from "@/app/theme/theme";
import { Typography } from "@mui/material";

interface CounterProps {
  count: number;
}

export default function CounterTypo({ count }: CounterProps) {
  return (
    <Typography variant="h6" sx={{ fontFamily: "var(--font-anek-tamil)" }}>
      <span style={{ color: theme.palette.primary.light }}>{count}</span>{" "}
      {count > 0 ? "பொருத்தமான சொற்கள்!" : "No result found"}
    </Typography>
  );
}
