import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @param {array} options- available options to choose
 * @param {string} selectValue- curent value of the select box
 * @param {function} changeHandler- callback that returns some value to change parents state
 * @returns {JSX.Element} fully functional Component
 */
function Select({ options, selectValue, changeHandler}) {
  const [selectOptions] = useState(options);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleVisible = () => {
    setIsSelectOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setIsSelectOpen(false);
  };
  const handleSelectedChange = (e) => {
    changeHandler(e.target.value);
    handleClose();
  };

  return (
    <div className={"select"}>
      <div className={"selectBox"}>
        <div className={"selected"} onClick={handleVisible}>
          <p className={"selected__text"}>{selectValue}</p>
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