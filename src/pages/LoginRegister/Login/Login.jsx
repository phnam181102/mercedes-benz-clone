import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import styles from '../LoginRegister.module.scss';
import { showErrMsg, showSuccessMsg } from '~/components/Notification/Notification';

const cx = classNames.bind(styles);

const initialState = {
    email: '',
    password: '',
};

function Login() {
    const [user, setUser] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const { email, password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
            });

            setUser({ ...user, err: '', success: res.data.message });
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
            <div className={cx('container')}>
                <div className={cx('titlebar')}>Đăng nhập</div>
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
                            Vui lòng nhập địa chỉ Email và Mật khẩu của bạn
                        </p>
                        <div className={cx('input')}>
                            <input
                                type="email"
                                value={email}
                                name="email"
                                className={cx('input-type')}
                                placeholder="Địa chỉ Email *"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className={cx('input')}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                name="password"
                                className={cx('input-type')}
                                placeholder="Mật khẩu *"
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
                                Đăng Nhập
                            </button>
                            <h4 className={cx('content-title')}>
                                <span>Hoặc</span>
                            </h4>
                            <a href="/register" className={cx('btn-main', 'btn-extra')}>
                                Đăng ký
                            </a>
                        </div>
                    </div>
                </form>

                <div className={cx('footer')}>
                    <button className={cx('footer-btn')}>Chỉ dẫn pháp lý</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
