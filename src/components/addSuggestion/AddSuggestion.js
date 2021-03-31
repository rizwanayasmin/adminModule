import React, {useState} from 'react'
import './AddSuggestion.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import Radio from '@material-ui/core/Radio';
import Divider from '@material-ui/core/Divider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const AddSuggestion =()=>{

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
   

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  

    return(
        <div className="parent_add_leave_header_div">
            <Card>
            <div className='parent_add_leave_head_div'>
                <label className='parent_add_leave_head_title'>We Appreciate Your Suggestion and Feedback
                </label>
            </div>
            <Divider />
            <div className='parent_add_leave_radio_div'>
            <div><label className='parent_add_leave_radio_title'>Select your Suggestion type</label></div>
            <div>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <label>Academic</label>
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />
                 <label>Infrastructure</label>
                <Radio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                />
                 <label> Transport</label>
                <Radio
                    checked={selectedValue === 'd'}
                    onChange={handleChange}
                    value="d"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                 <label>Other</label>
            </div>
            </div>
            <div  className='parent_add_leave_section_div'>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                    <div className='parent_add_leave_section_date'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Admission Date"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            </MuiPickersUtilsProvider>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <div className='parent_add_leave_section_date'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Admission Date"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            </MuiPickersUtilsProvider>
                        </div>
                    </Grid>
                </Grid>
                <div className='parent_add_leave_sub_section'><TextField id="standard-basic" label="Subject"  /></div>
                <div className='parent_add_leave_sub_section'>
                    <div className='parent_add_leave_sub_section_label_div'>
                        <label className='parent_add_leave_sub_section_label'>Reason</label>
                    </div>
                    <div className='parent_add_leave_sub_section_textarea'>
                        <TextareaAutosize 
                                aria-label="minimum height"
                                rowsMin={4} 
                                style={{width:'95%'}} />
                    </div>
                </div>
                <div className="parent_add_leave_footer_div">
                        <Button
                                variant="contained"
                                className="parent_add_leave_footer_btn"
                                startIcon={<NearMeOutlinedIcon>Submit</NearMeOutlinedIcon>}
                                // to='/leaverequest'
                            >
                                Submit
                        </Button>
                </div>

            </div>
            </Card>
           
        </div>
    )
}
export default AddSuggestion