import { signInWithGooglePopup } from "../../utils/firebase.utils"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/stateSlice";
import { Button } from "@mui/material";


export const Authentication = () => {

    const googleSignIn = async() => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }

   return (<div>
        <h1>
            Sign In Now
            <Button onClick={googleSignIn}>Sign In</Button>
        </h1>
    </div>)
}