import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/login.module.css'

export const Register = () => {

    const [signupData, setSignupData] = React.useState({ email: '', password: '', name: '' })
    const navigate = useNavigate();


    const onChangeHandler = (event) => {
        let { name, value } = event.target

        setSignupData({ ...signupData, [name]: value });
        // console.log(signupData);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        console.log(signupData)

        const response = await fetch('http://localhost:8000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData)

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
                <h3 className={styles.loginText}>Register
                </h3>
                <form action="" className={styles.form} onSubmit={onSubmitHandler}>

                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your Name: </label>
                        <br />
                        <input className={styles.inputLogin} type="text" placeholder="Enter Name.." value={signupData.name} name="name" onChange={onChangeHandler} />
                    </div>

                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your email address: </label>
                        <br />
                        <input className={styles.inputLogin} type="email" placeholder="Enter email address.." value={signupData.email} name="email" onChange={onChangeHandler} />
                    </div>

                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your Password: </label>
                        <br />
                        <input className={styles.inputLogin} type="password" placeholder="Enter Password.." value={signupData.password} name="password" onChange={onChangeHandler} />
                    </div>

                    <input type="submit" value="Continue" className={styles.submitButton} />
                </form>
            </div>
        </div >
    )
}
