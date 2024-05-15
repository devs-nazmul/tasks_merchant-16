import css from "./Hero.module.css";
import Link from "next/link";

import {TitleH1} from "@/components/title";
import {Button} from "@/components/Button";
import arrow_right from "@/assets/icons/arrow_right.svg"

const Hero = () => {
	
	return(
		<section className={css.sectionHead} id="About">
			<div className={css.container}>
				
				<div className={css.flex}>
					<TitleH1> Maximize Your Potential with Our Soft Skills Courses! </TitleH1>
					<p>Discover the key to unlocking your full potential through our comprehensive soft skills courses. Elevate your career prospects, enhance personal growth, and excel in every aspect of life.</p>
					<Button size="large" iconEnd={arrow_right}> Get Started </Button>
				</div>
				
			</div>
			
			<div className={css.effects}>
				<span className={css.circle1}> </span>
				<span className={css.circle2}> </span>
			</div>
		
		</section>
	)
}

export default Hero