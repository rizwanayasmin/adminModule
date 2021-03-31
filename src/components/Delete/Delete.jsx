import React from "react"
import "./Delete.css"
import Dialog from '@material-ui/core/Dialog';

import {
    Row,
    Col,
    Input,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Label,
    Button,
  } from "reactstrap";
  import { 
      faCheckCircle,
      faPencil,
       faSave,
        faTrash ,

}from "@fortawesome/pro-duotone-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Delete = ()=>{
    return(
        <div className="dialog_card_leaveRequest">
            <Card >
                <div className="dialog_card_leaveRequest_sub_main">
                    <div className="dialog_card_head">
                    <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    style={{ fontSize: 60, color:"green" }}
                                   
                    />
                    </div>
                    <div className="dialog_card_text">
                        <h4>ARE YOU SURE ?</h4>
                    </div>
                    <div className="dialog_card_btn_div">
                        <Button color="danger">No</Button>
                        <Button color="success">Yes</Button>
                    </div>
            </div>
            </Card>



        </div>
    )
}

export default Delete