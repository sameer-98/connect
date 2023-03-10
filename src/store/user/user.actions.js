import { createAction } from "@reduxjs/toolkit";

export const checkUserSessions = createAction('user/CHECK_USER_SESSION');

export const googleSignInStart = createAction('user/GOOGLE_SIGN_IN_START');

export const emailSignInStart = createAction('user/EMAIL_SIGN_IN_START');

export const signInFailed = createAction('user/SIGN_IN_FAILED');

