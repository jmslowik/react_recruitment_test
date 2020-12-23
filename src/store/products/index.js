import * as actions from './actions';
import * as reducers from './reducer';
import * as sagas from './saga';
import * as selectors from './selectors';

export default {
  ...actions,
  ...reducers,
  ...sagas,
  ...selectors,
};
