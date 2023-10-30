
import Title from "../Components/Title";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "../Components/Filter";
import FeatureSection from "../Layout/FeatureSection";
import { Data, TData, AxData } from "../Assets/Data";
import SortButton from "../Components/SortButton";

const FawnIsland = () => {
  const item1 = [...Data, ...TData, ...AxData ];
  return (
    <div style={{ overflowX: 'hidden' }}>
    <Title title={"Fawn Island"}/>
    <Row md={5} className="mt-4">
        <Col md={3} >
        {/* className={`filter-col ${showFilter ? 'show' : ''}`} */}
            <Filter />
        </Col>
        <Col md={9} style={{ marginTop: '0px'}}>
        <SortButton />
            <div>
                <button className="toggle-filter-button">Toggle Filter</button>
            </div>
            <FeatureSection items={item1}/>
        </Col>
    </Row>
</div>
  )
}

export default FawnIsland
