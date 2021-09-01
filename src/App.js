import logo from "./logo.svg";
import "./App.css";

function Sidebar() {
  return (
    <div className='sidebar'>
      <p>Dashboard</p>
      <p>Widget</p>
      <p>Reviews</p>
      <p>Customers</p>
      <p>Online Analysis</p>
      <p>Settings</p>
    </div>
  );
}
function Smallbox(props) {
  return (
    <div className='small-box'>
      <p>{props.title}</p>
      <h3>{props.data1}</h3>
      <h3>{props.data2}</h3>
      <h3>{props.data3}</h3>
    </div>
  );
}
function Maincontent(props) {
  return (
    <div className='main-content'>
      <p>{props.title}</p>
      <h3>{props.data}</h3>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Smallbox title='Reviews' data1='1,281' />
      <Smallbox title='Average Rating' data1='4.6' />
      <Smallbox
        title='Sentiment Analysis'
        data1='960'
        data2='122'
        data3='321'
      />
      <Maincontent title='Website Visitors' data='821' />
    </div>
  );
}

export default App;
