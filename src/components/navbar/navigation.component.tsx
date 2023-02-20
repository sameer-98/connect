import { DarkMode, LightMode } from "@mui/icons-material";
import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/state.selector";
import { setMode } from "../../store/stateSlice";
import FlexBetween from "../FlexBetween";

export const Navigation = () => {
    const theme = useTheme();
    const isLoggedIn = Boolean(useSelector(selectCurrentUser))
    const dispatch = useDispatch()
    const alt = theme.palette.background.alt

    const modeChange = () => dispatch(setMode())
    return(
        <>
            {
              !isLoggedIn ? (
                <FlexBetween padding='1.5rem 6%'>
                        <Typography
                            flexGrow="1"
                            textAlign='center'
                            color={theme.palette.primary.main}
                            fontWeight='bold'
                            fontSize='clamp(1rem,2rem,2.25rem)'
                        >Connect
                        </Typography>
                        <IconButton onClick={modeChange}>
                            {
                                (theme.palette.mode === 'light') ? (
                                    <LightMode></LightMode>
                                ):(
                                    <DarkMode></DarkMode>
                                )
                            }
                            
                        </IconButton>
                    
                </FlexBetween>
              ): 
              
              (<FlexBetween>

              </FlexBetween>)
            }
        </>
    )
}