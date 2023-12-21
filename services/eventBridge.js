const { PutEventsCommand } =  require("@aws-sdk/client-eventbridge");
const { ebClient } = require("./ebClient");
const params = {
    Entries: [
        {
            Detail: '{ "key1": "value1", "key2": "value2" }',
            DetailType: "appRequestSubmitted",
            Resources: [
                process.env.RULE_ARN
            ],
            Source: "test",
        },
    ],
};


const sendToEventBridge = async () => {
    try {
        const data = await ebClient.send(new PutEventsCommand(params));
        return data;
    } catch (err) {
        return err;
    }
};

module.exports = { sendToEventBridge };