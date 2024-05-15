import css from "./Pricing.module.css";

import {MiniTitle, TitleH2} from "@/components/title";
import {Button} from "@/components/Button";
import Image from "next/image";
import check from "@/assets/icons/check.svg"


const Pricing = () => {
	
	const packages = [
		{
			price: 16, trial: 3, name: "Gold Package",
			details: [
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
			]
		},
		
		{
			price: 20, trial: 5, name: "Best Package",
			details: [
				{img: check, text: "New Lorem ipsum dolor amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
				{img: check, text: "Lorem ipsum dolor sit amet"},
			]
		}
	]
	
	
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
								<Button size="small"> {packages[0].name} </Button>
								<p><span className={css.euro}>€{packages[0].price}</span> / Month </p>
								<p className={css.trial}> {packages[0].trial} days trial/3€</p>
							</div>
							
							<div className={css.lists}>
								{packages[0].details.map((list, id) => <p key={id}><Image src={list.img} alt="icon"/> {list.text} </p>)}
							</div>
							
							<Button className={css.buyBtn} size="large"> Buy Now </Button>
						
						</div>
						
						<div className={css.box}>
							
							<div className={css.price_head}>
								<Button size="small"> {packages[1].name} </Button>
								<p><span className={css.euro}>€{packages[1].price}</span> / Month </p>
								<p className={css.trial}> {packages[1].trial} days trial/3€</p>
							</div>
							
							<div className={css.lists}>
								{packages[1].details.map((list, id) => <p key={id}><Image src={list.img} alt="icon"/> {list.text} </p>)}
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