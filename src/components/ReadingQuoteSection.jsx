import FiveStars from "./ui/FiveStars.jsx";

const ReadingQuoteSection = () => {
    return (
        <section className={"max-w-242.5 mx-auto px-4 sm:px-8 md:px-0"}>
            <div className={"flex flex-col items-start md:items-center gap-8"}>
                <FiveStars/>
                <p className={"text-neutral-900 text-preset-3-mobile-font-size sm:text-preset-3-font-size font-preset-3-font-weight font-preset-3-font-family tracking-preset-3-letter-spacing leading-preset-3-line-height text-start md:text-center"}>"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</p>
                <p className={"text-neutral-700 text-preset-5-font-size font-preset-5-font-family md:font-preset-5-mobile-font-weight font-normal leading-preset-5-line-height tracking-preset-5-letter-spacing"}>Sarah Chen, Software Architect</p>
            </div>

        </section>
    );
};

export default ReadingQuoteSection;