

var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
var ca_url = "/loaders/request_master_data/";

$(document).ready(function(){
  $("#create_production_file").click(function(event){
    event.preventDefault();
    $("#loader").show();
    $.ajax({
      url: ca_url,
      headers: { "X-CSRFToken": csrfToken },
      type: 'GET',
      dataType: "json",
      success: function (data) {
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
  });
});
