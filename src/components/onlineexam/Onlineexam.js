import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet} from "@fortawesome/pro-solid-svg-icons";
import './Onlineexam.css'
import {
faEye,
faPrint,
faArrowDown,
faCheck,
faTimes,
faMapMarkerExclamation,
faUserPlus,
faUserTimes,
faCloudDownload,
faCloudUpload,

faBookUser,
faKey,
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
import  learn from '../../images/lessons.jpg'
import SearchIcon from '@material-ui/icons/Search';
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import VisibilityIcon from '@material-ui/icons/Visibility';


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


const { Option } = Select;
const { Panel } = Collapse;
const { Search } = Input;

const options = [
  { value: 'Outcomes of democracy' },
  { value: 'எழுத்து சொல்' },
  { value: 'Additional sums' },
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

const  OnlineExam =()=> {

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
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

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
      function createData(date, subject, topic, chapter, assignment,comments,result) {
        return {date, subject, topic, chapter, assignment,comments,result };
      }
      
      const rows = [
        createData('05-Feb-2021', 'Assessment','English','WEEKLY ASSESSMENT	','40','60%','good'),
        createData('05-Feb-2021', 'Assessment','English','WEEKLY ASSESSMENT	','40','60%','good'),
        createData('05-Feb-2021', 'Assessment','English','WEEKLY ASSESSMENT	','40','6%0','good'),
      ];


      function onChange(value) {
        console.log(`selected ${value}`);
      }
      

      
      function onSearch(val) {
        console.log('search:', val);
      }


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
<Row>
<div className="hero-image">
<img src={learn} className="img-fluid hero-image" alt="Responsive image" />
</div>
</Row>

<div className='parent_lesson_card_main_div'>
<Card>

<div className='examination_table_title_header_div'>
  <div className='table_title_content_header'>
       <label className='examination_table_title_header'>Online Exam</label>
            <div className='parent_lesson_table_select_btn_div'>
                <UncontrolledButtonDropdown>
                    <DropdownToggle outline caret style={{color:'	lightgrey',borderColor:'lightgrey',width:'110px'}}>
                      Exam
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href='/english' tag='a' value="English">English</DropdownItem>
                      <DropdownItem href='/tamil' tag='a' value="Tamil">Tamil </DropdownItem>
                      <DropdownItem href='/hindi' tag='a' value="Hindi">Hindi </DropdownItem>
                      <DropdownItem href='/science' tag='a' value="Science">Science</DropdownItem>
                      <DropdownItem href='/social' tag='a' value="Social Science">Social Science </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
            <div className='examination_online_exam_date_div'>
              {/* <AutoComplete
                 
                  options={options}
                  placeholder="search by topic"
                  filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                
                /> */}
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                    </MuiPickersUtilsProvider>
          
            </div>
            {/* <SearchIcon />  */}
            </div>

         

          
           <div className='row_page_head_div'>
           <label className='row_page'>Rows</label>
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
                

          
</div>
         
         
      <div className='ongoing_div'>
          <label className='ongoing_label'>Ongoing Test</label>
      </div>    
<div className='parent_lession_table_div_header'>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
        
          <TableRow>
            <TableCell align="Center">Date</TableCell>
            <TableCell align="center">Exam Type	</TableCell>
            <TableCell align="Center">Subject</TableCell>
            <TableCell align="Center">Title</TableCell>
            <TableCell align="Center">Max Mark</TableCell>
            <TableCell align="Center">Min Mark</TableCell>
            <TableCell align="Center">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow >
       
              <TableCell align="Center">{row.date}</TableCell>
              <TableCell align="Center">{row.subject}</TableCell>
              <TableCell align="Center">{row.topic}</TableCell>
              <TableCell align="Center">{row.chapter}</TableCell>
              <TableCell align="Center">{row.assignment}</TableCell>
              <TableCell align="Center">{row.comments}</TableCell>
              <TableCell align="center">
                  <div className='parent_lesson_table_icon_btn'>
                     <div className='parent_lesson_table_icon_btn_download'>
                        <Tooltip title="Download">
                        <Button  onClick={notifyWarning} >
                             <FontAwesomeIcon
icon={faCloudDownload}
style={{ fontSize: 20 }}
/>
                             </Button >
                        </Tooltip>

                     </div>
                      <div className='parent_lesson_table_icon_btn_upload'>
                        <Tooltip title="Upload">
                        <Button  onClick={notify}>
                            <FontAwesomeIcon
icon={faCloudUpload}
style={{ fontSize: 20 }}
/>
                            </Button>
                        </Tooltip>
                        </div>
                        <div className='parent_lesson_table_icon_btn_key'>
                        <Tooltip title="Answer Key">
                        <Button  onClick={notifyWarning} >
                             <FontAwesomeIcon
icon={faKey}
style={{ fontSize: 20 }}
/>
                             </Button >
                        </Tooltip>
                        </div>
                  </div>
              </TableCell>
            </TableRow>
        ))}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    {/* completed */}
    <div className='completed_div'>
          <label className='completed_label'>Completed Test</label>
      </div>    
<div className='parent_lession_table_div_header'>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
        
          <TableRow>
            <TableCell align="Center">Date</TableCell>
            <TableCell align="center">Exam Type	</TableCell>
            <TableCell align="Center">Subject</TableCell>
            <TableCell align="Center">Title</TableCell>
            <TableCell align="Center"> Mark Obtained</TableCell>
            <TableCell align="Center">Percentage</TableCell>
            <TableCell align="Center">Comments</TableCell>

            <TableCell align="Center">Result</TableCell>
          

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow >
       
              <TableCell align="Center">{row.date}</TableCell>
              <TableCell align="Center">{row.subject}</TableCell>
              <TableCell align="Center">{row.topic}</TableCell>
              <TableCell align="Center">{row.chapter}</TableCell>
              <TableCell align="Center">{row.assignment}</TableCell>
              <TableCell align="Center">{row.comments}</TableCell>
              <TableCell align="Center">{row.result}</TableCell>
              <TableCell align="center">
                  <div className='parent_lesson_table_icon_btn'>
                     
                      <div className='examination_table_icon_btn_view'>
                        <Tooltip title="View">
                            <Button  onClick={notify} >
                             <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20 }}
/>
                             </Button >
                        </Tooltip>
                        </div>
                    
                  </div>
              </TableCell>
            </TableRow>
        ))}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    <PaginationIconsAndText />

    </Card>

    </div>
</div>
);
}


export default OnlineExam;


