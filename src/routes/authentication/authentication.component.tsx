import { signInWithGooglePopup } from "../../utils/firebase.utils"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/stateSlice";
import { Button } from "@mui/material";
import { Navigation } from "../../components/navbar/navigation.component";


export const Authentication = () => {

    const googleSignIn = async() => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }

   return (<div>
        <Navigation/>
        <h1>
            Sign In Now
            <Button onClick={googleSignIn}>Sign In</Button>
        </h1>
    </div>)
}