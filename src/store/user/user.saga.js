import {all, call, put, takeLatest} from 'redux-saga/effects'
import { getCurrentUser, createUserDocumentFromAuth } from '../../utils/firebase.utils'
import { checkUserSessions, signInFailed } from './user.actions'
import { signInSuccess } from './user.reducer'

export function* getUserSnapShotFromAuth(userAuth, additionalDetails){
    
    try{
        const userSnapShot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        console.log(userSnapShot)
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot}))
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

export function* onCheckUserSession(){
    yield takeLatest(checkUserSessions,isUserAuthenticated)
}

export function* userSaga(){
    yield all([call(onCheckUserSession)])
}