import {connect} from 'react-redux';
import idx from 'idx';

import LinkList from './LinkList';

const mapStateToProps = (state) => ({
  images: idx(state, (_) => _.googleImages.data) || {},
});

export default connect(mapStateToProps, {})(LinkList);
