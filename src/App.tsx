import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Authentication } from './routes/authentication/authentication.component';
import { Registration } from './routes/register/registration.component';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';
import { selectCurrentMode, selectCurrentUser } from './store/state.selector';
import { useDispatch, useSelector } from 'react-redux';
import { Home } from './routes/home/home.component';
import { checkUserSessions } from './store/user/user.actions';

const App = () => {
  const mode = useSelector(selectCurrentMode)
  const theme = createTheme(themeSettings(mode))
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  useEffect(() => {
    dispatch(checkUserSessions())
  },[dispatch])
 
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home/>: (<Navigate replace to={'/auth'}/> )}/>
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/register' element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;
