import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEye,
    faEyeSlash,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import styles from '../Auth.module.scss';
import { showErrMsg, showSuccessMsg } from '~/components/Notification/Notification';
import { useUser } from '~/context/UserContext';

const cx = classNames.bind(styles);

const initialState = {
    email: '',
    password: '',
};

function Login() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const [user, setUserState] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const { email, password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserState({ ...user, [name]: value, err: '', success: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/api/users/login`, {
                email,
                password,
            });

            const userData = res.data.user;
            setUser(userData);
            sessionStorage.setItem('userData', JSON.stringify(userData));
            console.log(userData);
            navigate('/');
        } catch (err) {
            console.log(err);
            err.response.data.message &&
                setUser({ ...user, err: err.response.data.message, success: '' });
        }
    };

    const handleShowHidePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={cx('background')}>
            <div className={cx('back-button')} onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className={cx('container')}>
                <form onSubmit={handleSubmit}>
                    <div className={cx('content')}>
                        <div className={cx('header')}>
                            Mercedes me ID
                            <FontAwesomeIcon
                                className={cx('header-icon')}
                                icon={faCircleQuestion}
                            />
                        </div>
                        <p className={cx('content-description')}>
                            Please enter your email address and password
                        </p>
                        <div className={cx('input')}>
                            <input
                                type="email"
                                value={email}
                                name="email"
                                className={cx('input-type')}
                                placeholder="Email address *"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className={cx('input')}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                name="password"
                                className={cx('input-type')}
                                placeholder="Password *"
                                onChange={handleChangeInput}
                            />
                            <span
                                onClick={() => {
                                    handleShowHidePassword();
                                }}
                            >
                                {showPassword ? (
                                    <FontAwesomeIcon className={cx('input-icon')} icon={faEye} />
                                ) : (
                                    <FontAwesomeIcon
                                        className={cx('input-icon')}
                                        icon={faEyeSlash}
                                    />
                                )}
                            </span>
                        </div>
                        {err && showErrMsg(err)}
                        {success && showSuccessMsg(success)}
                        <div className={cx('btn')}>
                            <button className={cx('btn-main')} type="submit">
                                Log In
                            </button>
                            <h4 className={cx('content-title')}>
                                <span>Or</span>
                            </h4>
                            <a href="/register" className={cx('btn-main', 'btn-extra')}>
                                Register
                            </a>
                        </div>
                    </div>
                </form>

                <div className={cx('footer')}>
                    <button className={cx('footer-btn')}>Legal Information</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
