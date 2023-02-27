import { signInWithGooglePopup } from "../../utils/firebase.utils"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/stateSlice";
import { Button, Box, useMediaQuery , useTheme, Typography} from "@mui/material";
import { Navigation } from "../../components/navbar/navigation.component";
import { SignIn } from "../../components/sign-in-component/sign-in-form.component";

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
            width={isNonMobileScreens ? "30%" : "90%"}
            p='4rem'
            m='2rem auto'
            borderRadius='1.5rem'
            bgcolor={theme.palette.background.alt}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            
            <Typography
            textAlign="center"
            fontWeight="500"
            variant="h4"
            sx={{mb: "1.5rem"}}>
                Welcome To Connect, Login Now and Connect
            </Typography>
            <SignIn/>
            </Box>
        </Box>
    </div>)
}