import { Handler } from 'aws-lambda';

export const handler: Handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  console.info(JSON.stringify({body}, null, 2));
  console.info(JSON.stringify({event}, null, 2));
  const response = {
    body: JSON.stringify({
      message: 'Recieved Stripe webhook successfully!',
    }),
    statusCode: 200,
  };
  callback(null, response);
};
