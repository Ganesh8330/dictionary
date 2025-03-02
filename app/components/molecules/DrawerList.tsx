import { List } from "@mui/material";
import DrawerItem from "../atoms/DrawerItems";

const navItems = [
  { text: "Home", href: "/" },
  { text: "Search", href: "/search" },
  { text: "Login", href: "/login" },
  { text: "About Us", href: "/about" },
];

export default function DrawerList() {
  return (
    <List>
      {navItems.map((item, idx) => (
        <DrawerItem key={idx} text={item.text} href={item.href} />
      ))}
    </List>
  );
}
