import {useState} from "react";

export default function Feedback(props) {
    const [feedbackTitle, setFeedbackTitle] = useState("Have feedback? Feel free to submit here!");

    function handleSubmitFeedback() {
        // only change title if user has typed intot he input
        props.feedback && setFeedbackTitle("Thank you for submitting your feedback!");
    }

    return (
        <section className="feedback">
            <label>
                <h3>{feedbackTitle}</h3>
                <textarea type="text" placeholder="Let us know what you think!" className="feedbackInput" onChange={props.handleChange}/>
            </label>
            
            <div>
                <input type="submit" value="Submit" className="feedbackSubmit" onClick={handleSubmitFeedback}/>
            </div>
        </section>
    )
}