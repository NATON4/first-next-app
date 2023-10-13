import React from 'react';
import style from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <a className={style.mail} href="mailto: anthonygri.net@gmail.com"> Mail me: anthonygri.net@gmail.com</a>
        </footer>
    );
};

export default Footer;