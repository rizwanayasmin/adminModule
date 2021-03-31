import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faUserPlus } from "@fortawesome/pro-light-svg-icons";
import {
  Container,
  // Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Button,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import StarRatings from "react-star-ratings";
import classnames from "classnames";
import CustomTabs from "../customtabs/customtabs";
import HSBar from "react-horizontal-stacked-bar-chart";
import { getTeacherFullInfo } from "../../actions/teacherActions";
import Card from '@material-ui/core/Card';
import './teacherProfile.css'


const TeacherProfile = ({ match }) => {
  const [teacherInfo, setTeacherInfo] = useState({});

  useEffect(() => {
    getTeacherFullInfo(match.params.id, setTeacherInfo);
    return () => {};
  }, []);

  return (
    <div className="container-fluid">
      <Row>
        <Col sm="4">
          {/* <div> */}
           {/* className="p-3 card-box" */}
           
            
            <div style={{width:'85%',marginLeft:'20px'}}>
              <Card>
              <img
              src="https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max"
              // style={{ width: 100, height: 100 }}
              style={{width:'30%',height:"115px",marginTop:'10%',marginBottom:'5%'}}
              className="d-block mx-auto img-fluid profile-image"
            />
            <div className='card_main_header_div'>
              <Row>
                <Col sm='6'>
                  <div className='card_col_one'>
                      <div><label className='card_col_lable_title'>Employee Name</label></div>
                      <div><label className='card_col_lable_title'>Employee Id</label></div>
                      <div><label className='card_col_lable_title'>Branch</label></div>
                      <div><label className='card_col_lable_title'>Department</label></div>
                      <div><label className='card_col_lable_title'>Designation</label></div>
                      <div><label className='card_col_lable_title'>CTC</label></div>
                      <div><label className='card_col_lable_title'>Subject Major</label></div>
                      <div><label className='card_col_lable_title'>Joining Date</label></div>
                      <div><label className='card_col_lable_title'>Everwin experience</label></div>
                      <div><label className='card_col_lable_title'>Total Experience</label></div>
                      <div><label className='card_col_lable_title'>Reporting To</label></div>
                  </div>
               

                </Col>
                <Col sm='6'>
                  <div className='card_col_one'>
                    <div>
                      <label className='card_col_lable_answer'>
                        {teacherInfo.first_name
                            ? teacherInfo.first_name + " " + teacherInfo.last_name
                            : "-"}
                      </label>
                    </div>
                    <div>
                      <label className='card_col_lable_answer'>
                        {teacherInfo.employee_number
                        ? teacherInfo.employee_number
                        : "-"}
                      </label>
                    </div>
                    <div>
                      <label className='card_col_lable_answer'>
                        {teacherInfo.institute ? teacherInfo.institute : "-"}
                      </label>
                    </div>
                    <div>
                      <label className='card_col_lable_answer'>
                       {teacherInfo.designation ? teacherInfo.designation : "-"}
                      </label> 
                    </div>
                    <div>
                      <label className='card_col_lable_answer'>
                       {teacherInfo.designation_id
                        ? teacherInfo.designation_id
                        : "-"}
                        
                        </label>
                      </div>
                    <div>
                      <label className='card_col_lable_answer'>
                      {teacherInfo.salary
                        ? teacherInfo.salary.ctc
                          ? teacherInfo.salary.ctc
                          : "-"
                        : "-"}
                        </label>
                      </div>
                    <div>
                    <label className='card_col_lable_answer'>
                      {teacherInfo.majorSubject
                        ? teacherInfo.majorSubject
                        : "-"}
                      </label>
                    </div>
                    <div>
                    <label className='card_col_lable_answer'>
                      {teacherInfo.joining_date
                        ? teacherInfo.joining_date
                        : "-"}
                      </label>
                    </div>
                    <div> 
                    <label className='card_col_lable_answer'>
                      {teacherInfo.experience
                        ? teacherInfo.experience.everwin
                          ? teacherInfo.experience.everwin
                          : "-"
                        : "-"}
                      </label>
                    </div>
                    <div>
                    <label className='card_col_lable_answer'>
                      {teacherInfo.experience
                        ? teacherInfo.experience.total
                          ? teacherInfo.experience.total
                          : "-"
                        : "-"}
                      </label>
                    </div>
                    <div>
                    <label className='card_col_lable_answer'>
                       {teacherInfo.reportingAuthority
                        ? teacherInfo.reportingAuthority.concatString
                          ? teacherInfo.reportingAuthority.concatString
                          : "-"
                        : "-"}
                    </label>
                    </div>
                  
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
            {/* <div className="table-responsive mt-2">
              <Table borderless className="table-borderless">
                <tbody> */}
                  {/* <tr>
                    <td className="plefttext">Employee Name</td>
                    <td className="prighttext">
                      {teacherInfo.first_name
                        ? teacherInfo.first_name + " " + teacherInfo.last_name
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Employee Id</td>
                    <td className="prighttext">
                      {teacherInfo.employee_number
                        ? teacherInfo.employee_number
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Branch</td>
                    <td className="prighttext">
                      {teacherInfo.institute ? teacherInfo.institute : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Department</td>
                    <td className="prighttext">
                      {teacherInfo.designation ? teacherInfo.designation : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Designation</td>
                    <td className="prighttext">
                      {teacherInfo.designation_id
                        ? teacherInfo.designation_id
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">CTC</td>
                    <td className="prighttext">
                      {teacherInfo.salary
                        ? teacherInfo.salary.ctc
                          ? teacherInfo.salary.ctc
                          : "-"
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Subject Major</td>
                    <td className="prighttext">
                      {teacherInfo.majorSubject
                        ? teacherInfo.majorSubject
                        : "-"}
                    </td>
                  </tr> */}

                  {/* <tr>
                    <td className="plefttext">Joining Date</td>
                    <td className="prighttext">
                      {teacherInfo.joining_date
                        ? teacherInfo.joining_date
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Everwin experience</td>
                    <td className="prighttext">
                      {teacherInfo.experience
                        ? teacherInfo.experience.everwin
                          ? teacherInfo.experience.everwin
                          : "-"
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Total Experience</td>
                    <td className="prighttext">
                      {teacherInfo.experience
                        ? teacherInfo.experience.total
                          ? teacherInfo.experience.total
                          : "-"
                        : "-"}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="plefttext">Reporting To</td>
                    <td className="prighttext">
                      {teacherInfo.reportingAuthority
                        ? teacherInfo.reportingAuthority.concatString
                          ? teacherInfo.reportingAuthority.concatString
                          : "-"
                        : "-"}
                    </td>
                  </tr> */}
                {/* </tbody>
              </Table>
            </div> */}
          {/* </div> */}
        </Col>

        <Col sm="8">
          <Row className="card-box m-1">
            <Col sm="12">
              <div style={{position:'relative',right:'26px'}}>
                <HSBar
                  height={45}
                  // style={{borderRadius:'4px'}}
                  showTextIn
                  data={[
                    {
                      name: "Present",
                      value: 80,
                      description: "30%",
                      color: "green",
                    },
                    {
                      name: "Absent",
                      value: 200,
                      description: "70%",
                      color: "red",
                    },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <Row>
            {teacherInfo.id ? (
              <CustomTabs
                teacherInfo={teacherInfo}
                id={match.params.id}
              ></CustomTabs>
            ) : null}
            {/* <CustomTabs teacherinfo={teacherInfo}></CustomTabs> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TeacherProfile;
