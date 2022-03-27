
 
$(document).ready(function() {



$(document).ready(function() {
    var table = $('#votes').DataTable({"paging": false,});
} );
  
$(document).ready(function() {
    var table = $('#votes_list').DataTable({"paging": false,});
     
    $('#votes_list tbody').on('click', 'th.myclass', function () {
        var data = table.row( this ).data();
        var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
        // alert( 'You clicked on '+data[0]+'\'s row' );
        $.ajax({
            type: 'POST',
            headers: { "X-CSRFToken": csrfToken },
            url: "/execute/"+data[0],
            data: {},
            beforeSend: function(data){
                $("#loader").show();
                
            },
            dataType: 'json',
            success: function (data) {
                    
            },
            error: function (error) {

            },
            complete: function(){
                 $("#loader").hide();

              }
         });
    } );
} );
    $("#download").submit(function(e) {
 
        e.preventDefault(); // avoid to execute the actual submit of the form.

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'json',
            contentType: 'text/csv',
            context: this,
            success: function(response) {
                alert("File Downloaded");
            },
            error: function (error) {
                alert(error);
            },
         });
    });

    
	
} );


