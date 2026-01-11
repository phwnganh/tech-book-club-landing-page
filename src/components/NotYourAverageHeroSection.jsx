import TechsLogo from '../assets/images/logos-tech.svg'
import NotEverageImage from '../assets/images/image-not-average-desktop.webp'
const NotYourAverageHeroSection = () => {
    return (
        <section className={"max-w-292.5 mx-auto px-4 sm:px-8 md:px-0"}>
            <div className={"flex flex-col md:flex-row items-center gap-500 md:gap-1000 md:relative"}>
                <div className={"flex flex-col gap-6"}>
                    <h2 className={"font-preset-2-font-weight font-preset-text-2-font-family text-preset-2-mobile-font-size sm:text-preset-2-font-size leading-preset-2-line-height tracking-preset-2-letter-spacing text-neutral-900"}>Not your average book <span className={"inline-flex pattern-circle bg-no-repeat bg-contain bg-center px-4 py-2"}>club</span></h2>
                    <p className={"text-neutral-700 text-preset-5-font-size font-preset-5-font-family font-preset-5-mobile-font-weight sm:font-normal leading-preset-5-line-height tracking-preset-5-letter-spacing"}>Connect with a community that speaks your language - from <span className={"font-preset-5-mobile-font-weight"}>Python</span> to <span className={"font-preset-5-mobile-font-weight"}>TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
                </div>
                <div className={"flex items-center justify-center w-full md:max-w-140 shrink-0"}>
                    <img src={NotEverageImage} alt={"not-average-image"} className={"rounded-16 w-full h-full"}/>
                </div>

                <div className={"md:absolute left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2"}>
                    <img src={TechsLogo} alt="Techs-logo"  className={"hidden md:block"}/>
                </div>
            </div>

        </section>
    );
};

export default NotYourAverageHeroSection;