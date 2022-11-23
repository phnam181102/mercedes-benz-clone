import { Link } from 'react-router-dom';
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

import styles from './Create.module.scss';
const cx = classNames.bind(styles);

function Create() {
    return (
        <div className="container">
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h1>ADD NEW CAR</h1>

                    <Link to="/adminpanel" className={cx('back-icon')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </div>

                <form method="POST" action="http://localhost:3000/api/cars/" className={cx('form')}>
                    <div class={cx('form-group')}>
                        <label for="name">Name</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCar} />
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="name"
                                name="name"
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="price">Price</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faSackDollar} />
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="price"
                                name="price"
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="avatar1">Url Avatar Image 1</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faImage} />
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="avatar1"
                                name="avatar1"
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="avatar2">Url Avatar Image 2</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faImage} />
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="avatar2"
                                name="avatar2"
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="range">Range</label>
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
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="topSpeed">Top Speed</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGaugeHigh} />
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="topSpeed"
                                name="topSpeed"
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="chargingTime">Charging Time</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="chargingTime"
                                name="chargingTime"
                            />
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="modelType">Choose model:</label>
                        <div className={cx('input-group')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faList} />
                            <select id="modelType" name="modelType">
                                <option value="mercedes-eq">Mercedes-EQ</option>
                                <option value="amg">AMG</option>
                                <option value="maybach">MAYBACH</option>
                            </select>
                        </div>
                    </div>

                    <div class={cx('form-group')}>
                        <label for="bodyType">Choose body type:</label>
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
                        <label class="form-check-label" for="new">
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
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;
