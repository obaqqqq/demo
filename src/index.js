/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import RaseTable from './components/RaseTable';

const e = document.getElementById('app');
if (e instanceof HTMLElement) {
  ReactDOM.render(
    <RaseTable />,
    e
  );
}
