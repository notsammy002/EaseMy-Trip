import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/login.module.css'

export const Login = () => {

    const [loginData, setLoginData] = React.useState({ email: '', password: '' })
    const navigate = useNavigate();


    const onChangeHandler = (event) => {
        let { name, value } = event.target

        setLoginData({ ...loginData, [name]: value });
        // console.log(loginData);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        console.log(loginData)

        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)

        })
        // .then(response => {
        //     console.log(response);
        //     response.json()
        // })
        // .then(response => console.log(response))

        const res = await response.json();

        console.log(res)
    }

    return (
        <div className={styles.div}>
            <div className={styles.loginDiv}>
                <h3 className={styles.loginText}>Login</h3>
                <form action="" className={styles.form} onSubmit={onSubmitHandler} >
                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your email address: </label>
                        <br />
                        <input className={styles.inputLogin} type="email" value={loginData.email} placeholder="Enter email address.." name="email" onChange={onChangeHandler} />
                    </div>

                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your Password: </label>
                        <br />
                        <input className={styles.inputLogin} type="password" value={loginData.password} placeholder="Enter Password.." name="password" onChange={onChangeHandler} />
                    </div>

                    <input type="submit" value="Continue" className={styles.submitButton} />
                </form>

                <h3 className={styles.loginText2}>New here? <span className={styles.spanLogin} onClick={() => navigate('../register')}>Register</span></h3>
            </div>
        </div >
    )
}
