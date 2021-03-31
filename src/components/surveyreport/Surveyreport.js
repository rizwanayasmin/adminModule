import React from "react";
import { render } from "react-dom";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import {
  Row,
  Col,
  Button,
  Media,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPlus,
  faArrowUp,
} from "@fortawesome/pro-duotone-svg-icons";
import StarRatings from "react-star-ratings";

const bananas = require("../bananas.json");

export default class SurveyReport extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: bananas.bananas,
    };

    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
  }

  render() {
    const items = this.state.items;
    return (
      <div>
        <div
          className="card m-3"
          style={{ backgroundColor: "#ecf0f1", borderRadius: 10 }}
        >
          <Row>
            <Col>
              <h6
                className="text-center"
                style={{ paddingTop: 7, color: "#c3272b" }}
              >
                SECTION - I
              </h6>
            </Col>
          </Row>
          <RLDD
            items={items}
            itemRenderer={(item) => {
              return (
                <div className="item surveyleft m-2 mt-1 ">
                  <div style={{ fontSize: 16, color: "gray" }}>
                    {item.title}
                  </div>
                  <div className="text-center">
                    {/* <StarRatings 
rating={2.403}
starRatedColor="#F7CA18"
numberOfStars={5}
starDimension="25px"
starSpacing="10px"
/> */}

                    {/* <div className="text-center" >
<HorizontalGauge ticks={[{label: '0', value: 0}, {label: '1', value: 1},{label: '2', value: 2},{label: '3', value: 3},{label: '4', value: 4},
{label: '5', value: 5},{label: '6', value: 6},{label: '7', value: 7},{label: '8', value: 8},{label: '9', value: 9},{label: '10', value: 10}]} height={70} width={500} min={0} max={10} value={5.3}/>

</div> */}

                    <div className="chart-scale">
                      <button className="btn btn-scale btn-scale-asc-1">
                        1
                      </button>
                      <button className="btn btn-scale btn-scale-asc-2">
                        2
                      </button>
                      <button className="btn btn-scale btn-scale-asc-3">
                        3
                      </button>
                      <button className="btn btn-scale btn-scale-asc-4">
                        4
                      </button>
                      <button className="btn btn-scale btn-scale-asc-5">
                        5
                      </button>
                      <button className="btn btn-scale btn-scale-asc-6">
                        6
                      </button>
                      <button className="btn btn-scale btn-scale-asc-7">
                        7
                      </button>
                      <button className="btn btn-scale btn-scale-asc-8">
                        8
                      </button>
                      <button className="btn btn-scale btn-scale-asc-9">
                        9
                      </button>
                      <button className="btn btn-scale btn-scale-asc-10">
                        10
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
            onChange={this.handleRLDDChange}
          />
          <div>
            <Button
              className="m-2 btn-success float-right"
              style={{ backgroundColor: "#f9748f", borderColor: "#f9748f" }}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add
            </Button>
          </div>
        </div>
        <div className="m-3">
          <Button outline block color="success" size="lg">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2 font-icon" />
            Submit
          </Button>
        </div>
      </div>
    );
  }

  itemRenderer(item, index) {
    return (
      <div className="item">
        <p className="title">{item.title}</p>
        <p className="body">{item.body}</p>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  }

  handleRLDDChange(reorderedItems) {
    this.setState({ items: reorderedItems });
  }
}

render(<SurveyReport />, document.getElementById("root"));
