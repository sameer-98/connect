import { useDispatch } from "react-redux"
import { signOutStart } from "../../store/user/user.actions";


export const Home = () => {
    const dispatch = useDispatch();
    

    const signOutHandler = async() => dispatch(signOutStart())

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
        
    )
}