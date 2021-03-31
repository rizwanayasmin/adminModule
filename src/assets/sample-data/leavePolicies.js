const LEAVE_POLICIES = [
  {
    id: "JNR_GRD_I",
    name: "Junior Grade-I",
    leaveConfig: [
      {
        id: "1",
        name: "Causual leave",
        noOfLeaves: 12,
        isYearly: false,
      },
      {
        id: "2",
        name: "Emergency leave",
        noOfLeaves: 15,
        isYearly: true,
      },
      {
        id: "3",
        name: "Paid leave",
        noOfLeaves: 10,
        isYearly: false,
      },
    ],
    lateFines: [
      {
        id: "1",
        maxLateAllowPerMonth: 3,
        isBecomeLOP: true,
        fineAmount: 100,
      },
    ],
  },
];

export default LEAVE_POLICIES;
