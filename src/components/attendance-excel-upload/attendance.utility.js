import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

const exportToCSV = (csvData, fileName) => {
  const wb = { Sheets: {}, SheetNames: [] };

  for (let i = 0; i < csvData.length; i++) {
    const ws1 = XLSX.utils.json_to_sheet(csvData[i].data);
    XLSX.utils.book_append_sheet(wb, ws1, csvData[i].sheetName);
  }

  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  saveAs(data, fileName + fileExtension);
};

export default exportToCSV;
