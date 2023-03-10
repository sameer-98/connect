import {all, call, put, takeLatest} from 'redux-saga/effects'
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils'
import { checkUserSessions, googleSignInStart, signInFailed } from './user.actions'
import { signInSuccess } from './user.reducer'

export function* getUserSnapShotFromAuth(userAuth, additionalDetails){
    
    try{
        const userSnapShot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        console.log(userSnapShot.data())
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }
    catch(error){
        yield put(signInFailed(error))
    }
}

export function* googleSignIn(){
    try{
        const {user} = yield call (signInWithGooglePopup);
        if(!user) return;
        yield call(getUserSnapShotFromAuth, user)

    }
    catch(error){
        yield put(signInFailed(error))
    }

}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call (getUserSnapShotFromAuth, userAuth)
}
catch(error){
    yield put(signInFailed(error))
}
    
}

export function* onGoogleSignInStart(){
    yield takeLatest('user/GOOGLE_SIGN_IN_START',googleSignIn)
}

export function* onCheckUserSession(){
    yield takeLatest('user/CHECK_USER_SESSION',isUserAuthenticated)
}

export function* userSaga(){
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart)
    ])
}
