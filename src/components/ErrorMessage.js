import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = () => (
  <Message negative>
    <Message.Header>Problem Occured While Fetching Data</Message.Header>
    <p>Please try again</p>
  </Message>
);

export default ErrorMessage;
