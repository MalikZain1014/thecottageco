import React from "react";

const SortButton = () => {
  return (
    <div>
      <select
        style={{ height: '50px', marginTop: '30px', float: 'right', marginRight: '100px', padding: '10px', borderRadius: '10px'}}
      >
        <option value="collections.relevancy:asc" selected="selected">Sort by popularity</option>
        <option value="best-price-value:asc">
          Sort by average rating
        </option>
        <option value="best-price-value:desc">Sort by latest</option>
        <option value="best-saving-value:desc">Sort by  price: low to high</option>
        <option value="name.raw:asc">Sort by price: high to low</option>
      </select>
    </div>
  );
};

export default SortButton;
