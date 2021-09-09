import { Sidebar, Smallbox, Maincontent} from "./welcome";
import "./App.css";




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
