import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import car from '~/assets/images/car.svg';
import logo from '~/assets/images/logo.svg';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className="container-xl">
                <div className={cx('wrapper')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="Mercedes Benz" />
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
