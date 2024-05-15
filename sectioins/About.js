import css from "./About.module.css";
import Link from "next/link";

import {MiniTitle, TitleH2} from "@/components/title";
import Image from "next/image";
import aboutImage from "@/assets/images/about_image.png"

const About = () => {
	
	return(
		<section className={css.sectionBG} id="About">
			<div className="container">
				<div className={css.grid}>
					
					<div className={css.left}>
						<MiniTitle>About Us</MiniTitle>
						<TitleH2> Navigate Work Dynamics </TitleH2>
						<p>In the complexity of today's workplace, effective communication acts as your guiding light. It's not merely about conveying information; it's about crafting connections and fostering understanding. Our soft skills courses delve deep into the art of communication, equipping you with the tools to navigate diverse work dynamics with finesse. Learn to articulate your ideas with clarity, listen attentively to others, and communicate persuasively to influence outcomes. Whether in meetings, presentations, or daily interactions, harness the power of communication to propel your career forward.</p>

					</div>
					
					<div className={css.right}>
						<Image src={aboutImage} alt="aboutImage" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About