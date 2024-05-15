
import css from "./Button.module.css"
import { cva} from "class-variance-authority";

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
		},
	},
	
	defaultVariants: {
		intent: "primary",
		size: "small"
	},
});




export const Button = ({ className , intent, size, children, ...props}) =>
	<button className={button({ intent, size, className })} {...props}> {children} </button>
