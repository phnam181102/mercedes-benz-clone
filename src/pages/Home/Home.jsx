import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faArrowRight,
    faClipboardList,
    faCar,
    faCartShopping,
    faWrench,
    faGears,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import './Home.css';
import styles from './Home.module.scss';
import CarGrid from '~/components/CarGrid/CarGrid';
import banner from '~/assets/images/banner.png';
import mercedesEQ from '~/assets/svg/mercedes-eq.svg';
import amg from '~/assets/svg/amg.svg';
import maybach from '~/assets/svg/maybach.svg';
import sedan from '~/assets/svg/sedan.svg';
import coupe from '~/assets/svg/coupe.svg';
import suv from '~/assets/svg/suv.svg';
import mpv from '~/assets/svg/mpv.svg';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner__img')}>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div className={cx('banner__overlay')}></div>
                </div>

                <div className="container">
                    <div className={cx('banner__content')}>
                        <h1 className={cx('heading-title')}>
                            The new EQS - <span>This is for you, world.</span>
                        </h1>
                        <div className={cx('media-info')}>
                            <h2>Parameter</h2>
                            <ul className={cx('list-item')}>
                                <li className={cx('item')}>
                                    <p className={cx('title')}>Range up to</p>

                                    <p className={cx('parameter')}>581 – 692 (km)</p>
                                </li>
                                <li className={cx('item')}>
                                    <p className={cx('title')}>Maximum power up to</p>

                                    <p className={cx('parameter')}>385 kW</p>
                                </li>
                                <li className={cx('item')}>
                                    <p className={cx('title')}>Charging time</p>

                                    <p className={cx('parameter')}>11.25 hours</p>
                                </li>
                            </ul>

                            <div className={cx('description')}>
                                <p>
                                    *Vehicles with high-voltage battery systems are recommended to
                                    be charged through the wallbox system or AC charging stations,
                                    and using the Mode 3 charging cable supplied with the vehicle,
                                    to achieve short charging times. as well as stable charging
                                    efficiency at the optimal level.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('main-content')}>
                <div className="container">
                    <div className={cx('heading')}>
                        <h1 className={cx('heading__title')}>Our vehicles</h1>
                    </div>

                    <Tabs>
                        <TabList className={cx('tab-list')}>
                            <Tab className={cx('tab')}>
                                <p className={cx('all-model')}>All models</p>
                            </Tab>
                            <Tab className={cx('tab')}>
                                <img className={cx('mercedes-eq-logo')} src={mercedesEQ} alt="" />
                            </Tab>
                            <Tab className={cx('tab')}>
                                <img className={cx('amg-logo')} src={amg} alt="" />
                            </Tab>
                            <Tab className={cx('tab')}>
                                <img className={cx('maybach-logo')} src={maybach} alt="" />
                            </Tab>
                            <Tab className={cx('tab')}>
                                <p className={cx('new-model')}>
                                    New Models
                                    <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                </p>
                            </Tab>
                        </TabList>

                        <div className={cx('content')}>
                            <div className={cx('filters')}>
                                <h2 className={cx('filter-heading')}>Bodytype</h2>

                                <ul className={cx('options')}>
                                    <li className={cx('item')}>
                                        <button>
                                            <img
                                                className={cx('car-icon')}
                                                src={sedan}
                                                alt="Sedan icon"
                                            />
                                            Sedans
                                        </button>
                                    </li>
                                    <li className={cx('item')}>
                                        <button>
                                            <img
                                                className={cx('car-icon')}
                                                src={suv}
                                                alt="SUV icon"
                                            />
                                            SUVs
                                        </button>
                                    </li>
                                    <li className={cx('item')}>
                                        <button>
                                            <img
                                                className={cx('car-icon')}
                                                src={coupe}
                                                alt="Coupe icon"
                                            />
                                            Coupes
                                        </button>
                                    </li>
                                    <li className={cx('item')}>
                                        <button>
                                            <img
                                                className={cx('car-icon')}
                                                src={mpv}
                                                alt="Vans/MPVs icon"
                                            />
                                            Vans / MPVs
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <section className={cx('subgroup')}>
                                <TabPanel>
                                    <CarGrid />
                                </TabPanel>
                                <TabPanel>
                                    <CarGrid />
                                </TabPanel>
                                <TabPanel>
                                    <CarGrid />
                                </TabPanel>
                                <TabPanel>
                                    <CarGrid />
                                </TabPanel>
                                <TabPanel>
                                    <CarGrid />
                                </TabPanel>
                            </section>
                        </div>
                    </Tabs>
                </div>
            </div>

            <div className={cx('features')}>
                <div className="container">
                    <ul className={cx('features__list')}>
                        <li className={cx('features__list-item')}>
                            <Link className={cx('item')} to="#">
                                <FontAwesomeIcon className={cx('icon')} icon={faCar} />

                                <div className={cx('content')}>
                                    <p className={cx('title')}>Book a test drive</p>
                                    <p className={cx('description')}>
                                        Test drive your preferred model
                                    </p>
                                </div>

                                <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                            </Link>
                        </li>

                        <li className={cx('features__list-item')}>
                            <Link className={cx('item')} to="#">
                                <FontAwesomeIcon className={cx('icon')} icon={faClipboardList} />

                                <div className={cx('content')}>
                                    <p className={cx('title')}>Price list & brochure</p>
                                    <p className={cx('description')}>
                                        Download price list and brochures
                                    </p>
                                </div>

                                <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                            </Link>
                        </li>

                        <li className={cx('features__list-item')}>
                            <Link className={cx('item')} to="#">
                                <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />

                                <div className={cx('content')}>
                                    <p className={cx('title')}>Search available vehicles</p>
                                    <p className={cx('description')}>
                                        Request a quote for your preferred vehicle
                                    </p>
                                </div>

                                <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                            </Link>
                        </li>

                        <li className={cx('features__list-item')}>
                            <Link className={cx('item')} to="#">
                                <FontAwesomeIcon className={cx('icon')} icon={faGears} />

                                <div className={cx('content')}>
                                    <p className={cx('title')}>Configure your car</p>
                                    <p className={cx('description')}>
                                        Select your preferred configuration
                                    </p>
                                </div>

                                <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                            </Link>
                        </li>

                        <li className={cx('features__list-item')}>
                            <Link className={cx('item')} to="#">
                                <FontAwesomeIcon className={cx('icon')} icon={faWrench} />

                                <div className={cx('content')}>
                                    <p className={cx('title')}>Book service appointment</p>
                                    <p className={cx('description')}>
                                        Book service appointments online
                                    </p>
                                </div>

                                <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                            </Link>
                        </li>

                        <li className={cx('features__list-item')}>
                            <Link className={cx('item')} to="#">
                                <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />

                                <div className={cx('content')}>
                                    <p className={cx('title')}>Contact us</p>
                                    <p className={cx('description')}>
                                        Discover ways to get in touch
                                    </p>
                                </div>

                                <FontAwesomeIcon className={cx('arrow-icon')} icon={faArrowRight} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
