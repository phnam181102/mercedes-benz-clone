import React, { useState } from 'react';
import styles from '../Auth.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '~/components/Notification/Notification';

const cx = classNames.bind(styles);

const initialState = {
    username: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
};

function Register() {
    const [user, setUser] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const { username, email, password, cf_password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const isMatch = (password, cf_password) => {
        if (password === cf_password) return true;
        return false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isMatch(password, cf_password)) {
            return setUser({ ...user, err: 'Password did not match.', success: '' });
        }

        try {
            const res = await axios.post('http://localhost:3000/api/users/register', {
                username,
                email,
                password,
            });

            setUser({ ...user, err: '', success: res.data.message });
        } catch (err) {
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
                <div className={cx('titlebar')}>Tạo tài khoản người dùng</div>
                <form onSubmit={handleSubmit}>
                    <div className={cx('content')}>
                        <div className={cx('header')}>
                            Mercedes me ID
                            <FontAwesomeIcon
                                className={cx('header-icon')}
                                icon={faCircleQuestion}
                            />
                        </div>
                        <h4 className={cx('content-title')}>
                            <span>Tên người dùng</span>
                        </h4>
                        <p className={cx('content-description')}>
                            Tên người dùng được sử dụng để đăng nhập vào tài khoản của bạn. Chúng
                            tôi sẽ gửi cho bạn mã xác nhận vào tên người dùng này để xác minh.
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
                        <h4 className={cx('content-title')}>
                            <span>Các thông tin cá nhân</span>
                        </h4>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                value={username}
                                name="username"
                                className={cx('input-type')}
                                placeholder="Tên *"
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
                        <div className={cx('input')}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={cf_password}
                                name="cf_password"
                                className={cx('input-type')}
                                placeholder="Nhập lại mật khẩu *"
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

                        <div className={cx('mandatory')}>
                            <p className={cx('mandatory-label')}>* Ô bắt buộc</p>
                        </div>

                        <div className={cx('rules')}>
                            <div className={cx('checkbox')}>
                                <input type="checkbox" className={cx('checkbox-input')} />
                                <label className={cx('checkbox-label')}>
                                    Tôi đồng ý với các điều khoản sau *
                                </label>
                            </div>

                            <button className={cx('rules-btn')}>Các điều khoản sử dụng</button>
                        </div>

                        {err && showErrMsg(err)}
                        {success && showSuccessMsg(success)}

                        <div className={cx('btn')}>
                            <button className={cx('btn-main')} type="submit">
                                Tạo tài khoản người dùng
                            </button>
                            <h4 className={cx('content-title')}>
                                <span>Hoặc</span>
                            </h4>
                            <a href="/login" className={cx('btn-main', 'btn-extra')}>
                                Đăng Nhập
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

export default Register;
