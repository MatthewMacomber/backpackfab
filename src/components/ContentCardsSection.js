import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link } from "./../util/router.js";
import "./ContentCardsSection.scss";

function ContentCardsSection(props) {
  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/ballons",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <CenteredColumns>
          {items.map((item, index) => (
            <div
              className="column is-half-tablet is-one-quarter-desktop"
              key={index}
            >
              <Link
                className="ContentCardsSection__card card is-flex"
                to={item.url}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
