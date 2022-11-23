import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CarGrid.module.scss';
import request from '~/utils/request';
import CarItem from '../CarItem/CarItem';
const cx = classNames.bind(styles);

function CarGrid() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get('cars/');
                setCars(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('car-grid')}>
            {cars.map((car, i) => (
                <CarItem car={car} key={i} />
            ))}
        </div>
    );
}

export default CarGrid;
