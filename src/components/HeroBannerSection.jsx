import Logo from '../assets/images/logo.svg'
import ArrowUpIcon from '../assets/images/icon-arrow-down.svg'
import AvatarImage from '../assets/images/image-avatars.webp'
import HeroDesktop from '../assets/images/image-hero-desktop.webp'
import FiveStars from "./ui/FiveStars.jsx";
import CustomButton from "./ui/CustomButton.jsx";
const HeroBannerSection = () => {
    return (
        <section className="max-w-292.5 mx-auto mt-8 px-4 sm:px-8 md:px-0">
            <img src={Logo} alt="Logo" className="w-48 h-9"/>
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-preset-text-1-font-family sm:text-preset-1-font-size text-preset-1-mobile-font-size leading-preset-1-line-height tracking-preset-1-letter-spacing font-preset-1-font-weight text-gradient">Join the ultimate tech book club</h1>
                        <p className="text-neutral-700 font-preset-5-font-family text-preset-5-font-size leading-preset-5-line-height tracking-preset-5-letter-spacing">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <CustomButton classname={"border-neutral-900 rounded-sm bg-light-salmon-50 max-w-95 gradient focus-visible:outline-none"}>
                            <p className="font-preset-6-font-family font-preset-6-font-weight text-preset-6-mobile-font-size sm:text-preset-6-font-size leading-preset-6-line-height tracking-preset-6-letter-spacing">REVIEW MEMBERSHIP OPTIONS</p>
                            <div className="flex justify-center items-center">
                                <img src={ArrowUpIcon} alt={"arrow-up-icon"} />
                            </div>
                        </CustomButton>

                        <div className={"flex items-center gap-3"}>
                            <div className="w-27 h-16 flex justify-center items-center">
                                <img src={AvatarImage} alt={"avatar-image"}/>
                            </div>
                            <div className={"flex flex-col gap-1"}>
                                    <FiveStars/>
                                <p className={"text-preset-7-font-size font-preset-7-font-family leading-preset-7-line-height tracking-preset-7-letter-spacing text-neutral-700"}>200+ developers joined already</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={"flex justify-center items-center"}>
                    <img src={HeroDesktop} alt={"heroDesktop"} className={"rounded-sm w-full h-full"} />
                </div>
            </div>
        </section>
    );
};

export default HeroBannerSection;