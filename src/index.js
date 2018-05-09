/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import RaceTable from './components/RaceTable';
import LiveStream from './components/LiveStream';

const e = document.getElementById('app');
if (e instanceof HTMLElement) {
  ReactDOM.render(
    <RaceTable />,
    e
  );
}
