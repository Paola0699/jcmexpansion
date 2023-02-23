import React from "react";
import Icofont from "react-icofont";

const FeatureBoxThree = ({ index, icon, title, text }) => (
  <div
    className="col-md-3 feature-box text-center col-sm-6"
  >
    <Icofont
      icon={icon}
      className="font-40px dark-icon white-bg-icon circle-icon fade-icon"
    />
    <h4 className="upper-case">{title}</h4>
    <p>{text}</p>
  </div>
);

export default FeatureBoxThree;
