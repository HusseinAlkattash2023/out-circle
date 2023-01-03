import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

const WelcomeMessageAr = () => {
  const [isShowWelcomeMessageAr, setShowWelcomeMessageAr] = useState("yes");

  const handleShowWelcome = () => {
    localStorage.setItem("showWelcomeMessageAr", "no");
    setShowWelcomeMessageAr("no");
  };

  return (
    isShowWelcomeMessageAr === "yes" && (
      <div className="welcome2">
        <span className="icon" onClick={handleShowWelcome}>
          <VscChromeClose />
        </span>
        <div className="bar">
          <p>
            تخولك خاصية دخولك كزائر الحفاظ على خصوصتك حيث يمكنك الإطلاع على
            خدماتنا بشكل كلي بدون معرفة معلوماتك الشخصية، كما تخولك ميزة الحصول
            على طلبك في أي مجال وفي أي خدمة من خلال فقط وسيلة تواصل تختارها أنت
            كإيميل أو موبايل فقط دون أي تفاصيل أخرى
          </p>
        </div>
      </div>
    )
  );
};

export default WelcomeMessageAr;
