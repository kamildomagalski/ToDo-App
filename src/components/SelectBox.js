import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Select({ options }) {
  const [selectOptions] = useState(options);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selected, setSelected] = useState("select...");

  const handleVisible = () => {
    setIsSelectOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setIsSelectOpen(false);
  };
  const handleSelectedChange = (e) => {
    setSelected(e.target.value);
    handleClose();
  };

  return (
    <div className={"select"}>
      <div className={"selectBox"}>
        <div className={"selected"} onClick={handleVisible}>
          <p className={"selected__text"}>{selected}</p>
          <span className={"iconWrapper"}>
            <FontAwesomeIcon icon={"chevron-down"} className={isSelectOpen ? "iconWrapper__icon" : "selected__icon-rotate"}/>
          </span>
        </div>
        <div
          className={
            isSelectOpen ? "optionsContainer active" : "optionsContainer"
          }
        >
          {selectOptions.map((el) => {
            return (
              <div className={"option"} key={`${el}`} onClick={handleClose}>
                <label className={"option__label"}>
                  <input
                    type={"radio"}
                    className={"radio"}
                    value={`${el}`}
                    name={"priority"}
                    onChange={handleSelectedChange}
                  />
                  {el}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Select;
