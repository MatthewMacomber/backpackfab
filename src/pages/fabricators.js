import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection from "./../components/FeaturesSection";
import AuthSection from "./../components/AuthSection";

function FabricatorsPage(props) {
  return (
    <>
      <HeroSection2
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Welcome Backpack Fabricators"
        subtitle="Do you enjoy creating your own back packs and want to share and sell them to others? If so then this is the place to be."
        buttonText="Get Started"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath="/pricing"
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="Heres everything we take care of for you:"
        columns={2}
      />
      <AuthSection
        color="white"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        type="signup"
        providers={["google", "facebook", "twitter"]}
        afterAuthPath="/dashboard"
      />
    </>
  );
}

export default FabricatorsPage;
