import React from "react";

const Header = ({ updateSearch, handleSearch, search }) => {
  return (
    <div>
      <form onSubmit={handleSearch} className="form">
        <div className="form--left">
          <h1>the adsfsdasdas</h1>
        </div>
        <div className="form--center">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={updateSearch}
            className="form--input"
          />
          <button className="form--button">Search</button>
        </div>
        <div className="form--right"></div>
      </form>
    </div>
  );
};

export default Header;
