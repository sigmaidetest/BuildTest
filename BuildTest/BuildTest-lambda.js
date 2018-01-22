let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.publish({
		Message: 'MyMessage',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:udith_test'
	}).promise()
		.then(data => {
			console.log(data);
			// your code goes here
		})
		.catch(err => {
			console.error(err);
			// error handling goes here
		});




	callback(null, 'Successfully executed');
}