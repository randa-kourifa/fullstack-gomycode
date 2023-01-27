import React from "react";

export default function Data(props) {
  return (
    <div>
      fullname:{props.name}
      Bio:{props.biographie}
      Profession:{props.job}
    </div>
  );
}
