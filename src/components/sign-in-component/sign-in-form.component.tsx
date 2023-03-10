import { TextField, Grid, Button, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { googleSignInStart } from "../../store/user/user.actions";

// types for initial form values
type InitialSignInValues = {
    email: String;
    password: String;
}
// declare initial values for form
const initialValues: InitialSignInValues = {
    email: '',
    password: ''
}
// TODO: Create a submit method for sign in
const onSubmit = (values: InitialSignInValues) => {
    console.log('Form data', values)
}
// Validation schema object with yup
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})

export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleSignIn = async() => {
        // dispatch googleSignInStart action creator
        dispatch(googleSignInStart())
    }

    const handleSignIn = async() => {
        // dispatch signInStart action creator 
    }
    
    // Use formik to handle forms
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5}
            >
                <Grid item xs={12}>
                    <Typography 
                    variant="h6"
                    textAlign="center">
                        Not a member yet? <Link color='inherit'    style={{ cursor: 'pointer' }}
                        onClick={() => {navigate('/register')}}>sign up here</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="email"
                    name="email"
                    variant="outlined"
                    label="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={(formik.touched.email && formik.errors.email) ? <>{formik.errors.email}</> : null}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    onBlur={formik.handleBlur}
                    helperText={(formik.touched.password && formik.errors.password) ? <>{formik.errors.password}</> : null}
                    />               
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            p:1.5,
                            fontSize:'1.25rem',
                            fontWeight: '700'
                        }}
                    >
                        LET ME IN
                    </Button>
                </Grid>
                <Grid item xs ={12} textAlign="center">
                    <IconButton type="button" onClick={handleGoogleSignIn}>
                    <Google 
                        sx={{color: "red", fontSize: "2.5rem"}}/>
                    </IconButton>
                    <IconButton>
                    <Facebook
                    sx={{color: "#3b5998", fontSize: "2.5rem"}}/>
                    </IconButton>  
                </Grid>
            </Grid>

        </form>
    )
}
