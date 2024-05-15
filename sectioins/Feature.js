import css from "./Feature.module.css";

import {MiniTitle, TitleH2} from "@/components/title";
import Image from "next/image";
import discover from "@/assets/icons/discover.svg"
import scenarios from "@/assets/icons/scenarios.svg"
import industry from "@/assets/icons/industry.svg"
import flexibility from "@/assets/icons/flexibility.svg"

const Feature = () => {
	
	const FeatureList = [
		{image: discover, head: "Discover Topic", content: "Explore an extensive array of subjects covering essential soft skills, enabling learners to develop a well-rounded skill set and thrive in diverse personal and professional contexts.", },
		{image: scenarios, head: "Real-world Scenarios", content: " Immerse yourself in hands-on learning through practical examples that closely mirror real-life situations, ensuring immediate application and retention of skills.", },
		{image: industry, head: "Industry-Relevant Content", content: "Our curriculum is meticulously crafted to meet the specific demands and challenges of various industries, ensuring that learners gain practical skills that are directly applicable in professional settings.", },
		{image: flexibility, head: "Flexibility", content: "Our courses provide students with a range of flexible options, allowing them to tailor their learning experience to fit their unique schedules and preferences.", },
		
	]
	
	return(
		<section className={css.sectionBG} id="Feature">
			<div className="container">
				<div className={css.flex}>
					
					<div className={css.head}>
						<MiniTitle> Features </MiniTitle>
						<TitleH2> Explore Our Standout Features </TitleH2>
					</div>
					
					<div className={css.feature}>
						{FeatureList.map((feature, id) => {
							return <div key={id} className={css.box}>
								<Image src={feature.image} alt={feature.head}/>
								<p className={css.boxText}>{feature.head}</p>
								<p>{feature.content}</p>
							</div>
						})}
					</div>
				
				
				</div>
			</div>
		</section>
	)
}

export default Feature