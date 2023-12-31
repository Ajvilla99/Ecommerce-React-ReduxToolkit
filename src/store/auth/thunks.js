import { registerUserWithEmailPassword } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch( logout({errorMessage}) )

        dispatch( login({ uid, displayName, email, photoURL }))
    }
}