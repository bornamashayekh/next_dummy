
import Link from "next/link";
import LogoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";
export default function MainHeader() {

    return (
        <>
        <MainHeaderBackground/>
        
        <header className={classes.header}>
            <Link className={classes.logo} href='/'><Image src={LogoImg} property alt="food logo" />
            <p>NextLevel food</p>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href='/meals'>Browse meals</NavLink></li>
                    <li><NavLink href='/community' >Browse Community</NavLink></li>
                </ul>
            </nav>
            </header>
            </>
    )
}