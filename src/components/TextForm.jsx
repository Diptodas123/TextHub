import { useState, useEffect } from "react"

export default function TextForm(props, { pageTitle = "TextHub - word counter | character counter | lowercase to uppercase | text read aloud" }) {

    const [text, setText] = useState("");
    const [readText, setReadText] = useState("Read Aloud");

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

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
                <div className="mb-1">
                    <textarea
                        placeholder="Enter text here..."
                        value={text}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
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
                <button disabled={ text.length === 0 } className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={ text.length === 0 } className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={ text.length === 0 } className="btn btn-primary mx-1 my-2" onClick={handleInvertClick}>Swap Case</button>
                <button disabled={ text.length === 0 } className="btn btn-primary mx-1 my-2" onClick={handleCapitalizeClick}>Capitalized Case</button>
                <button disabled={ text.length === 0 } className="btn btn-primary mx-1 my-2" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
                <button disabled={ text.length === 0 } className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={ text.length === 0 } className="btn btn-warning mx-1 my-2" onClick={handleReadAloud}>{readText}</button>
                <button disabled={ text.length === 0 } className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042723" }}>
                <h3>Your text Summary</h3>
                <p>{text.split(/\s+/).filter((char) => char !== "").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((char) => char !== "").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
