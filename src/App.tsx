import React from 'react';
import './App.css';
import words from './words-de';

function App() {
  const [used, setUsed] = React.useState(new Set())
  const [index, setIndex] = React.useState(Math.floor(Math.random() * words.length))

  const randomize = React.useCallback(() => {
    const newUsed = new Set(used.add(index))
    setUsed(newUsed)

    let newIndex = Math.floor(Math.random() * words.length)
    while (newUsed.has(newIndex)) {
      newIndex = Math.floor(Math.random() * words.length)
    }
    setIndex(newIndex)
  }, [index, used])

  const onKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if(e.keyCode === 32) {
      randomize()
    }
  }, [randomize])

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown as any)
    return () => window.removeEventListener('keydown', onKeyDown as any)
  }, [onKeyDown])

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
