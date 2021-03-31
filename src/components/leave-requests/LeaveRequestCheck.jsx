import React from "react"
import "./leaveRequest.css"
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

const LeaveRequestCheck = ()=>{
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

{/* or */}

{/* <Card >
                <div className="dialog_card_leaveRequest_sub_main">
                    <div className="dialog_card_head_two">
                    <Label className="dialog_card_head_two_label">1</Label>
                    </div>
                    <div >
                        <Label className="dialog_card_text_head_two">Comments</Label>
                        <Input type="textarea" />
                    </div>
                    <div className="dialog_card_btn_div_head_two">
                        <div className="dialog_card_btn_head_two_submit"><Button >Submit</Button></div>
                        <div><Button >Cancel</Button></div>
                    </div>
            </div>
            </Card> */}

{/*  */}

        </div>
    )
}

export default LeaveRequestCheck