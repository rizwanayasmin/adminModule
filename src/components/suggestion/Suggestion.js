import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet } from "@fortawesome/pro-solid-svg-icons";
import './Suggestion.css'
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
faPlus,
faEdit,
faTrashAlt,
faLocationArrow,
faUserVisor,
} from "@fortawesome/pro-duotone-svg-icons";
import {
Row,
Col,
Form,
FormGroup,
Label,
Input,
FormText,

} from "reactstrap";
import { Doughnut, Line } from "react-chartjs-2";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import  learn from '../../images/lessons.jpg'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'



import MenuItem from '@material-ui/core/MenuItem';

//table

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

//antd
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
// import { Input} from 'antd';
import Tooltip from '@material-ui/core/Tooltip'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import Divider from '@material-ui/core/Divider';
import { AutoComplete } from 'antd';
import AddSuggestion from "../addSuggestion/AddSuggestion";
import Avatar from '@material-ui/core/Avatar';
import profile from '../../images/profile.jpg'
import suggestion from "../../images/chat_bg.svg"

const { Option } = Select;
const { Panel } = Collapse;
const { Search } = Input;

const options = [
  { value: 't2021feb205' },
  { value: 't2021feb206' },
  { value: 't2021feb207' },
];
const genExtra = () => (
    <div className='parent_lesson_collapse_header_title_div'>
    <label>Subject</label>
    </div>

  );
  // const onSearch = value => console.log(value);
  //table 
  const useStyles = makeStyles((theme) => ({
    
    medium: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    
  }));



toast.configure()

const  Discipline =()=> {

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
    const [open ,setOpen] = useState(false);

//forgot model
    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose= () =>{
        setOpen(false);
    }

    const handleChangeRow = (event) => {
      setAge(event.target.value);
    };


    
       
      function createData(date, subject, topic, chapter, assignment,comments,remarks) {
        return {date, subject, topic, chapter, assignment,comments,remarks};
      }
      
      const rows = [
        createData(1, 'Soccar','Inter School','First Price ','good',),
        createData(2, 'Kabbadi','Intra School','First Price','good',),
        createData(3,'Basketball', 'Sports Day','First Price','good',),

      ];


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
<Card>


  <div className="container_parent">
  <Grid container>
        <Grid item xs={12} lg={4}>
            <div className="chat_grid_one">
              <div className='chat_grid_search_avatar'>
              <div className='avatar_chat'>
              <Avatar alt="profile" src={profile} /> 
              </div>
            
            <div className='chat_suggestion_search_div'>
           
              <AutoComplete
                
                  options={options}
                  placeholder="search by Ticket Number"
                  filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                
                />
                 <SearchIcon />
               
            </div>
              </div>
          
            <div className='chat_suggestion_divider'>
            <Divider />
            </div>
            <div className='chat_suggestion_header_div'>
              {/* <Card> */}
               <div className='chat_suggestion_issue_main_div'>  
                 <h5 className='chat_suggestion_issue_header_title'>Suggestion</h5>
                 <div className='chat_suggestion_btn_header_div'>
                 <Button variant='outlined' onClick={handleOpen}>
                 <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: 20, marginRight:'8px'}}
                    />
                   Add</Button>
                 </div>
                
               </div>
                {/* one */}
                <div className='chat_suggestion_section_div'>
                 
                    <div className='chat_suggestion_sub_grid_two'>
                        <div className='discipline_sub_grid_two_body'>
                        <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div>
                          <div><label className='chat_suggestion_sub_grid_two_body_date'>feb 19</label></div>
                        </div>
                      
                        <div><label className='chat_suggestion_sub_grid_two_body_description'>Bus is not coming to my stop regularly</label></div>
                      </div>
                   
                </div>
                {/* two */}
                <div className='chat_suggestion_section_div'>
                 
                 <div className='chat_suggestion_sub_grid_two'>
                     <div className='discipline_sub_grid_two_body'>
                     <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div>
                       <div><label className='chat_suggestion_sub_grid_two_body_date'>feb 19</label></div>
                     </div>
                     {/* <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div> */}
                     <div><label className='chat_suggestion_sub_grid_two_body_description'>Bus is not coming to my stop regularly</label></div>
                   </div>
                
             </div>
                {/* three */}
                <div className='chat_suggestion_section_div'>
                 
                 <div className='chat_suggestion_sub_grid_two'>
                     <div className='discipline_sub_grid_two_body'>
                     <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div>
                       <div><label className='chat_suggestion_sub_grid_two_body_date'>feb 19</label></div>
                     </div>
                     {/* <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div> */}
                     <div><label className='chat_suggestion_sub_grid_two_body_description'>Bus is not coming to my stop regularly</label></div>
                   </div>
                
             </div>
                {/* four */}
                <div className='chat_suggestion_section_div'>
                 
                 <div className='chat_suggestion_sub_grid_two'>
                     <div className='discipline_sub_grid_two_body'>
                     <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div>
                       <div><label className='chat_suggestion_sub_grid_two_body_date'>feb 19</label></div>
                     </div>
                     {/* <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div> */}
                     <div><label className='chat_suggestion_sub_grid_two_body_description'>Bus is not coming to my stop regularly</label></div>
                   </div>
                
             </div>
                {/* five */}
                <div className='chat_suggestion_section_div'>
                 
                 <div className='chat_suggestion_sub_grid_two'>
                     <div className='discipline_sub_grid_two_body'>
                     <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div>
                       <div><label className='chat_suggestion_sub_grid_two_body_date'>feb 19</label></div>
                     </div>
                     {/* <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div> */}
                     <div><label className='chat_suggestion_sub_grid_two_body_description'>Bus is not coming to my stop regularly</label></div>
                   </div>
                
             </div>
                {/* six */}
                <div className='chat_suggestion_section_div'>
                 
                 <div className='chat_suggestion_sub_grid_two'>
                     <div className='discipline_sub_grid_two_body'>
                     <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div>
                       <div><label className='chat_suggestion_sub_grid_two_body_date'>feb 19</label></div>
                     </div>
                     {/* <div><label className='chat_suggestion_sub_grid_two_body_subject'>Transport</label></div> */}
                     <div><label className='chat_suggestion_sub_grid_two_body_description'>Bus is not coming to my stop regularly</label></div>
                   </div>
                
             </div>
                
              {/* </Card> */}
            </div>
       

            </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className='chat_grid_two' style={{backgroundImage:`url(${suggestion})`, backgroundColor: '#f2f0f7',width:'100%'}}>
            <header>
              <div className='chat_suggestion_grid_two_header_card_div'>
              <Card>
              <div className='chat_suggestion_grid_two_header_div'>
                <div className='chat_suggestion_grid_two_header_subject_div'>
                  {/* <Avatar alt="profile" src={profile} /> */}
                  <label className='chat_suggestion_grid_two_header_title'>Subject</label>
                </div>
                <div>
                {/* <FontAwesomeIcon
                    icon={faEdit}
                    style={{ fontSize: 20,marginRight: '6px',color: 'darkslateblue' }}
                    /> */}
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ fontSize: 20,marginRight: '6px', color:'red' }}
                    />
                </div>
              
              </div>
              </Card>
              </div>
            </header>
            <section>
              {/* one */}
              <div>
                <div className='chat_section_sender'>
                <label className='chat_section_sender_label'>sender</label>
                <Avatar alt="profile" src={profile} className={classes.small}/>
                </div>
                <div className='chat_section_receiver'> 
                <Avatar alt="profile" src={profile} className={classes.small}/>
                <label className='chat_section_receiver_label'>receiver</label>
                </div>
              </div>
            {/* two */}
            <div>
                <div className='chat_section_sender'>
                <label className='chat_section_sender_label'>sender</label>
                <Avatar alt="profile" src={profile} className={classes.small}/>
                </div>
                <div className='chat_section_receiver'> 
                <Avatar alt="profile" src={profile} className={classes.small}/>
                <label className='chat_section_receiver_label'>receiver </label>
                </div>
              </div>
            
             
            </section>
            <footer className='chat_footer'>
              <div className='chat_footer_card_div'>
                <Card>
                  <div className='chat_footer_alignment'>
                    <div className='chat_footer_div'>
                  <Input type="text"  style={{ border:"none"}}/>
                  </div>
                  <div className='chat_footer_btn_div'>
                    <Button>Send
                    <FontAwesomeIcon
                    icon={faLocationArrow}
                    style={{ fontSize: 20}}
                    />
                    </Button>
                  </div>
                  </div>
                </Card>
              </div>
              
             
            </footer>
          </div>
          
        </Grid>
  </Grid>
  </div>  
  

            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <AddSuggestion />
            </Modal> 
</div>
);
}


export default Discipline;