import React from "react";

import Section from "../../components/commission/Section";
import list from "../../data";

const Commissions = () => {
  return (
    <div>
      {/* <Header /> */}
      {list.map((listItem, index) => (
        <Section key={index} content={listItem} />
      ))}
    </div>
  );
};

export default React.memo(Commissions);
