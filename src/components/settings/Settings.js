import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressBook, faBriefcase, faBuilding, faFilePdf,faFileSpreadsheet, faPlus, faSearchLocation, faUniversity} from "@fortawesome/pro-solid-svg-icons";
import { Row,Col,Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter,Nav, NavItem, NavLink, 
Card,CardTitle, CardText,TabPane,TabContent,Media,CardHeader,CardBody,Table, ListGroup, ListGroupItem, Pagination,
PaginationItem,
PaginationLink} from "reactstrap";
import { faEye,faTrash ,faPencil,faUser} from "@fortawesome/pro-duotone-svg-icons";
import classnames from 'classnames';
import DataTable from "react-data-table-component"
import { Plus, AlertCircle, Check ,User,Mail,Lock,Facebook,Twitter,Linkedin,Instagram,ChevronLeft,ChevronRight} from "react-feather"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"
import Select from "react-select"

const options = [
{ value: 'CBSE', label: 'CBSE' },
{ value: 'MATRIC', label: 'MATRIC' },

];

const columns = [
{
name: "Id",
selector: "id",
},
{
name: "Designation Name",
selector: "name",
},
{
name: "Experience",
selector: "experience",
},
{
name: "Action",
selector: "action",
},

]


const columns1 = [
{
name: "S.No",
selector: "sno",
},
{
name: "Letter Name",
selector: "name",
},

{
name: "Action",
selector: "action",
},
]


const columns2 = [
{
name: "Id",
selector: "id",
},
{
name: "Process Name",
selector: "name",
},

{
name: "No Of Steps",
selector: "steps",
},

{
name: "Action",
selector: "action",
},
]

const data = [
{
id: "42-8972591",
name: "Designation name",
experience: "2yrs",
action: "action",
},
{
id: "42-8972591",
name: "Designation name",
experience: "2yrs",
action: "action",
},
]


const data1 = [
{
sno: "1",
name: "Letter name",
action:"action"
},
{
sno: "1",
name: "Letter name",
action:"action"
},
]

const data2 = [
{
id: "1",
name: "Process Name",
steps:"3",
action:"action"
},
{
id: "1",
name: "Process Name",
steps:"3",
action:"action"
},
]
const ExpandableTable = ({ data }) => {
return (
<Table responsive >
{/* <thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead> */}
<tbody>
<tr>
<td>Designation Id</td>
<td>
<Input placeholder="Designation Id"/>
</td>
</tr>
<tr>
<td>Designation Name</td>
<td>
<Input placeholder="Designation Name"/>
</td>
</tr>
<tr>
<td>Department Name</td>
<td><Input placeholder="Department Name"/></td>
</tr>
<tr>
<td>Role</td>
<td><Input placeholder="Teacher"/></td>
</tr>
<tr>
<td>Experience</td>
<td><Select options={options} />  
</td>
</tr>
<tr>
<td>Loan Eligibilty</td>
<td><Input placeholder="Loan eligibility"/></td>
</tr>
<tr>
<td>Amount</td>
<td><Input placeholder="Amount"/></td>
</tr>
<tr>
<td>Max Non-Payable Period</td>
<td><Input placeholder="Max Non-payable Period"/></td>
</tr>
<tr>
<td>Loan Duration</td>
<td><Input placeholder="Loan Duration"/></td>
</tr>
</tbody>
</Table>
)
}



const ExpandableTable1 = () => {
return (
<div>
<Card>
<CardHeader>
<CardTitle>
Letter Name
</CardTitle>
</CardHeader> 
<CardBody>
With basic collapse you can open multiple items at a time. to add bottom border use .collapse-bordered as a wrapper of collapse cards.
</CardBody>
</Card>
</div>  
)
}


const ExpandableTable2 = () => {
return (
<div>
<Card>
<CardHeader>
<CardTitle>Activity Timeline</CardTitle>
</CardHeader>
<CardBody>
<ul className="activity-timeline timeline-left list-unstyled">
<li>
<div className="timeline-icon bg-primary">
<Plus size={16} />
</div>
<div className="timeline-info">
<p className="font-weight-bold mb-0">STEP-I</p>
<span className="font-small-3">
Bonbon macaroon jelly beans gummi bears jelly lollipop apple
</span>
</div>
<small className="text-muted">25 mins ago</small>
</li>
<li>
<div className="timeline-icon bg-warning">
<AlertCircle size={16} />
</div>
<div className="timeline-info">
<p className="font-weight-bold mb-0">Step-II</p>
<span className="font-small-3">
Cupcake gummi bears soufflé caramels candy
</span>
</div>
<small className="text-muted">15 days ago</small>
</li>
<li>
<div className="timeline-icon bg-danger">
<Check size={16} />
</div>
<div className="timeline-info">
<p className="font-weight-bold mb-0">Step-III</p>
<span className="font-small-3">
Candy ice cream cake. Halvah gummi bears
</span>
</div>
<small className="text-muted">20 days ago</small>
</li>

</ul>
</CardBody>
</Card>
</div>  
)
}

const Example = (props) => {
const [activeTab, setActiveTab] = useState('1');

const toggle = tab => {
if(activeTab !== tab) setActiveTab(tab);
}

return (
<div>
<Row>
<Col sm="4">
<div className="card">
<Nav tabs vertical className="nav nav-tabs">
<NavItem className="nav-item" >
<NavLink className="nav-link active" style={{borderBottomColor:'lightgray',borderBottomWidth:1}}
className={classnames({ active: activeTab === '1' })}
onClick={() => { toggle('1'); }}
>
<Media className="m-1">
<Media left href="#">
<a><FontAwesomeIcon icon={faUniversity} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</Media>
<Media body>
{/* <Media heading>Institute Create</Media> */}
<h5>Profile</h5>
<p>User Details</p>
</Media>
</Media>
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink className="nav-link" style={{borderBottomColor:'lightgray',borderBottomWidth:1}}
className={classnames({ active: activeTab === '2' })}
onClick={() => { toggle('2'); }}
>
<Media className="m-1">
<Media left href="#">
<a><FontAwesomeIcon icon={faBriefcase} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</Media>
<Media body>
{/* <Media heading>Department Create</Media> */}
<h5>Department</h5>
<p>Department Details</p>
</Media>
</Media>
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink className="nav-link" style={{borderBottomColor:'lightgray',borderBottomWidth:1}}
className={classnames({ active: activeTab === '3' })}
onClick={() => { toggle('3'); }}
>
<Media className="m-1">
<Media left href="#">
<a><FontAwesomeIcon icon={faUniversity} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</Media>
<Media body>
{/* <Media heading>Designation Create</Media> */}
<h5>Designation Create</h5>
<p>Designation Details</p>
</Media>
</Media>
</NavLink>
</NavItem>


<NavItem className="nav-item">
<NavLink className="nav-link" style={{borderBottomColor:'lightgray',borderBottomWidth:1}}
className={classnames({ active: activeTab === '4' })}
onClick={() => { toggle('4'); }}
>
<Media className="m-1">
<Media left href="#">
<a><FontAwesomeIcon icon={faUniversity} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</Media>
<Media body>
{/* <Media heading>Designation Create</Media> */}
<h5>Interview Process</h5>
<p>Interview Details</p>
</Media>
</Media>
</NavLink>
</NavItem>


<NavItem className="nav-item">
<NavLink className="nav-link" style={{borderBottomColor:'lightgray',borderBottomWidth:1}}
className={classnames({ active: activeTab === '5' })}
onClick={() => { toggle('5'); }}
>
<Media className="m-1">
<Media left href="#">
<a><FontAwesomeIcon icon={faUniversity} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</Media>
<Media body>
{/* <Media heading>Designation Create</Media> */}
<h5>HR Letter Formats</h5>
<p>Letter Details</p>
</Media>
</Media>
</NavLink>
</NavItem>


<NavItem className="nav-item">
<NavLink className="nav-link" style={{borderBottomColor:'lightgray',borderBottomWidth:1}}
className={classnames({ active: activeTab === '6' })}
onClick={() => { toggle('6'); }}
>
<Media className="m-1">
<Media left href="#">
<a><FontAwesomeIcon icon={faUniversity} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</Media>
<Media body>
{/* <Media heading>Designation Create</Media> */}
<h5>Attendance and Leave Policy</h5>
<p>Attendance Details</p>
</Media>
</Media>
</NavLink>
</NavItem>
</Nav>
</div>
</Col>

<Col sm="8">

<TabContent activeTab={activeTab}>
<TabPane tabId="1">
<Card>
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faUniversity} className="mr-2" style={{fontSize:16,color:'gray'}}/>Institution Details
</CardTitle> 
<a><FontAwesomeIcon icon={faPencil} className="mr-2 float-right" style={{fontSize:16,color:'#fd868c'}}/></a>
</CardHeader>
<CardBody>
<Form>

<Row>
<Col sm="12">
<Label for="nameVerticalIcons">Institute ID</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="text"
name="name"
id="nameVerticalIcons"
placeholder="First Name"
/>
<div className="form-control-position">
<User size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Institute Name</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Email"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="IconsMobile">Year Of Establishment</Label>
<FormGroup>
<Input
type="date"
name="date"
id="exampleDate"
placeholder="date placeholder"
/>
</FormGroup>
</Col>
<Col sm="12">
<Label for="IconsPassword">Institute Type</Label>
<FormGroup>
<Select options={options} />
</FormGroup>
</Col>

<Col sm="12">
<Label for="IconsPassword">Branch</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="text"
name="text"
id="IconsPassword"
placeholder="Branch"
/>
<div className="form-control-position">
<Lock size={15} />
</div>
</FormGroup>
</Col>
{/* <Col sm="12">
<FormGroup className="has-icon-left position-relative">
<Checkbox
color="primary"
icon={<Check className="vx-icon" size={16} />}
label="Remember Me"
defaultChecked={false}
/>
</FormGroup>
</Col> */}
<Col sm="12">
<FormGroup className="has-icon-left position-relative float-right">
<Button
color="success"
type="submit"
className="mr-1 mb-1"
>
Submit
</Button>
</FormGroup>
</Col>
</Row>
</Form>

</CardBody> 
</Card>

<Card>
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faSearchLocation} className="mr-2" style={{fontSize:16,color:'gray'}}/>Location Details
</CardTitle> 
<a><FontAwesomeIcon icon={faPencil} className="mr-2 float-right" style={{fontSize:16,color:'#fd868c'}}/></a>
</CardHeader>
<CardBody>
<Form>

<Row>
<Col sm="12">
<Label for="nameVerticalIcons">Building No</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="text"
name="name"
id="nameVerticalIcons"
placeholder="Building No"
/>
<div className="form-control-position">
<User size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Street Name</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Street Name"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>

<Col sm="12">
<Label for="EmailVerticalIcons">Area</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Email"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>

<Col sm="12">
<Label for="EmailVerticalIcons">LandMark</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Landmark"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>

<Col sm="12">
<Label for="EmailVerticalIcons">City</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Email"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>

<Col sm="12">
<Label for="EmailVerticalIcons">Pin code</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Email"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>
{/* <Col sm="12">
<Label for="IconsPassword">Institute Type</Label>
<FormGroup>
<Select options={options} />
</FormGroup>
</Col> */}

<Col sm="12">
<Label for="IconsPassword">State</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="text"
name="text"
id="IconsPassword"
placeholder="Branch"
/>
<div className="form-control-position">
<Lock size={15} />
</div>
</FormGroup>
</Col>

<Col sm="12">
<FormGroup className="has-icon-left position-relative float-right">
<Button
color="success"
type="submit"
className="mr-1 mb-1"
>
Submit
</Button>
</FormGroup>
</Col>
</Row>
</Form>

</CardBody> 
</Card>



<Card>
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faAddressBook} className="mr-2" style={{fontSize:16,color:'gray'}}/>Contact
</CardTitle> 
<a><FontAwesomeIcon icon={faPencil} className="mr-2 float-right" style={{fontSize:16,color:'#fd868c'}}/></a>
</CardHeader>
<CardBody>
<Form>
<Row>
<Col sm="12">
<Label for="EmailVerticalIcons">Website</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Website"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Landline</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Landline"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Mobile</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Mobile"
/>
<div className="form-control-position">
<Mail size={15} />
</div>
</FormGroup>
</Col>
</Row>
<Row >
<Col>
<div className="float-right">
<Button color="success">Save</Button>
</div>
</Col>
</Row>
</Form>
</CardBody> 
</Card>


<Card>
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faAddressBook} className="mr-2" style={{fontSize:16,color:'gray'}}/>Social Media Link
</CardTitle> 
<a><FontAwesomeIcon icon={faPencil} className="mr-2 float-right" style={{fontSize:16,color:'#fd868c'}}/></a>
</CardHeader>
<CardBody>
<Form>
<Row>
<Col sm="12">
<Label for="EmailVerticalIcons">Facebook</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="text"
name="Email"
id="EmailVerticalIcons"
placeholder="Facebook"
/>
<div className="form-control-position">
<Facebook size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Twitter</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Twitter"
/>
<div className="form-control-position">
<Twitter size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Linked In</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Email"
/>
<div className="form-control-position">
<Linkedin size={15} />
</div>
</FormGroup>
</Col>
<Col sm="12">
<Label for="EmailVerticalIcons">Instagram</Label>
<FormGroup className="has-icon-left position-relative">
<Input
type="email"
name="Email"
id="EmailVerticalIcons"
placeholder="Instagram"
/>
<div className="form-control-position">
<Instagram size={15} />
</div>
</FormGroup>
</Col>
</Row>
<Row >
<Col>
<div className="float-right">
<Button color="success">Save</Button>
</div>
</Col>
</Row>
</Form>
</CardBody> 
</Card>

</TabPane>
<TabPane tabId="2">
<Card>
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faBuilding} className="mr-2" style={{fontSize:16,color:'gray'}}/>Department
</CardTitle> 
</CardHeader>
<CardBody>

<Table responsive>
<thead>
<tr>
<th>Department Name</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>Your Department</td>
<td>
<a><FontAwesomeIcon icon={faPencil} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
<a><FontAwesomeIcon icon={faTrash} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</td>
</tr>
</tbody>
<tfoot>
<tr>
<th><Input type="email" name="email" id="exampleEmail" placeholder="Enter Department" /></th>
<th><a><FontAwesomeIcon icon={faPlus} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a></th>
</tr>   
</tfoot>
</Table>
<Pagination className="d-flex justify-content-center mt-3">
<PaginationItem href="#" className="prev-item">
<PaginationLink href="#" first>
<ChevronLeft />{" "}
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem active>
<PaginationLink href="#">4</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">5</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">6</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">7</PaginationLink>
</PaginationItem>
<PaginationItem href="#" className="next-item">
<PaginationLink href="#" last>
<ChevronRight />
</PaginationLink>
</PaginationItem>
</Pagination>
</CardBody> 
</Card>


<Card className="mt-2">
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faAddressBook} className="mr-2" style={{fontSize:16,color:'gray'}}/>Role
</CardTitle> 
</CardHeader>
<CardBody>

<Table responsive>
<thead>
<tr>
<th>Role Name</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>Your Role</td>
<td>
<a><FontAwesomeIcon icon={faPencil} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
<a><FontAwesomeIcon icon={faTrash} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</td>
</tr>
</tbody>
<tfoot>
<tr>
<th><Input type="email" name="email" id="exampleEmail" placeholder="Enter Role" /></th>
<th><a><FontAwesomeIcon icon={faPlus} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a></th>
</tr>   
</tfoot>
</Table>
<Pagination className="d-flex justify-content-center mt-3">
<PaginationItem href="#" className="prev-item">
<PaginationLink href="#" first>
<ChevronLeft />{" "}
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem active>
<PaginationLink href="#">4</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">5</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">6</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">7</PaginationLink>
</PaginationItem>
<PaginationItem href="#" className="next-item">
<PaginationLink href="#" last>
<ChevronRight />
</PaginationLink>
</PaginationItem>
</Pagination>
</CardBody> 
</Card>
</TabPane>
<TabPane tabId="3">
<Card>
<CardHeader>
<CardTitle><FontAwesomeIcon icon={faAddressBook} className="mr-2" style={{fontSize:16,color:'gray'}}/>Designation
</CardTitle> 
</CardHeader>
<CardBody>
<DataTable
data={data}
columns={columns}
noHeader
expandableRows
expandOnRowClicked
expandableRowsComponent={<ExpandableTable />}
/>
<div class="float-right">
<Button
className="btn-icon rounded-circle"
color="warning"
>
<Plus size={16} />
</Button>
</div>


<Pagination className="d-flex justify-content-center mt-3">
<PaginationItem href="#" className="prev-item">
<PaginationLink href="#" first>
<ChevronLeft />{" "}
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem active>
<PaginationLink href="#">4</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">5</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">6</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">7</PaginationLink>
</PaginationItem>
<PaginationItem href="#" className="next-item">
<PaginationLink href="#" last>
<ChevronRight />
</PaginationLink>
</PaginationItem>
</Pagination>
</CardBody> 
</Card>
</TabPane>
<TabPane tabId="4">
<Card>
<CardHeader>
<CardTitle>HR Letter format
</CardTitle> 
</CardHeader>
<CardBody>
<DataTable
data={data2}
columns={columns2}
noHeader
expandableRows
expandOnRowClicked
expandableRowsComponent={<ExpandableTable2 />}
/>
<Pagination className="d-flex justify-content-center mt-3">
<PaginationItem href="#" className="prev-item">
<PaginationLink href="#" first>
<ChevronLeft />{" "}
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem active>
<PaginationLink href="#">4</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">5</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">6</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">7</PaginationLink>
</PaginationItem>
<PaginationItem href="#" className="next-item">
<PaginationLink href="#" last>
<ChevronRight />
</PaginationLink>
</PaginationItem>
</Pagination>
</CardBody> 
</Card>
</TabPane>

<TabPane tabId="5">
<Card>
<CardHeader>
<CardTitle>HR Letter format
</CardTitle> 
</CardHeader>
<CardBody>
<DataTable
data={data1}
columns={columns1}
noHeader
expandableRows
expandOnRowClicked
expandableRowsComponent={<ExpandableTable1 />}
/>
<Pagination className="d-flex justify-content-center mt-3">
<PaginationItem href="#" className="prev-item">
<PaginationLink href="#" first>
<ChevronLeft />{" "}
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem active>
<PaginationLink href="#">4</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">5</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">6</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">7</PaginationLink>
</PaginationItem>
<PaginationItem href="#" className="next-item">
<PaginationLink href="#" last>
<ChevronRight />
</PaginationLink>
</PaginationItem>
</Pagination>
</CardBody> 
</Card>
</TabPane>

<TabPane tabId="6">
<Card>
<CardHeader>
<CardTitle>
Attendance
</CardTitle>
</CardHeader>
<CardBody>
<Table responsive>
<thead>
<tr>
<th>S.No</th>
<th>Policy ID</th>
<th>Policy Name</th>
<th>No Of Leaves</th>
<th>Monthly/Yearly</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>S.no</td>
<td>Policy Id</td>
<td>Policy Name</td>
<td>No Of Leaves</td>
<td>Monthly</td>
<td>
<a><FontAwesomeIcon icon={faPencil} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
<a><FontAwesomeIcon icon={faTrash} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</td>
</tr>
</tbody>
</Table>
<Pagination className="d-flex justify-content-center mt-3">
<PaginationItem href="#" className="prev-item">
<PaginationLink href="#" first>
<ChevronLeft />{" "}
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">2</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem active>
<PaginationLink href="#">4</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">5</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">6</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">7</PaginationLink>
</PaginationItem>
<PaginationItem href="#" className="next-item">
<PaginationLink href="#" last>
<ChevronRight />
</PaginationLink>
</PaginationItem>
</Pagination>
</CardBody>
</Card>


<Card className="mt-2">
<CardHeader>
<CardTitle>
Leave
</CardTitle>
</CardHeader>
<CardBody>
<Table responsive>
<thead>
<tr>
<th>S.No</th>
<th>Policy ID</th>
<th>Policy Name</th>
<th>Max Allowed</th>
<th>LOP</th>
<th>Fine</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>S.no</td>
<td>Policy Id</td>
<td>Policy Name</td>
<td>Max Allowed</td>
<td>LOP</td>
<td>Fine</td>
<td>
<a><FontAwesomeIcon icon={faPencil} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
<a><FontAwesomeIcon icon={faTrash} className="mr-2" style={{fontSize:16,color:'#fd868c'}}/></a>
</td>
</tr>
</tbody>
</Table>
</CardBody>
</Card>
</TabPane>
</TabContent>
</Col>
</Row>
</div>
);
}


class Settings extends Component
{

render() { 
return (
<div className="container-fluid">
<Example></Example>
</div>
);
}
}

export default Settings;




