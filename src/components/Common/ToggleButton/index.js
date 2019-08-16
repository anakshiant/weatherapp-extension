import React from "react";

export const ToggleButton = ({ options, handleOptionChange }) => {
  const handleOptionClick = value => {
    handleOptionChange(value);
  };

  return (
    <div className="row">
      <div className="btn-group mt-2 w-100 col-md-12">
        {options &&
          options.length &&
          options.map((option, index) => {
            const optionClass = option.active
              ? "btn btn-sm btn-primary w-50 btn-type"
              : "btn btn-sm btn-outline-primary w-50 btn-type";

            return (
              <button className={optionClass} key={index} onClick={()=>handleOptionClick(option.name)}>
                {option.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};
