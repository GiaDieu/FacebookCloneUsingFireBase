import React from "react";
import "../CustomCSS/StoryReel.css";
import Story from "./Story";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import baobinh from "../images/baobinh.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image={image1}
        profileSrc="https://avatars2.githubusercontent.com/u/5067358?s=32&v=4"
        title="Tom Cruise"
      />
      <Story
        image={image2}
        profileSrc="https://avatars2.githubusercontent.com/u/9044773?v=4"
        title="Jonathan Dwig"
      />
      <Story
        image={baobinh}
        profileSrc="https://avatars2.githubusercontent.com/u/2183720?v=4"
        title="Bao Binh"
      />
      <Story
        image={image4}
        profileSrc="https://prod-takelessons.netdna-ssl.com/images/public/landing/service-tile/piano.jpg"
        title="Migaret Lee"
      />
      <Story
        image={image5}
        profileSrc="https://prod-takelessons.netdna-ssl.com/images/public/landing/service-tile/singing.jpg"
        title="Helena Sangha"
      />
    </div>
  );
};

export default StoryReel;
