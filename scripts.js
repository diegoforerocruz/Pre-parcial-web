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
    cont = 1
    eventos.map(evento => {
        htmlSegment =   `<tr>
                                <td>${evento.last_lane}</td>
                                <td>${evento.first_name}</td>
                                <td>${evento.email}</td>
                                <td>${evento.photo}</td>
                                <td>
                                    <button type="button" class="btn btn-danger" onclick="borrar(${cont})">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm1.146-7.85a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </td>
                                
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

function modificar(index) {
    console.log(index)
  }

function borrar(a) {
    table = document.getElementById("contentTable");
    table.deleteRow(a)
  }

  console.log(eventos)