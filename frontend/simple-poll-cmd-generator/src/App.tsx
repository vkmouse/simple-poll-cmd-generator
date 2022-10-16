import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className='header'>
        <div className='title'>Simple Poll 指令產生器</div>
      </div>
      <div className='main'>
        <div className='container'>
          <div className='row d-flex align-item-center'>
            <input className='vote vote-title' type='text' placeholder='投票主題' />
            <button className='addItem'>

              <svg width="32" height="32" viewBox="0 0 24 24">
                <path className="attachButtonPlus-3IYelE" fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path>
              </svg>
            </button>
          </div>
          <div className='row d-flex justify-content-end'>
            <button>產生投票指令</button>
          </div>
          <div className='row'>
            <input className='vote vote-item' type='text' placeholder='選項 1' />
          </div>
          <div className='row'>
            <input className='vote vote-item' type='text' placeholder='選項 1' />
          </div>
          <div className='row'>
            <input className='vote vote-item' type='text' placeholder='選項 1' />
          </div>
          <div className='row'>
            <input className='vote vote-item' type='text' placeholder='選項 1' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
