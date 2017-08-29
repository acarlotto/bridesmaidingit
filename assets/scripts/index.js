'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const appEvents = require('../scripts/auth/events')
// require('./example')

$(() => {
  $('#registration').on('submit', appEvents.registerUser)
  $('#login').on('submit', appEvents.loginUser)
  $('#log-out').on('click', appEvents.logoutUser)
  $('#event-show').on('click', appEvents.onGetEvents)
  $('#passChange').on('submit', appEvents.resetPassword)
  $('#eventsShow').on('submit', appEvents.onGetEvents)
  $('#deleteEvent').on('click', appEvents.deleteEvent)
  $('#create-event').on('submit', appEvents.onCreateNewEvent)
})

$(document).ready(function () {
  $('#passChange').hide()
  $('#message').show()
  // $('#log-out').hide()
})
