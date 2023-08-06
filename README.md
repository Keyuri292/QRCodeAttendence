# QRCodeAttendence
Objective:- After filling out the google form students will get a unique qr code in their email and after scanning that they will be able to mark their presence.

This project is made by creating 3 files:
1. Google form ( which is to be sent to participant for taking their details like name, emailid, phone number, address, etc... )  [Emailid is mandatory]
2. Another google form
      This google form will contain only 2 fields: emailid and name. This google form is only used to create a prefilled link for attendence. In attendance sheet the details shown will be of this form.
3. Spreadsheet (after creating google form make sure you create a spreadsheet and have the same spreadsheets for both the forms)

Procedure:
1. Create a google form and add a blank spreadsheet. Make sure the google form has the fields of required details of participants.
2. Add two more columns in spreadsheet: URL and qrcodeImage.
3. Create another google form with only name field. In settings, make it limit to 1 response. Get a prefilled link and add name of the first entry & submit it.



![Screenshot (165)](https://github.com/Keyuri292/QRCodeAttendence/assets/115882560/4940bc3f-7743-4a8e-b95f-18810932a6f8)


4. In the field URL, for the first entry add the below formula to cell:
   =ArrayFormula(if(B2:B="",,"https://docs.google.com/forms/d/e/1FAIpQLSd0tka1HzQtaUKDJTUj3a7zouIs2fq64qVKqOoRYtfPa5uqJA/formResponse?entry.13831516="&encodeurl(B2:B))) <br>
   Set your respective link in the above formula. In your original formula it will be viewResponse change it to formResponse and after question mark delete the repective 
   part as referred in the formula.<br>
   Column B has all the email addresses. If you have emailids in different column, change B to the respective letter according to your spreadsheet.



![Screenshot (163)](https://github.com/Keyuri292/QRCodeAttendence/assets/115882560/e3201e0e-2088-4a51-991c-b053b3e364ac)

   
5. For QR column add the below formula to the cell of first entry:
   =ArrayFormula(if(C2:C="",,image("https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl="&F2:F))) <br>
   Column F has all the URLS. Column C is the column having name of all participants. If you have these things in different column, change it accordingly.

  
![Screenshot (164)](https://github.com/Keyuri292/QRCodeAttendence/assets/115882560/da8e016e-1b33-4292-9c85-aaaea8b5d752)

   
6. In spreadsheet, go to extensions. Extensions will be on the top, it is also visible in the screenshot attached above. In extensions go to apps script.
7. In AppsScript, paste the java script code in code section from the attached javascript file. Save and run the code.
8. Set the trigger to onFormSubmit in trigger section of AppsScript.
