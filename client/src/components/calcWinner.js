const calcWinner = (square) => {
    const combinations = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6],
    ];

    for(let combination of combinations) {
        const [s1,s2,s3] = combination;
        if(square[s1] && square[s1] === square[s2] && square[s1] === square[s3]) {
            return square[s1];
        }
    }
    return null;
}
export default calcWinner;