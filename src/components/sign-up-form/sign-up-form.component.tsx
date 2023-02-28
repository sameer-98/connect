import { TextField,Grid, Button, Typography } from "@mui/material";

export const SignUpForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    name="displayName"
                    variant="outlined"
                    label="User Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="email"
                    name="email"
                    variant="outlined"
                    label="Email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    type="password"
                    name="confirm"
                    variant="outlined"
                    label="Confirm Password"
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
                        Sign Up
                    </Button>
                </Grid>
                
            </Grid>
        </form>
    )
}