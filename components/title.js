import css from "./title.module.css"
import dash from "@/assets/icons/dash.svg"
import Image from "next/image";
export const TitleH1 = ({children}) => <h1 className={css.h1}> {children} </h1>


export const TitleH2 = ({children}) => <h2 className={css.h2}> {children} </h2>
export const MiniTitle = ({children}) => <div className={css.mini_title}> <Image src={dash} alt="Feature Dash"></Image> <h5> {children} </h5> </div>


