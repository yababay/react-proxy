import { useState } from 'react';

export default function App(){

    const [word, setWord] = useState('')

    function show(word){
    fetch(`/api/${word}`)
        .then(res => res.ok && res.text() || Promise.reject())
        .then(txt => setWord(txt))
        .catch(err => alert('Вы не забыли запустить backend?'))
    }

    return (
      <>
        <p>
          <button onClick={()=> show('hello')}>hello</button>
          <button  onClick={()=> show('world')}>world</button>
        </p>
        <h1>{word}</h1>
      </>
    )
}
