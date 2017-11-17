// const eggShellDatabase = require("./eggshellDatabase")
// Retrieves the database from local storage for modification
const getDatabase = function (theThingToExecuteWhenDoneLoading) {
	$.ajax({
		"url": "./scripts/Database/database.json",
		"method": "GET"
	}).then(
		function (theDatabase) {
			theThingToExecuteWhenDoneLoading(theDatabase)
		}
	)
}

module.exports = getDatabase