var employeesList=[
    {
        firstName: 'John',
        lastName: 'King',
        phone:'0742658422',
        salary:4500
    },
{
    firstName:'Steven',
        lastName:'Gerard',
    phone:'5103030',
    salary:4500
},
{
    firstName: 'Diana',
    lastName: 'Ross',
    phone:'0742658422',
    salary:4500
},
{
    firstName: 'Mike',
    lastName: 'Bob',
    phone:'0742658422',
    salary:4500
},
{
    firstName: 'Emily',
    lastName: 'Hudson',
    phone:'0742658422',
    salary:4500
}
];

function showList(){
    var myTable= '<table border="1" class="table table-bordered"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    lastRow();
    for(var i in employeesList){
        myTable +='<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick="Vizualizare()">Vizualizare</button></td>'+
            '<td><button onclick="Stergere(' + i +' )">Stergere</button></td></tr>';
    }
        myTable +='</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
}

var Employee= function (firstName, lastName, phone, salary ){
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.salary=salary;
}


function addRefresh(){
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var phone=document.getElementById("phone").value;
    var salary=document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));
    lastRow();
    var myTable= '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th></th><th></th></tr>';
    for(var i in employeesList){
        myTable +='<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
    }
    myTable +='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function Sum(){
    var salary1=0;
    for(var i in employeesList){
         salary1 +=parseInt(employeesList[i].salary);

    }
    var container = document.getElementById('sum');
    container.innerHTML = salary1;
}

function Erase(){
    employeesList.pop();
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function Convert(){
    for(var i in employeesList){
        employeesList[i].salary = parseFloat(employeesList[i].salary)/4.5;
    }
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function Vizualizare(){
    for (var i in employeesList) {
        alert(employeesList[i].firstName + " " + employeesList[i].lastName + " " + employeesList[i].phone + " " + employeesList[i].salary);

    }

}

function Stergere(i){
    var myTable= '<table border="1" class="table table-bordered"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList){
        myTable +='<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick="Vizualizare()">Vizualizare</button></td>'+
            '<td><button onclick="Stergere(' + i +' )">Stergere</button></td></tr>';
    }
    myTable +='</table>';

    myTable.deleteRow(i+1);

}

function lastRow(){
    var phone ="";
    for(var i in employeesList){
        var salary1 = 0 ;
        var contor=0;
         var prenume=employeesList[i].firstName;
         var nume = 1;
         for(var j in employeesList){
             salary1 += parseInt(employeesList[i].salary);
             if(employeesList[j].firstName === prenume){
                 contor++;
             }
             else{
                 nume++;
             }

         }
        var firstName = nume;

    }
    var lastName = contor;
    var vectFrecventa = [0,0,0,0,0,0,0,0,0,0];

    var x = "";
    for (var i in employeesList) {
        x += employeesList[i].phone;
    }
    for(i in x){
        vectFrecventa[x[i]]++;
    }

    for(var j =0; j< 5 ; j++) {
        var count = 0;
        var index = 0;
        for (var i = 0; i < x.length; i++) {
                if (vectFrecventa[i] >= count) {
                    index = i;
                    count = vectFrecventa[i];

                }
            }
            phone += index + ", ";
            vectFrecventa[index] = 0;
        }

    var salary = parseFloat(salary1)/employeesList.length;

    employeesList.push(new Employee(firstName,lastName,phone,salary));

}

function sort(x){
switch(x){
    case 1:
        var x = "";
        var y = "";
        for(var i in employeesList){
            var j = i+1;
            for( j in employeesList){
                if(employeesList[i].lastName > employeesList[j].lastName)
                {
                    var aux="";
                    aux = employeesList[i].lastName;
                    employeesList[i].lastName = employeesList[j].lastName;
                    employeesList[j].lastName = aux;
                }
            }

        }
        break;
    case 2:
        var x = "";
        var y = "";
        for(var i in employeesList){
            var j = i+1;
            for( j in employeesList){
                if(employeesList[i].firstName > employeesList[j].firstName)
                {
                    var aux="";
                    aux = employeesList[i].firstName;
                    employeesList[i].firstName = employeesList[j].firstName;
                    employeesList[j].firstName = aux;
                }
            }

        }
        break;
    case 3:
        var x = "";
        var y = "";
        for(var i in employeesList){
            var j = i+1;
            for( j in employeesList){
                if(employeesList[i].phone > employeesList[j].phone)
                {
                    var aux="";
                    aux = employeesList[i].phone;
                    employeesList[i].phone = employeesList[j].phone;
                    employeesList[j].phone = aux;
                }
            }

        }
        break;
    case 4:
        var x = "";
        var y = "";
        for(var i in employeesList){
            var j = i+1;
            for( j in employeesList){
                if(parseInt(employeesList[i].salary) > parseInt(employeesList[j].salary))
                {
                    var aux="";
                    aux = employeesList[i].lastName;
                    employeesList[i].lastName = employeesList[j].lastName;
                    employeesList[j].lastName = aux;
                }
            }

        }
        break;
}
}