// components/organisms/Footer.tsx
import { Box, Container, Divider } from '@mui/material';
import FooterText from '../atoms/FooterText';
import theme from '@/app/theme/theme';

export default function Footer() {
  return (
    <Box component="footer" sx={{background:theme.palette.secondary.dark, p:2}}>
      <Container sx={{ textAlign: 'center' }}>
        <FooterText />
      </Container>
    </Box>
  );
}
