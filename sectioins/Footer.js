import css from "@/sectioins/Footer.module.css";
import Image from "next/image";
import footerImage from "@/assets/icons/Footer_Logo.svg"
import visa from "@/assets/icons/visa.svg"
import mastercard from "@/assets/icons/mastercard.svg"
import Link from "next/link";


const Footer = () => {
	return (
		<section className={css.sectionBG} id="Footer">
			<div className="container">
				<div className={css.grid}>
					<div className="logo">
						<Link href="/"> <Image src={footerImage} alt="Footer Logo"/> </Link>
					</div>
					
					<div>
						<p className={css.link_head}>Useful Links</p> <br/>
						
						<div className={css.links}>
							<Link href="/">About us</Link>
							<Link href="/">Contact us</Link>
							<Link href="/">Terms of Use</Link>
							<Link href="/">Privacy Policy</Link>
							<Link href="/">Cookie Policy</Link>
							<Link href="/">Cancellation Policy</Link>
							<Link href="/">Unsubscribe</Link>
						</div>
					</div>
					
					<div>
						<p className={css.link_head}>Contact Information</p> <br/>
						
						<div className={css.links}>
							<Link href="mailto:support@budgetbscope.com">Email: support@budgetbscope.com</Link>
							<Link href="tel:+44123456789">Phone: +44 123456789</Link>
							<p>Working Hours: Monday - Friday 00-24 (CET), Weekends 9:00 - 17:00 (CET)</p>
							<p>Address: 21 cromwell road, ringsfield, suffolk, Beccles Nr34 8lr, United Kingdom</p>
						</div>
					</div>
				</div>
				
				<div className={css.card}>
					<Image src={mastercard} alt="mastercard Logo"/>
					<Image src={visa} alt="visa Logo"/>
				</div>
				
			</div>
			
			<div className={css.copyrightBG}>
				
				<div className={css.copyright}>
					<p>Copyright © Budgetbscope 2023. Blindscope limited - CR: 14031689 - 21 cromwell road, ringsfield, suffolk, Beccles Nr34 8lr, United Kingdom | All rights reserved.</p>
				</div>
			</div>
		
		</section>
	)
}

export default Footer