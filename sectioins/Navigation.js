import css from "./Navigation.module.css"
import Link from "next/link";
import {Button} from "@/components/Button";

const Navigation = () => {
	
	return (
		<section className={css.sectionBG} id="Navigation">
			<header className={css.navContainer}>
				<nav className={css.flex}>
					
					<div className={css.left}>
						<Link href={"/"}> Logo </Link>
						<Link href={"/"}> Home </Link>
						<Link href={"/"}> Home </Link>
						<Link href={"/"}> Home </Link>
					</div>
					
					<div className={css.right}>
						<Button> Log in </Button>
						<Button> Register </Button>
						<Button> Eng </Button>
					</div>
					
				</nav>
			</header>
		</section>
	
	)
}

export default Navigation