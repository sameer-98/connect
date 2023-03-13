import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authentication } from './routes/authentication/authentication.component';
import { Registration } from './routes/register/registration.component';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';
import { selectCurrentMode } from './store/state.selector';
import { useDispatch, useSelector } from 'react-redux';
import { Home } from './routes/home/home.component';
import { checkUserSessions } from './store/user/user.actions';
import { ProtectedRoutes } from './components/ProtectedRoutes';

const App = () => {
  const mode = useSelector(selectCurrentMode)
  const theme = createTheme(themeSettings(mode))
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSessions())
  },[dispatch])
  

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<Home/>} path='/home'/>
        </Route>
        <Route element={<Authentication/>} path='/auth' />
        <Route element={<Registration/>} path='/register'/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;
