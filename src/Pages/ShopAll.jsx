import React from "react";

import Filter from "../Components/Filter";
import FeatureSection from "../Layout/FeatureSection";
import { Data, TData, AxData } from "../Assets/Data";

import SortButton from "../Components/SortButton";
import "../Css/Filter.css";
import PageNavigation from "../Helper/PageNavigation";
import Title from "../Components/Title";
import { Row, Col } from "react-bootstrap";

const ShopAll = () => {
  const toggleFilter = () => {};

  const item1 = [...Data, ...TData, ...AxData];

  return (
    <div style={{ overflowX: "hidden" }}>
      <Title title={"Shop"} />
      <PageNavigation />
      <Row md={5} className="mt-4">
        <Col md={3}>
          <Filter />
        </Col>
        <Col md={9} style={{ marginTop: "0px" }}>
          <SortButton />
          <div>
            <button onClick={toggleFilter} className="toggle-filter-button">
              Toggle Filter
            </button>
          </div>
          <FeatureSection items={item1} />
        </Col>
      </Row>
    </div>
  );
};

export default ShopAll;
