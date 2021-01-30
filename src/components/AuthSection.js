import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Auth from "./Auth";
import "./AuthSection.scss";

function AuthSection(props) {
  // Values for each auth type
  const allTypeValues = {
    signin: {
      // Top title
      title: "Welcome back",
      // Submit button text
      buttonText: "Sign in",
    },
    signup: {
      title: "Get yourself an account",
      buttonText: "Sign up",
    },
  };

  // Ensure we have a valid auth type
  const currentType = allTypeValues[props.type] ? props.type : "signup";

  // Get values for current auth type
  const typeValues = allTypeValues[currentType];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="AuthSection__container container">
        <SectionHeader
          title={allTypeValues[currentType].title}
          subtitle=""
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <Auth
          type={currentType}
          typeValues={typeValues}
          providers={props.providers}
          afterAuthPath={props.afterAuthPath}
          key={currentType}
        />
      </div>
    </Section>
  );
}

export default AuthSection;
