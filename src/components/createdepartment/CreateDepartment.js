import React, { useState, useEffect } from "react";
import Select from "react-select";
import options from "./department.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Button,
  Input,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  PaginationItem,
  PaginationLink,
  Pagination,
} from "reactstrap";
import { faBuilding } from "@fortawesome/pro-duotone-svg-icons";
import { Search } from "react-feather";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDepartment,
  listDepartments,
  saveDepartment,
} from "../../actions/departmentActions";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import departmentColumn from "../../assets/data-table-columns/departmentColumn";
import DataTable from "react-data-table-component";
import roleColumn from "../../assets/data-table-columns/roleColumn";
import { delRole, listRoles, saveRole } from "../../actions/roleActions";
import { saveRoleReducer } from "../../reducers/roleReducers";
import ModalDepartment from "../popupModels/modalDepartment.component";
import ModalRole from "../popupModels/modalRole.component";

// Functional component
const CreateDepartment = (props) => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [roleSearch, setRoleSearch] = useState("");
  const [lists, setDeptLists] = useState([]);
  const [roleLists, setRoleLists] = useState([]);
  const [isRoleCreateActive, setRoleCreateActive] = useState(false);
  const [dept, setDept] = useState({
    _id: "",
    id: "",
  });
  const [role, setRole] = useState({
    _id: "",
    id: "",
  });
  const [isModelOpen, setOpenModel] = useState(false);
  const [isRoleModelOpen, setRoleOpenModel] = useState(false);

  //Redux data
  const deptList = useSelector((state) => state.listDepartments);
  const { departmentLists, loading, error } = deptList;

  const deptSave = useSelector((state) => state.department);
  const { department, loading: saveLoading, error: saveError } = deptSave;

  const deptDelete = useSelector((state) => state.deleteDepartment);
  const {
    delDepartment,
    loading: deleteLoading,
    error: deleteError,
  } = deptDelete;

  const rolList = useSelector((state) => state.listRoles);
  const {
    roleLists: roleListLists,
    loading: roleLoading,
    error: roleError,
  } = rolList;

  const roleSave = useSelector((state) => state.role);
  const {
    role: saveRoleRole,
    loading: saveRoleLoading,
    error: saveRoleError,
  } = roleSave;

  const roleDel = useSelector((state) => state.deleteRole);
  const {
    deleRole,
    loading: deleteRoleLoading,
    error: deleteRoleError,
  } = roleDel;

  const dispatch = useDispatch();

  // Life cycle methods
  useEffect(() => {
    dispatch(listDepartments(setDeptLists, openModel, deleteDept));
    dispatch(listRoles(setRoleLists, openRoleModal, deleteRole));
    return () => {};
  }, [saveLoading, deleteLoading, saveRoleLoading, deleteRoleLoading]);

  // Event handlers
  const toggle = () => {
    setModal(!modal);
  };

  const roleToggle = () => {
    setRoleCreateActive(!isRoleCreateActive);
  };

  const resetState = () => {
    setDept({
      _id: "",
      id: "",
      deptType: "Selete Role",
    });
    setModal(false);
    setOpenModel(false);
  };

  const createDept = () => {
    setDept({
      _id: "",
      id: "",
      deptType: "Selete Role",
    });
    setModal(true);
    setOpenModel(false);
  };

  const resetRoleState = () => {
    setRole({
      _id: "",
      id: "",
    });
    setRoleCreateActive(false);
    setRoleOpenModel(false);
  };

  const createRole = () => {
    setRole({
      _id: "",
      id: "",
    });
    setRoleCreateActive(true);
    setRoleOpenModel(false);
  };

  const deleteDept = (deptId, deptName) => {
    const isTrue = window.confirm(
      `Are you sure you want to delete ${deptName}`
    );
    if (isTrue) {
      dispatch(deleteDepartment(deptId));
    }
  };

  const openModel = (dept) => {
    setDept(dept);
    setOpenModel(true);
    setModal(true);
  };

  const openRoleModal = (role) => {
    setRole(role);
    setRoleOpenModel(true);
    setRoleCreateActive(true);
  };

  const deleteRole = (roleId, roleName) => {
    const isTrue = window.confirm(
      `Are you sure you want to delete ${roleName}`
    );
    if (isTrue) {
      dispatch(delRole(roleId));
    }
  };

  const handleCreateDept = (e) => {
    e.preventDefault();
    dispatch(saveDepartment(dept));
    resetState();
    setOpenModel(false);
  };

  const handleCreateRole = (e) => {
    e.preventDefault();
    dispatch(saveRole(role));
    resetRoleState();
    setRoleOpenModel(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRoleSearch = (e) => {
    setRoleSearch(e.target.value);
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col sm="6">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Departments
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="float-left">
                <Row>
                  <Col>
                    <div className="has-icon-left position-relative">
                      <Input
                        type="search"
                        name="text"
                        placeholder="Search by department Id"
                        value={search}
                        onChange={handleSearch}
                      />
                      <div className="form-control-position">
                        <Search size={15} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="float-right">
                <Row>
                  <Col>
                    <ModalDepartment
                      {...{
                        modal,
                        toggle,
                        handleCreateDept,
                        resetState,
                        dept,
                        isModelOpen,
                        setDept,
                        createDept,
                      }}
                    />
                  </Col>
                </Row>
              </div>

              <DataTable
                data={lists.filter((dept) => {
                  return dept.id.toLowerCase().includes(search.toLowerCase());
                })}
                // data={lists}
                columns={departmentColumn}
                customStyles={customStyles}
                selectableRows
                onSelectedRowsChange={(state) => {
                  console.log(state.selectedRows);
                }}
                pagination
                highlightOnHover
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Role
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="float-left">
                <Row>
                  <Col>
                    <div className="has-icon-left position-relative">
                      <Input
                        type="search"
                        name="text"
                        placeholder="Search by role id"
                        value={roleSearch}
                        onChange={handleRoleSearch}
                      />
                      <div className="form-control-position">
                        <Search size={15} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="float-right">
                <Row>
                  <Col>
                    <ModalRole
                      {...{
                        isRoleCreateActive,
                        isRoleModelOpen,
                        roleToggle,
                        handleCreateRole,
                        resetRoleState,
                        role,
                        setRole,
                        createRole,
                      }}
                    />
                  </Col>
                </Row>
              </div>

              <DataTable
                data={roleLists.filter((role) => {
                  return role.id
                    .toLowerCase()
                    .includes(roleSearch.toLowerCase());
                })}
                // data={lists}
                columns={roleColumn}
                customStyles={customStyles}
                selectableRows
                onSelectedRowsChange={(state) => {
                  console.log(state.selectedRows);
                }}
                pagination
                highlightOnHover
              />

              {/* {isRoleCreateActive ? (
                <form onSubmit={handleCreateRole}>
                  <Input
                    type="text"
                    name="id"
                    id="exampleEmail"
                    value={role.id}
                    placeholder="Enter role name"
                    onChange={handleRoleId}
                    required
                  />

                  <Button type="button" onClick={resetRoleState}>
                    Cancel
                  </Button>
                  {isRoleModelOpen ? (
                    <Button color="success" type="submit">
                      Update role
                    </Button>
                  ) : (
                    <Button color="success" type="submit">
                      Create role
                    </Button>
                  )}
                </form>
              ) : (
                <Button onClick={() => setRoleCreateActive(true)}>
                  Create role
                </Button>
              )} */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateDepartment;
