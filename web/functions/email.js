exports.handler = async function (event, context) {
  try {
    console.log('Sending Email.');

    return {
      statusCode: 200,
    };
  } catch (error) {
    console.log('Error: ', error);

    return {
      statusCode: 500,
    };
  }
};
