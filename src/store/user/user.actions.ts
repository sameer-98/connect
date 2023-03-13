import { createAction} from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

export const checkUserSessions = createAction('user/CHECK_USER_SESSION');

export const googleSignInStart = createAction('user/GOOGLE_SIGN_IN_START',(navigate: NavigateFunction) => {
    return {
        payload:{
            navigate
        }
    }
});

export const emailSignInStart = createAction('user/EMAIL_SIGN_IN_START');

export const signInFailed = createAction('user/SIGN_IN_FAILED');

