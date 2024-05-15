import css from "./Pricing.module.css";

import {MiniTitle, TitleH2} from "@/components/title";
import {Button} from "@/components/Button";
import Image from "next/image";
import check from "@/assets/icons/check.svg"


const Pricing = () => {
	
	return(
		<section className={css.sectionBG} id="Pricing">
			<div className="container">
				<div className={css.flex}>
					
					<div className={css.head}>
						<MiniTitle> Pricing </MiniTitle>
						<TitleH2> Pricing Section </TitleH2>
					</div>
					
					<div className={css.pricing}>
						
						<div className={css.box}>
							
							<div className={css.price_head}>
								<Button size="small">Gold Package</Button>
								<p><span className={css.euro}>$16</span> / Month </p>
								<p className={css.trial}>3 days trial/3$</p>
							</div>
							
							<div className={css.lists}>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
							</div>
							
							<Button className={css.buyBtn} size="large"> Buy Now </Button>
						
						</div>
						
						<div className={css.box}>
							
							<div className={css.price_head}>
								<Button size="small">Gold Package</Button>
								<p> <span className={css.euro}>$16</span> / Month </p>
								<p className={css.trial}>3 days trial/3$</p>
							</div>
							
							<div className={css.lists}>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
								<p><Image src={check} alt={"Check icon"}/> Lorem ipsum dolor sit amet</p>
							</div>
							
							<Button className={css.buyBtn} size="large"> Buy Now </Button>
						
						</div>
					</div>
				
				
				</div>
			</div>
		</section>
	)
}

export default Pricing