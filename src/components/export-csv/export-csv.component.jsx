import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportCSV = ({ csvData, fileName, buttonName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const sample_data = [
      {
        "04-02-2020 - Absent": 2,
        "04-02-2020 - Late": 3,
        " 04-02-2020 - Present": 1,
        "05-02-2020 - Absent": 5,
        "05-02-2020 - Late": 6,
        "05-02-2020 - Present": 4,
        "Employee Id": "EMP001",
        "Employee name": "Aravind G",
        "S.no.": 1,
      },
      {
        "04-02-2020 - Absent": 2,
        "04-02-2020 - Late": 3,
        " 04-02-2020 - Present": 1,
        "05-02-2020 - Absent": 5,
        "05-02-2020 - Late": 6,
        "05-02-2020 - Present": 4,
        "Employee Id": "EMP001",
        "Employee name": "Aravind G",
        "S.no.": 1,
      },
      {
        "04-02-2020 - Absent": 2,
        "04-02-2020 - Late": 3,
        " 04-02-2020 - Present": 1,
        "05-02-2020 - Absent": 5,
        "05-02-2020 - Late": 6,
        "05-02-2020 - Present": 4,
        "Employee Id": "EMP001",
        "Employee name": "Aravind G",
        "S.no.": 1,
      },
    ];
    const ws = XLSX.utils.json_to_sheet(csvData);
    const ws1 = XLSX.utils.json_to_sheet(sample_data);
    const ws2 = XLSX.utils.json_to_sheet(sample_data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    XLSX.utils.book_append_sheet(wb, ws1, "Book1");
    console.log(wb);
    XLSX.utils.book_append_sheet(wb, ws2, "Book2");
    console.log(wb);
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    saveAs(data, fileName + fileExtension);
  };

  return (
    <div>
      <button
        onClick={() => {
          exportToCSV(csvData, fileName);
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default ExportCSV;
