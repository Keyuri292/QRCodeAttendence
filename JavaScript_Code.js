function sendLastQRCodeEmail() {
  var emailSubject = "QR Code for your response";
  var qrCodeColumnIndex = 6; // Assuming the QR code URLs are in column C (column index is 3)

  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  var lastEntryIndex = data.length - 1; // Index of the last entry (skip header row)

  if (lastEntryIndex >= 1) { // Ensure there is at least one entry (skip header row)
    var email = data[lastEntryIndex][1]; // Assuming email addresses are in column B (column index is 1)
    var qrCodeValue = data[lastEntryIndex][qrCodeColumnIndex - 1]; // Adjust to zero-based index

    if (email && qrCodeValue) {
      try {
        // Generate the QR code using the external service (APIQRCode) in JPEG format
        var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(qrCodeValue) + '&size=200x200&format=jpeg';

        // Fetch the QR code image Blob from the URL
        var qrCodeBlob = UrlFetchApp.fetch(qrCodeURL).getBlob();

        // Compose the email message with the QR code image as an inline attachment
        var mailBody = '<html><body><p>Hi ' + data[lastEntryIndex][2] + ',<br /><br />Thanks for your response.<br /><br />Here is the QR code to mark your attendance:</p>' +
          '<img src="cid:qrCodeImage">' +
          '<p>Kind regards,</p><p>The Team</p></body></html>';

        // Send the email with the QR code as an inline image attachment
        GmailApp.sendEmail(email, emailSubject, "Placeholder body", {
          htmlBody: mailBody,
          inlineImages: { "qrCodeImage": qrCodeBlob }
        });
      } catch (error) {
        Logger.log("Error sending QR code email to " + email + ": " + error);
      }
    }
  }
}
