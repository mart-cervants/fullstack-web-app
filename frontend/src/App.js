import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

const App = () => {
  const [word, setWord] = useState('');

  const handlesearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  console.log(REACT_APP_UNSPLASH_KEY)

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handlesearchSubmit} />
    </div>
  );
}

export default App;