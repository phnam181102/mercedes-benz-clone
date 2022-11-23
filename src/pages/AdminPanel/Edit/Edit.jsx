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

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get(`cars/${slug}`);
                setCar(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [slug]);

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
                        action={`http://localhost:3000/api/cars/${slug}?_method=PUT`}
                        className={cx('form')}
                    >
                        <input type="hidden" name="_method" value="PUT" />
                        <div className={cx('form-group')}>
                            <label htmlFor="name">Name</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faCar} />
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    id="name"
                                    name="name"
                                    defaultValue={car.name}
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
                                    defaultValue={car.price}
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
                                    defaultValue={car.avatar[0]}
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
                                    defaultValue={car.avatar[1]}
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
                                    defaultValue={car.range}
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
                                    defaultValue={car.topSpeed}
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
                                    defaultValue={car.chargingTime}
                                />
                            </div>
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="modelType">Choose model:</label>
                            <div className={cx('input-group')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faList} />
                                <select
                                    id="modelType"
                                    name="modelType"
                                    defaultValue={car.modelType}
                                >
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
                                <select id="bodyType" name="bodyType" defaultValue={car.bodyType}>
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
                                <div className={cx('option')}>
                                    <input
                                        className={cx('form-check-input')}
                                        type="radio"
                                        id="new"
                                        name="new"
                                        value="yes"
                                        defaultChecked={car.new === 'yes' ? true : false}
                                    />
                                    <p>Yes</p>
                                </div>

                                <div className={cx('option')}>
                                    <input
                                        className={cx('form-check-input')}
                                        type="radio"
                                        id="new"
                                        name="new"
                                        value="no"
                                        defaultChecked={
                                            car.new === 'no' || car.new === undefined ? true : false
                                        }
                                    />
                                    <p>No</p>
                                </div>
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
