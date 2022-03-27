function format ( d ,ca_id,e_id,old_id,new_id) {
    // `d` is the original data object for the row
   
    var table = '<input type="hidden" name="oldglobaleventid" value=' + d.gc_ca_id + '>' +'<input type="hidden" name="idclass" value=' + d.global_event_id + '>' +'<table cellspacing="0" rules="all" border="1" id="Table1" class="display">'+
    '<tr><th></th><th style="white-space: normal; width:4%;">' + '</th>' +
    '<th style="white-space: normal;">' +  'RIC' +'</th>' + 
    '<th style="white-space: normal;">' +  'ISIN' +'</th>' + 
    '<th style="white-space: normal;">' + 'MIC' + '</th>' +
    '<th style="white-space: normal;">' +  'CA_Type' + '</th>' + 
    '<th style="white-space: normal;">' +  'ExDate' + '</th>' + 
    '<th style="white-space: normal;">' +  'Old_Value' + '</th>' + 
    '<th style="white-space: normal;">' +  'New_Value' + '</th>' 
    if(d.uc_master_corporate_action_id !=null){
        table +=  '<input type="hidden" id="'+d.uc_master_corporate_action_id+'m0" value=' + d.uc_master_corporate_action_id + '><tr id="'+d.global_event_id+'" >'
        if(d.uc_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=   '<td><a><img src="' +imag1+'" title = "Modified At = '+d.uts_uc+'"></a></td>'}
        else if(d.uc_ca_status==='U'){
        imag1 = "../static/images/edit.png";
         table +='<td><input type="checkbox" id="1" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.uc_ca_id+','+d.uc_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')">&nbsp;&nbsp;<a><img src="' +imag1+'"  title = "Modified At = '+d.uts_uc+'"></a></td>'
        
        }
        else if(d.uc_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
         table +='<td><a><img src="' +imag1+'"  title = "Modified At = '+d.uts_uc+'"></a></td>'
        }
        else{
            table +='<td><input type="checkbox" id="1" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.uc_ca_id+','+d.uc_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')"></td>'
        }
        table +='<td id="'+d.uc_ca_id+'f0" style="white-space: normal; width:4%;">' + 'UCA' +'</td>' +
        '<td id="'+d.uc_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.uc_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.uc_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.uc_ca_id+'f4" style="white-space: normal;">' +  d.uc_ca_type + '</td>' + 
        '<td id="'+d.uc_ca_id+'f5" style="white-space: normal;">' +  d.uc_effective_date +'</td>' + 
        '<td id="'+d.uc_ca_id+'f6" style="white-space: normal;">' +  d.old_value_uc +'</td>' +
        '<td id="'+d.uc_ca_id+'f9" style="white-space: normal;">' +  d.new_value_uc +'</td>'  
    }
    else{
    if(d.tr_master_corporate_action_id !=null){
        table +=  '<input type="hidden" id="'+d.tr_master_corporate_action_id+'m0" value=' + d.tr_master_corporate_action_id + '><tr id="'+d.global_event_id+'" >'
        if(d.tr_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=   '<td><a><img src="' +imag1+'" title = "Modified At = '+d.uts_tr+'"></a></td>'}
        else if(d.tr_ca_status==='U'){
        imag1 = "../static/images/edit.png";
         table +='<td><input type="checkbox" id="1" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.tr_ca_id+','+d.tr_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')">&nbsp;&nbsp;<a><img src="' +imag1+'"  title = "Modified At = '+d.uts_tr+'"></a></td>'
        
        }
        else if(d.tr_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
         table +='<td><a><img src="' +imag1+'"  title = "Modified At = '+d.uts_tr+'"></a></td>'
        }
        else{
            table +='<td><input type="checkbox" id="1" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.tr_ca_id+','+d.tr_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')"></td>'
        }
        table +='<td id="'+d.tr_ca_id+'f0" style="white-space: normal; width:4%;">' + 'TR' +'</td>' +
        '<td id="'+d.tr_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.tr_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.tr_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.tr_ca_id+'f4" style="white-space: normal;">' +  d.tr_ca_type + '</td>' + 
        '<td id="'+d.tr_ca_id+'f5" style="white-space: normal;">' +  d.tr_effective_date +'</td>' + 
        '<td id="'+d.tr_ca_id+'f6" style="white-space: normal;">' +  d.old_value_tr +'</td>' +
        '<td id="'+d.tr_ca_id+'f9" style="white-space: normal;">' +  d.new_value_tr +'</td>'  
    }
    if(d.edi_master_corporate_action_id !=null){
        table += '<input type="hidden" id="'+d.edi_master_corporate_action_id+'m0" value=' + d.edi_master_corporate_action_id + '><tr id="'+d.global_event_id+'">'
        if(d.edi_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=   '<td><a><img src="' +imag1+'" title = "Modified At = '+d.uts_tr+'"></a></td>'}
        else if(d.edi_ca_status==='U'){
        imag1 = "../static/images/edit.png";
         table += '<td><input type="checkbox" id="2" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.edi_ca_id+','+d.edi_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')">&nbsp;&nbsp;<a><img src="' +imag1+'" title = "Modified At = '+d.uts_edi+'"></a></td>' 
        }
        else if(d.edi_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
         table +='<td><a><img src="' +imag1+'"  title = "Modified At = '+d.uts_tr+'"></a></td>'
        }
        else{
            table += '<td><input type="checkbox" id="2" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.edi_ca_id+','+d.edi_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')"></td>'
        }
        table +='<td id="'+d.edi_ca_id+'f0" style="white-space: normal; width:4%;">' + 'EDI' +'</td>' +
        '<td id="'+d.edi_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' + 
        '<td id="'+d.edi_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
        '<td id="'+d.edi_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
        '<td id="'+d.edi_ca_id+'f4" style="white-space: normal;">' +  d.edi_ca_type + '</td>' + 
        '<td id="'+d.edi_ca_id+'f5" style="white-space: normal;">' +  d.edi_effective_date +'</td>' + 
        '<td id="'+d.edi_ca_id+'f6" style="white-space: normal;">' +  d.old_value_edi +'</td>' +
        '<td id="'+d.edi_ca_id+'f9" style="white-space: normal;">' +  d.new_value_edi +'</td>'  
    }
    if(d.fs_master_corporate_action_id !=null){
        table += '<input type="hidden" id="'+d.fs_master_corporate_action_id+'m0" value=' + d.fs_master_corporate_action_id + '><tr id="'+d.global_event_id+'">'
        if(d.fds_ca_status==='D'){
            imag1 = "../static/images/delete.png";
            table +=   '<td><a><img src="' +imag1+'" title = "Modified At = '+d.uts_tr+'"></a></td>'}
        else if (d.fds_ca_status==='U'){
            imag1 = "../static/images/edit.png";
            table += '<td><input type="checkbox" id="3" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.fs_ca_id+','+d.fs_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')">&nbsp;&nbsp;<a><img src="' +imag1+'" title = "Modified At = '+d.uts_fds+'"></a></td>'
        }  
        else if(d.fds_ca_status==='T'){
            imag1 = "../static/images/asterisk.png";
         table +='<td><a><img src="' +imag1+'"  title = "Modified At = '+d.uts_tr+'"></a></td>'
        }
        else{
            table += '<td><input type="checkbox" id="3" name="'+d.global_event_id+'" onclick="newv(this,'+d.global_event_id+','+d.fs_ca_id+','+d.fs_master_corporate_action_id+',\'' + d.security_name + '\',\'' + ca_id + '\',\'' + e_id + '\',\'' + old_id + '\',\'' + new_id + '\','+d.gc_ca_id+')"></td>'
        }
        table += '<td id="'+d.fs_ca_id+'f0" style="white-space: normal; width:4%;">' + 'FDS' +'</td>' +    
            '<td id="'+d.fs_ca_id+'f1" style="white-space: normal;">' +  d.ric + '</td>' +  
            '<td id="'+d.fs_ca_id+'f2" style="white-space: normal;" >' +  d.isin +'</td>' + 
            '<td id="'+d.fs_ca_id+'f3" style="white-space: normal; ">' +  d.mic + '</td>' +
            '<td id="'+d.fs_ca_id+'f4" style="white-space: normal;">' +  d.fs_ca_type + '</td>' + 
            '<td id="'+d.fs_ca_id+'f5" style="white-space: normal;">' +  d.fs_effective_date +'</td>' + 
            '<td id="'+d.fs_ca_id+'f6" style="white-space: normal;">' +  d.old_value_fs +'</td>' +
            '<td id="'+d.fs_ca_id+'f9" style="white-space: normal;">' +  d.new_value_fs +'</td>' 
    }
}
   table+= '</table>'
   return table;
}
$(document).ready(function() {
var old_value_var;
var new_value_var;
var name_var;
var status_var;
var state_var;
var comment_var;
var start=[""];
var comment_gc;
localStorage.setItem("updated_data", JSON.stringify(start));
$('#submitCA').click(function(){
    remove_updatedelete()
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
    'master_ca_type' :"rdata"};
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
                "defaultContent": '',
                render: function ( data, type, row ) {
                    if(row.uc_ca_status=="U"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.uc_ca_status=="D"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.uc_ca_status=="T"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.uc_ca_status=="P"){
                        imag1 = "../static/images/pullback.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.tr_ca_status=="U"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.tr_ca_status=="D"){
                        imag1 = "../static/images/deleted.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                
                    if(row.edi_ca_status=="U"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.edi_ca_status=="D"){
                        imag1 = "../static/images/deleted.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                
                    if(row.fds_ca_status=="U"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.fds_ca_status=="D"){
                        imag1 = "../static/images/deleted.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.tr_ca_status=="T"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.edi_ca_status=="T"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.fds_ca_status=="T"){
                        imag1 = "../static/images/updated.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.tr_ca_status=="P"){
                        imag1 = "../static/images/pullback.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.edi_ca_status=="P"){
                        imag1 = "../static/images/pullback.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                    if(row.fds_ca_status=="P"){
                        imag1 = "../static/images/pullback.png";
                        return '<br><br><img src="' +imag1+'" >';
                    }
                }
            },
            {   className: "my_second_class",
                "orderable":      false,
                "data":           data,
                "defaultContent": ''},
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
            {   className: "ca_type_gc",
            "data":           data,
                "defaultContent": '',
                render: function ( data, type, row ) {
                if(row.uc_master_corporate_action_id != null){
                    return row.uc_ca_type
                }
                else{
                    return row.master_ca_type
                }
                } 
                },
                { className: "effective_date_gc",
                "data":           data,
                "defaultContent": '',
                render: function ( data, type, row ) {
                    if(row.uc_master_corporate_action_id != null){
                        if(row.master_effective_date != null){
                            return row.master_effective_date
                        }
                        else {
                            return row.uc_effective_date
                        }
                    }
                    else{
                    if(row.master_effective_date != null){
                        return row.master_effective_date
                    }
                    else if((row.tr_master_corporate_action_id != null) && (row.edi_master_corporate_action_id != null) && (row.fs_master_corporate_action_id != null)){
                        if((row.tr_effective_date === row.fs_effective_date) && (row.fs_effective_date === row.edi_effective_date)){
                            return row.tr_effective_date
                        }
                        else if((row.tr_effective_date !== row.fs_effective_date) || (row.fs_effective_date !== row.edi_effective_date) || (row.tr_effective_date !== row.edi_effective_date) ){
    
                        }
                        else{
                        return '';
                        }
                    }
                    else if(((row.tr_master_corporate_action_id != null) && (row.edi_master_corporate_action_id != null)) || ((row.tr_master_corporate_action_id != null) && (row.fs_master_corporate_action_id != null)) || ((row.fs_master_corporate_action_id != null) && (row.edi_master_corporate_action_id != null))){
                        if((row.tr_effective_date === row.fs_effective_date)){
                            return row.tr_effective_date
                        }
                        else if((row.fs_effective_date === row.edi_effective_date)){
                            return row.fs_effective_date
                        }
                        else if((row.tr_effective_date === row.edi_effective_date)){
                            return row.tr_effective_date
                        }
                        else{
                        return '';
                        }
                    }
                    else if((row.tr_master_corporate_action_id == null) && (row.edi_master_corporate_action_id == null)){
                        return row.fs_effective_date
                    }
                    else if((row.fs_master_corporate_action_id == null) && (row.edi_master_corporate_action_id == null)){
                        return row.tr_effective_date
                    }
                    else if((row.tr_master_corporate_action_id == null) && (row.fs_master_corporate_action_id == null)){
                        return row.edi_effective_date
                    }
                }
            }
                },
            {   className: "old_value_gc",
            "data":           data,
                "defaultContent": '',
                render: function ( data, type, row ) {
                if(row.uc_master_corporate_action_id != null){
                    return row.old_value_uc
                }
                else{
                    return row.old_value_gc
                }
                } 
                },
            {   className: "new_value_gc",
            "data":           data,
                "defaultContent": '',
                render: function ( data, type, row ) {
                if(row.uc_master_corporate_action_id != null){
                    return row.new_value_uc
                }
                else{
                    return row.new_value_gc
                }
                } 
                },
            {
                className: "status",
            render: function ( data, type, row ) {
                if(row.uc_master_corporate_action_id != null){
                    if(row.analyst_status=="False"){
                        return "Invalidated"
                    }
                    else{
                    return "Confirmed";
                    }
                }
                else{
                if(((row.tr_ca_status !== "U") && (row.tr_ca_status !== "D") && (row.edi_ca_status !== "U") && (row.edi_ca_status !== "D") && (row.fds_ca_status !== "U") && (row.fds_ca_status !== "D") && (row.tr_ca_status !== "T") && (row.fds_ca_status !== "T") && (row.edi_ca_status !== "T") && (row.tr_ca_status !== "P") && (row.fds_ca_status !== "P") && (row.edi_ca_status !== "P"))
                && (((row.old_value_edi == row.old_value_fs) && (row.old_value_fs == row.old_value_tr) && (row.old_value_tr == row.old_value_edi))
                && ((row.new_value_edi == row.new_value_fs) && (row.new_value_fs == row.new_value_tr) && (row.new_value_tr == row.new_value_edi))
                && ((row.tr_effective_date == row.fs_effective_date) && (row.fs_effective_date == row.edi_effective_date) && (row.tr_effective_date == row.edi_effective_date)))){
                    return "Confirmed";
                }
                else if(row.admin_status){
                    if(row.analyst_status){
                        if((row.tr_ca_status=="U") || (row.tr_ca_status=="D") || (row.edi_ca_status=="U") || (row.edi_ca_status=="D") || (row.fds_ca_status=="U") || (row.fds_ca_status=="D") || (row.tr_ca_status=="T") || (row.fds_ca_status=="T") || (row.edi_ca_status=="T") || (row.tr_ca_status=="P") || (row.fds_ca_status=="P") || (row.edi_ca_status=="P")){
                            if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                                AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                            data = "../static/images/ok.jpg";
                            cancel = "../static/images/cancel.png";
                            return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                        }
                        else{
                            data = "../static/images/ok.jpg";
                            cancel = "../static/images/cancel.png";
                            return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                        }
                    }
                    else{
                        return "Confirmed";
                        }
                    }    
                    else{
                        return "INvalidated";
                    }
                }
                else if(row.qc_status){
                    if(row.analyst_status){
                        if((row.tr_ca_status=="U") || (row.tr_ca_status=="D") || (row.edi_ca_status=="U") || (row.edi_ca_status=="D") || (row.fds_ca_status=="U") || (row.fds_ca_status=="D") || (row.tr_ca_status=="T") || (row.fds_ca_status=="T") || (row.edi_ca_status=="T") || (row.tr_ca_status=="P") || (row.fds_ca_status=="P") || (row.edi_ca_status=="P")){
                            if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                                AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                            data = "../static/images/ok.jpg";
                            cancel = "../static/images/cancel.png";
                            return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                        }
                        else{
                            data = "../static/images/ok.jpg";
                            cancel = "../static/images/cancel.png";
                            return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                        }
                    }
                    else{
                        return "Confirmed";
                        }
                    }    
                    else{
                        return "INvalidated";
                    }  
                }
                else if(row.tr_ca_status=="U"){
                    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                    if(row.analyst_status){
                        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                    }
                    else{
                        return '';
                    }
                }
                else{
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
            }
                else if(row.tr_ca_status=="D"){
                    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                    if(row.analyst_status){
                        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
                else{
                    return '';
                }
                }
                else{
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
            }
                else if(row.edi_ca_status=="U"){
                    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                    if(row.analyst_status){
                        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                    }
                    else{
                        return '';
                    }
                }
                else{
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
            }
                else if(row.edi_ca_status=="D"){
                    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                    if(row.analyst_status){
                        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                    }
                    else{
                        return '';
                    }
                }
                else{
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
            }
                else if(row.fds_ca_status=="U"){
                    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                    if(row.analyst_status){
                        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                    }
                    else{
                        return '';
                    }
                }
                else{
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
            }
                else if(row.fds_ca_status=="D"){
                    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                    if(row.analyst_status){
                        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                    }
                    else{
                        return '';
                    }
                }
                else{
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
            }
            else if(row.tr_ca_status=="T"){
                if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
                if(row.analyst_status){
                    AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
                data = "../static/images/ok.jpg";
                cancel = "../static/images/cancel.png";
                return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                }
                else{
                    return '';
                }
            }
            else{
                data = "../static/images/ok.jpg";
                cancel = "../static/images/cancel.png";
                return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
            }
        }
        else if(row.edi_ca_status=="T"){
            if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
            if(row.analyst_status){
                AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
            data = "../static/images/ok.jpg";
            cancel = "../static/images/cancel.png";
            return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
            }
            else{
                return '';
            }
        }
        else{
            data = "../static/images/ok.jpg";
            cancel = "../static/images/cancel.png";
            return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
        }
    }
    else if(row.fds_ca_status=="T"){
        if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
        if(row.analyst_status){
            AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
        data = "../static/images/ok.jpg";
        cancel = "../static/images/cancel.png";
        return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
        }
        else{
            return '';
        }
    }
    else{
        data = "../static/images/ok.jpg";
        cancel = "../static/images/cancel.png";
        return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
    }
}
else if(row.tr_ca_status=="P"){
    if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
    if(row.analyst_status){
        AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
    data = "../static/images/ok.jpg";
    cancel = "../static/images/cancel.png";
    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
    }
    else{
        return '';
    }
}
else{
    data = "../static/images/ok.jpg";
    cancel = "../static/images/cancel.png";
    return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
}
}
else if(row.edi_ca_status=="P"){
if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
if(row.analyst_status){
    AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
data = "../static/images/ok.jpg";
cancel = "../static/images/cancel.png";
return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
}
else{
    return '';
}
}
else{
data = "../static/images/ok.jpg";
cancel = "../static/images/cancel.png";
return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
}
}
else if(row.fds_ca_status=="P"){
if(row.master_ca_type !== null ||  row.master_effective_date !== null || row.old_value_gc !== null ||  row.new_value_gc !== null){
if(row.analyst_status){
AddUpdateDelete_CA(row.old_mca_id,row.gc_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.master_ca_type,row.security_name,row.old_value_gc,row.new_value_gc,row.record_date_gc,row.payment_date_gc,row.master_effective_date);
data = "../static/images/ok.jpg";
cancel = "../static/images/cancel.png";
return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
}
else{
return '';
}
}
else{
data = "../static/images/ok.jpg";
cancel = "../static/images/cancel.png";
return '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
}
}
                else{
                    return '<p></p>';
                }
            }
            },
            
          },
         {  className: "state",
            data:null,

            render: function ( data, type, row ) {
                user_ca_id = row.uc_master_corporate_action_id
                if(row.uc_master_corporate_action_id != null){
                    if(row.admin_status=="False"){
                        return "Admin Disapproved";
                    }
                    else if(row.qa_status=="False"){
                        return "QC Disapproved";
                    }
                    else{
                        AddPreApproved_CA(user_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.uc_ca_type,row.security_name,row.old_value_uc,row.new_value_uc,row.record_date_uc,row.payment_date_uc,row.uc_effective_date);
                        return "Pre Approved"
                    }
                }
                else{
                master_ca_id = row.tr_master_corporate_action_id || row.edi_master_corporate_action_id || row.fs_master_corporate_action_id
                if((row.tr_ca_status==='U') || (row.edi_ca_status==='U') || (row.fds_ca_status==='U') || (row.tr_ca_status==='T') || (row.edi_ca_status==='T') || (row.fds_ca_status==='T') ){
                    return "Updated";
                }
                else if((row.tr_ca_status==='D') || (row.edi_ca_status==='D') || (row.fds_ca_status==='D')){
                    return "Deleted";
                }
                // else if((row.tr_ca_status==='C') || (row.edi_ca_status==='C') || (row.fds_ca_status==='C')){
                //     return "CA_TYPE Updated"
                // }
                else{
                if(row.admin_status=="False"){
                    return "Admin Disapproved";
                }
                else if(row.qa_status=="False"){
                    return "QC Disapproved";
                }
                else{
                    if(((row.old_value_edi == row.old_value_fs) && (row.old_value_fs == row.old_value_tr) && (row.old_value_tr == row.old_value_edi))
                    && ((row.new_value_edi == row.new_value_fs) && (row.new_value_fs == row.new_value_tr) && (row.new_value_tr == row.new_value_edi))
                    && ((row.payment_date_edi == row.payment_date_fs) && (row.payment_date_fs == row.payment_date_tr) && (row.payment_date_tr == row.payment_date_edi))
                    && ((row.record_date_edi == row.record_date_fs) && (row.record_date_fs == row.record_date_tr) && (row.record_date_tr == row.record_date_edi))
                    && ((row.tr_effective_date == row.fs_effective_date) && (row.fs_effective_date == row.edi_effective_date) && (row.tr_effective_date == row.edi_effective_date))){
                    AddPreApproved_CA(master_ca_id,row.global_event_id,row.ric,row.mic,row.isin,row.tr_ca_type,row.security_name,row.old_value_tr,row.new_value_tr,row.record_date_tr,row.payment_date_tr,row.tr_effective_date);
                    return "Pre Approved"
                    }
                    else{
                        return "Pending Action"
                    }
                }
                }    
            }
         }},
         {
            className:"comment",
             data:null,
             render: function ( data, type, row ) {
                if(row.user_comment !== null && row.user_comment !== "null")
                 {
                    imag1 = "../static/images/comment.png";
                    return '<td><a><img src="' +imag1+'" onclick= alert("'+row.user_comment+'")  title = "'+row.user_comment+'"></a></td>';                 }
                 else
                 {
                    data = "../static/images/comment.jpg";
                    return '<a onclick="comment_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>';
                 }
                
        }},
        ],
        "fnRowCallback": function(row, data, dataIndex) {
            if (((data.old_value_edi == data.old_value_fs) && (data.old_value_fs == data.old_value_tr) && (data.old_value_tr == data.old_value_edi))
            && ((data.new_value_edi == data.new_value_fs) && (data.new_value_fs == data.new_value_tr) && (data.new_value_tr == data.new_value_edi))
            && ((data.tr_effective_date == data.fs_effective_date) && (data.fs_effective_date == data.edi_effective_date) && (data.tr_effective_date == data.edi_effective_date))) {
                $(row).css("background-color", "#d6f5d6");
              }
            else if(((data.tr_master_corporate_action_id != null) && (data.edi_master_corporate_action_id != null) && (data.fs_master_corporate_action_id != null))
            && (((data.old_value_edi == data.old_value_fs) && (data.new_value_edi == data.new_value_fs) && (data.payment_date_edi == data.payment_date_fs) && (data.record_date_edi == data.record_date_fs) && (data.fs_effective_date == data.edi_effective_date))
            || ((data.old_value_fs == data.old_value_tr) && (data.new_value_fs == data.new_value_tr) && (data.payment_date_fs == data.payment_date_tr) && (data.record_date_fs == data.record_date_tr) && (data.tr_effective_date == data.fs_effective_date))
            || ((data.old_value_tr == data.old_value_edi) && (data.payment_date_tr == data.payment_date_edi) && (data.new_value_tr == data.new_value_edi) && (data.record_date_tr == data.record_date_edi) && (data.tr_effective_date == data.edi_effective_date)))){
                $(row).css("background-color", "#ffffb3");
            }
            else if(((data.tr_master_corporate_action_id != null) && (data.edi_master_corporate_action_id != null) && (data.fs_master_corporate_action_id != null))
            && (((data.old_value_edi !== data.old_value_fs) || (data.new_value_edi !== data.new_value_fs) || (data.payment_date_edi !== data.payment_date_fs) || (data.record_date_edi !== data.record_date_fs) || (data.fs_effective_date !== data.edi_effective_date))
            || ((data.old_value_fs !== data.old_value_tr) || (data.new_value_fs !== data.new_value_tr) || (data.payment_date_fs !== data.payment_date_tr) || (data.record_date_fs !== data.record_date_tr) || (data.tr_effective_date !== data.fs_effective_date))
            || ((data.old_value_tr !== data.old_value_edi) || (data.payment_date_tr !== data.payment_date_edi) || (data.new_value_tr !== data.new_value_edi) || (data.record_date_tr !== data.record_date_edi) || (data.tr_effective_date !== data.edi_effective_date)))){
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
    document.getElementById("master_id").value = row.data().edi_master_corporate_action_id;
    document.getElementById("mic").value = row.data().mic;
    document.getElementById("ric").value = row.data().ric;
    document.getElementById("isin").value = row.data().isin;
 
    var comments = row.data().user_comment;
    console.log(comments);
    document.getElementById("Comments").value = comments;

    document.getElementById("Name").value = row.data().security_name;
    var oldv = row.data().old_value_gc;
    var newv = row.data().new_value_gc;
    
    var analyst= $('input[name=analyst]').val();
    if(analyst=="True"){modal.style.display = "block"
                        document.getElementById("modal-content-msg").style.display = "none"
                        document.getElementById("modal-content").style.display= "block"};
    var id = 
    old_value_var = $(this).closest('td').siblings('td.old_value_gc');
    new_value_var = $(this).closest('td').siblings('td.new_value_gc');
    name_var = $(this).closest('td').siblings('td.security_name');
    status_var = $(this).closest('td').siblings('td.status');
    state_var = $(this).closest('td').siblings('td.state');
    comment_var = $(this).closest('td').siblings('td.comment');
    record_var = $(this).closest('td').siblings('td.record_date');
    payment_var = $(this).closest('td').siblings('td.payment_date');
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===row.data().global_event_id);
    if(i===-1){
        document.getElementById("Old_Value").value = oldv;
        document.getElementById("New_Value").value = newv;
        
    }
    else{
        document.getElementById("Old_Value").value = saved_data[i].old_value;
        document.getElementById("New_Value").value =  saved_data[i].new_value;
        document.getElementById("Name").value=saved_data[i].security_name;
    }

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
            {"master_corporate_action_id":$('input[name=master_id]').val(),"global_event_id":Number($('input[name=id]').val()), "security_name":$('input[name=Name]').val(), "comment":$('input[name=comments]').val(),"analyst_status": "unknown", "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(), "old_value":$('input[name=old_value]').val(),"new_value":$('input[name=new_value]').val(),"state":"Pending Approval"}
         ];
        var saved_data = JSON.parse(localStorage.getItem("updated_data"));
        var i=saved_data.findIndex(item=>item.global_event_id===Number($('input[name=id]').val()));
        if(i===-1){
            var final_data = saved_data.concat(someData);
            localStorage.setItem("updated_data",JSON.stringify(final_data));
        }
        else{
            saved_data[i].security_name=$('input[name=Name]').val()
            saved_data[i].comment=$('input[name=comments]').val()
            saved_data[i].old_value=$('input[name=old_value]').val()
            saved_data[i].new_value=$('input[name=new_value]').val()
            saved_data[i].analyst_status="unknown"
            saved_data[i].state="Pending Approval"
            localStorage.setItem("updated_data",JSON.stringify(saved_data));
        }


        // alert($('input[name=old_value]').val());

        old_value_var.html('<h8>' +$('input[name=old_value]').val()+'</h8>');
        new_value_var.html('<h8>' +$('input[name=new_value]').val()+'</h8>');

        name_var.html('<h8>' +$('input[name=Name]').val() +'</h8>');
        // status_var.html('<h8>Confirmed</h8>');
        state_var.html('<h8>Pending Action</h8>');
        comment_var.html('<h8>' +$('input[name=comments]').val()+ '</h8>');
        modal.style.display = "none";
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    });

  
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            if(row.data().uc_master_corporate_action_id != null){
                saved_data = JSON.parse(localStorage.getItem("updated_data"));
            var i=saved_data.findIndex(item=>item.global_event_id===row.data().global_event_id);
            if(i!==-1){
                var r = confirm('Do you want to leave the changes stored for this CA ?');
                if(r == true){
                    $(this).closest('td').siblings('td.old_value_gc').html('<h8></h8>');
                    $(this).closest('td').siblings('td.new_value_gc').html('<h8></h8>');
                    $(this).closest('td').siblings('td.status').html('<p></p>');
                    $(this).closest('td').siblings('td.ca_type_gc').html('<h8></h8>');
                }
            }
            else{
                $(this).closest('td').siblings('td.status').html('<p></p>');}
                row.child.hide();
                tr.removeClass('shown');
            }
            else{
            if(((row.data().old_value_edi === row.data().old_value_fs) && (row.data().old_value_fs === row.data().old_value_tr) && (row.data().old_value_tr === row.data().old_value_edi))
                && ((row.data().new_value_edi === row.data().new_value_fs) && (row.data().new_value_fs === row.data().new_value_tr) && (row.data().new_value_tr === row.data().new_value_edi))){
                if(row.master_ca_type !== null &&  row.master_effective_date !== null && row.old_value_gc !== null &&  row.new_value_gc !== null){
                    data = "../static/images/ok.jpg";
                    cancel = "../static/images/cancel.png";
                    value= '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                row.child.hide();
                tr.removeClass('shown');
            }
        else{
            $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
            row.child.hide();
            tr.removeClass('shown');
        }    
    }
            else{
            saved_data = JSON.parse(localStorage.getItem("updated_data"));
            var i=saved_data.findIndex(item=>item.global_event_id===row.data().global_event_id);
            if(i!==-1){
                var r = confirm('Do you want to leave the changes stored for this CA ?');
                if(r == true){
                    remove(row.data().global_event_id);   
                    $(this).closest('td').siblings('td.old_value_gc').html('<h8></h8>');
                    $(this).closest('td').siblings('td.new_value_gc').html('<h8></h8>');
                    if(row.data().admin_status){
                        if(row.data().analyst_status=="True"){
                            $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                        }
                        else{
                            $(this).closest('td').siblings('td.status').html('<h8>Invalidated</h8>');
                        }
                        $(this).closest('td').siblings('td.state').html("<h8>Admin Disapproved</h8>");
                        $(this).closest('td').siblings('td.old_value_gc').html('<h8>'+row.data().old_value_gc+'</h8>');
                        $(this).closest('td').siblings('td.new_value_gc').html('<h8>'+row.data().new_value_gc+'</h8>');
                    }
                    else if(row.data().qa_status=="False"){
                        if(row.data().analyst_status=="True"){
                            $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                        }
                        else{
                            $(this).closest('td').siblings('td.status').html('<h8>Invalidated</h8>');
                        }
                        $(this).closest('td').siblings('td.state').html("<h8>QC Disapproved</h8>");
                        $(this).closest('td').siblings('td.old_value_gc').html('<h8>'+row.data().old_value_gc+'</h8>');
                        $(this).closest('td').siblings('td.new_value_gc').html('<h8>'+row.data().new_value_gc+'</h8>');
                    }
                    else if((row.data().tr_ca_status==='U') || (row.data().edi_ca_status==='U') || (row.data().fds_ca_status==='U')){
                        data = "../static/images/ok.jpg";
                        cancel = "../static/images/cancel.png";
                        value= '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                        $(this).closest('td').siblings('td.status').html(value);
                        $(this).closest('td').siblings('td.state').html("<h8>Updated</h8>");
                    }
                    else if((row.data().tr_ca_status==='D') || (row.data().edi_ca_status==='D') || (row.data().fds_ca_status==='D')){
                        data = "../static/images/ok.jpg";
                        cancel = "../static/images/cancel.png";
                        value= '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                        $(this).closest('td').siblings('td.status').html(value);
                        $(this).closest('td').siblings('td.state').html("<h8>Deleted</h8>");
                    }
                    else{
                        $(this).closest('td').siblings('td.state').html("<h8>Pending Action</h8>");
                        $(this).closest('td').siblings('td.status').html('<p></p>');
                    }
                    if(row.data().master_ca_type){
                        $(this).closest('td').siblings('td.ca_type_gc').html('<h8>'+row.data().master_ca_type+'</h8>');}
                    else{
                        $(this).closest('td').siblings('td.ca_type_gc').html('<h8></h8>');
                    }
                    if(row.data().master_effective_date){
                        $(this).closest('td').siblings('td.effective_date_gc').html('<h8>'+row.data().master_effective_date+'</h8>');
                    }
                    else{
                        $(this).closest('td').siblings('td.effective_date_gc').html('<p></p>');
                    }
                    if($('input[name=comments]').val())
                    {
                        data = "../static/images/comment.jpg";
                        valu = '<a onclick="comment_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>';
                        $(this).closest('td').siblings('td.comment').html(valu);
                    }
                        if(row.data().user_comment){
                        $(this).closest('td').siblings('td.comment').html('<h8>'+row.data().user_comment+'</h8>');
                    }
                    row.child.hide();
                    tr.removeClass('shown');
                }
            }
            else{
            // This row is already open - close it
            // remove(row.data().global_event_id);
            if(row.data().admin_status){
                if(row.data().analyst_status=="True"){
                    $(this).closest('td').siblings('td.state').html("<h8>Admin Disapproved</h8>");
                    $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                }
                else{
                    $(this).closest('td').siblings('td.state').html("<h8>Admin Disapproved</h8>");
                    $(this).closest('td').siblings('td.status').html('<h8>Invalidated</h8>');               }
            }
            else if(row.data().qa_status=="False"){
                if(row.data().analyst_status=="True"){
                    $(this).closest('td').siblings('td.state').html("<h8>QC Disapproved</h8>");
                    $(this).closest('td').siblings('td.status').html('<h8>Confirmed</h8>');
                }
                else{
                    $(this).closest('td').siblings('td.state').html("<h8>QC Disapproved</h8>");
                    $(this).closest('td').siblings('td.status').html('<h8>Invalidated</h8>');
                }
            }
            else if((row.data().tr_ca_status==='U') || (row.data().edi_ca_status==='U') || (row.data().fds_ca_status==='U')){
                data = "../static/images/ok.jpg";
                cancel = "../static/images/cancel.png";
                value= '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                $(this).closest('td').siblings('td.status').html(value);
                $(this).closest('td').siblings('td.state').html("<h8>Updated</h8>");
            }
            else if((row.data().tr_ca_status==='D') || (row.data().edi_ca_status==='D') || (row.data().fds_ca_status==='D')){
                data = "../static/images/ok.jpg";
                cancel = "../static/images/cancel.png";
                value= '<a onclick="confirm_analyst_ca(this,'+row.global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.global_event_id+','+row.tr_master_corporate_action_id+','+row.edi_master_corporate_action_id+','+row.fs_master_corporate_action_id+','+row.uc_master_corporate_action_id+',\'' + row.tr_ca_type + '\',\'' + row.edi_ca_type + '\',\'' + row.fs_ca_type + '\','+row.gc_ca_id+',\'' + row.master_ca_type + '\')"><img src="' +cancel+'"></a>';
                $(this).closest('td').siblings('td.status').html(value);
                $(this).closest('td').siblings('td.state').html("<h8>Deleted</h8>");
            }
            else{
            $(this).closest('td').siblings('td.status').html('<p></p>');}
            row.child.hide();
            tr.removeClass('shown');
            }
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
            value= '<a onclick="confirm_analyst_ca(this,'+row.data().global_event_id+')"><img src="' +data+'"></a>&nbsp;&nbsp;<a onclick="invalidate_analyst_ca(this,'+row.data().global_event_id+','+row.data().tr_master_corporate_action_id+','+row.data().edi_master_corporate_action_id+','+row.data().fs_master_corporate_action_id+','+row.data().uc_master_corporate_action_id+',\'' + row.data().tr_ca_type + '\',\'' + row.data().edi_ca_type + '\',\'' + row.data().fs_ca_type + '\','+row.data().gc_ca_id+',\'' + row.data().master_ca_type + '\')"><img src="' +cancel+'"></a>';
            $(this).closest('td').siblings('td.status').html(value);
            var old_id = row.data().global_event_id + 'v1';
            var new_id = row.data().global_event_id + 'v2';
            var ca_id = row.data().global_event_id + 'v4';
            var e_id = row.data().global_event_id + 'v5';

            $(this).closest('td').siblings('td.old_value_gc').attr('id',old_id);
            $(this).closest('td').siblings('td.new_value_gc').attr('id',new_id);
            $(this).closest('td').siblings('td.ca_type_gc').attr('id',ca_id);
            $(this).closest('td').siblings('td.effective_date_gc').attr('id',e_id);
            row.child(format(row.data(),ca_id,e_id,old_id,new_id)).show();
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

function AddPreApproved_CA(master_corporate_action_id,global_id,ric,mic,isin,master_ca_type,security_name,old_value_gc,new_value_gc,record_date,payment_date,effective_date){
   
    var someData = [
        {"master_effective_date":effective_date,"master_corporate_action_id":master_corporate_action_id,"global_event_id": global_id, "security_name": security_name, "comment":null,"analyst_status": "True", "ric": ric, "mic": mic, "isin":isin, "master_ca_type":master_ca_type, "old_value":old_value_gc,"new_value":new_value_gc,"record_date":record_date,"payment_date":payment_date,"state":"Pre Approved"}
     ];
    var saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===global_id);
    if(i===-1){
        var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
    }
   
}
function AddUpdateDelete_CA(old_mca_id,master_corporate_action_id,global_id,ric,mic,isin,master_ca_type,security_name,old_value_gc,new_value_gc,record_date,payment_date,effective_date){
   
    var someData = [
        {"old_master_corporate_action_id":old_mca_id,"master_effective_date":effective_date,"master_corporate_action_id":master_corporate_action_id,"global_event_id": global_id, "security_name": security_name, "comment":null,"analyst_status": "undefined", "ric": ric, "mic": mic, "isin":isin, "master_ca_type":master_ca_type, "old_value":old_value_gc,"new_value":new_value_gc, "record_date":record_date,"payment_date":payment_date,"state":"Pending Action"}
     ];
    var saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===global_id);
    if(i===-1){
        var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
    }
   
}
function newv(check,d,ca,mca,security_name,ca_id,e_id,old_id,new_id,gc_ca_id){
    $('input[name="predata"]').val("true");
    var $others = $('input[type="checkbox"][name='+ d +']').not(check);
    var master_corporate = mca+"m0";
    var source = ca+"f0";
    var ric = ca+"f1";
    var isin = ca+"f2";
    var mic = ca+"f3";
    var master_ca_type = ca+"f4";
    var exdate = ca+"f5";
    var Old_Value = ca+"f6";
    var New_Value = ca+"f9";
    var source_value = document.getElementById(source).innerHTML;
    var ric_value = document.getElementById(ric).innerHTML;
    var mic_value = document.getElementById(mic).innerHTML;
    var isin_value = document.getElementById(isin).innerHTML;
    var catype_value = document.getElementById(master_ca_type).innerHTML;
    var ex_value = document.getElementById(exdate).innerHTML;
    var old_value_value = document.getElementById(Old_Value).innerHTML;
    var new_value_value = document.getElementById(New_Value).innerHTML;
    var dd = document.getElementById(master_corporate).value;
    document.getElementById(ca_id).innerHTML='<h8>'+catype_value+'</h8>';
    document.getElementById(e_id).innerHTML='<h8>'+ex_value+'</h8>';
    document.getElementById(old_id).innerHTML='<h8>'+old_value_value+'</h8>';
    document.getElementById(new_id).innerHTML='<h8>'+new_value_value+'</h8>';   
    document.getElementById("Old_Value").value = old_value_value
    document.getElementById("New_Value").value = new_value_value
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


        {"old_master_corporate_action_id":gc_ca_id,"master_corporate_action_id":dd,"global_event_id": d, "ca_id": ca,"comment":null,"security_name":security_name, "analyst_status": "unknown","source": source_value, "ric": ric_value, "mic": mic_value, "isin":isin_value, "master_ca_type":catype_value, "master_effective_date":ex_value,"old_value":old_value_value,"new_value":new_value_value}

     ];
    console.log(someData);
    if($(check).prop("checked") == false)
    {
        $(check).closest('td').siblings('td.status').html('<p></p>');
        document.getElementById(ca_id).innerHTML='<h8></h8>';
        document.getElementById(e_id).innerHTML='<h8></h8>';
        document.getElementById(old_id).innerHTML='<h8></h8>';
        document.getElementById(new_id).innerHTML='<h8></h8>';
        remove_ca(ca);
    }
    else{
        console.log(JSON.parse(localStorage.getItem("updated_data")));
        var saved_data = JSON.parse(localStorage.getItem("updated_data"));
        var i=saved_data.findIndex(item=>item.global_event_id===d);
        console.log(JSON.parse(localStorage.getItem("updated_data")));
        if(i === 1){
            remove(d);
            var saved_data = JSON.parse(localStorage.getItem("updated_data"));
            var final_data = saved_data.concat(someData);
            localStorage.setItem("updated_data",JSON.stringify(final_data));
        }
        var saved_data = JSON.parse(localStorage.getItem("updated_data"));
        var z = saved_data.findIndex(item=>item.global_event_id===d);
        if(z === -1){
        var final_data = saved_data.concat(someData);
        localStorage.setItem("updated_data",JSON.stringify(final_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
        }
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
function remove_updatedelete(){
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i;
    i=saved_data.findIndex(item=>item.analyst_status==="undefined");

    while(i>0){
        saved_data.splice(i,1);
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        saved_data = JSON.parse(localStorage.getItem("updated_data"));
        console.log(saved_data);
        i=saved_data.findIndex(item=>item.analyst_status==="undefined");
    }
}
function confirm_analyst_ca(check,data){
    $('input[name="predata"]').val("true");
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        $(check).closest('td').siblings('td.state').html("<h8>Pending Approval</h8>");
        $(check).closest('td.status').html("<h8 style='color:green;'>Confirmed</h8>");    
        saved_data[i].analyst_status="True";
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
        console.log(JSON.parse(localStorage.getItem("updated_data")));
    }
    else{
        alert('Please select any datasource before confirm');
    }

}

function invalidate_analyst_ca(check,data,master_id,edi_master_id,fs_master_id,uc_master_id,tr_catype,edi_catype,fs_catype,gc_caid,gc_catype){
    var final_master_id
    if(master_id != null){
        final_master_id = master_id;
    }
    else if(edi_master_id != null){
        final_master_id = edi_master_id;
    }
    else if(fs_master_id != null){
        final_master_id = fs_master_id
    }
    else if(uc_master_id != null){
        final_master_id = uc_master_id
    }
    if(gc_caid != null){
        var someData = [
            {"master_corporate_action_id":final_master_id,"global_event_id": data, "security_name":$('input[name=Name]').val(), "analyst_status": "False", "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(),"master_ca_type":gc_catype, "exdate":null,"grossamt":null,"currency":null,"record_date":null,"payment_date":null}
         ];
    }
    else if(master_id != null){
        console.log(1);
        console.log(tr_catype);
        var someData = [
            {"master_corporate_action_id":final_master_id,"global_event_id": data, "security_name":$('input[name=Name]').val(), "analyst_status": "False", "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(),"master_ca_type":tr_catype, "exdate":null,"grossamt":null,"currency":null,"record_date":null,"payment_date":null}
         ];
    }
    else if(edi_master_id != null){
        var someData = [
            {"master_corporate_action_id":final_master_id,"global_event_id": data, "security_name":$('input[name=Name]').val(), "analyst_status": "False", "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(),"master_ca_type":edi_catype, "exdate":null,"grossamt":null,"currency":null,"record_date":null,"payment_date":null}
         ];
    }
    else if(fs_master_id != null){
        var someData = [
            {"master_corporate_action_id":final_master_id,"global_event_id": data, "security_name":$('input[name=Name]').val(), "analyst_status": "False", "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(),"master_ca_type":fs_catype, "exdate":null,"grossamt":null,"currency":null,"record_date":null,"payment_date":null}
         ];
    }
    else if(uc_master_id != null){
        var someData = [
            {"master_corporate_action_id":final_master_id,"global_event_id": data, "security_name":$('input[name=Name]').val(), "analyst_status": "False", "ric": $('input[name=ric]').val(), "mic": $('input[name=mic]').val(), "isin":$('input[name=isin]').val(),"master_ca_type":null, "exdate":null,"grossamt":null,"currency":null,"record_date":null,"payment_date":null}
         ];
    }
    $('input[name="predata"]').val("true");
    $(check).closest('td').siblings('td.state').html("<h8>Pending Approval</h8>");
    $(check).closest('td.status').html("<h8 style='color:red;'>Invalidated</h8>");
    saved_data = JSON.parse(localStorage.getItem("updated_data"));
    var i=saved_data.findIndex(item=>item.global_event_id===data);
    if(i!==-1){
        saved_data[i].analyst_status="False";
        localStorage.setItem("updated_data",JSON.stringify(saved_data));
    }
    else{
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
        comment_gc.html('<h8>' +comm+'</h8>');
    }
    else{
        alert('Please select the datasource before comment');
    }
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    
}