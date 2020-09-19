let eventos = [{

    "last_lane": "Daws",
    
    "first_name": "Nari",
    
    "email": "ndaws0@dell.com",
    
    "photo": "http://dummyimage.com/155x119.jpg/ff4444/ffffff"
    
    }, {
    
    "last_lane": "Withams",
    
    "first_name": "Winona",
    
    "email": "wwithams1@ibm.com",
    
    "photo": "http://dummyimage.com/161x166.bmp/cc0000/ffffff"
    
    }, {
    
    "last_lane": "Streatfield",
    
    "first_name": "Northrup",
    
    "email": "nstreatfield2@macromedia.com",
    
    "photo": "http://dummyimage.com/195x201.png/ff4444/ffffff"
    
    }]

async function renderEvents() {
    let html = ''
    let cont = 1
    let htmlSegment = ''

    eventos.map(evento => {
        htmlSegment =   `<tr>
                                <td>${evento.last_lane}</td>
                                <td>${evento.first_name}</td>
                                <td>${evento.email}</td>
                                <td>${evento.photo}</td>
                        </tr>`
        
        cont ++
        html += htmlSegment

    })

    let container = document.getElementById("eventsTableBody")
    container.innerHTML = html

}

renderEvents()

function sortTable(param, column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("contentTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[column];
        y = rows[i + 1].getElementsByTagName("td")[column];
        //check if the two rows should switch place:
        if(param === 'des') {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
        }else {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
        }
        
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

function enviar() {
      let obj = ({
        "last_lane": document.getElementById("lastName").value,
        
        "first_name": document.getElementById("firstName").value,
        
        "email": document.getElementById("email").value,
        
        "photo": document.getElementById("photo").value
      })  

      document.getElementById("lastName").value = "" 
      document.getElementById("firstName").value = ""
      document.getElementById("email").value = ""
      document.getElementById("photo").value = ""

      eventos.push(obj)
      console.log(eventos)
      renderEvents()
  }

  console.log(eventos)