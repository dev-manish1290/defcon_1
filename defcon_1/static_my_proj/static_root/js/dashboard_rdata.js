function format ( d ) {
    // `d` is the original data object for the row
   
    var table = '<input type="hidden" name="idclass" value=' + d.global_event_id + '>' +'<table cellspacing="0" rules="all" border="1" id="Table1" class="display">'+
    '<tr><th style="white-space: normal; width:4%;">' + '</th>' +
    '<th style="white-space: normal;">' +  'ISIN' +'</th>' + 
    '<th style="white-space: normal;">' + 'MIC' + '</th>' +
    '<th style="white-space: normal;">' +  'CA_Type' + '</th>' + 
    '<th style="white-space: normal;">' +  'ExDate' + '</th>' + 
    '<th style="white-space: normal;">' +  'old_value_gc' + '</th>' + 
    '<th style="white-space: normal;">' +  'new_value_gc' + '</th>' 

    if(d.currency_tr !==null || d.record_date_tr !==null || d.payment_date_tr!==null){
        table +=  '<input type="hidden" id="'+d.tr_master_corporate_action_id+'m0" value=' + d.tr_master_corporate_action_id + '>' +
        '<td id="'+d.tr_ca_id+'f0" style="white-space: normal; width:4%;">' + 'TR' +'</td>' +
        '<td id="'+d.tr_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.tr_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.tr_ca_id+'f4" style="white-space: normal;">' +  d.ca_type + '</td>' + 
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.effective_date +'</td>' + 
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.old_value_tr +'</td>' +
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.old_value_tr +'</td>'  
    }

    if(d.currency_edi !==null || d.record_date_edi !==null || d.payment_date_edi!==null)
    {
        table += '<input type="hidden" id="'+d.edi_master_corporate_action_id+'m0" value=' + d.edi_master_corporate_action_id + '>' +
        '<td id="'+d.edi_ca_id+'f0" style="white-space: normal; width:4%;">' + 'EDI' +'</td>' +
        '<td id="'+d.tr_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.tr_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.tr_ca_id+'f4" style="white-space: normal;">' +  d.ca_type + '</td>' + 
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.effective_date +'</td>' + 
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.old_value_edi +'</td>' +
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.old_value_edi +'</td>'  
    }

    if(d.currency_fs !==null || d.record_date_fs !==null || d.payment_date_fs!==null){
        table += '<input type="hidden" id="'+d.fs_master_corporate_action_id+'m0" value=' + d.fs_master_corporate_action_id + '>' +
            '<td id="'+d.fs_ca_id+'f0" style="white-space: normal; width:4%;">' + 'FDS' +'</td>' +    
            '<td id="'+d.tr_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
            '<td id="'+d.tr_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
            '<td id="'+d.tr_ca_id+'f4" style="white-space: normal;">' +  d.ca_type + '</td>' + 
            '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.effective_date +'</td>' + 
            '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.old_value_fs +'</td>' +
            '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.old_value_fs +'</td>'  
    }
   table+= '</table>'
   return table;
}
$(document).ready(function() {
var adjustment_var;
var cuurency_var;
var name_var;
var status_var;
var state_var;
var comment_var;
var record_var;
var payment_var;
var start=[""];
localStorage.setItem("updated_data", JSON.stringify(start));
$('#submitCA').click(function(){
    var data_upload=  localStorage.getItem("updated_data");

    var saved_data = JSON.parse(localStorage.getItem("updated_data"))
    var i=saved_data.findIndex(item=>item.analyst_status==="unknown");
    if(i!==-1){
        alert('Please change the status of selected CA');

    }
    else{  
        if($('input[name="predata"]').val()=="default"){
        var data_length=saved_data.length-1;
        if(data_length!=0){
        var r =  confirm('Do you want to submit '+data_length+' pre approved CA?');
        if(r==true){
         var formData={
             'data_upload' : data_upload
         }
         var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
         $.ajax({
             type: 'POST',
             headers: { "X-CSRFToken": csrfToken },
             url: "dashboard_data/",
             data: formData,
             beforeSend: function(data){
                 $("#loader").show();
                 
             },
             success: function (response) {
                 var modal = document.getElementById("myModal");

                 // Get the <span> element that closes the modal
                 // var span = document.getElementsByClassName("close")[0];
                 document.getElementById("modal-content").style.display='none';
                 document.getElementById("modal-content-msg").style.display='block';
                 var text = document.getElementById("commentdata");
                 text.innerHTML = "<label style='color:blue;'>Done Successfully.</label>";
                 var divdata = document.getElementById("modalfooter");
                 divdata.innerHTML="<a href='' class='btn btn-success' id='updateCA' data-dismiss='modal'>OK</a>";
                 modal.style.display = "block";
             },
             error: function (error) {
                 alert(error);
             },
             complete: function(){
                 $("#loader").hide();

             }
         });
        }
    }
    

     }
     else{
    var formData={
        'data_upload' : data_upload
    }
    var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
    $.ajax({
        type: 'POST',
        headers: { "X-CSRFToken": csrfToken },
        url: "dashboard_data/",
        data: formData,
        beforeSend: function(data){
            $("#loader").show();
            
        },
        success: function (response) {
            var modal = document.getElementById("myModal");

            // Get the <span> element that closes the modal
            // var span = document.getElementsByClassName("close")[0];
            document.getElementById("modal-content").style.display='none';
            document.getElementById("modal-content-msg").style.display='block';
            var text = document.getElementById("commentdata");
            text.innerHTML = "<label style='color:blue;'>Done Successfully.</label>";
            var divdata = document.getElementById("modalfooter");
            divdata.innerHTML="<a href='' class='btn btn-success' id='updateCA' data-dismiss='modal'>OK</a>";
            modal.style.display = "block";
        },
        error: function (error) {
            alert(error);
        },
        complete: function(){
            $("#loader").hide();

         }
     });
    }
}
});
var data = [
    {
      "id": "1",
        "RIC": "NHT.OH",
        "CA_ID": "542146",
        "ISIN": "CH0045234907",
        "MIC": "XXXX",
		"Name": "Netflix Inc",
        "CA_Type": "Ord_Div",
        "ExDate": "2011/04/25",
        "tradjustment_factor": "320",
        "ediadjustment_factor": "20",
        "fdsadjustment_factor": "320",
        "Currency": "INR",
		"RecordDate": "2011/04/25",
        "PaymentDate": "2011/04/25",
        "State": "Pending Action",
        "Comments": ""
    }
    
]
 

var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
var ca_url = "loaders/ca_master/";
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
console.log(user_role);
var formData = {
    'admin' : user_role,
    'ca_type' :"rdata"};
var table = $('#example').DataTable( {
    // "scrollX": true,
    // "processing": true,
    // "serverSide": true,
    "ajax": {
        type: 'POST',
        headers: { "X-CSRFToken": csrfToken },
        "processing": true,
        "url": ca_url,
        "data": formData,
        "dataSrc": ""
      },
          
        "columns": [
            {   className: "details-control"   ,      
                "orderable":      false,
                "data":           data,
                "defaultContent": ''
            },
            {   className: "my_second_class",
                "orderable":      false,
                "data":           data,
                "defaultContent": ''},
            { "data": "mic" },
            { "data": "isin" },
            {   className: "security_name",
                "data": "security_name",
                render: $.fn.dataTable.render.ellipsis(10, false )},
            // render: function ( data, type, row ) {
            //     return data.length > 10 ?
            //         data.substr( 0, 10 ) +'…' :
            //         data;
            // }},
            { "data": "ca_type" },
            { "data": "effective_date" },
            { "data": "old_value_gc" },
            { "data": "new_value_gc" },
            {
                className: "status",
            data: null,
            render: function ( data, type, row ) {
                if(((row.old_value_edi == row.old_value_fs) && (row.old_value_fs == row.old_value_tr) && (row.old_value_tr == row.old_value_edi))
                && ((row.new_value_edi == row.new_value_fs) && (row.new_value_fs == row.new_value_tr) && (row.new_value_tr == row.new_value_edi))
                && ((row.payment_date_edi == row.payment_date_fs) && (row.payment_date_fs == row.payment_date_tr) && (row.payment_date_tr == row.payment_date_edi))
                && ((row.record_date_edi == row.record_date_fs) && (row.record_date_fs == row.record_date_tr) && (row.record_date_tr == row.record_date_edi))
                && ((row.currency_edi == row.currency_fs) && (row.currency_fs == row.currency_tr) && (row.currency_tr == row.currency_edi))){
                    return "Confirmed";
                }
                else if(row.admin_status){
                    if(row.analyst_status=="True"){
                        return "Confirmed";
                    }
                    else{
                        return "INvalidated";
                    }
                }
                else if(row.qc_status){
                    if(row.analyst_status=="True"){
                        return "Confirmed";
                    }
                    else{
                        return "INvalidated";
                    }
                }
                else{
                    return '<p></p>';
                }
            },
            
          },
         {  className: "state",
            data:null,
            render: function ( data, type, row ) {
                if(row.admin_status){
                    return "Admin Disapproved";
                }
                else if(row.qa_status){
                    return "QC Disapproved";
                }
                else{
                    if(((row.old_value_edi == row.old_value_fs) && (row.old_value_fs == row.old_value_tr) && (row.old_value_tr == row.old_value_edi))
                    && ((row.new_value_edi == row.new_value_fs) && (row.new_value_fs == row.new_value_tr) && (row.new_value_tr == row.new_value_edi))
                    && ((row.payment_date_edi == row.payment_date_fs) && (row.payment_date_fs == row.payment_date_tr) && (row.payment_date_tr == row.payment_date_edi))
                    && ((row.record_date_edi == row.record_date_fs) && (row.record_date_fs == row.record_date_tr) && (row.record_date_tr == row.record_date_edi))
                    && ((row.currency_edi == row.currency_fs) && (row.currency_fs == row.currency_tr) && (row.currency_tr == row.currency_edi))){
                    AddPreApproved_CA(row.tr_master_corporate_action_id,row.global_event_id,row.ric,row.mic,row.isin,row.ca_type,row.effective_date,row.adjustment_factor_tr,row.currency_tr,row.record_date_tr,row.payment_date_tr);
                    return "Pre Approved"
                    }
                    else{
                        return "Pending Action"
                    }
                }
                
         }},
         {
            className:"comment",
             data:null,
             render: function ( data, type, row ) {
                 if(row.user_comment)
                 {
                     return row.user_comment;
                 }
                 else
                 {
                    data = "../static/images/comment.jpg";
                    return '<a onclick="comment_ca('+row.global_event_id+')"><img src="' +data+'"></a>';
                 }
                
        }},
        ]

    } );
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    $('#example tbody').on('click', 'td.my_second_class', function () {
    var tr = $(this).parents('tr');
    var row = table.row( tr );
    document.getElementById("id").value = row.data().global_event_id;
    document.getElementById("master_id").value = row.data().edi_master_corporate_action_id;
    document.getElementById("mic").value = row.data().mic;
    document.getElementById("ric").value = row.data().ric;
    document.getElementById("isin").value = row.data().isin;
    if ((row.data().old_value_tr == row.data().aold_value_edi) && (row.data().old_value_tr == row.data().old_value_fs)){
        row.data().old_value_gc=row.data().old_value_tr;
    }
    else{
        row.data().old_value_gc='';
    }
    document.getElementById("old_value").value = row.data().old_value_gc;
    if ((row.data().currency_tr == row.data().currency_edi) && (row.data().currency_tr == row.data().currency_fs)){
        row.data().Currency=row.data().currency_tr;
    }
    else{
        row.data().Currency='';
    }
    document.getElementById("Currency").value = row.data().Currency;
   
    var comments = row.data().user_comment;
    console.log(comments);
    document.getElementById("Comments").value = comments;

    document.getElementById("Name").value = row.data().security_name;

    if ((row.data().record_date_tr == row.data().record_date_edi) && (row.data().record_date_tr == row.data().record_date_fs)){
        row.data().RecordDate=row.data().record_date_tr;
    }
    else{
        row.data().RecordDate='';
    }
    document.getElementById("RecordDate").value = row.data().RecordDate;
    

    if ((row.data().payment_date_tr == row.data().payment_date_edi) && (row.data().payment_date_tr == row.data().payment_date_fs)){
        row.data().PaymentDate=row.data().payment_date_tr;
    }
    else{
        row.data().PaymentDate='';
    }
    document.getElementById("PaymentDate").value = row.data().PaymentDate;
    var analyst= $('input[name=analyst]').val();
    if(analyst=="True"){modal.style.display = "block"
                        document.getElementById("modal-content-msg").style.display = "none"
                        document.getElementById("modal-content").style.display= "block"};
    var id = 
    adjustment_var = $(this).closest('td').siblings('td.adjustment_factor');
    cuurency_var = $(this).closest('td').siblings('td.currency');
    name_var = $(this).closest('td').siblings('td.security_name');
    status_var = $(this).closest('td').siblings('td.status');
    state_var = $(this).closest('td').siblings('td.state');
    comment_var = $(this).closest('td').siblings('td.comment');
    record_var = $(this).closest('td').siblings('td.record_date');
    payment_var = $(this).closest('td').siblings('td.payment_date');


    } );


    // $('#example tbody').on('click', 'td.my_approve_class', function () {
    //     var tr = $(this).parents('tr');
    //     var data = table.row( tr ).data();
        
    //     var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
    //     var type = $('input[name=type]').val();
    //     if(type == "True"){
    //         $.ajax({
    //             type: 'POST',
    //             headers: { "X-CSRFToken": csrfToken },
    //             url: "approveCA/"+data.id,
    //             data: data,
    //             success: function (response) {
                
    //             },
    //             error: function (error) {
    //                 alert(error);
    //             },
    //         });
    //     }
        
    //     } );

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    $("#editform").submit(function(e) {
        $('input[name="predata"]').val("true");
        e.preventDefault(); // avoid to execute the actual submit of the form.
        var someData = [
            {"master_corporate_action_id":$('input[name=master_id]').val(),"global_event_id":$('input[name=id]').val(), "ca_id": null, "comment":$('input[name=comments]').val(),"analyst_status": "True","source": null, "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(), "ca_type":null, "exdate":null,"adjustment_factor":$('input[name=adjustment_factor]').val(),"currency":$('input[name=currency]').val(),"record_date":$('input[name=RecordDate]').val(),"payment_date":$('input[name=PaymentDate]').val(),"state":"Manual Approval"}
         ];
        var saved_data = JSON.parse(localStorage.getItem("updated_data"));
        var i=saved_data.findIndex(item=>item.global_event_id===$('input[name=id]').val());
        if(i===-1){
            var final_data = saved_data.concat(someData);
            localStorage.setItem("updated_data",JSON.stringify(final_data));
        }
        adjustmemt_var.html('<h8>' +$('input[name=adjustment_factor]').val()+'</h8>');
        cuurency_var.html('<h8>' +$('input[name=currency]').val()+'</h8>');
        name_var.html('<h8>' +$('input[name=Name]').val() +'</h8>');
        status_var.html('<h8>Confirmed</h8>');
        state_var.html('<h8>Manual Approval</h8>');
        comment_var.html('<h8>' +$('input[name=comments]').val()+ '</h8>');
        record_var.html('<h8>' +$('input[name=RecordDate]').val()+ '</h8>');
        payment_var.html('<h8>'+$('input[name=PaymentDate]').val()+ '</h8>');
        modal.style.display = "none";
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    });

  
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            if(((row.old_value_edi == row.old_value_fs) && (row.old_value_fs == row.old_value_tr) && (row.old_value_tr == row.old_value_edi))
                    && ((row.new_value_edi == row.new_value_fs) && (row.new_value_fs == row.new_value_tr) && (row.new_value_tr == row.new_value_edi))
            && ((row.data().payment_date_edi == row.data().payment_date_fs) && (row.data().payment_date_fs == row.data().payment_date_tr) && (row.data().payment_date_tr == row.data().payment_date_edi))
            && ((row.data().record_date_edi == row.data().record_date_fs) && (row.data().record_date_fs == row.data().record_date_tr) && (row.data().record_date_tr == row.data().record_date_edi))
            && ((row.data().currency_edi == row.data().currency_fs) && (row.data().currency_fs == row.data().currency_tr) && (row.data().currency_tr == row.data().currency_edi))){
                $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                row.child.hide();
                tr.removeClass('shown');
            }
            
            else{
            saved_data = JSON.parse(localStorage.getItem("updated_data"));
            var i=saved_data.findIndex(item=>item.global_event_id===row.data().global_event_id);
            if(i!==-1){
                var r = confirm('Do you want to leave the changes in this CA ?');
                if(r == true){
                    remove(row.data().global_event_id);   
                    
                    $(this).closest('td').siblings('td.status').html('<p></p>');
                    row.child.hide();
                    tr.removeClass('shown');
                }
            }
            else{
            // This row is already open - close it
            // remove(row.data().global_event_id);
            if(row.data().admin_status){
                if(row.data().analyst_status=="True"){
                    $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                }
                else{
                    $(this).closest('td').siblings('td.status').html('<h8>Invalidated</h8>');
                }
            }
            else if(row.data().qc_status){
                if(row.data().analyst_status=="True"){
                    $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                }
                else{
                    $(this).closest('td').siblings('td.status').html('<h8>Invalidated</h8>');
                }
            }
            else{
            $(this).closest('td').siblings('td.status').html('<p></p>');}
            row.child.hide();
            tr.removeClass('shown');
            }
        }
        }
        else {
            // Open this row
            document.getElementById("mic").value = row.data().mic;
            document.getElementById("ric").value = row.data().ric;
            document.getElementById("isin").value = row.data().isin;
            data = "../static/images/ok.jpg";
            cancel = "../static/images/cancel.png";
            value= '<a onclick="confirm_analyst_ca(this,'+row.data().global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.data().global_event_id+','+row.data().tr_master_corporate_action_id+')"><img src="' +cancel+'"></a>';
            $(this).closest('td').siblings('td.status').html(value);
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    } );
	
// } );


// $('#example tbody').on('click', 'td.details-control', function () {
//     var tr = $(this).parents('tr');
//     var row = table.row( tr );

//     if ( row.child.isShown() ) {
        // This row is already open - close it
    //     row.child.hide();
    //     tr.removeClass('shown');
    // }
    // else {
        // Open this row
//         row.child(format(row.data())).show();
//         tr.addClass('shown');
//     }
} );

function AddPreApproved_CA(master_corporate_action_id,global_id,ric,mic,isin,ca_type,exdate,grossamount,currency,record_date,payment_date){
   
    var someData = [
        {"master_corporate_action_id":master_corporate_action_id,"global_event_id": global_id, "ca_id": null, "comment":null,"analyst_status": "True","source": null, "ric": ric, "mic": mic, "isin":isin, "ca_type":ca_type, "exdate":exdate,"adjustment_factor":grossamount,"currency":currency,"record_date":record_date,"payment_date":payment_date,"state":"Pre Approved"}
     ];
    var saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===global_id);
    if(i===-1){
        var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
    }
   
}
function newv(check,d,ca,mca){
    $('input[name="predata"]').val("true");
    var $others = $('input[type="checkbox"][name='+ d +']').not(check);
    var master_corporate = mca+"m0";
    var source = ca+"f0";
    var ric = ca+"f1";
    var isin = ca+"f2";
    var mic = ca+"f3";
    var ca_type = ca+"f4";
    var exdate = ca+"f5";
    var adjustment_factor = ca+"f6";
    var currency = ca+"f7";
    var recorddate = ca+"f8";
    var paymentdate = ca+"f9";
    var source_value = document.getElementById(source).innerHTML;
    var ric_value = document.getElementById(ric).innerHTML;
    var mic_value = document.getElementById(mic).innerHTML;
    var isin_value = document.getElementById(isin).innerHTML;
    var catype_value = document.getElementById(ca_type).innerHTML;
    var ex_value = document.getElementById(exdate).innerHTML;
    var adjustment_factor_value = document.getElementById(adjustment_factor).innerHTML;
    var curr_value = document.getElementById(currency).innerHTML;
    var record_value = document.getElementById(recorddate).innerHTML;
    var payment_value = document.getElementById(paymentdate).innerHTML;
    var dd = document.getElementById(master_corporate).value;
    if (check.checked) {
        $others.prop('checked', false)
        if($others.length >0){
            var id = $others.attr("id");
            // saved_data.find(function(item,i){
            //     if(item.global_event_id === d){
            //         saved_data.splice(i,1);
            //     }
            // });
            remove(d);
        }
    }

    var someData = [

        {"master_corporate_action_id":dd,"global_event_id": d, "ca_id": ca, "comment":null,"analyst_status": "unknown","source": source_value, "ric": ric_value, "mic": mic_value, "isin":isin_value, "ca_type":catype_value, "exdate":ex_value,"adjustment_factor":adjustment_factor_value,"currency":curr_value,"record_date":record_value,"payment_date":payment_value}
     ];
    
    if($(check).prop("checked") == false)
    {
        $(check).closest('td').siblings('td.status').html('<p></p>');
        remove_ca(ca);
    }
    else{
        var saved_data = JSON.parse(localStorage.getItem("updated_data"));
        var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
        }
    // document.getElementById(d).style.backgroundColor="lightblue";
}


function remove(data){
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        saved_data.splice(i,1);
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }
}
function remove_ca(data){
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.ca_id===data);
    if(i!==-1){
        saved_data.splice(i,1);
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }
}

function confirm_analyst_ca(check,data){
    $('input[name="predata"]').val("true");
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        $(check).closest('td.status').html("<h8 style='color:green;'>Confirmed</h8>");    
        saved_data[i].analyst_status="True";
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }
    else{
        alert('Please select any datasource before confirm');
    }

}

function invalidate_analyst_ca(check,data,master_id){
    $('input[name="predata"]').val("true");
    $(check).closest('td.status').html("<h8 style='color:red;'>Invalidated</h8>");  
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        saved_data[i].analyst_status="False";
        localStorage.setItem("updated_data",JSON.stringify(saved_data));

    }
    else{
        var someData = [
            {"master_corporate_action_id":master_id,"global_event_id": data, "ca_id": null, "comment":null,"analyst_status": "False","source": null, "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(),"ca_type":null, "exdate":null,"adjustment_factor":null,"currency":null,"record_date":null,"payment_date":null}
         ];
         var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
    }
    console.log(JSON.parse(localStorage.getItem("updated_data")));
}


function comment_ca(data){
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
document.getElementById("modal-content").style.display='none';
document.getElementById("modal-content-msg").style.display='block';
var text = document.getElementById("commentdata");
text.innerHTML = "<label>Add Comment</label><br><br><input type ='text' name= 'comm_ca' id='comm_ca' style='width:90%; height:40px;'>";
var divdata = document.getElementById("modalfooter");


divdata.innerHTML="<a onclick='Addcomment_ca("+data+")' class='btn btn-success' id='addcomment' data-dismiss='modal'>SAVE</a>";
modal.style.display = "block";
}

function Addcomment_ca(data){
    $('input[name="predata"]').val("true");
    var comm = $('#comm_ca').val();
    console.log(data);
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        saved_data[i].comment=comm;
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}