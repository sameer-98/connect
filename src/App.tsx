import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authentication } from './routes/authentication/authentication.component';
import { Registration } from './routes/register/registration.component';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';
import { selectCurrentMode } from './store/state.selector';
import { useSelector } from 'react-redux';
import { Home } from './routes/home/home.component';

const App = () => {
  const mode = useSelector(selectCurrentMode)
  const theme = createTheme(themeSettings(mode))

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;
