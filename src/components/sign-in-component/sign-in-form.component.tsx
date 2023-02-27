import { TextField, Grid, Button, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

// types for initial form values
type InitialSignInValues = {
    email: String | null;
    password: String | null;
}
// declare initial values for form
const initialValues: InitialSignInValues = {
    email: '',
    password: ''
}

const onSubmit = (values: InitialSignInValues) => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})

export const SignIn = () => {
    const navigate = useNavigate();

    const handleSignIn = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        if(userDocRef){
            navigate('/home')
        }
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
                        Not a member yet? <Link color='inherit' href="#">sign up here</Link>
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
                    helperText={formik.touched.email && formik.errors.email}
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
                    helperText={formik.touched.password && formik.errors.password}
                    />               
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            p:2,
                            fontSize:'1.25rem',
                            fontWeight: '700'
                        }}
                    >
                        LET ME IN
                    </Button>
                </Grid>
                <Grid item xs ={12} textAlign="center">
                    <IconButton onClick={handleSignIn}>
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
