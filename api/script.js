function doPost(e) {

  if (!e || !e.postData) {
    return ContentService
      .createTextOutput("The script is working. Send a POST request from your website.");
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.company,
    data.person,
    data.mobile,
    data.location,
    data.type
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
