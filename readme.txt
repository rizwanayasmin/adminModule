1. CREATE JOB APPLICATION:
    Method: POST
    API:    localhost:5000/api/createHrCandApplication
    BODY: {
            "jobPostId": "5fd71e66b1686d35a064b1f3",
            "fName": "Sam",
            "lName": "G",
            "email": "aravinaddf@gmail.com",
            "contactNo": 98456613333,
            "applicationDate": "2020-12-04T06:08:09.660+00:00",
            "education": "MSc. Mathematics",
            "expectedCTC": 600000,
            "messageToEmployer": "Worked with lots of presure at my current employer",
            "experience": 6,
            "resume": {
                "name": "aravindgresume.pdf",
                "location": "/applications/aravindgresume.pdf"
            }
        }
2. ADD TEACHER FROM HIRING
    Method: PUT
    API:    localhost:5000/api/addTeacherFromHiring
    BODY: {
            "instituteId": "EVERWIN_KOLATHUR_CBSE",
            "applicationId": "5fd74c8a543738406c7c64a8",
            "designationId": "BIOLOGY_GRADE_III"
        }
3. APPROVE LEAVE
    Method: PUT
    API:   localhost:5000/api/approveLeave/5e0c6f5fe38e113578c7d341/February/0/1
    BODY: {
            "approvedDateRange": {"from": "2021-02-12", "to": "2021-02-21"},
            "approvedNoOfDays":9
        } 
4. PAYSLIP RELEASE/NON-RELEASE STATUS
    Method: PUT
    API:localhost:5000/api/changeReleaseStatus/1/February/2021
    BODY: {
            "status": true
        }
5. PAY LOAN AMOUNT FOR A TEACHER - THROUGH TEACHER PROFILE
    Method: PUT
    API:localhost:5000/api/payLoanAmountForATeacher/5e0c6f5fe38e113578c7d414
    BODY: {
        "amount": 110000,
        "month": "February",
        "year": 2021
        }
6. ACTIVATE TEACHER LOAN
    Method: PUT
    API: localhost:5000/api/activeTeacherLoan/5e0c6f5fe38e113578c7d414
    BODY: {
        "amount": "120000",
        "period": 12,
        "maxNPPeriod": 2
        }
7. LEAVE REQUEST
    Method: PUT
    API: localhost:5000/api/leaveRequest/5e0c6f5fe38e113578c7d3a3
    BODY: {
            "dateRange": {"from": "2021-02-13"},
            "leaveType": "Earned Leave",
            "noOfDays": 1,
            "isApproved": false,
            "isRejected": false
        }
