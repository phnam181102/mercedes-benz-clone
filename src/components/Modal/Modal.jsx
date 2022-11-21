import React from 'react'
import styles from './Modal.module.scss'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Modal({ closeModal }) {
    return (
      <div className={cx("background")}>
        <div onClick={() => closeModal(false)} className={cx("overlay")}></div>
        <div className={cx("container")}>
          <div className={cx("btn-close")}>
            <FontAwesomeIcon
              icon={faXmark}
              className={cx("icon")}
              onClick={() => closeModal(false)}
            />
          </div>
          <div className={cx("title")}>
            <h3>Payment</h3>
          </div>
          <div className={cx("body")}>
            <form action="">
              <div className={cx("form")}>
                <div className={cx("item")}>
                  <div className={cx("label")}>
                    <span className={cx("label-text")}>First Name</span>
                  </div>
                  <div className={cx("input")}>
                    <input type="text" className={cx("input-form")} />
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("label")}>
                    <span className={cx("label-text")}>Last Name</span>
                  </div>
                  <div className={cx("input")}>
                    <input type="text" className={cx("input-form")} />
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("label")}>
                    <span className={cx("label-text")}>Email</span>
                  </div>
                  <div className={cx("input")}>
                    <input type="text" className={cx("input-form")} />
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("label")}>
                    <span className={cx("label-text")}>Phone Number</span>
                  </div>
                  <div className={cx("input")}>
                    <input type="text" className={cx("input-form")} />
                  </div>
                </div>
              </div>
              <div className={cx("caption")}>
                <p>
                  I agree to be contacted at the number and email address
                  provided with more information or offers about Tesla products.
                  I understand these calls, emails or texts may use
                  computer-assisted dialing or pre-recorded messages. This
                  consent is not a condition of purchase.
                </p>
              </div>
              <button className={cx("btn")}>Submit</button>
            </form>
          </div>
          <div className={cx("footer")}></div>
        </div>
      </div>
    );
}

export default Modal