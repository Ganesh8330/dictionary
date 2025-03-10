import { Snackbar, Alert } from "@mui/material";
import React from "react";

interface SnackbarAlertProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ open, onClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert onClose={onClose} severity="error" sx={{ backgroundColor: "#000000", color: "#fff", fontWeight: "bold" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;