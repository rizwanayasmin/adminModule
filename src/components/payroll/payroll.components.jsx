import React, { useEffect, useState } from "react";
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

import { Search } from "react-feather";
import DataTable from "react-data-table-component";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import PayrollPolicyModal from "./payroll.popup-modal";
import PayrollColumn from "./payroll.column";
import {
  deletePayrollPolicy,
  listPayrollPolicies,
  savePayrollPolicy,
} from "../../actions/payrollActions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";


const Payroll = () => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [payrollPolicies, setPayrollPolicies] = useState([]);
  const [payrollPolicy, setPayrollPolicy] = useState({
    id: "",
    name: "",
    fixedGross: "",
    ctc: "",
    earnings: [],
    deductions: [],
  });

  const toggle = () => setModal(!modal);

  // Redux store access
  const pLists = useSelector((state) => state.payPolicyLists);
  const { payrollPolicyLists, loading, error } = pLists;
  const dispatch = useDispatch();

  const paySave = useSelector((state) => state.payPolicySave);
  const {
    payrollPolicy: pay,
    loading: saveLoading,
    error: saveError,
  } = paySave;

  const delPolicy = useSelector((state) => state.payPolicyDelete);
  const {
    payrollPolicyDelete,
    loading: deleteLoading,
    error: deleteError,
  } = delPolicy;

  useEffect(() => {
    dispatch(
      listPayrollPolicies(setPayrollPolicies, openModal, delPayrollPolicy)
    );
    return () => {
      // cleanup;
    };
  }, [saveLoading, deleteLoading]);

  const createPayrollPolicy = () => {
    dispatch(savePayrollPolicy(payrollPolicy));
    // console.log(payrollPolicy);
    setPayrollPolicy({
      id: "",
      name: "",
      fixedGross: "",
      ctc: "",
      earnings: [],
      deductions: [],
    });
    setModal(false);
  };

  const openModal = (policyDetails) => {
    // setPayrollPolicies(policyDetails);
    setPayrollPolicy(policyDetails);
    setModal(true);
  };

  const delPayrollPolicy = (policyId, policyName) => {
    let isTrue = window.confirm(
      `Are you sure you want to delete ${policyName}`
    );
    if (isTrue) {
      dispatch(deletePayrollPolicy(policyId));
    }
  };

  return (
    <div className="container-fluid">
      {!loading ? (
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#fd868c" }}>Payroll policies</CardTitle>
          </CardHeader>
          <CardBody>
           
            <div className="float-right">
              <Row>
                <Col>
                  <PayrollPolicyModal
                    modal={modal}
                    setModal={setModal}
                    toggle={toggle}
                    payrollPolicy={payrollPolicy}
                    setPayrollPolicy={setPayrollPolicy}
                    createPayrollPolicy={createPayrollPolicy}
                  ></PayrollPolicyModal>
                </Col>
              </Row>
            </div>
           
            <DataTable
              data={payrollPolicies.filter((lp) => {
                return lp.id.toLowerCase().includes(search.toLowerCase());
              })}
              // data={leavePolicyList}
              columns={PayrollColumn}
              customStyles={customStyles}
              selectableRows
              onSelectedRowsChange={(state) => {
                console.log(state.selectedRows);
              }}
              pagination
              highlightOnHover
            />
          </CardBody>
          {/* <h4>hai</h4> */}
         
        </Card>
      ) : (
        <div>Loading...</div>
      )}

     
    </div>
  );
};

export default Payroll;
