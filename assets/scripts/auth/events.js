const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// event handler for registration form
const registerUser = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // Test that the passwords match
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
    // $('#errorMessage').text('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match. Try again!' + ' </p></div>')
  } else {
    appApi.addUser(data)
  .then(appUi.onSignupSuccess)
  .catch(appUi.onSignupFailure)
  }
}

// event handler for login form
const loginUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.userLogin(data)
  .then(appUi.onSigninSuccess)
  .catch(appUi.onSigninFailure)
}

const logoutUser = function () {
  // const data = getFormFields(this)
  event.preventDefault(event)
  appApi.userLogout()
  .then(appUi.onLogoutSuccess)
  .catch(appUi.onLogoutFailure)
}

const resetPassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.passwordReset(data)
  .then(appUi.onResetSuccess)
  .catch(appUi.onResetFailure)
}

// onGetevent to show all user events
const onGetEvents = function (event) {
  event.preventDefault()
  appApi.showEvent()
  .then(appUi.onSuccessGetEvent)
  .catch(appUi.onFailureGetEvent)
}

const onGetUsersEvents = function (event_id) {
  // console.log('events.js')
  event.preventDefault()
  appApi.showUserEvents(event_id)
  .then(appUi.onSuccessGetUserEvent)
  .catch(appUi.onFailureGetUserEvent)
}

// post
const onCreateNewEvent = function () {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.newEvent(data)
  .then(appUi.newSuccess)
  .catch(appUi.newFail)
}

const onDeleteEvent = function (event) {
  //$('#deleteEvent').val(my_id)
  const delete_id = $(this).attr('id')
  // console.log(delete_id)
  event.preventDefault()
  appApi.deleteEvent(delete_id)
  .then(appUi.deleteSuccess)
  .catch(appUi.deleteFail)
}

const updateEvent = function (event) {
  // $('#updateEvent').val(my_id)
  const data = getFormFields(this)
  let update_id = data.event.event_id
  // console.log(data)
  event.preventDefault()
  appApi.updateEvent(data, update_id)
  .then(appUi.onUpdateSuccess)
  .catch(appUi.onUpdateFail)
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  onGetEvents,
  onGetUsersEvents,
  onCreateNewEvent,
  onDeleteEvent,
  updateEvent
}
