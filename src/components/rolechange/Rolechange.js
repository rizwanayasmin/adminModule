import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet, faPencil} from "@fortawesome/pro-solid-svg-icons";
import { faEye,faSearch,
faPrint,faArrowDown,faCheckDouble} from "@fortawesome/pro-duotone-svg-icons";
import { Container,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Row,Col,Button, Form, 
    FormGroup, Label, Input, FormText,Table,InputGroup,InputGroupAddon,InputGroupText,CustomInput} from "reactstrap";
import { Doughnut } from 'react-chartjs-2';
import StarRatings from 'react-star-ratings';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
class Rolechange extends Component
{

render() {    
return (
<div className="container-fluid">
<Row>
<Col>
<div className="table-responsive mt-2 card-box">
<Row className="float-right">
<div className="clearfix mr-3" >
<span><button className="btn btn-success  b1" ><FontAwesomeIcon icon={faFilePdf}  style={{fontSize:30}}/></button><span className="btext">Download Pdf</span></span>
<span><button className="btn btn-info b2"><FontAwesomeIcon icon={faFileSpreadsheet} style={{fontSize:30}} /></button><span className="btext">Download XL</span></span>
</div>
</Row>
<Table className="table lhead table-borderless custom_table ">
<thead>
<tr>
<th>Employee Name</th>
<th>Employee No</th>
<th>Department</th>
<th>Designation</th>
<th>Rating</th>
<th>Role Change</th>
</tr>
</thead>
<tbody>
<tr>
<td>Employee Name</td>
<td>Employee No</td>
<td>Department</td>
<td>Designation</td>
<td>
<div>
<StarRatings 
rating={2.403}
starRatedColor="#F7CA18"
numberOfStars={5}
starDimension="25px"
starSpacing="10px"
/>
</div>
</td>
<td>
<div className="table-icons">
<a><FontAwesomeIcon icon={faPencil} className="mr-2 font-icon" /></a>
</div>
</td>

</tr>

<tr>
<td>Employee Name</td>
<td>Employee No</td>
<td>Department</td>
<td>Designation</td>
<td>
<div>
<StarRatings 
rating={2.403}
starRatedColor="#F7CA18"
numberOfStars={5}
starDimension="25px"
starSpacing="10px"
/>
</div>
</td>
<td>
<div className="table-icons">
<a><FontAwesomeIcon icon={faPencil} className="mr-2 font-icon" /></a>
</div>
</td>
</tr>


</tbody>
</Table>
</div>
</Col>
</Row>

</div>
);
}
}

export default  Rolechange;