import HeroBannerSection from "./components/HeroBannerSection";
import ReadingJourneySection from "./components/ReadingJourneySection.jsx";
import BookClubFeatureSection from "./components/BookClubFeatureSection.jsx";
import MembershipPriceOptionsSection from "./components/MembershipPriceOptionsSection";
import FooterSection from "./components/FooterSection";
import NotYourAverageHeroSection from "./components/NotYourAverageHeroSection.jsx";
import ReadingQuoteSection from "./components/ReadingQuoteSection.jsx";
const MainPage = () => {
    return (
        <main className={"flex flex-col gap-16 sm:gap-20 md:gap-30"}>
            <div className={"bg-neutral-100 bg-[url(./assets/images/pattern-light-bg.svg)]"}>
                <div className={"sm:bg-[url(./assets/images/pattern-glow.svg)] bg-no-repeat bg-top-right"}>
                    <HeroBannerSection/>

                </div>
            </div>
            <BookClubFeatureSection/>
            <NotYourAverageHeroSection/>
            <ReadingJourneySection/>
            <MembershipPriceOptionsSection/>
            <ReadingQuoteSection/>
            <div className={"bg-neutral-900"}>
                <FooterSection/>

            </div>
        </main>
    );
};

export default MainPage;