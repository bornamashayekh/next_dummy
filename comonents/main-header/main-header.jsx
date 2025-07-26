import Link from "next/link";
import LogoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
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
                    <li><Link href='/meals'>Browes Meals</Link></li>
                    <li><Link href='/community'>Browse Community</Link></li>
                </ul>
            </nav>
            </header>
            </>
    )
}