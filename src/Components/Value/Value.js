import React, { useState } from "react";
import "./Value.css";
import data from "../../Utils/accordian";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Value = () => {
  const [className, setClassName] = useState(null)
  return (
    <section className="v-wrapper">
      <div className="v-container paddings flexCenter innerWidth">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./images/value.png" alt="value image" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our values</span>
          <span className="primaryText">Value We Give To You</span>
          <span className=" flexColStart secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            we believe a good place to live can m,ake you life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, id) => {
              return (
                <AccordionItem key={id} className={`accordionItem ${className}`} uuid={id}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                  {({ expanded }) => 
                    expanded?setClassName("expanded"):setClassName("collapsed")
                  }
                </AccordionItemState> 
                      <div className="icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
