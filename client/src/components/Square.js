import "../stylesheets/square.css";

const Square = (data) => {

    return (
        <button className="square" onClick={data.onClickEvent}>{data.value}</button>
    )
}

export default Square;