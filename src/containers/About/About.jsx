import React from "react";
import { PrimaryLayout } from "components/Layout";
const About = () => {

  return (
    <PrimaryLayout>
      <div className="About">
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default About;
