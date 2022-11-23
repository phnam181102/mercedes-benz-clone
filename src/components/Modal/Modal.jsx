import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);

function Modal({ car }) {
    const handleDeleteCar = () => {
        const deleteForm = document.forms[`delete-car-form-${car._id}`];
        deleteForm.submit();
    };

    return (
        <div id={`openModal-${car._id}`} className={cx('modalDialog')}>
            <div>
                <h2 className={cx('modal-header')}>Delete Car?</h2>
                <p className={cx('modal-body')}>
                    Are you sure you want to delete {car.name} car from the database?
                </p>
                <div className={cx('modal-footer')}>
                    <a
                        title="Delete"
                        className={cx('modal-btn', 'delete')}
                        onClick={() => handleDeleteCar()}
                    >
                        Delete
                    </a>
                    <a href="#close" title="Cancel" className={cx('modal-btn', 'close')}>
                        Cancel
                    </a>
                </div>
            </div>

            <form
                name={`delete-car-form-${car._id}`}
                method="POST"
                action={`http://localhost:3000/api/cars/${car._id}?_method=DELETE`}
            ></form>
        </div>
    );
}

export default Modal;
