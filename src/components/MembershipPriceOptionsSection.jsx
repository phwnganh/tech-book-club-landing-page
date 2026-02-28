import CheckIcon from '../assets/images/icon-check.svg'
const MembershipPriceOptionsSection = () => {
    const MEMBERSHIP_PRICE_OPTIONS = [
        {
            key: "starter",
            title: "Starter",
            price: "$19",
            feature_1: "1 book/month",
            feature_2: "Online forums",
        },
        {
            key: "pro",
            title: "Pro",
            price: "$29",
            feature_1: "2 books/month",
            feature_2: "Virtual meetups",
        },
        {
            key: "enterprise",
            title: "Enterprise",
            price: "Custom",
            feature_1: "Team access",
            feature_2: "Private sessions",
        }
    ]
    return (
        <section className={"max-w-262.5 mx-auto px-4 sm:px-8 md:px-0"}>
            <div className={"flex flex-col gap-6 sm:gap-10 md:gap-16"}>
                <h1 className={"text-preset-2-mobile-font-size sm:text-preset-2-font-size font-preset-text-2-font-family font-preset-2-font-weight leading-preset-2-line-height tracking-preset-2-letter-spacing text-neutral-900 text-start md:text-center"}>Membership options</h1>
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center"}>
                    {MEMBERSHIP_PRICE_OPTIONS.map((option, index) => {
                        const isSecondIndex = index === 1
                        const isLastIndex = index === MEMBERSHIP_PRICE_OPTIONS.length - 1
                        return(
                        <div key={index} className={`rounded-lg border border-neutral-200 px-6 flex flex-col gap-8 ${isSecondIndex ? "py-6 md:py-10 md:max-h-97.5 h-full w-full bg-neutral-100 bg-[url(./assets/images/pattern-glow.svg)] bg-no-repeat bg-top-left" : "py-6 md:max-h-89.5"}`}>
                            <div className={"flex flex-col gap-6 w-full"}>
                                <h3 className={"text-neutral-900 text-preset-4-font-size font-preset-4-font-family font-preset-4-font-weight leading-preset-4-line-height tracking-preset-4-letter-spacing"}>{option.title}</h3>
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-neutral-900 text-preset-3-font-size font-preset-3-font-family font-preset-3-font-weight leading-preset-3-line-height tracking-preset-3-letter-spacing"}>{option.price}</p>
                                    {!isLastIndex && <p className={"text-neutral-700 text-preset-5-font-size font-preset-5-font-family font-preset-5-mobile-font-weight sm:font-normal leading-preset-5-line-height tracking-preset-5-letter-spacing"}>/month</p>
                                    }
                                </div>
                                <hr className={"border-t border-t-neutral-200"}/>
                                <div className={"flex items-center gap-3"}>
                                    <div className={"flex justify-center items-center"}>
                                        <img src={CheckIcon} alt={"check-icon"}/>
                                    </div>
                                    <p className={"text-neutral-700 text-preset-5-font-size font-preset-5-font-family font-preset-5-mobile-font-weight sm:font-normal leading-preset-5-line-height tracking-preset-5-letter-spacing"}>{option.feature_1}</p>
                                </div>

                                <div className={"flex items-center gap-3"}>
                                    <div className={"flex justify-center items-center"}>
                                        <img src={CheckIcon} alt={"check-icon"}/>
                                    </div>
                                    <p className={"text-neutral-700 text-preset-5-font-size font-preset-5-font-family font-preset-5-mobile-font-weight sm:font-normal leading-preset-5-line-height tracking-preset-5-letter-spacing"}>{option.feature_2}</p>
                                </div>
                            </div>
                        <button className={"border-2 border-neutral-900 rounded-lg px-6 py-4 bg-light-salmon-50 gradient focus:outline-none focus:shadow-[inset_0_0_0_3px_#fff,inset_0_0_0_5px_#062630]"}>
                            <p className={"text-neutral-900 text-preset-6-mobile-font-size sm:text-preset-6-font-size font-preset-6-font-family font-preset-6-font-weight leading-preset-6-line-height tracking-preset-6-letter-spacing"}>{isLastIndex ? "TALK TO US" : "SUBSCRIBE NOW"}</p>
                        </button>

                        </div>
                    )})}
                </div>
            </div>
        </section>
    );
};

export default MembershipPriceOptionsSection;