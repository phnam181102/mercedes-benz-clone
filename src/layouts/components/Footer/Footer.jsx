import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faYoutube,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className="container">
                <div className={cx('newsletter')}>
                    <div className={cx('newsletter__text')}>
                        <h5 className={cx('newsletter__title')}>Stay in touch with us.</h5>
                        <p className={cx('newsletter__desc')}>
                            The current information is tailored to your preferences.
                        </p>
                    </div>

                    <div className={cx('newsletter__btn')}>
                        <Link className={cx('newsletter__link')} to="#">
                            Sign up for the newsletter
                        </Link>
                    </div>
                </div>

                <div className={cx('sitemap')}>
                    <ul className={cx('sitemap-section')}>
                        <li className="sitemap-section__item">
                            <div className={cx('sitemap-section__title')}>Buy vehicle</div>

                            <ul className={cx('sitemap-section__list')}>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Find used vehicles
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Find a new car
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Configurator
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Price lists & brochures
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="sitemap-section__item">
                            <div className={cx('sitemap-section__title')}>Purchase advice</div>

                            <ul className={cx('sitemap-section__list')}>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Request advice
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Book a test drive
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Find a dealer near you
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="sitemap-section__item">
                            <div className={cx('sitemap-section__title')}>Customer services</div>

                            <ul className={cx('sitemap-section__list')}>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Book your service appointment
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Latest special offers
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Mercedes Lifestyle
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Recall information
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="sitemap-section__item">
                            <div className={cx('sitemap-section__title')}>About us</div>

                            <ul className={cx('sitemap-section__list')}>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Contact
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Our history
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Sustainability & Future
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        News & Events
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="sitemap-section__item">
                            <div className={cx('sitemap-section__title')}>Popular models</div>

                            <ul className={cx('sitemap-section__list')}>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        SUVs
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Family cars
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Mercedes-AMG
                                    </Link>
                                </li>
                                <li className={cx('sitemap-section__item')}>
                                    <Link to="#" className={cx('sitemap-section__link')}>
                                        Mercedes-Maybach
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={cx('lower-footer')}>
                    <div className={cx('social')}>
                        <FontAwesomeIcon className={cx('social__icon')} icon={faFacebookSquare} />
                        <FontAwesomeIcon className={cx('social__icon')} icon={faYoutube} />
                        <FontAwesomeIcon className={cx('social__icon')} icon={faInstagram} />
                        <FontAwesomeIcon className={cx('social__icon')} icon={faLinkedin} />
                    </div>

                    <div className={cx('legal')}>
                        <ul className={cx('legal__list')}>
                            <li className={cx('legal__item')}>
                                <Link className={cx('legal__link')} to="#">
                                    Copyright
                                </Link>
                            </li>
                            <li className={cx('legal__item')}>
                                <Link className={cx('legal__link')} to="#">
                                    Settings
                                </Link>
                            </li>
                            <li className={cx('legal__item')}>
                                <Link className={cx('legal__link')} to="#">
                                    Privacy statement
                                </Link>
                            </li>
                            <li className={cx('legal__item')}>
                                <Link className={cx('legal__link')} to="#">
                                    Legal notice
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
