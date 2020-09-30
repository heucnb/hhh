 function my_button_click_handler(sendvalue1,sendvalue2) {


 var spreadsheetId = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1OKKqfG8b4w-h3dg4GEeVnGI3X4QyYYJZaZcs0DdGGcQ/edit');

   spreadsheetId.getRange('A15').setValue(sendvalue1);
   spreadsheetId.getRange('A12').setValue(sendvalue2);

 
 
 
  spreadsheetId.getRange('A13').activate();
  spreadsheetId.getCurrentCell().setValue('11111111111');

 
}