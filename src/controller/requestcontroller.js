module.exports = {
    async handleGetMethod(ctx) {
        ctx.body = { "response_body": "this is a response by json" }
    },
    async handlePostMethod(ctx) {

        console.log("====================================================================")
        const queryParams = ctx.request.query;
        console.log("queryParams: ", queryParams)

        console.log("====================================================================")
        const bodyParams = ctx.request.body;
        console.log("bodyParams: ", bodyParams)

        console.log("====================================================================")
        console.log("body_param_1", bodyParams['body_param_1'])
        console.log("body_param_2", bodyParams['body_param_2'])

        ctx.body = {
            "response_body": "this is a response by json"
        }
    },
}
