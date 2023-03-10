import { signOutUser } from "../../utils/firebase.utils"


export const Home = () => {
    const signOutHandler = async() => await signOutUser()

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
        
    )
}