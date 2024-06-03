document.getElementById("fileInput").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
        // Do something with the jsonData, e.g., perform Excel operations
  
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = "Excel file processed successfully!";
      };
  
      reader.readAsArrayBuffer(file);
    }
  });
  