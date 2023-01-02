import { useState, useEffect } from "react";
import "./Message.css";
import { Link, useNavigate } from "react-router-dom";
import uploade from "../../Assets/images/Group 375.png";
import check from "../../Assets/images/check_box.png";
import send_message from "../../Assets/images/sendMessage.png";
import { AudioRecorder } from "react-audio-voice-recorder";
import logo from "../../Assets/images/logo.svg";
import Axios from "axios";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const MessageAr = ({
  admin,
  gmail,
  address,
  head,
  image,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  change_route,
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const width = windowSize.innerWidth;
  return width > 600 ? (
    <Message1
      text={text}
      image={image}
      gmail={gmail}
      admin={admin}
      change_route={change_route}
    />
  ) : (
    <Message2
      admin={admin}
      gmail={gmail}
      head={head}
      address={address}
      text1={text1}
      text2={text2}
      text3={text3}
      text4={text4}
      text5={text5}
      text6={text6}
      text7={text7}
      change_route={change_route}
    />
  );
};

export default MessageAr;

const Message1 = ({ text, image, gmail, admin, change_route }) => {
  const navigate = useNavigate();

  const user_ = localStorage.getItem("user");
  const user_obj = JSON.parse(user_);
  const data = user_
    ? localStorage.getItem("user")
    : localStorage.getItem("visitor");
  const obj = JSON.parse(data);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    setValue3(audio.src);
    audio.controls = true;
    document.body.appendChild(audio);
    const nest = document.body.appendChild(audio);
    nest.className = "sss";
  };

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const data_ = [
    {
      key: "text",
      value: value1,
    },
    {
      key: "file1",
      value: value2,
    },
    {
      key: "user_email",
      value: obj ? obj.email : "",
    },
    {
      key: "admin_email",
      value: gmail,
    },
    {
      key: "admin_email",
      value: admin,
    },
    {
      key: "subject",
      value: "Services",
    },
    {
      key: "phone_number",
      value: obj ? obj.phone_number : "",
    },
    {
      key: "whatsapp_number",
      value: obj ? obj.whatsapp_number : "",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const audioBlob = await fetch(value3).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice.mp3", { type: "audio/mp3" });
    data_.push({
      key: "file2",
      value: audioFile,
    });
    const formData = new FormData();
    data_.map((item) => formData.append(item.key, item.value));
    if (!obj) {
      toast.error(
        "من فضلك انقر على المستطيل الأخضر لكي تكمل بياناتك ﻹتمام إرسال الطلب"
      );
    } else {
      Axios.post(`${BASE_API_URL}/api/email/send-email`, formData)
        .then((res) => {
          if (typeof res.data === "object") {
            toast.success("لقد تم ارسال رسالتك بنجاح");
            localStorage.removeItem("visitor");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValue1("")
    setValue2();
    setValue3();
  };

  const visitorInformation = () => {
    navigate("/visitor-ar");
    localStorage.setItem("change_route", `${change_route}`);
  };

  return (
    <div className="message">
      <div className="section1">
        <div className="div1_ar">
          <p>{text}</p>
        </div>
        <div className="side_ar">
          <img src={`${image}`} alt="" />
        </div>
      </div>
      <div className="section2_ar">
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            required
            value={value1}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
            placeholder="...اكتب رسالتك هنا"
          ></textarea>
          <div className="upload">
            <label htmlFor="file">
              <img src={uploade} alt="" width="40px" />
              {!value2 ? (
                <p>تحميل الملف هنا لمزيد من التفاصيل</p>
              ) : (
                <p>تم تحميل ملفك بنجاح</p>
              )}
            </label>
            <input
              onChange={(e) => {
                setValue2(e.target.files[0]);
              }}
              id="file"
              type="file"
              style={{ display: "none" }}
            />
          </div>
          <div className="audio_ar">
            <AudioRecorder onRecordingComplete={addAudioElement} />
          </div>
          <div>
            <button>
              <img src={send_message} alt="" />
            </button>
          </div>
        </form>
        {!user_obj ? (
          <div
            className="check"
            onClick={visitorInformation}
            style={{ cursor: "pointer" }}
          >
            <img src={check} alt="" width="30px" />
            <p>معلومات يجب استكمالها في حال كنت زائراً لإتمام إرسال الطلب</p>
          </div>
        ) : (
          <div className="check">
            <img src={check} alt="" width="30px" />
            <p>معلومات يجب استكمالها في حال كنت زائراً لإتمام إرسال الطلب</p>
          </div>
        )}
        <div className="wages">
          يتم تحديد الأجور بعد دراسة الطلب وقبل استكماله ،وفي بعض الخدمات يُطلب
          دفعة من الأجور كهامش جدية
        </div>
      </div>
    </div>
  );
};

const Message2 = ({
  admin,
  gmail,
  address,
  head,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  change_route,
}) => {
  const navigate = useNavigate();

  const user_ = localStorage.getItem("user");
  const user_obj = JSON.parse(user_);
  const data = user_
    ? localStorage.getItem("user")
    : localStorage.getItem("visitor");
  const obj = JSON.parse(data);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const data_ = [
    {
      key: "text",
      value: value1,
    },
    {
      key: "file1",
      value: value2,
    },
    {
      key: "file2",
      value: value3,
    },
    {
      key: "user_email",
      value: obj ? obj.email : "",
    },
    {
      key: "admin_email",
      value: gmail,
    },
    {
      key: "admin_email",
      value: admin,
    },
    {
      key: "subject",
      value: "ًServices",
    },
    {
      key: "phone_number",
      value: obj ? obj.phone_number : "",
    },
    {
      key: "whatsapp_number",
      value: obj ? obj.whatsapp_number : "",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    data_.map((item) => formData.append(item.key, item.value));
    if (!obj) {
      toast.error(
        "من فضلك انقر على المستطيل الأخضر لكي تكمل بياناتك ﻹتمام إرسال الطلب"
      );
    } else {
      Axios.post(`${BASE_API_URL}/api/email/send-email`, formData)
        .then((res) => {
          if (typeof res.data === "object") {
            toast.success("لقد تم ارسال رسالتك بنجاح");
            localStorage.removeItem("visitor");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValue1("")
    setValue2();
    setValue3();
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    setValue3(audio.src);
    audio.controls = true;
    document.body.appendChild(audio);
    const nest = document.body.appendChild(audio);
    nest.className = "sss";
  };

  const visitorInformation = () => {
    navigate("/visitor-ar");
    localStorage.setItem("change_route", `${change_route}`);
  };

  return (
    <div className="message2">
      <div className="head">
        <img src={logo} className="logo_ar" alt="" />
        <h2 className="header_ar">{head}</h2>
        <p className="address-ar">{address}</p>
      </div>
      <div className="body">
        <div>
          <p>{text1}</p>
        </div>
        <div>
          <p>{text2}</p>
        </div>
        <div>
          <p>{text3}</p>
        </div>
        <div>
          <p>{text4}</p>
        </div>
        <div>
          <p>{text5}</p>
        </div>
        <div>
          <p>{text6}</p>
        </div>
        <div>
          <p>{text7}</p>
        </div>
      </div>
      <div className="content">
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            required
            value={value1}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
            placeholder="...اكتب رسالتك هنا"
          ></textarea>
          <div className="upload">
            <label htmlFor="file">
              <img src={uploade} alt="" width="40px" />
              {!value2 ? (
                <p>تحميل الملف هنا لمزيد من التفاصيل</p>
              ) : (
                <p>تم تحميل ملفك بنجاح</p>
              )}
            </label>
            <input
              onChange={(e) => {
                setValue2(e.target.files[0]);
              }}
              id="file"
              type="file"
              style={{ display: "none" }}
            />
          </div>
          <div className="audio_ar">
            <AudioRecorder onRecordingComplete={addAudioElement} />
          </div>
          <div>
            <button>
              <img src={send_message} alt="" />
            </button>
          </div>
        </form>
        {!user_obj ? (
          <div
            className="check"
            onClick={visitorInformation}
            style={{ cursor: "pointer" }}
          >
            <img src={check} alt="" width="30px" />
            <p>معلومات يجب استكمالها في حال كنت زائراً لإتمام إرسال الطلب</p>
          </div>
        ) : (
          <div className="check">
            <img src={check} alt="" width="30px" />
            <p>معلومات يجب استكمالها في حال كنت زائراً لإتمام إرسال الطلب</p>
          </div>
        )}
        <div className="wages">
          يتم تحديد الأجور بعد دراسة الطلب وقبل استكماله ،وفي بعض الخدمات يُطلب
          دفعة من الأجور كهامش جدية{" "}
        </div>
      </div>
    </div>
  );
};
