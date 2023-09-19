import { createContext, useReducer, useContext } from 'react'

export const ChessBoardContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <ChessBoardContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ChessBoardContext.Provider>
)

export const useStateValue = () => useContext(ChessBoardContext);

export const initialState = {
    board: [
        ["black_rook", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_rook"],
        ["black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn"],
        ["null", "null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null", "null"],
        ["white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn"],
        ["white_rook", "white_knight", "white_bishop", "white_queen", "white_king", "white_bishop", "white_knight", "white_rook"],
    ]
}

export function reducer(state, action) {
    switch (action.type) {
        case 'SHOW_STEPS': {

            const boardWithSteps = showSteps(state.board, action);
            return {
                board: boardWithSteps,
                // board: [...state.board, state.board[action.pieceInfo.X][action.pieceInfo.Y] = 'circle'],
            }
        }

        case 'HIDE_STEPS':
            {
                return {
                    board: [...state.board, state.board[action.pieceInfo.X][action.pieceInfo.Y] = 'circle']
                }
            }

        default:
            return state;
    }



    function showSteps(board, action) {

        let boardWithSteps = [...board];

        switch (action.pieceInfo.type) {

            case 'black_queen': {

                let forth, back, left, right;
                forth = action.pieceInfo.X + 1;
                back = action.pieceInfo.X - 1;


                //Loop for showing step of back and front
                while (forth < 8 || back > -1) {
                    if (forth < 8) {
                        boardWithSteps[forth][action.pieceInfo.Y] = 'circle';
                        forth++;
                    }

                    if (back > -1) {
                        boardWithSteps[back][action.pieceInfo.Y] = 'circle';
                        back--;
                    }
                }

                //Loop for showing step of left and right
                right = action.pieceInfo.Y + 1;
                left = action.pieceInfo.Y - 1;
                while (right < 8 || left > -1) {
                    if (right < 8) {
                        boardWithSteps[action.pieceInfo.X][right] = 'circle';
                        right++;
                    }

                    if (left > -1) {
                        boardWithSteps[action.pieceInfo.X][left] = 'circle';
                        left--;
                    }
                }


                //diagonally leftDown
                let DownX = action.pieceInfo.X + 1;
                let DownY = action.pieceInfo.Y - 1;

                while (DownX < 8 && DownY > -1) {
                    boardWithSteps[DownX][DownY] = 'circle';
                    DownX++;
                    DownY--;
                }

                //diagonally rightDown
                DownX = action.pieceInfo.X + 1;
                DownY = action.pieceInfo.Y + 1;
                while(DownX <8 && DownY<8)
                {
                    boardWithSteps[DownX][DownY] = 'circle';
                    DownX++;
                    DownY++;
                }

                console.log(boardWithSteps)
                return boardWithSteps;

            }


            default:
                return boardWithSteps;

        }
    }
}