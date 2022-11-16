import classNames from 'classnames/bind';
import CarItem from '../CarItem/CarItem';

import styles from './CarGrid.module.scss';
const cx = classNames.bind(styles);

function CarGrid() {
    return (
        <div className={cx('car-grid')}>
            <CarItem />
            <CarItem />
            <CarItem />
            <CarItem />
        </div>
    );
}

export default CarGrid;
