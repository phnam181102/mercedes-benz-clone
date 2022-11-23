import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import request from '~/utils/request';
import styles from './StoredCars.module.scss';

const cx = classNames.bind(styles);

function StoredCars() {
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
        <div className="container">
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h1>LIST OF CARS</h1>

                    <Link className={cx('add-btn')} to="/adminpanel/create">
                        <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                        Add a new car
                    </Link>
                </div>

                <table className={cx('car-table')}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Model Type</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <img className={cx('car-img')} src={car.avatar[0]} alt="" />
                                </td>
                                <td>{car.name}</td>
                                <td>{car.modelType.toUpperCase()}</td>
                                <td>$ {car.price}</td>
                                <td>
                                    <div className={cx('actions')}>
                                        <Link
                                            to={{
                                                pathname: `/adminpanel/edit/${car.slug}`,
                                                state: [{ id: 1, name: 'Ford', color: 'red' }],
                                            }}
                                        >
                                            Edit
                                        </Link>
                                        <Link to="#">Delete</Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StoredCars;
