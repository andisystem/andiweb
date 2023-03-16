var tableUser = localStorage.getItem("tableUserLocalStorage");
tableUser = JSON.parse(tableUser);
if(tableUser == null){
    var tableUser = [];
}

list();

function list(){
    console.log("HELLO WORLD");

    var dataRow = '';
    if(tableUser.length > 0){
        for(const i in tableUser){
            var varUser = JSON.parse(tableUser[i]);
            dataRow += "<tr>";
            dataRow += "<td>"+varUser.idUser+"</td>";
            dataRow += "<td>"+varUser.date+"</td>";
            dataRow += "<td>"+varUser.hour+"</td>";
            dataRow += "<td>"+varUser.name+"</td>";
            dataRow += "<td>"+varUser.phone+"</td>";
            dataRow += "<td>"+varUser.email+"</td>";
            dataRow += "<td>"+varUser.company+"</td>";
            dataRow += "<td>"+varUser.profession+"</td>";
            dataRow += "<td style='display: flex;'>"+"<button style='margin-right: 5px;' data-content='edit' type='button' class='btn btn-warning' onclick='openForm("+varUser.idUser+")'><i class='fa-sharp fa-solid fa-pen-to-square'></i></button>"+"<button style='margin-left: 5px;' type='button' class='btn btn-danger' onclick='deleteItem("+varUser.idUser+")'><i class='fa-sharp fa-solid fa-trash'></i></button>"+"</td>";

            dataRow += "</tr>";
        }
        document.getElementById("dataUsers").innerHTML = dataRow;
    }else{
        document.getElementById("dataUsers").innerHTML = "<tr><td colspan='9'>There is not any data</td></tr>";
    }
}

function openForm(employees){
    localStorage.setItem("employees", JSON.stringify(employees));
    window.location.replace("register-here.html");
}

function deleteItem(idItem){
    if(confirm('Are you sure to delete this record?')){
        for(const i in tableUser){
        var varUser = JSON.parse(tableUser[i]);
        if(varUser.idUser == idItem){
            tableUser.splice(i,1);
            localStorage.setItem("tableUserLocalStorage", JSON.stringify(tableUser));
        }
    }
    list()
    }
}

//filters

$(document).ready(function(){
  $("#inputSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#dataUsers tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});