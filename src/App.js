import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";
import { useState } from "react";

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${props => props.theme.body};
  transition: all 0.25s ease;
`;

const Name = styled.h1`
  margin: 1rem;
  color: ${props => props.theme.title}
`;

const Info = styled.p`
  margin: 1rem;
  color: ${props => props.theme.subtitle}
`;

const darkTheme = {
  body: '#1c1c1c',
  title: '#fff',
  subtitle: '#6b6b6b',
  icon: '#6b6b6b'
}

const lightTheme = {
  body: '#fff',
  title: '#1c1c1c',
  subtitle: '#333'
}


function App() {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';

  const toogleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toogleTheme={toogleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        <Name>Jim Naysium</Name>
        <Info>Username: jimnays10</Info>
        <Info>Email: jim@gmail.com</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
