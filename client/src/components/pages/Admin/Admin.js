import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import CheckInformation from './CheckInformation';
import ScheduleBusRoute from './ScheduleBusRoute';
import AdminLogin from './AdminLogin';
import Rule from './Rule';

function Admin({ match }) {
  return (
    <Fragment>
      <Route
        exact
        path={match.url + '/'}
        component={AdminLogin}
      />
      <Route
        exact
        path={match.url + '/tra-cuu-thong-tin'}
        component={CheckInformation}
      />
      <Route exact path={match.url + '/quy-dinh-nha-xe'} component={Rule} />
      <Route
        exact
        path={match.url + '/quan-ly-lich-xe'}
        component={ScheduleBusRoute}
      />
      <Route exact path={match.url + '/quan-ly-dat-huy'} component={Rule} />
      <Route exact path={match.url + '/bao-cao-thsong-ke'} component={Rule} />
    </Fragment>
  );
}

export default withRouter(Admin);
