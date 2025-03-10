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

                                type="submit"
                                sx={{
                                    color: '#fff',
                                    borderColor: theme.palette.primary.light,
                                    borderRadius: 0,
                                    height: "100%",
                                    transition: "all 0.2s ease-in-out",
                                    position: "absolute",
                                    right: 0,
                                    borderBottomRightRadius: 3,
                                    borderTopRightRadius: 3,
                                    outline: "none",
                                    background: theme.palette.primary.light,
                                    "&:hover": {
                                        background: theme.palette.primary.main,
                                        outline: 'none',
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
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                  "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "transparent", // Removes border on hover
                },
                "&.Mui-focused fieldset": {
                  border: 1,
                  borderColor: theme.palette.primary.light,
                  boxShadow: '0px 2px 8px rgba(99, 102, 241, 0.15)'
                },


              },
                }}
            />
        </Container>
    )
}
