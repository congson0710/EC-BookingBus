import React from 'react';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';

import Row from './Row';

const PureTable = ({ columns, rows }) => (
  <table className="table table-custom">
    <tr>
      {map(column => <th key={Math.random()}>{get('name')(column)}</th>)(
        columns
      )}
    </tr>
    {map(row => <Row row={row} />)(rows)}
  </table>
);

export default PureTable;
