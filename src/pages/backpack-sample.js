import React from "react";
import HeroSection3 from "./../components/HeroSection3";
import VideoSection from "./../components/VideoSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import PricingSection from "./../components/PricingSection";

function BackpackSamplePage(props) {
  return (
    <>
      <HeroSection3
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Backpack Sample"
        subtitle="This is a sample backpack page."
      />
      <VideoSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Your title here"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <ContentCardsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Featured Content"
        subtitle=""
      />
      <PricingSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Buy Now"
        subtitle="Get one before none are left."
      />
    </>
  );
}

export default BackpackSamplePage;
