import { h } from 'preact';
import style from './style.css';

const Home = () => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7];
  const cols = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
	  <div class={style.home}>
      <div class={style.board}>
        {rows.map(r => {
          return <div key={`row${r}`} class={style.row}>
            { cols.map(c => {
              return ((r+c) % 2) === 0 ?
                <div id={`col${c}`} class={style.tileEven}>p</div> :
                <div id={`col${c}`} class={style.tileOdd}>p</div>;
            })}
          </div>;
        })}

      </div>
	  </div>
  );
};

export default Home;
