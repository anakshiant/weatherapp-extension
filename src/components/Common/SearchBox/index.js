import React from "react";

export const SearchBox = ({
  searchPlaceHolder,
  handleValueChange,
  value,
  handleSearch
}) => {
  return (
    <div className="input-group mt-2">
      <input
        type="text"
        className="location_input form-control form-control-sm"
        placeholder={searchPlaceHolder}
        aria-label={searchPlaceHolder}
        aria-describedby="basic-addon2"
        value={value}
        onChange={e => handleValueChange(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-sm btn_checkLocation"
          type="button"
          onClick={handleSearch}
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};
