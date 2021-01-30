import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import VideoEmbed from "./VideoEmbed";
import "./VideoSection.scss";

function VideoSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="VideoSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <VideoEmbed url={props.embedUrl} />
      </div>
    </Section>
  );
}

export default VideoSection;
