import React from "react";

import Section from "../../components/commission/Section";
import list from "../../data";

const Commissions = () => {
  return (
    <div>
      {/* <Header /> */}
      {list.map((listItem) => (
        <Section content={listItem} />
      ))}
    </div>
  );
};

export default React.memo(Commissions);
