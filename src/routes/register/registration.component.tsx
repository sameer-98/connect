import { Navigation } from "../../components/navbar/navigation.component";
import {  Box, useMediaQuery , useTheme, Typography} from "@mui/material";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";

export const Registration = () => {
    const theme = useTheme()
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
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
                <Box sx={{mb: "1.5rem"}}>
                    <Typography
                    fontWeight="700"
                    variant="h3"
                    mb="0.5rem"
                    >
                        Sign Up Now 
                    </Typography>
                    <Typography variant="h6" >
                        Its quick and easy
                    </Typography>
                </Box>
                <SignUpForm/>
                </Box>
            </Box>
        </div>
    )
}