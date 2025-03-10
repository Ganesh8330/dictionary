// import React from "react";
// import {
//   Paper,
//   Typography,
//   Box,
//   Chip,
//   IconButton,
//   Divider,
// } from "@mui/material";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import theme from "@/app/theme/theme";

// interface WordOfTheDayProps {
//   wordOfTheDayData: {
//     id: number;
//     word: string;
//     meaning: string[];
//     languages: string;
//   };
// }



// const WordOfTheDay: React.FC<WordOfTheDayProps> = ({ wordOfTheDayData }) => {
//   return (
//     <Box display="flex" justifyContent="center" mt={4} px={2}>
//       <Paper
//         elevation={1}
//         variant="outlined"
//         sx={{
//           width: "100%",
//           maxWidth: 500,
//           borderRadius: 1,
//           p: 2,
//           bgcolor: "#fff",
//           overflow: "hidden",
//         }}
//       >
//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           textAlign="center"
//           mb={2}
//           sx={{
//             color: theme.palette.primary.light,
//             fontFamily: "var(--font-anek-tamil)",
//             wordBreak: "break-word", // Wraps long words
//             overflowWrap: "break-word",
//           }}
//         >
//           இன்று ஒரு சொல்
//         </Typography>

//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             sx={{
//               fontFamily: "var(--font-anek-tamil)",
//               wordBreak: "break-word", // Prevents overflow
//             }}
//           >
//             {wordOfTheDayData.word}
//           </Typography>
//           <Box display="flex" alignItems="center" gap={1}>
//             <IconButton sx={{ color: theme.palette.primary.light }}>
//               <VolumeUpIcon />
//             </IconButton>
//             <Chip
//               label={wordOfTheDayData.languages}
//               sx={{
//                 bgcolor: theme.palette.secondary.main,
//                 color: theme.palette.common.black,
//                 fontWeight: "bold",
//                 borderRadius: 0,
//                 fontFamily: "var(--font-anek-tamil)",
//                 maxWidth: 100, // Prevents long language names from overflowing
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 whiteSpace: "nowrap",
//               }}
//             />
//           </Box>
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box display="flex" alignItems="center" flexWrap="wrap" gap={1} mt={1}>
//           <Typography
//             fontWeight="bold"
//             sx={{
//               fontFamily: "var(--font-anek-tamil)",
//               flexShrink: 0, // Ensures label doesn't get squeezed
//             }}
//           >
//             பொருள்:
//           </Typography>
//           {wordOfTheDayData.meaning.map((item, index) => (
//             <Chip
//               key={index}
//               label={item}
//               sx={{
//                 bgcolor: theme.palette.secondary.main,
//                 borderRadius: 0,
//                 color: theme.palette.common.black,
//                 maxWidth: 120, // Prevents long meanings from overflowing
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 whiteSpace: "nowrap",
//               }}
//             />
//           ))}
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default WordOfTheDay;
