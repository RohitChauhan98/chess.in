import Square from './Square';
import './ChessBoard.css'
import { useStateValue } from './StateProvider';

function ChessBoard() {

    // const [blackPieces, setBlackPieces] = useState([])
    // const [whitePieces, setWhitePieces] = useState([])


    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8];

    const [{board}] = useStateValue();

    
    let sqColor = ['rgb(233,237,204)', 'rgb(119,153,84)']

    return (
        
        <div className='chessBoard'>{
            rows.map((row) => (
                <div key={row} className='row'>
                    {columns.map((col) => (
                    <Square key={col} id={col + row.charCodeAt(0)} color={sqColor[(row.charCodeAt(0) + col)%2]} x={row} y={col} piece={board[col-1][(row.charCodeAt(0) - 97)]}/>

                    ))}
                </div>
            ))}
        </div>

    )
}

export default ChessBoard