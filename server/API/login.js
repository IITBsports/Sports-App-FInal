const https = require('https');
const USER = require('../models/user');


async function login(req, response, User, Session) {
	console.log("Hi1")
 
	if (req.query.code == undefined) {
		response.redirect(home_url);
		return;
	}
	var AUTH_CODE = req.query.code;
	var request_query = 'code=' + AUTH_CODE + '&redirect_uri=http://10.198.49.8:8080/api/login' + '&grant_type=authorization_code';
	console.log("Hi1")
	// Create an API call to get access and refresh tokens
	const options = {
		hostname: 'gymkhana.iitb.ac.in',
		path: '/profiles/oauth/token/',
		method: 'POST',
		headers: {

			'Authorization': "Basic SDVCY2xxQllrMFA5a09qSlhHQ1hpNzN1TUdyVW50UWZVNGdaTWZNazpiNk52ZlBkUkJZQldQb1hvZXduY2JaZjVSVXlRNnNvUE9uZWdOTGZ6elhOVllaN1RkUWxrRGUyU1ZoSEx6TFZBWkRJTzFacnVjZ2R3YXdCcGhlclg5bFZwckdwWU1aVTg0aGpsUGFDcnoxU3dtbGUxZXRFRmZJWlNnRWd0aDdWRg==",
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		}
	};
	const request = https.request(options, (res) => {
		let data = '';
		res.on('data', (chunk) => {
			data += chunk;
		});
		console.log("aaa")
		res.on('end', () => {
			var responseResult;
			try {
				responseResult = JSON.parse(data);
			}
			catch (err) {
				return response.redirect(home_url);
			}
			console.log(responseResult)
			if (responseResult.access_token != undefined) {

				// Create an API call to fetch student data
				const options2 = {
					hostname: 'gymkhana.iitb.ac.in',
					path: '/profiles/user/api/user/?fields=first_name,last_name,type,roll_number,insti_address,sex,program',
					method: 'GET',
					headers: {
						'Authorization': 'Bearer ' + responseResult.access_token,
					}
				};
				console.log(options2)

				const getRequest = https.request(options2, (res) => {
					let data = '';

					res.on('data', (chunk) => {
						data += chunk;
					});

					res.on('end', () => {
						try {
							getResult = JSON.parse(data);
							console.log(getResult.image)
						}
						catch (err) {
							return response.redirect("http://10.198.49.8/sportsapp/home");
						}
						// we have got the user data in getResult here.
						// Check if user database exists in our database
						User.countDocuments({ roll_number: getResult.roll_number }, (err, count) => {
							if (err) console.log(err,"aaaa");
							if (count == 0) {
								let user = new User({
									roll_number: getResult.roll_number,
									type: getResult.type,
									first_name: getResult.first_name,
									last_name: getResult.last_name,
									phone: getResult.phone,
									email: getResult.email,
									insti_address: getResult.insti_address,
									program: getResult.program,
									sex: getResult.sex,
									work_report: "",
									certificates: [],
									followed_tags: [],
									followed_events: [],
									is_admin: false,
								});
								user.save();
								//window.location.reload();
								console.log("Yo");
							}
							// add login information to database
							let session = new Session({
								session_id: req.sessionID,
								time: new Date(),
								ldap: getResult.roll_number,
								access_token: responseResult.access_token,
								refresh_token: responseResult.refresh_token
							});
							session.save();

						})
						// return response.redirect("http://10.198.49.8/sportsapp/home");
					});

				}).on("error", (err) => {
					console.log("Error: ", err.message);
					return response.redirect("http://10.198.49.8/sportsapp/home");

				});

				getRequest.end();
			}
			else {
				return response.redirect("http://10.198.49.8/sportsapp/home");
			}
		});

	}).on("error", (err) => {
		console.log("Error: ", err.message);
		return response.redirect("http://10.198.49.8/sportsapp/home");
	});

	request.write(request_query);
	request.end();
	return response.redirect("http://10.198.49.8/sportsapp/home");

}

function getuserdata(sessionID, response, User, Session) {

	console.log(sessionID)
	if (sessionID == undefined) {
		response.status(401).send({});
		return;
	}
	Session.find({ session_id: sessionID }).exec((err, docs) => {
		console.log(docs[0]);
		console.log("hello");

		console.log(docs)
		console.log("hello");
		if (err) return response.send(err).status(500);

		if (docs.length == 0) return response.status(401).send("session not found");
		let ldap = docs[0].ldap;
		User.find({ roll_number: ldap }).exec((err, doc) => {
			console.log("hello2");

			if (err) return response.send(err).status(500);
			if (docs.length == 0) return response.status(401).send("user not found");
			let user = doc[0];
			return response.json(user);
		})
	})
}
function edituserdata(request, response, User, Session) {
	var id = request.body.id;

	var roll_number = request.body.roll_number;
	var type = request.body.type;
	var first_name = request.body.first_name;
	var last_name = request.body.last_name;
	var phone = request.body.phone;
	var email = request.body.email;
	var insti_address = request.body.insti_address;
	var program = request.body.program;
	var sex = request.body.sex;
	var work_report = request.body.work_report;
	var certificates = request.body.certificates;
	var followed_tags = request.body.followed_tags;
	var followed_events = request.body.followed_tags;



	USER.findByIdAndUpdate(id,
		{
			id: id,
			roll_number: roll_number,
			type: type,
			first_name: first_name,
			last_name: last_name,
			phone: phone,
			email: email,
			insti_address: insti_address,
			program: program,
			sex: sex,
			work_report: work_report,
			certificates: certificates,
			followed_tags: followed_tags,
			followed_events: followed_events,
		},
		(err, doc) => {
			if (err) {
				response.status(500).send(err);

			}
			console.log("Updated")
			return response.json(doc);
		}
	);
}

module.exports = { login, getuserdata, edituserdata };