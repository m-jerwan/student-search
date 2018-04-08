
//========================VAR:

var msgHTML = '';
var msgTitle = '';
var search= '';
var whereHTML = 'studentContainer'; //same place always

//========================FUNCT:

function buildinStudentRecord() {
  for (var i=0; i<elements.length; i++) {
    msgHTML = '';
    for (var j=0; j<elements.length; j++){
      msgHTML += '<p><span>'+elements[j]+': </span>'
      if (studentRecords[z][j] == '') {   //if no choosen track or have no points will display Newbie
          msgHTML += 'No records<br>';

        }else{
          msgHTML += studentRecords[z][j]+'<br>'; //z=searchingLoop number
        }
        }
    msgHTML+= '</p>';

  }
}

//inputs whatMsg into html where (by ID)
function printTo(whatMsg, where) {
  var outputDiv = document.getElementById(where);
  outputDiv.innerHTML = whatMsg;
}

//========================EXEC:
msgTitle = '<h1>Search student records:<h1>'+'<p>'
titleCreationLoop:  //creating the list of students so we know what names we can imput
for (i=0; i<studentRecords.length; i++) {
  msgTitle += studentRecords[i][0]+', '
}
msgTitle = msgTitle.substring(0,msgTitle.length-2); // this removes last period from msgTitle string
msgTitle += '</p>'
printTo(msgTitle, 'title');


mainLoop:
while (true) {      //all endless loop
  search = prompt('Give me a name./Quit/Clear');
searchingLoop:
  if (search.toLowerCase() === 'clear'  ) {
      msgHTML = '';
  } else if (search === null || search.toLowerCase() === 'quit' ) {
      msgHTML = 'Quit';
      printTo(msgHTML, whereHTML);
      break mainLoop; //breaking the main loop with command
  } else {
      for (var z = 0; z<studentRecords.length; z++) { //searching through all records
        if (search.toLowerCase() === studentRecords[z][0].toLowerCase()) {
          buildinStudentRecord();
  } // /searching through all records
}
}
  printTo(msgHTML, whereHTML);
} // /all
