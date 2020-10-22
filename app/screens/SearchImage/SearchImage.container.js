import {connect} from 'react-redux';
import idx from 'idx';

import SearchImage from './SearchImage';
import {googleImageSearchEffects} from '../../packages/services';

const {getImages} = googleImageSearchEffects;

const mapStateToProps = (state) => ({
  isLoading: idx(state, (_) => _.googleImages.isLoading) || false,
  success: idx(state, (_) => _.googleImages.success) || false,
  error: idx(state, (_) => _.googleImages.error) || null,
});

export default connect(mapStateToProps, {getImages})(SearchImage);
