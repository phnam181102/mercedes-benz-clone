import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { SlideData } from './SlideData';

const cx = classNames.bind(styles);

function SliderCar({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={cx('slider')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={cx('arrow-left')}
                    onClick={prevSlide}
                />
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className={cx('arrow-right')}
                    onClick={nextSlide}
                />
            </div>

            {SlideData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? cx('slide-item', 'active') : 'slide-item'}
                        key={index}
                    >
                        {index === current && <img src={slide.image} className={cx('image')} />}
                    </div>
                );
            })}
        </section>
    );
}

export default SliderCar;
