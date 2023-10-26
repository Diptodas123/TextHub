import { useState } from "react"

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");
    const [readText, setReadText] = useState("Read Aloud");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleClearClick = (e) => {
        setText("");
    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCapitalizeClick = (e) => {
        let length = text.length;
        let capitalizedText = "";
        capitalizedText += text[0].toUpperCase();
        for (let i = 1; i < length; i++) {
            capitalizedText += text[i].toLowerCase();
        }
        setText(capitalizedText);
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
    }
    const handleCopy = (e) => {
        navigator.clipboard.writeText(text);
        alert("Copied Text: " + text);
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
            <div className="container" style={{color: props.mode==="dark"?"white":"#042723" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        value={text}
                        style={{
                            backgroundColor: props.mode === "dark" ? "grey" : "white",
                            color: props.mode==="dark"?"white":"#042723",
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
                <button className="btn btn-primary mx-1" onClick={handleInvertClick}>Invert Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Capitalized Case</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button className="btn btn-warning mx-1" onClick={handleReadAloud}>{readText}</button>
                <button className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042723" }}>
                <h3>Your text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
            </div>
        </>
    )
}
