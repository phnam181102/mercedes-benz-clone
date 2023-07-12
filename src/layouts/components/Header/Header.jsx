import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import car from '~/assets/svg/car.svg';
import logo from '~/assets/svg/logo.svg';

import { useUser } from '~/context/UserContext';

const cx = classNames.bind(styles);

function Header() {
    const { user, setUser } = useUser();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownTimer = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('userData');
        setUser(null);
    };

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimer.current);
    };

    const handleMouseLeave = () => {
        dropdownTimer.current = setTimeout(() => {
            setShowDropdown(false);
        }, 200);
    };
    return (
        <div className={cx('header')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <button className={cx('dropdown')}>
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
                    </button>

                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={logo} alt="Mercedes Benz" />
                        </Link>
                    </div>

                    <div className={cx('navigation')}>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <img className={cx('car-icon')} src={car} alt="Car icon" />
                                Our models
                            </li>
                            <li className={cx('item')}>Buy online</li>
                            <li className={cx('item')}>Purchase advice</li>
                            <li className={cx('item')}>Customer Services</li>
                            <li className={cx('item')}>Mercedes World</li>
                        </ul>
                    </div>

                    <div
                        className={cx('user')}
                        onClick={toggleDropdown}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {user ? (
                            <>
                                <span className={cx('username')}>
                                    <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
                                    <span className={cx('username-text')}>{user.username}</span>
                                    <FontAwesomeIcon
                                        className={cx('down-arrow')}
                                        icon={faAngleDown}
                                    />
                                </span>
                                {showDropdown && (
                                    <div className={cx('dropdown-menu')}>
                                        <button
                                            className={cx('logout-button')}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to="/login">
                                <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
