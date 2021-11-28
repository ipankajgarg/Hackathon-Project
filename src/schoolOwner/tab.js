import React, { useState } from "react";
import ParentSection from "../parent-section";
import OwnerSection from "./schoolOwnerSection";
import "./styles.css";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div className="container">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          School Owner
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Parent
        </li>
      </ul>
      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <OwnerSection></OwnerSection>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <ParentSection></ParentSection>
        </div>
      </div>
    </div>
  );
};

export default Tab;