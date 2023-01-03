import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

const WelcomeVisitor = () => {
  const [isShowWelcomeMessage, setShowWelcomeMessage] = useState("yes");

  const handleShowWelcome = () => {
    localStorage.setItem("showWelcomeMessage", "no");
    setShowWelcomeMessage("no");
  };

  return (
    isShowWelcomeMessage === "yes" && (
      <div className="welcome">
        <span className="icon" onClick={handleShowWelcome}>
          <VscChromeClose />
        </span>
        <div className="bar">
          <p>
            Your login as a visitor entitles you to maintain your privacy where
            you can access our services completely without knowing your personal
            information. It also entitles you to obtain your request in any
            service of any field through only one mean of communication that you
            choose as an email or mobile only without any other details.
          </p>
        </div>
      </div>
    )
  );
};

export default WelcomeVisitor;
