import { TextField,Grid, Button } from "@mui/material";
import * as Yup from 'yup';
import { useFormik } from "formik"; 
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

type InitialSignUpValues = {
    displayName: String;
    email: string; 
    password: string;
    confirmPassword: string;
}

const initialValues: InitialSignUpValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const onSubmit = async(values: InitialSignUpValues) => {
    const {displayName, email, password, confirmPassword} = values;

    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }
    try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, {displayName})
    }
    catch(error){
        console.log('User encountered error while creating user');
    }
}

const validationSchema = Yup.object({
    displayName: Yup.string()
                    .required('Required')
                    .min(5,'Display Name should be atleast 5 characters long'), 
    email: Yup.string()
                .email('Invalid email format')
                .required('Required'),
    password: Yup.string()
                .required('Required'),
    confirmPassword: Yup.string()
                        .required('Please Retype you pasword ')
                        .test('passwords-match','Passwords must match', function(value){
                            return this.parent.password === value
                        } )

})

export const SignUpForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    name="displayName"
                    variant="outlined"
                    label="User Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.displayName}
                    error={formik.touched.displayName && Boolean(formik.errors.displayName)}
                    helperText={(formik.touched.displayName && formik.errors.displayName) ? <>{formik.errors.displayName}</>: null }
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="email"
                    name="email"
                    variant="outlined"
                    label="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={(formik.touched.email && formik.errors.email) ? <>{formik.errors.email}</> : null }
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
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={(formik.touched.password && formik.errors.password) ? <>{formik.errors.password}</> : null }
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="password"
                    name="confirmPassword"
                    variant="outlined"
                    label="Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? <>{formik.errors.confirmPassword}</> : null }
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
                        Sign Up
                    </Button>
                </Grid>
                
            </Grid>
        </form>
    )
}