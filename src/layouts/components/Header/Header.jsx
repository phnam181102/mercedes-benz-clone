import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import car from '~/assets/svg/car.svg';
import logo from '~/assets/svg/logo.svg';

const cx = classNames.bind(styles);

function Header() {
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
                                Các dòng xe
                            </li>
                            <li className={cx('item')}>Mua trực tuyến</li>
                            <li className={cx('item')}>Tư vấn mua xe</li>
                            <li className={cx('item')}>Dịch vụ</li>
                            <li className={cx('item')}>Thế giới Mercedes</li>
                        </ul>
                    </div>

                    <div className={cx('user')}>
                        <a href="/login">
                            <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
