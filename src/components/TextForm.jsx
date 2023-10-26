import { useState } from "react"

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");
    const [readText, setReadText] = useState("Read Aloud");

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleClearClick = (e) => {
        setText("");
        props.showAlert("Text successfully cleared", "success");
    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces successfully deleted", "success");
    }
    const handleCapitalizeClick = (e) => {
        const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(capitalizedText);
        props.showAlert("Text successfully capitalized ", "success");
    }
    const handleInvertClick = (e) => {
        let length = text.length;
        let newText = "";
        for (let i = 0; i < length; i++) {
            if (text[i].toLowerCase() === text[i]) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Case Inverted", "success");
    }
    const handleCopy = (e) => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleReadAloud = (e) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        if (readText === "Read Aloud") {
            setReadText("Stop");
        } else {
            setReadText("Read Aloud");
            window.speechSynthesis.cancel();
        }
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042723" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        value={text}
                        style={{
                            backgroundColor: props.mode === "dark" ? "grey" : "white",
                            color: props.mode === "dark" ? "white" : "#042723",
                            resize: "none"
                        }}
                        className="form-control"
                        id="myBox"
                        onChange={handleOnChange}
                        rows="6"
                    >
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleInvertClick}>Swap Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Capitalized Case</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button className="btn btn-warning mx-1" onClick={handleReadAloud}>{readText}</button>
                <button className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042723" }}>
                <h3>Your text Summary</h3>
                <p>{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here..."}</p>
            </div>
        </>
    )
}
