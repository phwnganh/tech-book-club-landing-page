import HeroBannerSection from "./components/HeroBannerSection";
import OurCommunitySection from "./components/OurCommunitySection";
import MembershipJourneySection from "./components/MembershipJourneySection";
import MembershipPriceOptionsSection from "./components/MembershipPriceOptionsSection";
import FooterSection from "./components/FooterSection";

const MainPage = () => {
    return (
        <main>
            <HeroBannerSection/>
            <OurCommunitySection/>
            <MembershipJourneySection/>
            <MembershipPriceOptionsSection/>
            <FooterSection/>
        </main>
    );
};

export default MainPage;