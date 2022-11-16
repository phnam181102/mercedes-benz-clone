import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CarItem.module.scss';
const cx = classNames.bind(styles);

function CarItem() {
    return (
        <Link to="#" className={cx('wrapper')}>
            <div className={cx('car-item')}>
                <div className={cx('car-item__info')}>
                    <div className={cx('car-item__name')}>GLA SUV</div>
                    <div className={cx('car-item__price')}>From $138000</div>
                </div>

                <div className={cx('car-item__tag')}>
                    <p>New</p>
                </div>

                <div className={cx('car-item__img')}>
                    <img
                        className={cx('img-1')}
                        src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxe4ZbMw3SGtGyMtsd2sDcUfp8qXGEubSJ0l3IrOB2NS1bApRARI5uxeMQC30CQkzNBPKm7jAyvhKV5XN%25vqCJcyLRgcDYaxPa9rH1eMOn8wsV3oiZUMXM4FnCwTg9otn6PDC7NSeWza3tsd7oTcUfKmfXGE4ySJ0lg0VOB2PQqbApeToI5uscDQC3UkTkzNGLwm7j0afhKVHKh%25vq8JcyLRiXJYnymdEWeOOB2znobQOxf5IkbZsYQC3sEOkzNelfm7jCyShKVfi5%25vqLUkyLRaGHYaxHoErH18IOn8wiVyoiZ4%25EM4FgTwTg735wrcldu63ejznj59Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=300"
                        alt=""
                    />

                    <img
                        className={cx('img-2')}
                        src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxe4ZbMw3SGtGyMtsd2sDcUfp8qXGEubSJ0l3IrOB2NS1bApRARI5uxeMQC30CQkzNBPKm7jAyvhKV5XN%25vqCJcyLRgcDYaxPa9rH1eMOn8wsV3oiZUMXM4FnCwTg9otn6PDC7NSeWza3tsd7oTcUfKmfXGE4ySJ0lg0VOB2PQqbApeToI5uscDQC3UkTkzNGLwm7j0afhKVHKh%25vq8JcyLRiXJYnymdEWeOOB2znobQOxf5IkbZsYQC3sEOkzNelfm7jCyShKVfi5%25vqLUkyLRaGHYaxHoErH18IOn8wiVyoiZ4%25EM4FgTwTg735wrcldu63ejznj59Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE090&uni=c&im=Crop,rect=(-25,-25,1530,860),gravity=Center;Resize,width=300"
                        alt=""
                    />
                </div>
            </div>
        </Link>
    );
}

export default CarItem;
