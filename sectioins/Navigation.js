import css from "./Navigation.module.css"
import Link from "next/link";
import {Button} from "@/components/Button";
import ukflag from "@/assets/icons/ukflag.svg"
import logo from "@/assets/icons/logo.svg"
import arrow from "@/assets/icons/arrow.svg"
import Image from "next/image";


const Navigation = () => {
	
	return (
		<section className={css.sectionBG} id="Navigation">
			<header className={css.navContainer}>
				<nav className={css.flex}>
					
					<div className={css.left}>
						<Link href={"/"}> <Image className={css.logo} src={logo} alt="Logo" /> </Link>
						<Link href={"/"}> Home </Link>
						<Link href={"/"}> Contact Us </Link>
						<Link href={"/"}> About Us </Link>
					</div>
					
					<div className={css.right}>
						<Button> Log in </Button>
						<Button intent="outline"> Sign Up </Button>
						<Button iconStart={ukflag} iconEnd={arrow}  intent="link" className={ css.flagBTN}> Eng </Button>
					</div>
					
				</nav>
			</header>
		</section>
	
	)
}

export default Navigation