import { signInWithGooglePopup } from "../../utils/firebase.utils"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/stateSlice";
import { Button, Box, useMediaQuery , useTheme, Typography} from "@mui/material";
import { Navigation } from "../../components/navbar/navigation.component";


export const Authentication = () => {
    const theme = useTheme()
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
    const googleSignIn = async() => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }

    console.log(isNonMobileScreens)
   return (
   <div>
        <Navigation/>
        <Box>
            <Box
            width={isNonMobileScreens ? "50%" : "90%"}
            p='2rem'
            m='2rem auto'
            borderRadius='1.5rem'
            bgcolor={theme.palette.background.alt}>
            
            <Typography
            textAlign="center"
            fontWeight="500"
            variant="h4"
            sx={{mb: "1.5rem"}}>
                Welcome To Connect, Login Now and Connect
            </Typography>

            </Box>
        </Box>
    </div>)
}