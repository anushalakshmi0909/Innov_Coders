import React, { useState } from "react";
import "./FeedbackPage.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      console.log("Feedback submitted:", feedback);
      setFeedback("");
      setSubmitted(true);
    } else {
      alert("Please provide valid feedback.");
    }
  };

  return (
    <div className="content">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      {submitted && <p className="thank-you">Thank you for your feedback!</p>}
    </div>
  );
};

export default FeedbackPage;
