// function greeter(person: string) {
//     return "Hello, " + person;
// }

// var user = "Jane User";

// console.log(greeter(user));


module.exports.emailContactFormAlert = (event, context, callback) => {

    const { name, email, message } = JSON.parse(event.body);
    // The required CORS headers when generating a response POST request.
    const headers = {
        // Required for CORS support to work
        'Access-Control-Allow-Origin': 'enhancedigital.co.nz',
        // Required for cookies, authorization headers with HTTPS
        'Access-Control-Allow-Credentials': true
    };

    const response = {
        statusCode: 200,
        headers,
        body: JSON.stringify({ name, email, message }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
