import React from 'react';
import logo from './logo.svg';
import './App.css';
import words from './words-de';

function App() {
  const [used, setUsed] = React.useState(new Set())
  const [index, setIndex] = React.useState(Math.floor(Math.random() * words.length))

  const randomize = () => {
    const newUsed = new Set(used.add(index))
    setUsed(newUsed)

    let newIndex = Math.floor(Math.random() * words.length)
    while (newUsed.has(newIndex)) {
      newIndex = Math.floor(Math.random() * words.length)
    }
    setIndex(newIndex)
  }

  const onKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if(e.keyCode == 32) {
      randomize()
    }
  }, [])

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown as any)
    return () => window.removeEventListener('keydown', onKeyDown as any)
  }, [])

  const gameOver = React.useMemo(() => {
    return used.size === words.length
  }, [used])

  return (
    <div className="App" onKeyDown={onKeyDown}>
      <header className="App-header">
        <h1>
          {words[index]}
        </h1>
        {gameOver ?
          <h2>Alle Wörter durch!</h2> :
          <button onClick={randomize}><h2>Nächstes Wort</h2></button>
        }
      </header>
    </div>
  );
}

export default App;
