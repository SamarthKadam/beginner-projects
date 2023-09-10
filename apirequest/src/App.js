
import { useContext } from 'react';
import styles from './App.module.css'
import Navbar from './components/Navbar'
import UserSection from './components/UserSection';
import Value from './Value';
import Spinner from './components/Spinner';
function App() {
  const data=useContext(Value);
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      {
        data.loader?<Spinner/>:''
      }
      {
       !data.loader&&data.userdata?<UserSection></UserSection> :''
      }
    </div>
  );
}

export default App;