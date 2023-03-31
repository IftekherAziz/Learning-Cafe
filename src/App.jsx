import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500&display=swap');
</style>;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <ToastContainer />
    </div>
  );
}

export default App
