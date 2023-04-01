import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Typography, Button, Switch, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ThemeBasic = ({ children }) => {
  const theme1 = createTheme({
    palette: {
      primary: {
        light: "#abdbe3",
        main: "#abdbe3 ",
        dark: "#063970",
      },
    },
  });
  return <ThemeProvider theme={theme1}>{children}</ThemeProvider>;
};
/////////////////////////////////////////////
const DarkTheme = ({ children }) => {
  const [dark, setDark] = useState(false);
  const theme2 = createTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme2}>
      <Switch checked={dark} onChange={() => setDark(dark)} />
      <Paper>{children}</Paper>
    </ThemeProvider>
  );
};
///////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const MakeStyles = () => {
  const classes = useStyles();
  console.log(classes);
  return <Button className={classes.root}>My Button</Button>;
};
/////////////////////
const ThemeTest = () => {
  return (
    <div>
      <ThemeBasic>
        <Typography variant="h4">Theme Basic</Typography>
      </ThemeBasic>
      <DarkTheme>
        <Typography variant="h4">Dark Theme</Typography>
      </DarkTheme>
    </div>
  );
};

export default ThemeTest;
export { MakeStyles, DarkTheme, ThemeBasic };
