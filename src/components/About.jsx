import { useEffect } from "react"

export default function About(props) {

    const myStyle = {
        backgroundColor: props.mode === "dark" ? "rgb(36,74,104)" : "white",
        color: props.mode === "dark" ? "white" : "#042743",
    }
    useEffect(() => {
        document.title = props.pageTitle;
    }, [props.pageTitle]);

    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
                <h1 className="my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>About Us</h1>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Analyse Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextHub gives you a way to analyse your text quickly and efficiently. Be it word count, character count or other necessary functionalities.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextHub is a free character counter tool that provides instant character count & word count statistics for a given text. It reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Edge, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excel document, pdf, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
