import React, { useContext } from 'react';
import { Paper, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner";
import { useForm } from '../Hooks/useForm';
import { AuthContext } from '../Context/auth-context';


const LoginScreen = (props) => {

    const context = useContext(AuthContext);

    const {
        onChange,
        onSubmit,
        values,
        errors,
        loading,
        result
    } = useForm({
        email: '',
        password: ''
    }, 0, postSubmission)
    
    function postSubmission() {
        context.login(result.login)
        props.history.push('/dashboard')
    }

    return ( 
    <div className="auth-screen-container">
        <div class="form-container">
            <Grid className={loading ? "loading": ""}>
                {loading ? (<Loader style={{position: 'absolute', top: '50%', left: 'calc(50% - 42px)'}}  type="Oval"   color="#999" />) : (<></>)}
                <Paper className="paper" elevation={20} style={{padding: "30px 20px", width: "300px"}}>
                    <Grid align='center'>
                        <Avatar style={{backgroundColor: "#ccc"}}></Avatar>
                        <h2 style={{margin: "5px", color: "#555"}}>Login</h2>
                    </Grid>
                    <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", alignItems: 'center' }}>
                        <TextField name='email' value={values.email} onChange={onChange} fullWidth label='Email' placeholder="Email address" />
                        <TextField name='password' value={values.password} onChange={onChange} type='password' style={{margin: "15px 0 0 0"}} fullWidth label='Password' placeholder="Enter your password"/>
                        <Button style={{marginTop: "30px", marginBottom: "20px"}} type='submit' variant='contained' color='primary'>Sign In</Button>
                    </form>
                    {Object.keys(errors).length > 0 && (<div>
                        <ul className='form-errors'>
                            {Object.values(errors).map(value => (
                                <li key={value}>{value}</li>
                            ))}
                        </ul>
                    </div>)}
                    <div style={{textAlign: 'center'}}>New User? <Link to="/register" style={{textDecoration: 'none', color: '#333'}}>Sign up</Link></div>
                </Paper>
            </Grid>
        </div>
    </div> );
}
 

export default LoginScreen;