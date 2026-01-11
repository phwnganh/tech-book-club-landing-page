import ArrowUpIcon from "../assets/images/icon-arrow-up.svg";
import AvatarImage from "../assets/images/image-avatars.webp";
import FiveStars from "./ui/FiveStars.jsx";
import BlueSkyIcon from '../assets/images/logo-bluesky.svg'
import LinkedInIcon from '../assets/images/logo-linkedin.svg'

const FooterSection = () => {
    return (
        <footer className={"max-w-292.5 mx-auto px-4 pt-12 sm:pt-16 md:pt-20 sm:px-8 md:px-0"}>
            <div className={"flex flex-col gap-16"}>
                <div className={"flex flex-col gap-10 items-center"}>
                    <h1 className={"text-neutral-100 text-preset-2-mobile-font-size sm:text-preset-2-font-size font-preset-2-font-weight font-preset-text-2-font-family tracking-preset-2-letter-spacing leading-preset-2-line-height text-center"}>
                        Ready to debug your reading list?
                    </h1>
                    <div className={"flex flex-col gap-6 items-start sm:items-center"}>
                        <button className={"border-2 border-neutral-0 rounded-lg bg-transparent flex justify-center items-center gap-4 px-6 py-250 sm:py-300 w-full"}>
                            <p className={"font-preset-6-font-family font-preset-6-font-weight text-preset-6-mobile-font-size sm:text-preset-6-font-size leading-preset-6-line-height tracking-preset-6-letter-spacing text-neutral-0"}>REVIEW MEMBERSHIP OPTIONS</p>
                            <div className="flex justify-center items-center">
                                <img src={ArrowUpIcon} alt={"arrow-up-icon"} />
                            </div>
                        </button>

                        <div className={"flex items-center gap-3"}>
                            <div className="w-27 h-16 flex justify-center items-center">
                                <img src={AvatarImage} alt={"avatar-image"}/>
                            </div>
                            <div className={"flex flex-col gap-1"}>
                                <FiveStars/>
                                <p className={"text-preset-7-font-size font-preset-7-font-family leading-preset-7-line-height tracking-preset-7-letter-spacing text-neutral-0"}>200+ developers joined already</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"border-t border-t-neutral-0 py-6 flex justify-between flex-col sm:flex-row items-center gap-4 sm:gap-0"}>
                    <p className={"text-neutral-0 text-preset-7-font-size font-preset-7-font-family leading-preset-7-line-height tracking-preset-7-letter-spacing"}>© 2024 – Tech Book Club</p>
                    <div className={"flex items-center gap-6"}>
                        <div className={"flex justify-center items-center"}>
                            <img src={BlueSkyIcon} alt={"blue-sky-icon"} />
                        </div>
                        <div className={"flex justify-center items-center"}>
                            <img src={LinkedInIcon} alt={"linkedin-icon"} />
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default FooterSection;