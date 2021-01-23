import ObjectsList from './components/ObjectsList'
import Form from './components/Form'
import './style.css'
import AddObject from './components/AddObject';
import { connect } from 'react-redux';


function App({form}) {
  const hideMain = (form === "empty") ? ' hideMain' : ''
  return (
    <div className="App">
      <div className="List">
        <ObjectsList />
        <AddObject />
      </div>
      <div className={"Main" + hideMain}>
        <Form />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      form: state.form.form
  }
}

export default connect(mapStateToProps,null)(App)
