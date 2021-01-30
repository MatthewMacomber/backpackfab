import React from "react";

function VideoEmbed(props) {
  return (
    <figure className="image is-16by9">
      <iframe
        className="has-ratio"
        title="Video"
        src={props.url}
        allowFullScreen={true}
        frameBorder={0}
      />
    </figure>
  );
}

export default VideoEmbed;
