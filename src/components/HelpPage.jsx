import React from "react";
import "./HelpPage.css";

const HelpPage = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page to reset your password.",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support at support@example.com.",
    },
    {
      question: "What should I do if the app isn't working?",
      answer: "Try refreshing the page or contacting our support team for assistance.",
    },
  ];

  return (
    <div className="content">
      <h1>Help Center</h1>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
