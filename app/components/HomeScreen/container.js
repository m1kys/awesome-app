import { connect } from 'react-redux';
import HomeScreen from './index';

const mapStateToProps = state => {
  return {
    items: state.test.items,
    showSpinner: state.test.isFetching
  }
}

export default connect(mapStateToProps)(HomeScreen);