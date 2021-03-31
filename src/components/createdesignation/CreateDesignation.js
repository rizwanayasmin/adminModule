import React, { useEffect, useState } from "react";

import Model from "../popupModels/modelDesignation.component";
import ExpandableTable from "../expandableTables/expDesignation.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
} from "reactstrap";
import {
  faAddressBook,
  faPencil,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { Search } from "react-feather";
import DataTable from "react-data-table-component";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import {
  listDesignations,
  saveDesignation,
  deleteDesignations,
} from "../../actions/designationActions";
import { useDispatch, useSelector } from "react-redux";

const CreateDesignation = (props) => {
  // States
  const [list, setLists] = useState([]);
  const [modal, setModal] = useState(false);
  const [editModalId, setEditModalId] = useState("");
  const [search, setSearch] = useState("");
  const [designation, setDesignation] = useState({
    id: "",
    designationRole: null,
    designationName: "",
    departmentId: null,
    experienceCatagory: {
      isExperienced: true,
      minYear: "",
      maxYear: "",
    },
    leavePolicyId: null,
    payrollId: null,
    loanEligibility: {
      isCTCPercentage: true,
      percentage: "",
      isYearly: true,
      amount: "",
      maxNPTime: "",
      period: "",
    },
  });

  const designList = useSelector((state) => state.listDesignations);
  const { designationLists, loading, error } = designList;
  const dispatch = useDispatch();

  const saveDesign = useSelector((state) => state.designation);
  const {
    designation: sD,
    loading: saveLoading,
    error: saveError,
  } = saveDesign;

  const deDesign = useSelector((state) => state.deleteDesignation);
  const {
    designationDelete,
    loading: deleteLoading,
    error: deleteError,
  } = deDesign;

  useEffect(() => {
    dispatch(listDesignations(setLists, openModel, deleteDesignation));
    return () => {};
  }, [saveLoading, deleteLoading]);

  const deleteDesignation = (_id, designationName) => {
    const isTrue = window.confirm(
      `Are you sure want to delete designation ${designationName}`
    );
    if (isTrue) {
      dispatch(deleteDesignations(_id));
    }
  };

  const CreateDesign = () => {
    // console.log("Designation ->", designation);
    dispatch(saveDesignation(designation));
    resetDesign();
  };

  const resetDesign = () => {
    setModal(false);
    setDesignation({
      id: "",
      designationRole: null,
      designationName: "",
      departmentId: null,
      experienceCatagory: {
        isExperienced: true,
        minYear: "",
        maxYear: "",
      },
      leavePolicyId: null,
      payrollId: null,
      loanEligibility: {
        amount: "",
        maxNPTime: "",
        period: "",
      },
    });
  };

  const openModel = (designationDetails) => {
    setDesignation(designationDetails);
    setModal(true);
  };

  const columns = [
    {
      name: "Designation Id",
      selector: "id",
      wrap: true,
    },
    {
      name: "Designation name",
      selector: "designationName",
      wrap: true,
    },
    {
      name: "Department",
      selector: "departmentId",
      wrap: true,
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <div>
          <FontAwesomeIcon
            onClick={() => row.openModel(row)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.deleteDesignation(row._id, row.id)}
            icon={faTrash}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
        </div>
      ),
      wrap: true,
    },
  ];

  // Event handlers
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>
            <FontAwesomeIcon
              icon={faAddressBook}
              className="mr-2"
              style={{ fontSize: 16, color: "gray" }}
            />
            Designation
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="float-right">
            <Row>
              <Col>
                <Model
                  modal={modal}
                  setModal={setModal}
                  toggle={toggle}
                  editId={editModalId}
                  designation={designation}
                  setDesignation={setDesignation}
                  CreateDesign={CreateDesign}
                  handleCancel={resetDesign}
                ></Model>
              </Col>
            </Row>
          </div>
          <div className="float-left">
            <Row>
              <Col>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="search"
                    name="text"
                    placeholder="Search by designation Id"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <DataTable
            data={list.filter((designation) => {
              return designation.id
                .toLowerCase()
                .includes(search.toLowerCase());
            })}
            columns={columns}
            customStyles={customStyles}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<ExpandableTable />}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default CreateDesignation;
