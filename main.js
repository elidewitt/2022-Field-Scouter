let target = document.getElementById("scoutingInterface");

for (let i in ScoutingSource) {
  tab = addItem("div", "tab");
  tabHeader = tab.appendChild(addItem("div", "tabHeader", i));
  content = tab.appendChild(addItem("div", "content"));
  
  for (let j in ScoutingSource[i]) {
    field = content.appendChild(addItem("div", "field"));
    label = field.appendChild(addItem("label", "", j));
    
    switch(ScoutingSource[i][j][0]) {
      case "text":
      case "number":
      case "checkbox":
        entry = field.appendChild(addItem("input", ScoutingSource[i][j][0]));
        entry.type = ScoutingSource[i][j][0];
        if (entry.type == "number") entry.min = 0; entry.max = 200;
        break;
      case "incDec":
        entry = field.appendChild(addItem("input", ScoutingSource[i][j][0]));
        entry.type = "number";
        entry.min = 0;
        entry.max = 200;
        entry.value = 0;
        inc = field.appendChild(addItem("button", "incDecButton", "↑"));
        inc.onclick = function() { document.getElementById(j).value ++; return false; }
        dec = field.appendChild(addItem("button", "incDecButton", "↓"));
        dec.onclick = function() { document.getElementById(j).value --; return false; }
        break;
        // entry.setAttribute("readyonly", "readonly");
      case "options":
        entry = field.appendChild(addItem("select", ScoutingSource[i][j][0]));
        blankOption = entry.appendChild(addItem("option"));
        blankOption.disabled = true;
        for (let k in ScoutingSource[i][j][1]) {
          option = entry.appendChild(addItem("option", "", ScoutingSource[i][j][1][k]));
        }
    }
    entry.id = j;
    //entry.name = j.replace(/[ \?\(\)]/g, "");
  }
}

function addItem(tag, classList, innerHTML) {
  elt = document.createElement(tag);
  if (classList) target.appendChild(elt).classList = classList;
  if (innerHTML) elt.appendChild(document.createTextNode(innerHTML));

  return target.appendChild(elt);
}