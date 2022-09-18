const isValidUser = require('simplenpm')

// This will return true
console.log("Login result: " + isValidUser("emsameen", "123"))

// This will return false
console.log("Login result: " + isValidUser("emsameen", "1234"))