import ArrowPattern from '../assets/images/pattern-arrow.svg'
const ReadingJourneySection = () => {
    const READING_JOURNEY_ITEMS = [
        {
            key: 1,
            value: "Choose your membership tier"
        },
        {
            key: 2,
            value: "Get your monthly book selection"
        },
        {
            key: 3,
            value: "Join our discussion forums"
        },
        {
            key: 4,
            value: "Attend exclusive meetups"
        }
    ]
    return (
        <section className={"max-w-292.5 mx-auto px-4 sm:px-8 md:px-0"}>
            <div className={"max-w-262.5 flex flex-col gap-8 sm:gap-12 md:gap-16 justify-center"}>
                    <h1 className={"text-preset-2-mobile-font-size sm:text-preset-2-font-size font-preset-text-2-font-family font-preset-2-font-weight leading-preset-2-line-height tracking-preset-2-letter-spacing text-neutral-900 text-start md:text-center"}>Your tech reading journey</h1>
                    <div className={"flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12"}>
                    {READING_JOURNEY_ITEMS.map((item, index) => {
                        const isLast = index === READING_JOURNEY_ITEMS.length - 1;
                        return (
                        <div key={index} className={"flex flex-col gap-5 sm:gap-6 relative"}>
                            <div className={"border-2 border-neutral-900 rounded-sm flex justify-center items-center p-2.5 w-10 h-10"}>
                                <p className={"text-neutral-900 text-preset-6-mobile-font-size font-preset-6-font-family font-preset-6-font-weight leading-preset-6-line-height tracking-preset-6-letter-spacing"}>{item.key}</p>
                            </div>
                            <p className={"text-neutral-900 text-preset-6-mobile-font-size sm:text-preset-6-font-size font-preset-6-font-family font-preset-6-font-weight leading-preset-6-line-height tracking-preset-6-letter-spacing"}>{item.value}</p>
                            <div className={"absolute right-0 top-0"}>
                                {!isLast && (
                                    <img src={ArrowPattern} alt={"arrow-pattern"} className={`hidden md:block`}/>

                                )}
                            </div>
                        </div>
                    )})}

                    </div>
            </div>
        </section>
    );
};

export default ReadingJourneySection;