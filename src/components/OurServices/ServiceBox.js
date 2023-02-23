import React from "react";
import Icofont from "react-icofont";

const ServiceBox = ({ icon, title, children, index }) => (
  <div
    className="col-md-12 feature-box text-left mb-50 col-sm-6"
  >
    <div className="float-left">
      <Icofont icon={icon} className="font-60px brown-icon" />
    </div>
    <div className="float-right">
      <h5 className="mt-0">{title}</h5>
      <p>{children}</p>
    </div>
  </div>
);

export default ServiceBox;
