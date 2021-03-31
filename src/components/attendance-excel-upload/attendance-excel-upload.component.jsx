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
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import ExportCSV from "../export-csv/export-csv.component";
import Select from "react-select";
import { getOnlyInstituteNames } from "../../actions/instituteActions";
import {
  getAttendanceTeacherLists,
  putTeacherAttendanceFromExcel,
} from "../../actions/teacherActions";
import exportToCSV from "./attendance.utility";
import './attendenceUpload.css'
import Modal from '@material-ui/core/Modal';
// import CreateAttendence from '../Create Attendence/CreateAttendence'
// import CreateAttendenceModal from '../popupModels/modelCreateAttendence.component'
import CreateAttendenceModal from '../popupModels/modelCreateAttendence'


const AttendanceExcel = () => {
  const [instituteLists, setInstituteLists] = useState([]);
  const [lists, setLists] = useState(null);
  const [departmentLists, setDeptLists] = useState(null);
  const [roleLists, setRoleLists] = useState([]);
  const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [modal, setModal] = useState(false);


  const [isDaily, setIsDaily] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [attendance, setAttendance] = useState({
    dayType: "Daily",
    period: {},
  });
  const [fileInput, setFileInput] = useState({});
// create attendence
const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


const toggle = () => setModal(!modal);

  useEffect(() => {
    getOnlyInstituteNames(setInstituteLists);
    return () => {};
  }, []);

  const handleDownload = () => {
    const data = generatorList();
    if (!data) {
      return;
    }
    exportToCSV(data, "attendance_report");
  };

  const departmentSeparator = () => {
    let result = {};
    let departmentListArr = [];

    departmentLists.forEach((dept, index) => {
      result = { ...result, [dept.value]: { teachers: [] } };
      departmentListArr.push(dept.value);
    });

    lists.forEach((data, index) => {
      if (departmentListArr.includes(data.department)) {
        result = {
          ...result,
          [data.department]: {
            teachers: [...result[data.department].teachers, ...data.teachers],
          },
        };
      }
    });

    // console.log(result);
    return result;
  };

  const roleListSeparator = (department = null) => {
    let result = {};
    let roles = [];

    roleLists.forEach((role, index) => {
      result = { ...result, [role.value]: { teachers: [] } };

      roles.push(role.value);
    });

    // console.log(lists.filter((fil) => fil.department === department));
    lists
      .filter((fil) => (!department ? true : fil.department === department))
      .forEach((data) => {
        if (roles.includes(data.role)) {
          result = {
            ...result,
            [data.role]: {
              teachers: [...result[data.role].teachers, ...data.teachers],
            },
          };
        }
      });

    // console.log(result);
    return result &&
      Object.keys(result).length === 0 &&
      result.constructor === Object
      ? null
      : result;
  };

  const generatorList = () => {
    const a = dateObjGenerator();
    console.log(a);
    if (!a) {
      return null;
    } else if (!departmentLists || departmentLists.length === 0) {
      if (!roleLists || roleLists.length === 0) {
        // Only Institute ie. combime all
        console.log("Only institute nothing more");
        let instituteTeachers = [];
        lists.forEach((l, index) => {
          instituteTeachers = [...instituteTeachers, ...l.teachers];
        });

        return [
          {
            data: instituteTeachers.map((teacher, index) => {
              return {
                "S.No.": index + 1,
                "Employee Id": teacher.employee_number,
                "Employee name": teacher.first_name + " " + teacher.last_name,
                ...a,
              };
            }),
            sheetName: instituteSelect,
          },
        ];
      } else {
        console.log(
          "Separte sheets with role names for a institute (All department)"
        );

        const roleObj = roleListSeparator();
        // console.log({ roleObj });
        if (!roleObj) {
          alert("No data found");
          return null;
        }

        let result = [];

        for (const role in roleObj) {
          result = [
            ...result,
            {
              sheetName: role,
              data: roleObj[role].teachers.map((teacher, index) => {
                return {
                  "S.No.": index + 1,
                  "Employee Id": teacher.employee_number,
                  "Employee name": teacher.first_name + " " + teacher.last_name,
                  ...a,
                };
              }),
            },
          ];
        }

        console.log(result);
        return result;

        // Create separate sheets with role names Eg: Teaching, Non-Teaching
        // Join all department based on role
      }
    } else if (departmentLists && departmentLists.length === 1) {
      if (!roleLists || roleLists.length === 0) {
        // Only get particular department
        console.log("Only particular department nothing more");
        const deptObj = departmentSeparator(departmentLists[0].value);

        let result = [];

        for (const dept in deptObj) {
          result = [
            ...result,
            {
              sheetName: dept,
              data: deptObj[dept].teachers.map((teacher, index) => {
                return {
                  "S.No.": index + 1,
                  "Employee Id": teacher.employee_number,
                  "Employee name": teacher.first_name + " " + teacher.last_name,
                  ...a,
                };
              }),
            },
          ];
        }

        console.log(result);
        return result;
      } else {
        console.log(
          "Separte sheets with role names for a institute (particular department)"
        );

        const roleObj = roleListSeparator(departmentLists[0].value);
        // console.log({ roleObj });
        if (!roleObj) {
          alert("No data found");
          return null;
        }

        let result = [];

        for (const role in roleObj) {
          result = [
            ...result,
            {
              sheetName: role,
              data: roleObj[role].teachers.map((teacher, index) => {
                return {
                  "S.No.": index + 1,
                  "Employee Id": teacher.employee_number,
                  "Employee name": teacher.first_name + " " + teacher.last_name,
                  ...a,
                };
              }),
            },
          ];
        }

        console.log(result);
        return result;

        // Create separate sheets with role names Eg: Teaching, Non-Teaching for a particular role
      }
    } else if (departmentLists && departmentLists.length > 1) {
      console.log("Separate sheets for each departments");
      const deptObj = departmentSeparator();

      let result = [];

      for (const dept in deptObj) {
        result = [
          ...result,
          {
            sheetName: dept,
            data: deptObj[dept].teachers.map((teacher, index) => {
              return {
                "S.No.": index + 1,
                "Employee Id": teacher.employee_number,
                "Employee name": teacher.first_name + " " + teacher.last_name,
                ...a,
              };
            }),
          },
        ];
      }

      console.log(result);
      return result;

      // helperFunction();
      // Create separate sheets with separate departments
    }
  };

  // const helperFunction = () => {
  //   const result = [];
  //   const departmentWiseList = [];

  //   console.log(departmentWiseList);
  // };

  const dateObjGenerator = () => {
    // if()
    if (attendance.dayType === "Daily" && !attendance.period.fromDate) {
      alert("Please select a date");
      return null;
    } else if (
      attendance.dayType === "Monthly" &&
      !(attendance.period.fromDate && attendance.period.toDate)
    ) {
      alert("Please select from and to date from date picker");
      return null;
    } else {
      if (attendance.dayType === "Daily") {
        return {
          [`${attendance.period.fromDate} - Present`]: 1,
          [`${attendance.period.fromDate} - Absent`]: 0,
          [`${attendance.period.fromDate} - Late`]: 0,
        };
      } else if (attendance.dayType === "Monthly") {
        const dateArray = getDatesBetweenDates(
          attendance.period.fromDate,
          attendance.period.toDate
        );
        let obj = {};

        dateArray.forEach((arr, index) => {
          obj = {
            ...obj,
            ...{
              [`${arr} - Present`]: 1,
              [`${arr} - Absent`]: 0,
              [`${arr} - Late`]: 0,
            },
          };
        });

        return obj;
      }
    }
  };

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        let result = [];
        let i = 0;
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        while (wb.SheetNames[i]) {
          const wsname = wb.SheetNames[i];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          result.push(data);

          i++;
        }
        // New code starts
        resolve(result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    //  Decoding
    // 1. Present
    //  0. Nothing
    // -1: Holiday
    promise
      .then((dataa) => {
        // console.log(dataa);
        let result = {};
        for (let i = 0; i < dataa.length; i++) {
          for (let j = 0; j < dataa[i].length; j++) {
            const keys = Object.keys(dataa[i][j]);

            result = { ...result, [dataa[i][j][keys[1]]]: {} };

            for (let k = 3; k < keys.length; k++) {
              if (
                keys[k].split(" - ")[1] === "Present" &&
                dataa[i][j][keys[k]] === 1
              ) {
                result = {
                  ...result,
                  [dataa[i][j][keys[1]]]: {
                    ...result[dataa[i][j][keys[1]]],
                    [keys[k].split(" - ")[0].split("-")[1]]: {
                      ...result[dataa[i][j][keys[1]]][
                        keys[k].split(" - ")[0].split("-")[1]
                      ],
                      [keys[k].split(" - ")[0]]: 1,
                    },
                  },
                };
              } else if (
                keys[k].split(" - ")[1] === "Present" &&
                dataa[i][j][keys[k]] === 0.5
              ) {
                result = {
                  ...result,
                  [dataa[i][j][keys[1]]]: {
                    ...result[dataa[i][j][keys[1]]],
                    [keys[k].split(" - ")[0].split("-")[1]]: {
                      ...result[dataa[i][j][keys[1]]][
                        keys[k].split(" - ")[0].split("-")[1]
                      ],
                      [keys[k].split(" - ")[0]]: 0.5,
                    },
                  },
                };
              } else if (
                keys[k].split(" - ")[1] === "Absent" &&
                dataa[i][j][keys[k]] === 1
              ) {
                result = {
                  ...result,
                  [dataa[i][j][keys[1]]]: {
                    ...result[dataa[i][j][keys[1]]],
                    [keys[k].split(" - ")[0].split("-")[1]]: {
                      ...result[dataa[i][j][keys[1]]][
                        keys[k].split(" - ")[0].split("-")[1]
                      ],
                      [keys[k].split(" - ")[0]]: -1,
                    },
                  },
                };
              } else if (
                keys[k].split(" - ")[1] === "Late" &&
                dataa[i][j][keys[k]] === 1
              ) {
                result = {
                  ...result,
                  [dataa[i][j][keys[1]]]: {
                    ...result[dataa[i][j][keys[1]]],
                    [keys[k].split(" - ")[0].split("-")[1]]: {
                      ...result[dataa[i][j][keys[1]]][
                        keys[k].split(" - ")[0].split("-")[1]
                      ],
                      [keys[k].split(" - ")[0]]: 2,
                    },
                  },
                };
              } else if (dataa[i][j][keys[k]] === -1) {
                result = {
                  ...result,
                  [dataa[i][j][keys[1]]]: {
                    ...result[dataa[i][j][keys[1]]],
                    [keys[k].split(" - ")[0].split("-")[1]]: {
                      ...result[dataa[i][j][keys[1]]][
                        keys[k].split(" - ")[0].split("-")[1]
                      ],
                      [keys[k].split(" - ")[0]]: 0,
                    },
                  },
                };
              }
            }
          }
        }
        putTeacherAttendanceFromExcel(result);
        // setTableData(data);
        alert("Upload successfull");
      })
      .catch((err) => {
        alert("Error occured during upload, please try again");
        console.log(err);
      });
  };

  const handleInstiuteChange = (selector) => {
    setInstituteSelect(selector.value);
    if (selector.value !== "--SELECT--") {
      getAttendanceTeacherLists(selector.value, setLists);
    } else {
      setLists(null);
    }
  };

  const handleDepartmentSelect = (selector) => {
    console.log(selector);
    setDeptLists(selector);
  };

  const handleRoleSelect = (selector) => {
    setRoleLists(selector);
  };

  const handleSelect = (select) => {
    const { label, value } = select;
    if (value === "Daily") {
      setIsDaily(true);
      setAttendance({ ...attendance, dayType: "Daily" });
    } else {
      setIsDaily(false);
      setAttendance({ ...attendance, dayType: "Monthly" });
    }
  };

  const handleDate = (e) => {
    const { name, value } = e.target;
    console.log("Date ", name, value);
    setAttendance({
      ...attendance,
      period: { ...attendance.period, [name]: value },
    });
  };

  const handleUpload = async () => {
    await readExcel(fileInput);

    setFileInput({});
  };

  const getDatesBetweenDates = (startDate, endDate) => {
    console.log(startDate, endDate);

    let dates = [];
    //to avoid modifying the original date
    const theDate = new Date(startDate);
    // console.log(theDate);
    while (theDate <= new Date(endDate)) {
      // console.log(theDate);
      dates = [...dates, new Date(theDate).toISOString().split("T")[0]];
      theDate.setDate(theDate.getDate() + 1);
    }
    // console.log(dates);
    return dates;
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Attendance upload</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="6">
              <Label for="branchSelect">Select institute</Label>
              <Select
                id="branchSelect"
                options={instituteLists.map((ins, index) => {
                  return { value: ins.instituteId, label: ins.instituteId };
                })}
                value={{ value: instituteSelect, label: instituteSelect }}
                onChange={handleInstiuteChange}
              ></Select>
            </Col>
           
          </Row>
          {lists ? (
            <div>
              <Row>
                <Col sm="6">
                  <Label for="departmentSelect">Select department</Label>
                  <Select
                    id="departmentSelect"
                    options={lists.map((list, index) => {
                      return { value: list.department, label: list.department };
                    })}
                    value={departmentLists}
                    onChange={handleDepartmentSelect}
                    isMulti={true}
                  ></Select>
                </Col>
               
              </Row>
              {/* {departmentLists.length === 0 ||  */}
              {!departmentLists || [0, 1].includes(departmentLists.length) ? (
                <Row>
                  <Col sm="6">
                    <Label for="roleSelect">Select role</Label>
                    <Select
                      id="roleSelect"
                      options={[
                        ...new Set(
                          lists.map((ls, index) => {
                            return ls.role;
                          })
                        ),
                      ].map((l) => {
                        return { value: l, label: l };
                      })}
                      value={roleLists}
                      onChange={handleRoleSelect}
                      isMulti={true}
                    ></Select>
                  </Col>
                
                </Row>
              ) : null}
              {/* <Row>
                
              </Row> */}
              <Row>
                <Col sm="6">
                  <Label for="dayType">Upload type</Label>
                  <Select
                    name="dayType"
                    id="dayType"
                    onChange={handleSelect}
                    options={[
                      { value: "Daily", label: "Daily" },
                      { value: "Monthly", label: "Monthly" },
                    ]}
                    value={{
                      value: attendance.dayType,
                      label: attendance.dayType,
                    }}
                  ></Select>
                </Col>
               
              </Row>
             
              {isDaily ? (
                <Row>
                  <Col sm="6">
                    <Label for="fromDate">Date</Label>
                    <Input
                      id="fromDate"
                      name="fromDate"
                      type="date"
                      onChange={handleDate}
                    />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col sm="6">
                    <Label htmlFor="fromDate">From</Label>
                    <Input
                      id="fromDate"
                      name="fromDate"
                      type="date"
                      onChange={handleDate}
                    />
                  </Col>
                  <Col sm="6">
                    <Label htmlFor="toDate">To</Label>
                    <Input
                      id="toDate"
                      name="toDate"
                      type="date"
                      onChange={handleDate}
                    />
                  </Col>
                </Row>
              )}

              <div>
                <h1 style={{ color: "red" }}>{fileInput.name}</h1>
              </div>
              <Row>
                <Col sm="6">
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFileInput(file);
                      e.target.value = null;
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Button color="success" onClick={() => handleUpload()} style={{marginTop:'12px'}}>
                    Upload
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col sm="6">
                  Download sample excel document here
                  <Button color='warning' style={{marginLeft:'12px'}}
                    onClick={() => {
                      handleDownload();
                    }}
                  >
                    Sample download
                  </Button>
                  {/* <ExportCSV
                    csvData={tableDat}
                    fileName="data"
                    buttonName="Sample Download"
                  /> */}
                </Col>
                
              </Row>
             
            </div>
          ) : null}

              
        </CardBody>
      </Card>
  
    {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       <CreateAttendence />
      </Modal> */}
  
     
    </div>
  );
};

export default AttendanceExcel;
