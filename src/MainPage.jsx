import HeroBannerSection from "./components/HeroBannerSection";
import OurCommunitySection from "./components/OurCommunitySection";
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
            <OurCommunitySection/>
            <MembershipPriceOptionsSection/>
            <FooterSection/>
        </main>
    );
};

export default MainPage;