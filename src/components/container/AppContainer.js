import App from '../presentation/App';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  return {
    children: props.children
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;