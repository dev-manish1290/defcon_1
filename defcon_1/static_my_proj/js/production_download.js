

var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
var ca_url = "/loaders/request_master_data/";

$(document).ready(function(){
var min_date;
var max_date;

var type = "master";
var analyst_status = "";

// datepicker_from jQuery, adding default current date in input field
var myDate = new Date()
var default_from = myDate.getFullYear() + '-' + ("0"+(myDate.getMonth()+1).toString()).slice(-2) + '-' + ('0'+ myDate.getDate()).slice(-2);
min_date = default_from
$("#datepicker_from").val(default_from)

// datepicker_to jQuery, adding T+14 days to default current date in input field
var myDate1 = new Date(new Date().getTime()+(14*24*60*60*1000));
var default_to = myDate1.getFullYear() + '-' + ("0"+(myDate1.getMonth()+1).toString()).slice(-2) + '-' + ('0'+ myDate1.getDate()).slice(-2);
max_date = default_to
$("#datepicker_to").val(default_to)


var option_drop_html = '<select id="sel_status"><option value="">Please select status</option><option value="True" >Confirmed</option><option value="False">Invalidated</option><option value="both">Both</option></select>'
  
  $(function() {
    var $j = jQuery.noConflict();

    // datepicker widget adding
    $j("#datepicker_from").datepicker({
      dateFormat: 'yy-mm-dd',
      changeYear: true,
      defaultDate: new Date(),
      showOn: "button",
      "onSelect": function(date) {
        minDateFilter = new Date(date).getTime();
        min_date = this.value;
      }
    });

    $j("#datepicker_to").datepicker({
    dateFormat: 'yy-mm-dd',
    changeYear: true,
    defaultDate: +14,
    showOn: "button",
    "onSelect": function(date) {
      minDateFilter = new Date(date).getTime();
      max_date= this.value;
 
     }
    });

   });



  $(document).on('click','input[name=selector]',function(){
      console.log(this.value)
     if(this.value=="Master"){

      var elem = document.getElementById("sel_status");
      if (!elem){
        var temp =''
      }
      else
      ( 
        elem.remove()
      )
      
       type="master";
       analyst_status="";
     }
     else{
       var val1 = document.getElementById("filter_add");
       $('#2').attr('checked',true);

        var elem = document.getElementById("sel_status");
          if (!elem){
            var temp =''
          }
          else
          ( 
            elem.remove()
          )

        val1.innerHTML += option_drop_html
        type = "goldencopy";
     }
         
    });


    $(document).on('change','#sel_status',function(){
      analyst_status=this.value;
  });

  $(document).on('click','#create_production_file',function(event){
    
    console.log(analyst_status);
    
    if(analyst_status=="" && type=="goldencopy"){

      alert('please select a status');
    }
    else{
    event.preventDefault();
    $("#loader").show();
    var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
    var json_data={
              'type':type,
              'from':min_date,
              'to':max_date,
              'analyst_status':analyst_status
        }
    console.log(json_data);
    $.ajax({
      url: ca_url,
      headers: { "X-CSRFToken": csrfToken },
      type: 'POST',
      // dataType: "json",
      data: json_data,
      beforeSend: function(data){
          $("#loader").show();       
      },
      success: function (response) {
        $("#loader").hide();
        location.reload();
      },
      error: function (e) {
        $("#loader").hide();
        location.reload();
      },
      complete: function (e) {
        $("#loader").hide();
        location.reload();
      }
    });
    }
  });
});
