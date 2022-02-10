// validate the entries in the form
function validate() {
  let passed = true;
  let error = "We found issues with the following inputs: \n";
  let elements = document.getElementById("scoutingForm").elements;
  for (i of elements) {
    switch (i.tagName) {
      case "SELECT" :
      case "INPUT" :
        if(!Boolean(String(i.value)) && i.type != "number") {
          error += " * " + i.id + "\n";
          passed = false;
        }
        break;
    }
  }
  return { passed, error }
}

function validateAndSubmit() {
  let xmlDoc, fileName, fileText, theForm, formName;
  formName = "scoutingForm";

  let validation = validate();
  if (validation.passed) {

    //manually set local storage for scouter name and match num
    localStorage.setItem("Scouter Name", document.getElementById("Scouter Name").value);
    localStorage.setItem("Match Number", Number(document.getElementById("Match Number").value) + 1);

    fileName = document.getElementById("Match Number").value + "-" + document.getElementById("Team Number").value.replace(/ .*/,'') + "_F.json";
    
    data = createJSON();

    fileText = JSON.stringify(data);
    download(fileName, fileText);
    window.alert("Success!");
  } else {
    window.alert(validation.error);
    return false;
  }
  //return validation.passed;
}

function createJSON() {
  let docObject = {};
  for (i in ScoutingSource) {
    for (j in ScoutingSource[i]) {
      let element = document.getElementById(j);
      switch (ScoutingSource[i][j][0]) {
        case "text":
        case "options":
        case "textarea":
          docObject[j + "-"  + i] = String(element.value);
          console.log(element.value);
          break;
        case "number":
        case "incDec":
          docObject[j] = Number(element.value);
          break;
        case "checkbox":
          docObject[j] = Number(element.checked);
          break;
      }
    }
  }
  return docObject;
}

function download(fileName, text) {
  let element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-16," + encodeURIComponent(text + "\r\n"));
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
