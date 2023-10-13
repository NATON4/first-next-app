import React from 'react';
import style from '../styles/navbar.module.css'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={style.navBar}>
            <Link
                href="/initial-page"
                title="White">Initial page
            </Link>
            <Link
                href={{
                    pathname: "/first-page/first-page-content",
                    query: {color: "black"}
                }}
                title="Black">First black page
            </Link>
            <Link
                href={{
                    pathname: "/first-page/first-page-content",
                    query: {color: "grey"}
                }}
                title="White">First grey page
            </Link>
            <Link
                href="/first-page/static-page"
                title="White">Static page
            </Link>
            <br/>
        </nav>
    );
};

export default Navbar;