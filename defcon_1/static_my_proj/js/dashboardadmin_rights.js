function format ( d ) {
    // `d` is the original data object for the row
   
    var table = '<input type="hidden" name="idclass" value=' + d.global_event_id + '>' +'<table cellspacing="0" rules="all" border="1" id="Table1" class="display">'+
    '<tr><th style="white-space: normal; width:4%;">' + '</th>' +
    '<th style="white-space: normal;">' +  'RIC' + '</th>' + 
    '<th style="white-space: normal;">' +  'ISIN' +'</th>' + 
    '<th style="white-space: normal;">' + 'MIC' + '</th>' +
    '<th style="white-space: normal;">' +  'CA_Type' + '</th>' + 
    '<th style="white-space: normal;">' +  'ExDate' + '</th>' + 
    '<th style="white-space: normal;">' +  'Ratio' + '</th>'+
    '<th style="white-space: normal;">' +  'Offered_Price' + '</th>'+
    '<th style="white-space: normal;">' +  'start_subscription' + '</th>' + 
    '<th style="white-space: normal;">' +  'end_subscription' + '</th>' + 
    '<th style="white-space: normal; width:5%;">' +  'Curr' + '</th>' + 
    '<th style="white-space: normal;">' +  'RecordDate' + '</th>' + 
    '<th style="white-space: normal;">' +  'PaymentDate' +'</th></tr>'
    if(d.uc_master_corporate_action_id !=null){
        table +=  '<input type="hidden" id="'+d.uc_master_corporate_action_id+'m0" value=' + d.uc_master_corporate_action_id + '><tr id="'+d.global_event_id+'" >'
        if(d.uc_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=
        '<td id="'+d.uc_ca_id+'f0" style="white-space: normal; width:5%;">' + 'UCA ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_uc+'"></a></td>'
        }
        else if(d.uc_ca_status==='U'){
        imag1 = "../static/images/edit.png";
        table +=
        '<td id="'+d.uc_ca_id+'f0" style="white-space: normal; width:5%;">' + 'UCA ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_uc+'"></a></td>'
        
        }
        else if(d.uc_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
            table +=
            '<td id="'+d.uc_ca_id+'f0" style="white-space: normal; width:5%;">' + 'UCA ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_uc+'"></a></td>'
        }
        else{
            imag1 = "../static/images/edit.png";
            table +=
            '<td id="'+d.uc_ca_id+'f0" style="white-space: normal; width:5%;">' + 'UCA ' +'</td>'
        }
        table +=
        '<td id="'+d.uc_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.uc_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.uc_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.uc_ca_id+'f4" style="white-space: normal;">' +  d.uc_ca_type + '</td>' + 
        '<td id="'+d.uc_ca_id+'f5" style="white-space: normal;">' +  d.uc_effective_date +'</td>' + 
        '<td id="'+d.uc_ca_id+'f11" style="white-space: normal;">' +  d.ratio_uc + '</td>'+ 
        '<td id="'+d.uc_ca_id+'f12" style="white-space: normal;">' +  d.offered_price_uc + '</td>'+ 
        '<td id="'+d.uc_ca_id+'f6" style="white-space: normal;">' +  d.start_subscription_uc +'</td>' + 
        '<td id="'+d.uc_ca_id+'f10" style="white-space: normal;">' +  d.end_subscription_uc +'</td>' + 
        '<td id="'+d.uc_ca_id+'f7" style="white-space: normal; width:5%;">' +  d.currency_uc + '</td>' + 
        '<td id="'+d.uc_ca_id+'f8" style="white-space: normal;">' +  d.record_date_uc + '</td>' + 
        '<td id="'+d.uc_ca_id+'f9" style="white-space: normal;">' +  d.payment_date_uc +'</td></tr>'
    }
    else{
    if(d.tr_master_corporate_action_id !=null){
        table +=  '<input type="hidden" id="'+d.tr_master_corporate_action_id+'m0" value=' + d.tr_master_corporate_action_id + '><tr id="'+d.global_event_id+'" >'
        if(d.tr_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=
        '<td id="'+d.tr_ca_id+'f0" style="white-space: normal; width:5%;">' + 'TR ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_tr+'"></a></td>'
        }
        else if(d.tr_ca_status==='U'){
        imag1 = "../static/images/edit.png";
        table +=
        '<td id="'+d.tr_ca_id+'f0" style="white-space: normal; width:5%;">' + 'TR ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_tr+'"></a></td>'
        
        }
        else if(d.tr_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
            table +=
            '<td id="'+d.tr_ca_id+'f0" style="white-space: normal; width:5%;">' + 'TR ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_tr+'"></a></td>'
        }
        else{
            imag1 = "../static/images/edit.png";
            table +=
            '<td id="'+d.tr_ca_id+'f0" style="white-space: normal; width:5%;">' + 'TR ' +'</td>'
        }
        table +=
        '<td id="'+d.tr_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.tr_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.tr_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.tr_ca_id+'f4" style="white-space: normal;">' +  d.tr_ca_type + '</td>' + 
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.tr_effective_date +'</td>' + 
        '<td id="'+d.tr_ca_id+'f11" style="white-space: normal;">' +  d.ratio_tr + '</td>'+ 
        '<td id="'+d.tr_ca_id+'f12" style="white-space: normal;">' +  d.offered_price_tr + '</td>'+ 
        '<td id="'+d.tr_ca_id+'f6" style="white-space: normal;">' +  d.start_subscription_tr +'</td>' + 
        '<td id="'+d.tr_ca_id+'f10" style="white-space: normal;">' +  d.end_subscription_tr +'</td>' + 
        '<td id="'+d.tr_ca_id+'f7" style="white-space: normal; width:5%;">' +  d.currency_tr + '</td>' + 
        '<td id="'+d.tr_ca_id+'f8" style="white-space: normal;">' +  d.record_date_tr + '</td>' + 
        '<td id="'+d.tr_ca_id+'f9" style="white-space: normal;">' +  d.payment_date_tr +'</td></tr>'
    }
    if(d.edi_master_corporate_action_id !=null){
        table += '<input type="hidden" id="'+d.edi_master_corporate_action_id+'m0" value=' + d.edi_master_corporate_action_id + '><tr id="'+d.global_event_id+'">'
        if(d.edi_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=
        '<td id="'+d.edi_ca_id+'f0" style="white-space: normal; width:5%;">' + 'EDI ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_edi+'"></a></td>'
        }
        else if(d.edi_ca_status==='U'){
        imag1 = "../static/images/edit.png";
        table +=
        '<td id="'+d.edi_ca_id+'f0" style="white-space: normal; width:5%;">' + 'EDI ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_edi+'"></a></td>' 
        }
        else if(d.edi_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
            table +=
            '<td id="'+d.edi_ca_id+'f0" style="white-space: normal; width:5%;">' + 'EDI ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_edi+'"></a></td>' 
        }
        else{
            imag1 = "../static/images/edit.png";
            table +=
            '<td id="'+d.edi_ca_id+'f0" style="white-space: normal; width:5%;">' + 'EDI ' +'</td>'
        }
        table +=
        '<td id="'+d.edi_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.edi_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.edi_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.edi_ca_id+'f4" style="white-space: normal;">' +  d.edi_ca_type + '</td>' + 
        '<td id="'+d.edi_ca_id+'f5" style="white-space: normal;">' +  d.edi_effective_date +'</td>' + 
        '<td id="'+d.edi_ca_id+'f11" style="white-space: normal;">' +  d.ratio_edi + '</td>'+ 
        '<td id="'+d.edi_ca_id+'f12" style="white-space: normal;">' +  d.offered_price_edi + '</td>'+ 
        '<td id="'+d.edi_ca_id+'f6" style="white-space: normal;">' +  d.start_subscription_edi +'</td>' + 
        '<td id="'+d.edi_ca_id+'f10" style="white-space: normal;">' +  d.end_subscription_edi +'</td>' + 
        '<td id="'+d.edi_ca_id+'f7" style="white-space: normal; width:5%;">' +  d.currency_edi + '</td>' + 
        '<td id="'+d.edi_ca_id+'f8" style="white-space: normal;">' +  d.record_date_edi + '</td>' + 
        '<td id="'+d.edi_ca_id+'f9" style="white-space: normal;">' +  d.payment_date_edi +'</td></tr>'
    }
    if(d.fs_master_corporate_action_id !=null){
        table += '<input type="hidden" id="'+d.fs_master_corporate_action_id+'m0" value=' + d.fs_master_corporate_action_id + '><tr id="'+d.global_event_id+'">'
        if(d.fds_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=
            '<td id="'+d.fs_ca_id+'f0" style="white-space: normal; width:5%;">' + 'FDS ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_fs+'"></a></td>'
        }
        else if (d.fds_ca_status==='U'){
            imag1 = "../static/images/edit.png";
            table +=
            '<td id="'+d.fs_ca_id+'f0" style="white-space: normal; width:5%;">' + 'FDS ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_fs+'"></a></td>'
        }  
        else if(d.fds_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
            table +=
            '<td id="'+d.fs_ca_id+'f0" style="white-space: normal; width:5%;">' + 'FDS ' +'<a><img src="' +imag1+'" title = "Modified At = '+d.uts_fs+'"></a></td>'
        }
        else{
            imag1 = "../static/images/edit.png";
            table +=
            '<td id="'+d.fs_ca_id+'f0" style="white-space: normal; width:5%;">' + 'FDS ' +'</td>'
        }
        table +=    
            '<td id="'+d.fs_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.fs_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.fs_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.fs_ca_id+'f4" style="white-space: normal;">' +  d.fs_ca_type + '</td>' + 
        '<td id="'+d.fs_ca_id+'f5" style="white-space: normal;">' +  d.fs_effective_date +'</td>' + 
        '<td id="'+d.fs_ca_id+'f11" style="white-space: normal;">' +  d.ratio_fs + '</td>'+ 
        '<td id="'+d.fs_ca_id+'f12" style="white-space: normal;">' +  d.offered_price_fs + '</td>'+ 
        '<td id="'+d.fs_ca_id+'f6" style="white-space: normal;">' +  d.start_subscription_fs +'</td>' + 
        '<td id="'+d.fs_ca_id+'f10" style="white-space: normal;">' +  d.end_subscription_fs +'</td>' + 
        '<td id="'+d.fs_ca_id+'f7" style="white-space: normal; width:5%;">' +  d.currency_fs + '</td>' + 
        '<td id="'+d.fs_ca_id+'f8" style="white-space: normal;">' +  d.record_date_fs + '</td>' + 
        '<td id="'+d.fs_ca_id+'f9" style="white-space: normal;">' +  d.payment_date_fs +'</td></tr>'
    }
}
   table+= '</table>'
   return table;
}
$(document).ready(function() {
var start=[""];
var comment_gc;
localStorage.setItem("updated_data", JSON.stringify(start));
$('#submitCA').click(function(){
    var data_upload=  localStorage.getItem("updated_data");

    var saved_data = JSON.parse(localStorage.getItem("updated_data"))
    var i=saved_data.findIndex(item=>item.admin_status==="unknown");
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
                url: "admin_dashboard_data/",
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
                url: "admin_dashboard_data/",
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
        "master_ca_type": "Ord_Div",
        "ExDate": "2011/04/25",
        "trGrossAmt": "320",
        "ediGrossAmt": "20",
        "fdsGrossAmt": "320",
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
    user_role = 'Admin',
    master_ca_type = 'ord_div';    
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
    user_role='Admin',
    master_ca_type = 'ord_div';
}
if(dashboard=="Analyst"){
    user_role='Analyst';
}
console.log(user_role);
var formData = {
    'admin' : user_role,
    'master_ca_type':"rights"
};
var table = $('#example').DataTable( {
    // dom: 'Bfltip',
    //     buttons: [
    //         'csv'
    //     ],
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

            
            { "data": "ric" },
            { "data": "mic" },
            { "data": "isin" },
            {   className: "security_name",
                "data": "security_name",
                // render: $.fn.dataTable.render.ellipsis(10, false )
            },
            // render: function ( data, type, row ) {
            //     return data.length > 10 ?
            //         data.substr( 0, 10 ) +'…' :
            //         data;
            // }},
            { "data": "master_ca_type" },
            { "data": "master_effective_date" },
            { "data": "ratio_gc" },
            { "data": "offered_price_gc" },
            {   "data": "currency_gc"
                },
            { 
                "data": "record_date_gc"
            },
            {  "data": "payment_date_gc"
                },
            { "data": "start_subscription_gc"},
            { "data": "end_subscription_gc"},  
            {
                render: function ( data, type, row ) {
                    if(row.analyst_status=="True"){
                        return "Confirmed";
                    }
                    else{
                        return "Invalidated";
                    }
                     
                }},
            {
                className: "status",
            data: null,
            render: function ( data, type, row ) {
            //         data = "../static/images/ok.jpg";
            //         cancel = "../static/images/cancel.png";
            //         return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+')"><img src="' +cancel+'"></a>';
            // }
            return '<p></p>';},
            
          },
         {  className: "state",
            data:null,
            render: function ( data, type, row ) {
                user_ca_id = row.uc_master_corporate_action_id
                if(row.uc_master_corporate_action_id != null){  
                    if(row.analyst_status=="False"){
                        return "Pending Action"
                    }
                    else{
                    AddPreApproved_CA(user_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.master_effective_date,row.ratio_uc,row.offered_price_uc,row.start_subscription_uc,row.end_subscription_uc,row.currency_uc,row.record_date_uc,row.payment_date_uc,row.user_comment);
                    return "Pre Approved"
                    }
                }
                else{
                master_ca_id = row.tr_master_corporate_action_id || row.edi_master_corporate_action_id || row.fs_master_corporate_action_id
                if (row.state == null){
                    if(((row.spunoff_name_edi == row.spunoff_name_fs) && (row.spunoff_name_fs == row.spunoff_name_tr) && (row.spunoff_name_tr == row.spunoff_name_edi))
                    && ((row.spunoff_isin_edi == row.spunoff_isin_fs) && (row.spunoff_isin_fs == row.spunoff_isin_tr) && (row.spunoff_isin_tr == row.spunoff_isin_edi))
                    && ((row.ratio_edi == row.ratio_fs) && (row.ratio_fs == row.ratio_tr) && (row.ratio_tr == row.ratio_edi))
                    && ((row.offered_price_edi == row.offered_price_fs) && (row.offered_price_fs == row.offered_price_tr) && (row.offered_price_tr == row.offered_price_edi))
                    && ((row.tr_effective_date == row.fs_effective_date) && (row.fs_effective_date == row.edi_effective_date) && (row.tr_effective_date == row.edi_effective_date))){
                       
                        return "Pre Approved"
                    }
                    else{
                        return "Pending Action"
                    }
                }
                else{
                    if(row.state=="Pre Approved"){
                        AddPreApproved_CA(master_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.master_effective_date,row.ratio_tr,row.offered_price_tr,row.start_subscription_tr,row.end_subscription_tr,row.currency_tr,row.record_date_tr,row.payment_date_tr,row.user_comment);
                    }
                    return row.state
                }
            }
         }},
         {
            className:"comment",
            render: function ( data, type, row ) {
                if(row.user_comment !== null && row.user_comment !== "null")
                {
                    
                    imag1 = "../static/images/comment.png";
                    return '<td><a><img src="' +imag1+'" onclick= alert("'+row.user_comment+'")  title = "'+row.user_comment+'"></a></td>';
                }
                else
                {
                   data = "../static/images/comment.jpg";
                   return '<a onclick="comment_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>';
                }
               
       }},
        ],
        "fnRowCallback": function(row, data, dataIndex) {
            if (((data.start_subscription_edi == data.start_subscription_fs) && (data.start_subscription_fs == data.start_subscription_tr) && (data.start_subscription_tr == data.start_subscription_edi))
            && ((data.end_subscription_edi == data.end_subscription_fs) && (data.end_subscription_fs == data.end_subscription_tr) && (data.end_subscription_tr == data.end_subscription_edi))
            && ((data.ratio_edi == data.ratio_fs) && (row.ratio_fs == data.ratio_tr) && (data.ratio_tr == data.ratio_edi))
            && ((data.offered_price_edi == data.offered_price_fs) && (data.offered_price_fs == data.offered_price_tr) && (data.offered_price_tr == data.offered_price_edi))
            && ((data.currency_edi == data.currency_fs) && (data.currency_fs == data.currency_tr) && (data.currency_tr == data.currency_edi))
            && ((data.tr_effective_date == data.fs_effective_date) && (data.fs_effective_date == data.edi_effective_date) && (data.tr_effective_date == data.edi_effective_date))) {
                $(row).css("background-color", "#d6f5d6");
              }
              else if(((data.tr_master_corporate_action_id != null) && (data.edi_master_corporate_action_id != null) && (data.fs_master_corporate_action_id != null))
              && (((data.start_subscription_edi == data.start_subscription_fs) && (data.end_subscription_edi == data.end_subscription_fs) && (data.payment_date_edi == data.payment_date_fs) && (data.ratio_edi == data.ratio_fs) && (data.offered_price_edi == data.offered_price_fs) && (data.record_date_edi == data.record_date_fs) && (data.currency_edi == data.currency_fs) && (data.fs_effective_date == data.edi_effective_date))
              || ((data.start_subscription_fs == data.start_subscription_tr) && (data.end_subscription_fs == data.end_subscription_tr) && (data.payment_date_fs == data.payment_date_tr) && (row.ratio_fs == data.ratio_tr) && (data.offered_price_fs == data.offered_price_tr) && (data.record_date_fs == data.record_date_tr) && (data.currency_fs == data.currency_tr) && (data.tr_effective_date == data.fs_effective_date))
              || ((data.start_subscription_tr == data.start_subscription_edi) && (data.end_subscription_tr == data.end_subscription_edi) && (data.ratio_tr == data.ratio_edi) && (data.payment_date_tr == data.payment_date_edi) && (data.offered_price_tr == data.offered_price_edi) && (data.record_date_tr == data.record_date_edi) && (data.currency_tr == data.currency_edi) && (data.tr_effective_date == data.edi_effective_date)))){
                  $(row).css("background-color", "#ffffb3");
              }
              else if(((data.tr_master_corporate_action_id != null) && (data.edi_master_corporate_action_id != null) && (data.fs_master_corporate_action_id != null))
              && (((data.start_subscription_edi !== data.start_subscription_fs) || (data.end_subscription_edi !== data.end_subscription_fs) || (data.payment_date_edi !== data.payment_date_fs) || (data.ratio_edi !== data.ratio_fs) || (data.offered_price_edi !== data.offered_price_fs) || (data.record_date_edi !== data.record_date_fs) || (data.currency_edi !== data.currency_fs) || (data.fs_effective_date !== data.edi_effective_date))
              || ((data.start_subscription_fs !== data.start_subscription_tr) || (data.end_subscription_fs !== data.end_subscription_tr) || (data.payment_date_fs !== data.payment_date_tr) || (row.ratio_fs !== data.ratio_tr) || (data.offered_price_fs !== data.offered_price_tr) || (data.record_date_fs !== data.record_date_tr) || (data.currency_fs !== data.currency_tr) || (data.tr_effective_date !== data.fs_effective_date))
              || ((data.start_subscription_tr !== data.start_subscription_edi) || (data.end_subscription_tr !== data.end_subscription_edi) || (data.ratio_tr !== data.ratio_edi) || (data.payment_date_tr !== data.payment_date_edi) || (data.offered_price_tr !== data.offered_price_edi) || (data.record_date_tr !== data.record_date_edi) || (data.currency_tr !== data.currency_edi) || (data.tr_effective_date !== data.edi_effective_date)))){
                  $(row).css("background-color", "#ffcccc");
              }
        }

    } );
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    $('#example tbody').on('click', 'td.my_second_class', function () {
    var tr = $(this).parents('tr');
    var row = table.row( tr );
    document.getElementById("id").value = row.data().global_event_id;
    if ((row.data().ratio_tr == row.data().ratio_edi) && (row.data().ratio_tr == row.data().ratio_fs)){
        row.data().ratio_gc=row.data().ratio_tr;
    }
    else{
        row.data().ratio_gc='';
    }
    document.getElementById("ratio").value = row.data().ratio_gc;
    if ((row.data().offered_price_tr == row.data().offered_price_edi) && (row.data().offered_price_tr == row.data().offered_price_fs)){
        row.data().offered_price_gc=row.data().offered_price_tr;
    }
    else{
        row.data().offered_price_gc='';
    }
    document.getElementById("offeredprice").value = row.data().offered_price_gc;
    if ((row.data().start_subscription_tr == row.data().start_subscription_edi) && (row.data().start_subscription_tr == row.data().start_subscription_fs)){
        row.data().start_subscription_gc=row.data().start_subscription_tr;

    }
    else{
        row.data().start_subscription_gc='';
    }
    document.getElementById("StartSubscription").value = row.data().start_subscription_gc;
    if ((row.data().end_subscription_tr == row.data().end_subscription_edi) && (row.data().end_subscription_tr == row.data().end_subscription_fs)){
        row.data().end_subscription_gc=row.data().end_subscription_tr;
    }
    else{
        row.data().end_subscription_gc='';
    }

    document.getElementById("EndSubscription").value = row.data().end_subscription_gc;
    if ((row.data().currency_tr == row.data().currency_edi) && (row.data().currency_tr == row.data().currency_fs)){
        row.data().Currency=row.data().currency_tr;
    }
    else{
        row.data().Currency='';
    }
    document.getElementById("Currency").value = row.data().Currency;



    if(row.data().Comments==""){
        comments = "";
    }
    else{
        comments = row.data().Comments;
    }
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

        e.preventDefault(); // avoid to execute the actual submit of the form.
     
        var formData = {
            'id'              : $('input[name=id]').val(),
            'ratio_gc'             : $('input[name=ratio]').val(),
            'offered_price_gc'             : $('input[name=offeredprice]').val(),
            'start_subscription_gc'             : $('input[name=StartSubscription]').val(),
            'end_subscription_gc'             : $('input[name=EndSubscription]').val(),
            'currency'    : $('input[name=currency]').val(),
            'comments'    : $('input[name=comments]').val(),
        };
        var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
        $.ajax({
            type: 'POST',
            headers: { "X-CSRFToken": csrfToken },
            url: "editCA/"+formData.id,
            data: formData,
            success: function (response) {
                modal.style.display = "none";
            },
            error: function (error) {
                alert(error);
            },
         });
    });

  
	$('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) { 
            saved_data = JSON.parse(localStorage.getItem("updated_data"));
            var i=saved_data.findIndex(item=>item.global_event_id===row.data().global_event_id);
            if(i!==-1){
                var r = confirm('Do you want to leave the changes stored for this CA ?');
                if(r == true){
                    remove(row.data().global_event_id);   
                    
                    $(this).closest('td').siblings('td.status').html('<p></p>');
                    row.child.hide();
                    tr.removeClass('shown');
                }
            }
            else{  
            $(this).closest('td').siblings('td.status').html('<p></p>');
            row.child.hide();
            tr.removeClass('shown');
            }
        }
        else {
            // Open this row
            data = "../static/images/ok.jpg";
            cancel = "../static/images/cancel.png";
            value= '<a onclick="confirm_analyst_ca(this,'+row.data().global_event_id+',\'' + row.data().user_comment + '\')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.data().global_event_id+',\'' + row.data().user_comment + '\')"><img src="' +cancel+'"></a>';
    
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
function AddPreApproved_CA(master_corporate_action_id,global_id,ric,mic,isin,master_ca_type,exdate,ratio_gc,offered_price_gc,start_subscription_gc,end_subscription_gc,currency,record_date,payment_date,comment_a){
    var someData = [
        {"master_corporate_action_id":master_corporate_action_id,"global_event_id": global_id, "ca_id": null, "comment":comment_a,"admin_status": "True","source": null, "ric": ric, "mic": mic, "isin":isin, "master_ca_type":master_ca_type, "exdate":exdate,"ratio_gc":ratio_gc, "offered_price_gc":offered_price_gc,"start_subscription_gc":start_subscription_gc,"end_subscription_gc":end_subscription_gc,"currency":currency,"record_date":record_date,"payment_date":payment_date,"state":"Pre Approved"}
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
    var master_ca_type = ca+"f4";
    var exdate = ca+"f5";
    var StartSubscription = ca+"f6";
    var currency = ca+"f7";
    var recorddate = ca+"f8";
    var paymentdate = ca+"f9";
    var EndSubscription = ca+"f10";
    var ratio = ca+"f11";
    var offeredprice = ca+"f12";
    var source_value = document.getElementById(source).innerHTML;
    var ric_value = document.getElementById(ric).innerHTML;
    var mic_value = document.getElementById(mic).innerHTML;
    var isin_value = document.getElementById(isin).innerHTML;
    var catype_value = document.getElementById(master_ca_type).innerHTML;
    var ex_value = document.getElementById(exdate).innerHTML;
    var ratio_value = document.getElementById(ratio).innerHTML;
    var offeredprice_value = document.getElementById(offeredprice).innerHTML;
    var start_subscription_value = document.getElementById(StartSubscription).innerHTML;
    var end_subscription_value = document.getElementById(EndSubscription).innerHTML;
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
    alert(dd);
    var someData = [

        {"master_corporate_action_id":dd,"global_event_id": d, "ca_id": ca, "comment":null,"analyst_status": "unknown","source": source_value, "ric": ric_value, "mic": mic_value, "isin":isin_value, "master_ca_type":catype_value, "exdate":ex_value,"ratio_gc":ratio_value,"offered_price_gc":offeredprice_value,"start_subscription_gc":start_subscription_value,"end_subscription_gc":end_subscription_value,"currency":curr_value,"record_date":record_value,"payment_date":payment_value}
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

function confirm_analyst_ca(check,data,comment_analyst){
    $('input[name="predata"]').val("true");
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    $(check).closest('td.status').html("<h8 style='color:green;'>Approved</h8>");    
    if(i!==-1){
       
        saved_data[i].admin_status="True";
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }
    else{
        var someData = [
            {"global_event_id": data,"comment":comment_analyst, "ca_id": null, "admin_status": "True","source": null, "ric": null, "mic": null, "isin":null, "master_ca_type":null, "exdate":null,"ratio_gc":null,"offered_price_gc":null,"start_subscription_gc":null,"end_subscription_gc":null,"currency":null,"record_date":null,"payment_date":null}
         ];
         var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }

}

function invalidate_analyst_ca(check,data,comment_analyst){
    $('input[name="predata"]').val("true");
    $(check).closest('td.status').html("<h8 style='color:red;'>Disapproved</h8>");  
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        saved_data[i].admin_status="False";
        localStorage.setItem("updated_data",JSON.stringify(saved_data));

    }
    else{
        var someData = [
            {"global_event_id": data,"comment":comment_analyst, "ca_id": null,"admin_status": "False","source": null, "ric": null, "mic": null, "isin":null, "master_ca_type":null, "exdate":null,"ratio_gc":null,"offered_price_gc":null,"start_subscription_gc":null,"end_subscription_gc":null,"currency":null,"record_date":null,"payment_date":null}
         ];
         var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
    }
    console.log(JSON.parse(localStorage.getItem("updated_data")));
}


function comment_ca(check,data){
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
document.getElementById("modal-content").style.display='none';
document.getElementById("modal-content-msg").style.display='block';
var text = document.getElementById("commentdata");
text.innerHTML = "<label>Add Comment</label><br><br><input type ='text' name= 'comm_ca' id='comm_ca' style='width:90%; height:40px;'>";
var divdata = document.getElementById("modalfooter");

comment_gc = $(check).closest('td.comment');
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
    else{
        var someData = [
            {"global_event_id": data, "ca_id": null,"admin_status":"unknown","comment":comm,"source": null, "ric": null, "mic": null, "isin":null, "master_ca_type":null, "exdate":null,"ratio_gc":null,"offered_price_gc":null,"start_subscription_gc":null,"end_subscription_gc":null,"currency":null,"record_date":null,"payment_date":null}
            ]
            var final_data = saved_data.concat(someData);
            localStorage.setItem("updated_data",JSON.stringify(final_data));
    }
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    comment_gc.html('<h8>' +comm+'</h8>');
}