import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import CheckInformation from './CheckInformation';
import ScheduleBusRoute from './ScheduleBusRoute';
import Report from './Report';
import AdminLogin from './AdminLogin';
import Rule from './Rule';
import WithAuthorization from '../../AuthHOC';
import { ROLE } from '../../../common/const';

function Admin({ match }) {
  return (
    <Fragment>
      <Route exact path={match.url + '/'} component={AdminLogin} />
      <Route
        exact
        path={match.url + '/tra-cuu-thong-tin'}
        component={WithAuthorization([ROLE.COMPANY])(CheckInformation)}
      />
      <Route
        exact
        path={match.url + '/quy-dinh-nha-xe'}
        component={WithAuthorization([ROLE.COMPANY])(Rule)}
      />
      <Route
        exact
        path={match.url + '/quan-ly-lich-xe'}
        component={WithAuthorization([ROLE.COMPANY])(ScheduleBusRoute)}
      />
      <Route
        exact
        path={match.url + '/quan-ly-dat-huy'}
        component={WithAuthorization([ROLE.COMPANY])(ScheduleBusRoute)}
      />
      <Route
        exact
        path={match.url + '/bao-cao-thong-ke'}
        component={WithAuthorization([ROLE.COMPANY])(Report)}
      />
    </Fragment>
  );
}

export default withRouter(Admin);
