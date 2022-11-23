import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCar,
    faSackDollar,
    faImage,
    faChevronLeft,
    faPaperPlane,
    faList,
    faHourglassHalf,
    faGaugeHigh,
    faClock,
} from '@fortawesome/free-solid-svg-icons';

import request from '~/utils/request';
import styles from './Edit.module.scss';
const cx = classNames.bind(styles);

function Edit(props) {
    const [car, setCar] = useState();
    const { slug } = useParams();
    // const data = this.props.location.state;
    const [name, setName] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get(`cars/${slug}`);
                setCar(res.data);
                setName(res.data.name);
                console.log(name);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    return (
        car && (
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>
                        <h1>EDIT CAR INFORMATION</h1>

                        <Link to="/adminpanel" className={cx('back-icon')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Link>
                    </div>

                    <form
                        method="POST"
                        action="http://localhost:3000/api/cars/"
                        className={cx('form')}
                    >
                        <div className={cx('form-group')}>
                            <label htmlFor="name">Name</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faCar} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="name"
                                    name="name"
                                    value={car.name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="price">Price</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faSackDollar} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="price"
                                    name="price"
                                    value={car.price}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="avatar1">Url Avatar Image 1</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faImage} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="avatar1"
                                    name="avatar1"
                                    value={car.avatar[0]}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="avatar2">Url Avatar Image 2</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faImage} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="avatar2"
                                    name="avatar2"
                                    value={car.avatar[1]}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="range">Range</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon
                                    className={cx('icon', 'hourglass-icon')}
                                    icon={faHourglassHalf}
                                />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="range"
                                    name="range"
                                    value={car.range}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="topSpeed">Top Speed</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faGaugeHigh} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="topSpeed"
                                    name="topSpeed"
                                    value={car.topSpeed}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="chargingTime">Charging Time</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="chargingTime"
                                    name="chargingTime"
                                    value={car.chargingTime}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="modelType">Choose model:</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faList} />
                                <select id="modelType" name="modelType">
                                    <option value="mercedes-eq">Mercedes-EQ</option>
                                    <option value="amg">AMG</option>
                                    <option value="maybach">MAYBACH</option>
                                </select>
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="bodyType">Choose body type:</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faList} />
                                <select id="bodyType" name="bodyType">
                                    <option value="sedans">Sedans</option>
                                    <option value="suv">SUVs</option>
                                    <option value="coupe">Coupes</option>
                                    <option value="vans">Vans/ MPVs</option>
                                </select>
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label className="form-check-label" htmlFor="new">
                                Car just released?
                            </label>
                            <div className={cx('input-group')}>
                                <input
                                    className={cx('form-check-input')}
                                    type="checkbox"
                                    id="new"
                                    name="new"
                                />
                            </div>
                        </div>

                        <button className={cx('submit-btn')} type="submit">
                            <FontAwesomeIcon className={cx('submit-icon')} icon={faPaperPlane} />
                            Update
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}

export default Edit;
