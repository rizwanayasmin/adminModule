import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet} from "@fortawesome/pro-solid-svg-icons";
import './Reportcard.css'
import {
faEye,
faPrint,
faArrowDown,
faCheck,
faTimes,
faMapMarkerExclamation,
faUserPlus,
faUserTimes,
faPaperPlane,
faCloudDownload,
faCloudUpload,


faUserVisor,
} from "@fortawesome/pro-duotone-svg-icons";
import {
Row,
Col,
// Button,
Form,
FormGroup,
Label,
// Input,
FormText,
// Table,
} from "reactstrap";
import { Doughnut, Line } from "react-chartjs-2";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import  school from '../../images/schoolExam.jpg'
import SearchIcon from '@material-ui/icons/Search';
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'


//pagination
// import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//table
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//pagination
import PaginationIconsAndText from '../pagination/pagination'
// icons
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//antd
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import { Input} from 'antd';
import Tooltip from '@material-ui/core/Tooltip'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { AutoComplete } from 'antd';
import ReportCardStudent from "../ReportCard StudentList/ReportCardStudent"

const { Option } = Select;
const { Panel } = Collapse;
const { Search } = Input;

const options = [
  { value: 'English' },
  { value: 'Tamil' },
  { value: 'Maths' },
  { value: 'Science' },
  { value: 'Social' },
];
const genExtra = () => (
    <div className='parent_lesson_collapse_header_title_div'>
    <label>Subject</label>
    </div>

  );
  const onSearch = value => console.log(value);
  //table 
  const useStyles = makeStyles({
    table: {
    //   minWidth: '80%',
    },
  });



toast.configure()

const  ReportCard =()=> {

    const classes = useStyles();
    const [allNotes,setAllNotes] = useState({
        date:'',
        subject:'',
        topic:'',
    })
    const [searchData, setSearchData] = useState([])
    const [search, setSearch] = useState("")
    const [SearchArrOpen,setSearchArrOpen] = useState(true)
    const [age, setAge] = useState('');

    const handleChangeRow = (event) => {
      setAge(event.target.value);
    };

    const handleChange = () =>{
        var results = allNotes.filter((data) => {
          if (search === "")
            return data
          else if (data.date!== "" && data.date.toLowerCase().includes(search.toLowerCase())) {
            return data
          }
          else if (data.subject!== "" && data.subject.toLowerCase().includes(search.toLowerCase())) {
            return data
          }
          else if (data.topic!== "" && data.topic.toLowerCase().includes(search.toLowerCase())) {
            return data
          }
        })
    
        setSearchData(results)
        setSearchArrOpen(false)
    
      } 
      function createData(date, subject, topic,percentage, chapter, assignment,comments,result) {
        return {date, subject, topic,percentage, chapter, assignment,comments,result };
      }
      
      const rows = [
        createData( 'ENGLISH','7.2','6','41','48%','Download','Pass','B',),
        createData('TAMIL','7.2','6','41','48%','Download','Pass','B',),
        createData('MATHS','7.2','6','41','48%','Download','Pass','B',),
        createData('SCIENCE','7.2','6','41','48%','Download','Pass','B',),
        createData('SOCIAL','7.2','6','41','48%','Download','Pass','B',),
        
      ];
      const gradeTitle = [
        createData('OUTSTANDING', 'EXCELLENT','VERY GOOD','VERY GOOD','GOOD','GOOD','FAIR',),
       
      ];
      const gradeMarks = [
        createData('91 - 100', '81 - 90','71 - 80','61 - 70','51 - 60','41 - 50','0 - 40',),
       
        
      ];
      const overAllResult = [
        createData('600','68%','B',),
       
        
      ];


      function onChange(value) {
        console.log(`selected ${value}`);
      }
      

      
      function onSearch(val) {
        console.log('search:', val);
      }

//date picker
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
//notificaton
const notify = () =>{
  toast.success ('File uploaded Successfully')
}
const notifyWarning = () =>{
    toast.warning('File Downloaded Successfully')
}
const { Search } = Input;
return (
<div className="container-fluid">
{/* <Row> */}
<div className="examination_report_card_select_div">

<div className='parent_lesson_table_select_btn_div'>
                <UncontrolledButtonDropdown>
                    <DropdownToggle outline caret style={{color:'	#f78ca0',borderColor:'#f78ca0'}}>
                      Select Report Card
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href='/english' tag='a' value="English">PrePA2</DropdownItem>
                      <DropdownItem href='/tamil' tag='a' value="Tamil">Periodic Assessment 2 </DropdownItem>
                      <DropdownItem href='/hindi' tag='a' value="Hindi">PA-2 </DropdownItem>
                      <DropdownItem href='/hindi' tag='a' value="Hindi">HYA </DropdownItem>
                      <DropdownItem href='/hindi' tag='a' value="Hindi">Annual </DropdownItem>
    
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
            <ReportCardStudent />

</div>

{/* </Row> */}

{/* <div className='parent_lesson_card_main_div'>
<Card>

<div className='parent_lesson_table_title_header_div'>
<label className='parent_lesson_table_title_header'>Student Name</label>
<p>Exam Type</p>
</div>
  <div className='table_title_content_header'>
    <div><div><Label>Institute</Label></div>
    <div className='table_title_content_header_select'><Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      style={{width:"300px"}}
      
    >
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
    </Select>    </div>  
    </div>             
      <div className='parent_lesson_table_select_search_div'>
        <AutoComplete
            options={options}
            placeholder="search by Subject"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          
          />
    
      </div>
      <SearchIcon /> 
  </div>

         

          
           
                

          

         
         
          
<div className='parent_lession_table_div_header'>
<div className='row_page_head_div'>
           <label className='row_page_admin_label'>Rows</label>
                <div className='row_page_select'>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChangeRow}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                </div>
           </div>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
        
          <TableRow>
            <TableCell align="Center">Subject</TableCell>
            <TableCell align="Center">Weekly Assessment</TableCell>
            <TableCell align="Center">Pre contest	</TableCell>
            <TableCell align="Center">Written	</TableCell>
            <TableCell align="Center">Percentage</TableCell>
            <TableCell align="Center">Answer Sheet</TableCell>
            <TableCell align="Center"> Status</TableCell>
            <TableCell align="Center"> Grade</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow >
       
              <TableCell align="Center">{row.date}</TableCell>
              <TableCell align="Center">{row.subject}</TableCell>
              <TableCell align="Center">{row.topic}</TableCell>
              <TableCell align="Center">{row.percentage}</TableCell>
              <TableCell align="center">{row.chapter}</TableCell>
     
              <TableCell align="center">
                 
                     
                      <div className='parent_lesson_table_icon_btn_upload'>
                        <Tooltip title="download">
                        <Button  onClick={notifyWarning} >
                             <FontAwesomeIcon
icon={faCloudDownload}
style={{ fontSize: 20 }}
/>
                             </Button >
                        </Tooltip>
                        {row.assignment}
                        </div>
                 
              </TableCell>
              <TableCell align="center">{row.comments}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
            </TableRow>
        ))}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>

<div className='report_card_overall_Result'>
<label className='report_card_overall_Result_label'>OVERALL RESULT</label>
</div>

<div className='overall_header_div'>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead >
        
        <TableRow>
          <TableCell align="Center" style={{fontSize:'20px', color:'#c3272b'}}>Total</TableCell>
          <TableCell align="Center" style={{fontSize:'20px', color:'#c3272b'}}>Percentage</TableCell>
          <TableCell align="Center" style={{fontSize:'20px', color:'#c3272b'}}>Grade</TableCell>
     


        </TableRow>
      </TableHead>
        <TableBody>
     

{overAllResult.map((overAll) => (
            <TableRow >
               <TableCell align="Center" >{overAll.date}</TableCell>
              <TableCell align="Center" >{overAll.subject}</TableCell>
              <TableCell align="Center" >{overAll.topic}</TableCell>
     
            </TableRow>
        ))}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>


<Row className="mt-2">
<Col sm="6">
<div className="card">
<div className="cardHeader">
TEACHER REMARK
</div>
<FormGroup className="p-2">
<Input type="textarea" name="text" id="exampleText" />
</FormGroup>

 </div>
 </Col>
 <Col sm="6">
 <div className="card">
 <div className="cardHeader">
 PARENT REMARK
 </div>
 <FormGroup className="p-2">
 <Input type="textarea" name="text" id="exampleText" />
 </FormGroup>
 
 </div>
 </Col>
 </Row>

 <div className='parent_lession_table_div_header'>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
        
          <TableRow>
            <TableCell align="Center">A1</TableCell>
            <TableCell align="Center">A2</TableCell>
            <TableCell align="Center">B1</TableCell>
            <TableCell align="Center">B2</TableCell>
            <TableCell align="Center">C1</TableCell>
            <TableCell align="Center">C2</TableCell>
            <TableCell align="Center">D</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
        {gradeTitle.map((title) => (
            <TableRow >
              <TableCell align="Center" style={{color:'green'}}>{title.date}</TableCell>
              <TableCell align="Center" style={{color:'green'}}>{title.subject}</TableCell>
              <TableCell align="Center" style={{color:'green'}}>{title.topic}</TableCell>
              <TableCell align="center" style={{color:'green'}}>{title.chapter}</TableCell>
              <TableCell align="center" style={{color:'green'}}>{title.assignment}</TableCell>
              <TableCell align="center" style={{color:'green'}}>{title.comments}</TableCell>
              <TableCell align="center" style={{color:'green'}}>{title.result}</TableCell>
            </TableRow>
        ))}

{gradeMarks.map((marks) => (
            <TableRow >
               <TableCell align="Center" style={{color:'red'}}>{marks.date}</TableCell>
              <TableCell align="Center" style={{color:'red'}}>{marks.subject}</TableCell>
              <TableCell align="Center" style={{color:'red'}}>{marks.topic}</TableCell>
              <TableCell align="center" style={{color:'red'}}>{marks.chapter}</TableCell>
              <TableCell align="center" style={{color:'red'}}>{marks.assignment}</TableCell>
              <TableCell align="center" style={{color:'red'}}>{marks.comments}</TableCell>
              <TableCell align="center" style={{color:'red'}}>{marks.result}</TableCell>
            </TableRow>
        ))}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    <PaginationIconsAndText />

    </Card>

    </div> */}
</div>
);
}


export default ReportCard;











































































































































































































// import React, { Component, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilePdf, faFileSpreadsheet,faCloudDownload,faCloudUpload } from "@fortawesome/pro-solid-svg-icons";
// import './Reportcard.css'
// import {
// faEye,
// faPrint,
// faArrowDown,
// faCheck,
// faTimes,
// faMapMarkerExclamation,
// faUserPlus,
// faUserTimes,
// faUserVisor,
// faPaperPlane,
// } from "@fortawesome/pro-duotone-svg-icons";
// import {
// Row,
// Col,
// Button,
// Form,
// FormGroup,
// Label,
// Input,
// FormText,
// Table,
// } from "reactstrap";
// import { Doughnut, Line } from "react-chartjs-2";
// import { faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";

// class Reportcard extends Component {
// render() {
// return (
// <div className="container-fluid">
// <Row>
// <div className="hero-image">
// <img src="https://i.pinimg.com/originals/c2/4b/e8/c24be8b914079df7aad2e3fb267d40f7.jpg" className="img-fluid hero-image" alt="Responsive image"></img>
// <div className="hero-text">
// <h1>REPORTCARD</h1>
// </div>
// </div>
// </Row>


// <Row className="text-center mt-2">
// <Col sm="4"/>
// <Col sm="4">
// <FormGroup>
// <Label for="exampleSelect">Select Reportcard *</Label>
// <Input type="select" name="select" id="exampleSelect">
// <option>1</option>
// <option>2</option>
// <option>3</option>
// <option>4</option>
// <option>5</option>
// </Input>
// </FormGroup>
// </Col> 
// <Col sm="4"/> 
// </Row>


// <Row className="mt-2">
// <Col sm="12">
// <div className="table-responsive  card-box">
// <div className="text-center">
// <h1 className="titleText">HYA</h1>
// </div>
// <Table className="table lhead table-borderless custom_table ">
// <thead>
// <tr>
// <th>Subject</th>
// <th>Pre-contest</th>
// <th>Written</th>
// <th>Percentage</th>
// <th>Answersheet</th>
// <th>Status</th>
// <th>Grade</th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td><span>
// <FontAwesomeIcon 
// icon={faBookOpen}
// style={{ fontSize: 15,color:'#f26d91' }}
// />   
// </span> Maths</td>
// <td>0</td>
// <td>44</td>
// <td>44.00%</td>
// <td><a>
// <Button color="primary" className="btn btn-sm" style={{backgroundColor:'#a1c3d1',borderColor:'#a1c3d1'}}><FontAwesomeIcon
// icon={faCloudDownload}
// style={{ fontSize: 15 }}
// /></Button> <span className="textColor">Download</span>{' '}
// </a></td>
// <td className="passText">PASS</td>
// <td>A2</td>
// </tr>

// </tbody>
// </Table>
// </div>
// </Col>
// </Row>


// <Row className="mt-2">
// <Col sm="12">
// <div className="card">
// <div className="cardHeader">
// OVERALL RESULT
// </div>
// <Row className="p-3 text-center">
// <Col sm="4">
// <h6 className="topText">Total</h6>
// <h6 className="bottomText">150</h6>
// </Col>
// <Col sm="4">
// <h6 className="topText">Percentage</h6>
// <h6 className="bottomText">50%</h6>
// </Col>
// <Col sm="4">
// <h6 className="topText">Grade</h6>
// <h6 className="bottomText">D</h6>
// </Col>
// </Row> 
// </div>
// </Col>
// </Row>

// <Row className="mt-2">
// <Col sm="6">
// <div className="card">
// <div className="cardHeader">
// TEACHER REMARK
// </div>
// <FormGroup className="p-2">
// <Input type="textarea" name="text" id="exampleText" />
// </FormGroup>
// <div className="clearfix p-2">
// <button className="btn btn-success btn-sm float-right">
// <FontAwesomeIcon
// icon={faPaperPlane}
// style={{ fontSize: 16}}
// /> Submit
// </button>
// </div>
// </div>
// </Col>
// <Col sm="6">
// <div className="card">
// <div className="cardHeader">
// PARENT REMARK
// </div>
// <FormGroup className="p-2">
// <Input type="textarea" name="text" id="exampleText" />
// </FormGroup>
// <div className="clearfix p-2">
// <button className="btn btn-success btn-sm float-right">
// <FontAwesomeIcon
// icon={faPaperPlane}
// style={{ fontSize: 16}}
// /> Submit
// </button>
// </div>
// </div>
// </Col>
// </Row>

// <Row className="mt-2">
// <Col sm="12">
// <div className="table-responsive  card">
// <Table className="table lhead table-borderless custom_table ">
// <thead>
// <tr>
// <th>A1</th>
// <th>A2</th>
// <th>B1</th>
// <th>B2</th>
// <th>C1</th>
// <th>C2</th>
// <th>D</th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td>
// <span className="text-success text-center">OUTSTANDING</span><br></br>
// <span className="text-danger">91 - 100</span>
// </td>
// <td>
// <span className="text-success text-center">EXCELLENT</span><br></br>
// <span className="text-danger">81 - 90</span>
// </td>
// <td>
// <span className="text-success text-center">VERY GOOD</span><br></br>
// <span className="text-danger">71 - 80</span>
// </td>
// <td>
// <span className="text-success text-center">VERY GOOD</span><br></br>
// <span className="text-danger">61 - 70</span>
// </td>
// <td>
// <span className="text-success text-center">GOOD</span><br></br>
// <span className="text-danger">51 - 60</span>
// </td>
// <td>
// <span className="text-success text-center">GOOD</span><br></br>
// <span className="text-danger">41 - 50</span>
// </td>
// <td>
// <span className="text-success text-center">FAIR</span><br></br>
// <span className="text-danger">0 - 40</span>
// </td>
// </tr>

// </tbody>
// </Table>
// </div>
// </Col>
// </Row>

// </div>
// );
// }
// }

// export default Reportcard;
