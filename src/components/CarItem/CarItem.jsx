import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CarItem.module.scss';
const cx = classNames.bind(styles);

function CarItem(props) {
    const car = props.car;
    console.log(car);

    return (
        <Link to="#" className={cx('wrapper')}>
            <div className={cx('car-item')}>
                <div className={cx('car-item__info')}>
                    <div className={cx('car-item__name')}>{car.name}</div>
                    <div className={cx('car-item__price')}>From ${car.price}</div>
                </div>

                <div className={cx('car-item__tag')}>{car.new ? <p>New</p> : ''}</div>

                <div className={cx('car-item__img')}>
                    <img className={cx('img-1')} src={car.avatar[0]} alt="" />

                    <img className={cx('img-2')} src={car.avatar[1]} alt="" />
                </div>
            </div>
        </Link>
    );
}

export default CarItem;
