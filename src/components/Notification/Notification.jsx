import React from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
const cx = classNames.bind(styles);

export const showErrMsg = (msg) => {
    return <div className={cx('errMsg')}>{msg}</div>;
};

export const showSuccessMsg = (msg) => {
    return <div className={cx('successMsg')}>{msg}</div>;
};
