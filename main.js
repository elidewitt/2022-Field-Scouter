let target = document.getElementById("scoutingInterface");

for (i in ScoutingSource) {
  tab = addItem("div", "tab");
  tabHeader = tab.appendChild(addItem("header", "tabHeader collapsible", i));
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
        break;
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