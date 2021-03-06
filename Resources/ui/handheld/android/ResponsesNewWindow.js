function ResponsesNewWindow(surveyID) {
  var SurveyDetailsView = require('ui/common/surveys/SurveyDetailsView')
  var ResponsesIndexView = require('ui/common/responses/ResponsesIndexView')
  var ResponsesNewView = require('ui/common/responses/ResponsesNewView')
  var ConfirmDialog = require('ui/common/components/ConfirmDialog');

  var self = Ti.UI.createWindow({
    navBarHidden : true,
    backgroundColor : "#fff"
  });
  view = new ResponsesNewView(surveyID);
  self.add(view);

  view.addEventListener('ResponsesNewView:savedResponse', function() {
    self.close();
  });

  var confirmDialog = new ConfirmDialog("Confirmation", "This will clear the answers,\n Are you sure?", onConfirm = function(e) {
    self.close();
  });

  self.addEventListener('android:back', function() {
    confirmDialog.show();
  });

  return self;
}

module.exports = ResponsesNewWindow;
