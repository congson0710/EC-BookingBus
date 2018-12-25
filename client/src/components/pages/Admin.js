import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import AdminLayout from '../Admin/AdminLayout';
import CheckInformation from '../Admin/CheckInformation';
import Rule from '../Admin/Rule';

function Admin({ match }) {
  return (
    <AdminLayout>
      <Route exact path={match.url + '/tra-cuu-thong-tin'} component={CheckInformation} />
      <Route exact path={match.url + '/quy-dinh-nha-xe'} component={Rule} />
      <Route exact path={match.url + '/quan-ly-lich-xe'} component={Rule} />
      <Route exact path={match.url + '/quan-ly-dat-huy'} component={Rule} />
      <Route exact path={match.url + '/bao-cao-thong-ke'} component={Rule} />
    </AdminLayout>
  );
}

export default withRouter(Admin);
