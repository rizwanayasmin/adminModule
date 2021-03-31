const JOB_POSTS = [
  {
    jobPostId: "1",
    positionTitle: "Teaching Staff - Mathematics",
    jobPostStatus: true,
    experienceCategory: {
      isExperienced: true,
      minYear: 1,
      maxYear: 2,
    },
    institutionId: "EVERWIN_MAT_KOL",
    interviewProcessId: "TEA-GRADE-I",
    teachingLevel: "Elementary",
    ctc: "Not Disclosed",
    skillTags: ["Mathamatics", "Elementary", "Secondary", "Higher Secondary"],
    noOfOpenings: 10,
    jobDescription: {
      responsibilites: [
        "Student engagements",
        "Student attendance entry",
        "Student report logging",
      ],
      mustHave: ["Basic computer knowledge", "Basic EDR working knowledge"],
      goodToHave: ["Some extra-curricular activities"],
    },
    educationalQualifications: {
      UG: "BSc. Mathamatics",
      PG: "MSc. Mathamatics",
    },
    role: {
      roleType: "Teaching Staff",
      catagory: "Teaching",
      employmentType: "Full-time",
    },
    keySkills: ["Mathamatics"],
    institutionalDetails: {
      instituteId: "",
      institutename: "",
      branch: "Kolathur",
      mobile: "",
    },
    interviewProcessDetails: {
      processId: "TEA-GRADE-I",
      processName: "Teaching Staff - Hiring",
      noOfRounds: 3,
      rounds: [
        {
          id: "1",
          name: "Round 1",
          duration: 60,
          description: "Written test",
          totalMark: 100,
          cutOff: 70,
        },
        {
          id: "2",
          name: "Round 2",
          duration: 30,
          description: "Demo class",
          totalMark: 100,
          cutOff: 70,
        },
        {
          id: "3",
          name: "Round 3",
          duration: 0,
          description: "Personal interview",
          totalMark: 100,
          cutOff: 70,
        },
      ],
    },
  },
];

export default JOB_POSTS;
