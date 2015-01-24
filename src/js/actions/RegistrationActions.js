var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var FirebaseUtils = require('../utils/FirebaseUtils');

var dispatcherCallback = function(authObj) {
  AppDispatcher.handleAction({
    actionType: AppConstants.INITIALIZE_USER,
    data: authObj
  });
};

var registrationActions = {
  registerUser: function(user) {
    FirebaseUtils.createUser(user, dispatcherCallback);
  },
  updateUser: function(userObj){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_USER,
      data: userObj
    });
  }
};

module.exports = registrationActions;