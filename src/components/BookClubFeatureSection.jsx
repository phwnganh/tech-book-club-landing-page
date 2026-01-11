import ReadTogetherImage from '../assets/images/image-read-together-desktop.webp'
import CheckIcon from '../assets/images/icon-check.svg'
const BookClubFeatureSection = () => {
    const MEMBERSHIP_JOURNEY_ITEMS = [
        {
            key: 1,
            label: 'Monthly curated tech reads selected by industry experts'
        },
        {
            key: 2,
            label: 'Virtual and in-person meetups for deep-dive discussions'
        },
        {
            key: 3,
            label: 'Early access to new tech book releases'
        },
        {
            key: 4,
            label: 'Author Q&A sessions with tech thought leaders'
        }
    ]
    return (
        <section className={"max-w-292.5 mx-auto px-4 sm:px-8 md:px-0"}>
            <div className={"flex flex-col-reverse md:flex-row items-center gap-500 md:gap-1000"}>
                <div className={"flex items-center justify-center w-full md:max-w-140"}>
                    <img src={ReadTogetherImage} alt="ReadTogether" className={"rounded-16"}/>
                </div>
                <div className={"flex flex-col gap-6 md:gap-400"}>
                    <h2 className={"font-preset-2-font-weight font-preset-text-2-font-family text-preset-2-mobile-font-size sm:text-preset-2-font-size leading-preset-2-line-height tracking-preset-2-letter-spacing text-neutral-900"}>Read together,
                        grow together</h2>
                    <div className={"flex flex-col gap-4 sm:gap-6"}>
                        {MEMBERSHIP_JOURNEY_ITEMS.map((item, index) => (
                            <div key={index} className={"flex items-center gap-4"}>
                                <div className={"flex justify-center items-center w-6 h-4"}>
                                    <img src={CheckIcon} alt="check-icon"/>
                                </div>
                                <p className={"text-neutral-700 text-preset-5-font-size font-preset-5-font-family font-preset-5-mobile-font-weight sm:font-normal leading-preset-5-line-height tracking-preset-5-letter-spacing"}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default BookClubFeatureSection;