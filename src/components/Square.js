// import { useEffect } from 'react';
import './Square.css'
import { useStateValue } from './StateProvider';

function Square({ color, x, y, piece }) {

  const [, dispatch] = useStateValue();

  const [{board}] = useStateValue();



  const showSteps = () => {

    for(let i=0; i<8; i++)
    {
      for(let j=0; j<8; j++)
      {
        if(board[i][j] === 'circle')
        {
          board[i][j] = 'null';
        }
      }
    }


      dispatch({
        type: 'SHOW_STEPS',
        pieceInfo: {
          type: piece,
          X: y-1,
          Y: x.charCodeAt(0) - 97
        }
      })
  }

  let p;

  switch (piece) {
    case "black_rook":
      p = <i class="fa-solid fa-chess-rook fa-2xl"></i>
      break;
    case "black_knight":
      p = <i class="fa-solid fa-chess-knight fa-2xl "></i>
      break;
    case "black_bishop":
      p = <i class="fa-solid fa-chess-bishop fa-2xl "></i>
      break;
    case "black_queen":
      p = <i class="fa-solid fa-chess-queen fa-2xl "></i>
      break;
    case "black_king":
      p = <i class="fa-solid fa-chess-king fa-2xl "></i>
      break;
    case "black_pawn":
      p = <i class="fa-solid fa-chess-pawn fa-2xl "></i>
      break;
    case "white_rook":
      p = <i class="fa-solid fa-chess-rook fa-2xl " style={{ color: "#ffffff" }}></i>
      break;
    case "white_knight":
      p = <i class="fa-solid fa-chess-knight fa-2xl " style={{ color: "#ffffff" }}></i>
      break;
    case "white_bishop":
      p = <i class="fa-solid fa-chess-bishop fa-2xl " style={{ color: "#ffffff" }}></i>
      break;
    case "white_queen":
      p = <i class="fa-solid fa-chess-queen fa-2xl " style={{ color: "#ffffff" }}></i>
      break;
    case "white_king":
      p = <i class="fa-solid fa-chess-king fa-2xl " style={{ color: "#ffffff" }}></i>
      break;
    case "white_pawn":
      p = <i class="fa-solid fa-chess-pawn fa-2xl " style={{ color: "#ffffff" }}></i>
      break;
    case "circle":
      p = <i class="fa-regular fa-circle"></i>
      break;

    default:
    //nothing to do
  }

  return (
    <div style={{ height: "70px", width: "70px", backgroundColor: color, display: "flex", alignItems: "center" }} onClick={showSteps}>
      <div className='pieceImg'>{p}</div>
      {/* <p style={{ color: "black" }}>{x}{y}</p> */}
    </div>
  )
}

export default Square