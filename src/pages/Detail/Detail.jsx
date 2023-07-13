import React, { useState } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import SliderCar from '~/components/Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { SlideData } from '~/components/Slider/SlideData';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(styles);

function Detail() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={cx('background')}>
            <section className={cx('container')}>
                <div className={cx('slide')}>
                    <SliderCar slides={SlideData} />
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-model')}>
                        <div className={cx('modal')}>
                            <h1 className={cx('title')}>Model Y</h1>
                            <p className={cx('desc')}>Est. Delivery: Dec 2022 - Mar 2023</p>
                            <span className={cx('zip')}>
                                <FontAwesomeIcon icon={faCircleInfo} className={cx('zip-icon')} />
                                Enter Delivery ZIP Code
                            </span>
                        </div>

                        <div className={cx('parameter')}>
                            <ul className={cx('parameter-list')}>
                                <li className={cx('parameter-item')}>
                                    <div className={cx('text')}>
                                        <span className={cx('number')}>330</span>
                                        <span className={cx('value')}>mi</span>
                                    </div>
                                    <div className={cx('caption')}>
                                        <span>Range (EPA est.)</span>
                                    </div>
                                </li>
                                <li className={cx('parameter-item')}>
                                    <div className={cx('text')}>
                                        <span className={cx('number')}>149</span>
                                        <span className={cx('value')}>mph</span>
                                    </div>
                                    <div className={cx('caption')}>
                                        <span>Top Speed</span>
                                    </div>
                                </li>
                                <li className={cx('parameter-item')}>
                                    <div className={cx('text')}>
                                        <span className={cx('number')}>3.1</span>
                                        <span className={cx('value')}>sec</span>
                                    </div>
                                    <div className={cx('caption')}>
                                        <span>0-60 mph</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('features')}>
                            <h4 className={cx('header')}>Key Features</h4>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>Deep Blue Metallic Paint</li>
                                <li className={cx('item')}>19’’ Gemini Wheels</li>
                                <li className={cx('item')}>All Black Premium Interior</li>
                                <li className={cx('item')}>Autopilot</li>
                                <li className={cx('item')}>Five Seat Interior</li>
                                <li className={cx('item')}>Tow Hitch</li>
                                <li className={cx('item')}>30-Day Premium Connectivity Trial</li>
                            </ul>
                        </div>
                        <div className={cx('price')}>
                            <p>$138,000</p>
                            <span>Price</span>
                        </div>
                        <div className={cx('payment')}>
                            <h4 className={cx('header')}>Order Your Model Y</h4>
                            <button
                                type="button"
                                className={cx('btn')}
                                onClick={() => {
                                    setOpenModal(true);
                                }}
                            >
                                Continue to Payment
                            </button>
                            <span className={cx('desc')}>
                                For more information on this Model Y,
                                <span className={cx('desc-link')}> request a callback.</span>
                            </span>
                            {openModal && <Modal closeModal={setOpenModal} />}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;
