import HeroBannerSection from "./components/HeroBannerSection";
import ReadingJourneySection from "./components/ReadingJourneySection.jsx";
import BookClubFeatureSection from "./components/BookClubFeatureSection.jsx";
import MembershipPriceOptionsSection from "./components/MembershipPriceOptionsSection";
import FooterSection from "./components/FooterSection";
import NotYourAverageHeroSection from "./components/NotYourAverageHeroSection.jsx";

const MainPage = () => {
    return (
        <main className={"flex flex-col gap-16 sm:gap-20 md:gap-30"}>
            <HeroBannerSection/>
            <BookClubFeatureSection/>
            <NotYourAverageHeroSection/>
            <ReadingJourneySection/>
            <MembershipPriceOptionsSection/>
            <FooterSection/>
        </main>
    );
};

export default MainPage;