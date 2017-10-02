$(document).ready(function(){
 $('#load_data').click(function(){

  $.ajax({
   url:"employee.csv",
   dataType:"text",
   success:function(data)
   {
    var employee_data = data.split(/\r?\n|\r/);
    rowCount=30;
    var table_data = '';
    for(var count = 0; count< rowCount; count++)
    {
     var cell_data = employee_data[count].split(",");
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th>'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td>'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }	
    $('#dataloded').append(table_data);
	    $('#dataloded').addClass('table table-bordered');
  }
  });
 });
 });
 



function yHandler(){
var employee_table = document.getElementById('dataloded');
			var contentHeight= employee_table.offsetHeight;
			var yOffset= window.pageYOffset;
			var y = yOffset + window.innerHeight;
        console.log("y"+y);
        console.log("contentHeight"+contentHeight);
			if(y>=contentHeight){
  console.log("y"+y);
        console.log("contentHeight"+contentHeight);

      $.ajax({
   url:"employee.csv",
   dataType:"text",
   success:function(data)
   {
    console.log(data);
    var employee_data = data.split(/\r?\n|\r/);
    rowCount=30;
    var table_data='';
   // var table_data = '<table class="table table-bordered table-striped">';
    for(var count = 1; count< rowCount; count++)
    {
     var cell_data = employee_data[count].split(",");
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th>'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td>'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }
   // table_data +='</table>';  
   console.log(table_data);
    $('#dataloded').append(table_data);
   // $('#employee_table').html(table_data);
  }
  });
				//employee_table.innerHTML += '<div class="table_data"></div>';
				}
				var status = document.getElementById('status');
			status.innerHTML=contentHeight+" | "+y;
			}
			window.onscroll = yHandler;
			
