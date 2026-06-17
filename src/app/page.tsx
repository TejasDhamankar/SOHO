import {
  amenities,
  attractions,
  benefits,
  finalUspList,
  highlights,
  locationAdvantages,
  overview,
  projectStats,
  retreatPillars,
  testimonials,
  whoShouldBuy
} from "../data/content";

import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import WelcomeSection from "../components/sections/WelcomeSection";
import BrandStory from "../components/sections/BrandStory";
import ProjectHighlights from "../components/sections/ProjectHighlights";
import ExperienceView from "../components/sections/ExperienceView";
import NatureRetreat from "../components/sections/NatureRetreat";
import OverviewTable from "../components/sections/OverviewTable";
import AmenityGrid from "../components/sections/AmenityGrid";
import LocationSection from "../components/sections/LocationSection";
import ImageCarousel from "../components/sections/ImageCarousel";
import MasterPlan from "../components/sections/MasterPlan";
import InvestmentBenefits from "../components/sections/InvestmentBenefits";
import WhoShouldBuy from "../components/sections/WhoShouldBuy";
import Testimonials from "../components/sections/Testimonials";
import HelicopterExperience from "../components/sections/HelicopterExperience";
import FormsSection from "../components/sections/FormsSection";
import FinalCta from "../components/sections/FinalCta";
import ContactFooter from "../components/layout/ContactFooter";
import FloatingActions from "../components/layout/FloatingActions";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero stats={projectStats} />
      <WelcomeSection />
      <BrandStory />
      <ProjectHighlights items={highlights} />
      <ExperienceView />
      <NatureRetreat items={retreatPillars} />
      <OverviewTable items={overview} />
      <AmenityGrid items={amenities} />
      <LocationSection advantages={locationAdvantages} />
      <ImageCarousel title="Nearby Attractions" items={attractions} />
      <MasterPlan />
      <InvestmentBenefits items={benefits} />
      <WhoShouldBuy items={whoShouldBuy} />
      <Testimonials items={testimonials} />
      <HelicopterExperience />
      <FormsSection />
      <FinalCta items={finalUspList} />
      <ContactFooter />
      <FloatingActions />
    </main>
  );
}
