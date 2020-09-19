async function renderEvents() {
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
    let html = ''
    let cont = 1
    let htmlSegment = ''

    eventos.map(evento => {
        htmlSegment =   `<tr>
                                <td>${evento.last_lane}</th>
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