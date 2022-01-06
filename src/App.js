import react, { useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {

  let [showLoader, setShowLoader] = useState(false);
  let [Joke, setJoke] = useState();
  let getJokes = () => {
    setShowLoader(true);
    setJoke();
    axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general`).then(function (response) {
      console.log(response);
      setJoke(response.data[0]);
      setShowLoader(false);
    });
  }
  return <center><h1>JOKES</h1><div className="App"><div className="container">

    {
      showLoader && <div className="loader"><div className="spinner-border d-block " role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }

    {
      Joke && <>
        <h2>{Joke.setup}</h2>
        <h2>{Joke.punchline}</h2>
      </>
    }

    <button className="btn" onClick={getJokes}>Get Another Joke</button>
    </div>
  </div>
  </center>
}
export default App;