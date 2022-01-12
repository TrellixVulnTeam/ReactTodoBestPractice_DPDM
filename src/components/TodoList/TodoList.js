import React from 'react'
import './TodoList.scss'
function TodoList() {
    return (
        <div>
            <article class="leaderboard"></article>
  {/* <header>

    <h1 class="leaderboard__title"><span class="leaderboard__title--top">Forbes</span><span class="leaderboard__title--bottom">Leaderboard</span></h1>
  </header> */}
  
  <main class="leaderboard__profiles">
    <article class="leaderboard__profile">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture"/>
      <span class="leaderboard__name">Mark Zuckerberg</span>
      <span class="leaderboard__value">35.7<span>B</span></span>
    </article>
    
    <article class="leaderboard__profile">
      <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
      <span class="leaderboard__name">Dustin Moskovitz</span>
      <span class="leaderboard__value">9.9<span>B</span></span>
    </article>
    
    <article class="leaderboard__profile">
      <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="Elizabeth Holmes" class="leaderboard__picture"/>
      <span class="leaderboard__name">Elizabeth Holmes</span>
      <span class="leaderboard__value">4.5<span>B</span></span>
    </article>
    
    <article class="leaderboard__profile">
      <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" class="leaderboard__picture"/>
      <span class="leaderboard__name">Evan Spiegel</span>
      <span class="leaderboard__value">2.1<span>B</span></span>
    </article>
  </main>
</div>
        
    )
}

export default TodoList
