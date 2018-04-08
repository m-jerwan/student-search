// js will search through student records database and display student's data in the browser.
//Will also react to 'clear' and 'quit'. Not case sensitive. Displays 'no records' where no data.

// All function elements are connected, which means they work great together, but will
// not be able to exctract it and use somewhere else without syntax changes. Also,
//errors will snowball.

/*--------------------------------------------*/console.log('');


//========================VAR:

var msgHTML = '';
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
        if (search === studentRecords[z][0].toLowerCase()) {
          buildinStudentRecord();
  } // /searching through all records
}
}
  printTo(msgHTML, whereHTML);
} // /all
