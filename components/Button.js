
import css from "./Button.module.css"
import { cva} from "class-variance-authority";
import Image from "next/image";

const button = cva(css.base, {
	variants: {
		intent: {
			primary: css.primary,
			second: css.second,
			outline: css.outline,
			link: css.link,
		},
		size: {
			small: css.small,
			medium: css.medium,
			large: css.large,
		},
	},
	
	defaultVariants: {
		intent: "primary",
		size: "medium"
	},
});



export const Button = ({ className , intent, size, children, iconStart, iconEnd, ...props}) =>
	<button
		className={button({ intent, size, className })} {...props}>
		{iconStart && <Image src={iconStart} alt="icon" />}
		{children}
		{iconEnd && <Image src={iconEnd} alt="icon" />}
	</button>
