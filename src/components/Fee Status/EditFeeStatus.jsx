import React from "react"
import "./feestatus.css"
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
    CardFooter,
  } from "reactstrap";
  import Divider from '@material-ui/core/Divider';
  import { faEye, faLocationArrow, faPenAlt, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt, faWindowClose } from "@fortawesome/pro-duotone-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EditFeestatus = () =>{
    return(
        <div className="dialog_content_div_popup">
            <Card>
                <Label className="dialog_popup_student_title">Student Name : </Label>
                <h5>AUDRIC JEVONN</h5>
                <Divider />
                <CardBody>
                <Label>Fee Date </Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />

                </CardBody>
                <CardFooter>
                    <div className="dialog_content_div_popup_btn_div">
                        <Button color="success">Submit
                        <FontAwesomeIcon
                              icon={faLocationArrow}
                              style={{ fontSize: 15}}
                             
                             
                            />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default EditFeestatus