
import { useState, useEffect } from "react";
import "./styles/App.css"
import { Button, Col, Form, Row } from "react-bootstrap";

function App() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [calculatedVal, setCalculatedVal] = useState(0);
    const [clickedButton, setClickedButton] = useState("");

    const calc = () => {
        console.log("calc is triggered")
        setCalculatedVal(
            clickedButton == "+" ? (input1 + input2) :
                clickedButton == "-" ? (input1 - input2) :
                    clickedButton == "*" ? (input1 * input2) :
                        clickedButton == "/" ? (input1 / input2) : 0
        );
    }

    useEffect(() => {
        console.log("exec useEffect block")
        calc();
    }, [input1, input2, clickedButton]);

    return (
        <>
            <h1>Calculator</h1>
            <Row className="number-input">
                <h1>
                    {isNaN(calculatedVal) ? 0 : calculatedVal}
                </h1>
            </Row>
            <Row className="number-input">
                <Form.Label>First Number</Form.Label>
                <Form.Control
                    type="number"
                    value={input1}
                    onChange={(e) => { setInput1(parseInt(e.target.value)) }}
                />
            </Row>

            <Row className="number-input">
                <Form.Label>First Number</Form.Label>
                <Form.Control
                    type="number"
                    value={input2}
                    onChange={(e) => { setInput2(parseInt(e.target.value)) }}
                />
            </Row>

            <div style={{
                display: "flex",
                columnGap: 10,
                justifyContent: "space-around",
                flexWrap: "wrap"
            }}>
                <Button
                    className={`button ${clickedButton === "+" ? "btn-success" : "btn-secondary"}`}
                    onClick={() => {
                        setClickedButton("+");
                        calc();
                    }}
                >Add</Button>
                <Button
                    className={`button ${clickedButton === "-" ? "btn-success" : "btn-secondary"}`}
                    onClick={() => {
                        setClickedButton("-");
                        calc();
                    }}

                >Minus</Button>
                <Button
                    className={`button ${clickedButton === "*" ? "btn-success" : "btn-secondary"}`}
                    onClick={() => {
                        setClickedButton("*");
                        calc();
                    }}

                >Times</Button>
                <Button
                    className={`button ${clickedButton === "/" ? "btn-success" : "btn-secondary"}`}
                    onClick={() => {
                        setClickedButton("/");
                        calc();
                    }}
                >Divide</Button>
            </div>
        </>
    );
}
export default App;