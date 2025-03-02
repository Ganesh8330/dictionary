import theme from "@/app/theme/theme";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface DrawerItemProps {
  text: string;
  href: string; 
}

export default function DrawerItem({ text, href }: DrawerItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton component='a' href={href} sx={{ textAlign: "center",fontSize:12, fontWeight:100,"&:hover": {
                backgroundColor: "#ccccff",
                
              } }}>
        <ListItemText primary={text} slotProps={{
            primary: {
              sx: {
                fontSize: 14,
                fontWeight: 300,
                color: theme.palette.primary.light,
                textTransform:'uppercase',
                fontFamily:'var(--font-anek-tamil)'
              },
            },
          }} />
      </ListItemButton>
    </ListItem>
  );    
}
