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
  payrollSave,
  putTeacherAttendanceFromExcel,
  samplePayrollTeacher,
} from "../../actions/teacherActions";
import exportToCSV from "../attendance-excel-upload/attendance.utility";
import {
  MONTH_OPTIONS,
  monthStringToNumStringFunction,
  YEAR_OPTIONS,
} from "./month.utility";
import PayslipGeneratorTable from "./payslip-generator-table.component";
import { Progress } from 'reactstrap';
import { Search } from "react-feather";
import "./payslip.css"


const PayslipGeneratorExcel = () => {
  const [instituteLists, setInstituteLists] = useState([]);
  const [monthSelect, setMonthSelect] = useState("--SELECT--");
  const [yearSelect, setYearSelect] = useState("--SELECT--");
  const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [fileInput, setFileInput] = useState({});
  const [search, setSearch] = useState("");


  useEffect(() => {
    getOnlyInstituteNames(setInstituteLists);
    setYearSelect(String(new Date().getFullYear()));
    return () => {};
  }, []);

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

    promise
      .then((dataa) => {
        // console.log(
        //   dataa[0],
        //   monthSelect,
        //   instituteSelect,
        //   new Date().getFullYear()
        // );

        if (dataa[0].length > 0) {
          payrollSave(dataa[0], instituteSelect, yearSelect, monthSelect);
          alert("File upload successful");
        } else {
          alert("Empty file can't be uploaded");
        }
      })
      .catch((err) => {
        alert("Error occured during upload, please try again");
        console.log(err);
      });
  };

  const handleInstiuteChange = (selector) => {
    setInstituteSelect(selector.value);
  };

  const handleUpload = async () => {
    // console.log(fileInput);
    await readExcel(fileInput);
    // fileInput.target.value = null;
    setFileInput({});
    setInstituteSelect("--SELECT--");
    setMonthSelect("--SELECT--");
  };

  const handleMonthSelect = (select) => {
    setMonthSelect(select.value);
  };

  const handleYearSelect = (select) => {
    setYearSelect(select.value);
  };

  const handleSampleDownload = () => {
    if (
      monthSelect === "--SELECT--" ||
      instituteSelect === "--SELECT--" ||
      yearSelect === "--SELECT--"
    ) {
      alert("Please select the fields with **");
      return;
    }
    generateSamplePayrollAndDownload(instituteSelect, monthSelect, yearSelect);
  };

  const generateSamplePayrollAndDownload = (
    instituteName,
    monthName,
    yearSelect
  ) => {
    let monthNumString = monthStringToNumStringFunction(monthName);
    samplePayrollTeacher(instituteName, monthNumString, yearSelect);
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Payslip generator</CardTitle>          
        </CardHeader>
        <CardBody>
        <div>
              <Card>
              
              
              <Row>
                <Col>
                <div>
      
      {/* <div className="text-center">Multiple bars</div> */}
      <Progress multi className="progress_change">
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
    </div>
                </Col>
              </Row>
              

</Card>            </div>


              <Row>
              {/* <Col >
                  <div >
                    <Select
                                name="month"
                                id="month"
                                options={[
                                { value: "January", label: "January" },
                                { value: "Febrary", label: "Febrary" },
                                { value: "March", label: "March" },
                                ]}
                            ></Select>
                  </div>
                </Col> */}
                

                <Col >
              {/* <p style={{ color: "red" }}>**</p> */}
              <Label for="branchSelect">Select institute</Label>
              <Select
                id="branchSelect"
                name="branchSelect"
                options={instituteLists.map((ins, index) => {
                  return { value: ins.instituteId, label: ins.instituteId };
                })}
                value={{ value: instituteSelect, label: instituteSelect }}
                onChange={handleInstiuteChange}
                required
              ></Select>
            </Col>


            
            <Col >
              <Label for="yearSelect">Select Year</Label>
              <Select
                id="yearSelect"
                name="yearSelect"
                options={YEAR_OPTIONS}
                value={{ value: yearSelect, label: yearSelect }}
                onChange={handleYearSelect}
                required
              ></Select>
            </Col>
            <Col >
              <Label for="monthSelect">Select month</Label>
              <Select
                id="monthSelect"
                name="monthSelect"
                options={MONTH_OPTIONS}
                value={{ value: monthSelect, label: monthSelect }}
                onChange={handleMonthSelect}
                required
              ></Select>
            </Col>

            <Col style={{marginTop:'19px',marginBottom:'19px'}}>
                  <div className="has-icon-left position-relative">
                    <Input
                      type="search"
                      name="search"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="form-control-position">
                      <Search size={15} />
                    </div>
                  </div>
                </Col>




                <Col style={{marginTop:'19px',marginBottom:'19px'}}>  
                <div>
                  <Button color='warning'>Generate</Button>
                </div>
                </Col>
                {/* <Col >
                <div>
                  <Button color='success'>Download</Button>
                </div>
                </Col> */}
              </Row>
          
          
          {instituteSelect !== "--SELECT--" &&
            monthSelect !== "--SELECT--" &&
            yearSelect !== "--SELECT--" && (
              <div>
                <Row>
                  <Button
                    type="button"
                    color="danger"
                    onClick={handleSampleDownload}
                  >
                    Download sample
                  </Button>
                </Row>
                <PayslipGeneratorTable
                  {...{ instituteSelect, monthSelect, yearSelect }}
                />
                <Row>
                  <Col sm="6">
                    <Label style={{ color: "red" }}>
                      Upload payroll pay structure through excel document
                    </Label>
                    <Input
                      type="file"
                      onChange={
                        // handleFileChange
                        (e) => {
                          const file = e.target.files[0];
                          setFileInput(file);
                          e.target.value = null;
                        }
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Button color="success" onClick={() => handleUpload()}>
                      Upload
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
        </CardBody>
      </Card>
    </div>
  );
};

export default PayslipGeneratorExcel;
