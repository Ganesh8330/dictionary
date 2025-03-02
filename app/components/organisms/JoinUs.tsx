import theme from "@/app/theme/theme";
import { EmailOutlined } from "@mui/icons-material";
import { Button, Container, InputAdornment, TextField, Typography } from "@mui/material";

export default function JoinUs() {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6"
                color="textSecondary"
                sx={{
                    textAlign: "center",
                    mb: 3,
                    fontSize: 30,
                    fontFamily: "var(--font-anek-tamil)",
                }}>
                இணைய விரும்பினால்
            </Typography>
            <Typography variant="h2"
                sx={{
                    textAlign: "center",
                    mb: 3,
                    fontWeight: 600,
                    fontSize: 20,
                    fontFamily: "var(--font-anek-tamil)",
                }}>
                நீங்களும் இத்திட்டத்தில் பங்கு கொள்ளலாம் !
            </Typography>
            <TextField
                type="email"
                placeholder="உங்களின் மின்னஞ்சல் முகவரி இடுக..."
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><EmailOutlined /></InputAdornment>,
                        endAdornment: <InputAdornment position="end">
                            <Button 
                                disableFocusRipple
                                variant="outlined"
                                sx={{
                                    color: theme.palette.primary.light,
                                    borderColor: theme.palette.primary.light,
                                    transition: 'all 0.2s ease-in-out',
                                    borderRadius:0,
                                    '&:hover': {
                                        background: '#ccccff',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    },
                                }}>
                                Register
                            </Button>
                        </InputAdornment>
                    }
                }}
                sx={{
                    width: '60%',
                    background: '#ffffff',
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
                    borderRadius: "8px", 
                    transition: "all 0.3s ease-in-out",
                    '&:hover': {
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)", 
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#E0E3E7',
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: "1px",
                            borderColor: theme.palette.primary.light,
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", 
                        },
                    },
                }}
            />
        </Container>
    )
}
