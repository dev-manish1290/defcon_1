$(document).ready(function() {
var start=[""];
localStorage.setItem("updated_data", JSON.stringify(start));

var data = [
    {
      "id": "1",
        "ISIN": "CH0045234907",
        "COUNT" : "1",
    }

]


var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
var ca_url = "loaders/multiple_ca/";
var admin = $('input[name=admin]').val();
var analyst= $('input[name=analyst]').val();
var qa = $('input[name=qa]').val();
var dashboard = $('input[name=dasboard]').val();
var user_role;
if(admin=="True"){
    user_role = 'Admin';
}
if(analyst=="True"){
    user_role = 'Analyst';
}
if(qa=="True"){
    user_role='QA';
}
if(dashboard=="QA"){
    user_role='QA';	
}
if(dashboard=="Admin"){
    user_role='Admin';
}
if(dashboard=="Analyst"){
    user_role='Analyst';
}

var table = $('#example').DataTable( {
    // dom: 'Bfltip',
    //     buttons: [
    //         'csv'
    //     ],
    // "scrollX": true,
    // "processing": true,
    // "serverSide": true,
    "ajax": {
        type: 'GET',
        headers: { "X-CSRFToken": csrfToken },
        "processing": true,
        "url": ca_url,
        "dataSrc": ""
      },

        "columns": [
            { "data": "isin" },
            { "data": "counter"},
            { "data": "ca_type"},


        ],
    } );
} );