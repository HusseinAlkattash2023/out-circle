import { useState, useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import { BsPersonPlus } from "react-icons/bs";
import institute from "../../Assets/images/Mask Group -2.png";
import PersonalInfo from "./steps/PersonalInfo";
import InstituteInfo from "./steps/InstituteInfo";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function RegisterInstituse() {
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);

  const [page, setPage] = useState(0);
  const [num, setNum] = useState("");
  const [file1, setFile1] = useState();
  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    full_name: "",
    born_date: "",
    whatsapp_number: "",
    email: "",
    institute_name: "",
    record_history: "",
    record_number: "",
    current_city: "",
    current_address: "",
    institute_email: "",
    detailed_business: "",
    start_date: "",
    phone_number: "",
    fax_number: "",
    landline_number: "",
  });

  const data_ = [
    {
      key: "user_name",
      value: data.username,
    },
    {
      key: "password",
      value: data.password,
    },
    {
      key: "full_name",
      value: data.full_name,
    },
    {
      key: "birthday",
      value: data.born_date,
    },
    {
      key: "phone_number",
      value: num,
    },
    {
      key: "whatsapp_number",
      value: data.whatsapp_number,
    },
    {
      key: "user_email",
      value: data.email,
    },
    {
      key: "institute_name",
      value: data.institute_name,
    },
    {
      key: "institute_record_number",
      value: data.record_number,
    },
    {
      key: "institute_record_history",
      value: data.record_history,
    },
    {
      key: "city",
      value: data.current_city,
    },
    {
      key: "current_address",
      value: data.current_address,
    },
    {
      key: "current_institute_activity_details",
      value: data.detailed_business,
    },
    {
      key: "email",
      value: data.institute_email,
    },
    {
      key: "work_start_date",
      value: data.start_date,
    },
    {
      key: "landline_number",
      value: data.phone_number,
    },
    {
      key: "fax_number",
      value: data.fax_number,
    },
    {
      key: "land_phone_extension",
      value: data.landline_number,
    },
    {
      key: "user_file",
      value: file1,
    },
  ];

  //--------------add validation ----------
  const validate = (values) => {
    let errors = {};
    if(!values.username){
      errors.username = "Please enter your username";
    }
    else if (values.password.length < 4) {
      errors.password = "Password must contain at least 8 characters";
    }
    else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
    else if(!values.full_name){
      errors.full_name = "Please enter your full name";
    }
    else if(!values.born_date){
      errors.born_date = "Please enter your birthday";
    }
    else if(!num){
      errors.num = "Please enter your mobile number";
    }
    else if(!values.email){
      errors.email = "Please enter your email";
    }
    else if(!values.institute_name){
      errors.institute_name = "Please enter the institute name";
    }
    else if(!values.record_number){
      errors.record_number = "Please enter institute record number";
    }
    else if(!values.record_history){
      errors.record_history = "Please enter institute record date";
    }
    else if(!values.current_city){
      errors.current_city = "Please enter the current city";
    }
    else if(!values.current_address){
      errors.current_address = "Please enter the current city";
    }
    else if(!values.detailed_business){
      errors.detailed_business = "Please enter this field";
    }
    else if(!values.start_date){
      errors.start_date = "Please enter this field";
    }
    else if(!values.institute_email){
      errors.institute_email = "Please enter this field";
    }
    else if(!values.landline_number){
      errors.landline_number = "Please enter this field";
    }
    return errors;
  };

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleSubmit = () => {
    setFormErrors(validate(data));
    if (
      data.record_number === "" ||
      data.institute_email === "" ||
      data.password === "" ||
      !file1
    ) {
      toast.error("Please enter your data in the fields");
    } else {
      const formData = new FormData();
      data_.map((item) => formData.append(item.key, item.value));

      const errors = Object.values(validate(data));

      if (errors.length === 0) {
        Axios.post(`${BASE_API_URL}/api/institutes/add-new-user`, formData)
          .then((res) => {
            const data1 = res.data;
            if (typeof data1 === "string") {
              toast.error(
                "Sorry, the email you entered already exists, please enter another email..."
              );
            } else {
              toast.success("Your account has been created successfully");
              setTimeout(() => navigate("/login"), 2000);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

  const displayPage = () => {
    if (page === 0) {
      return (
        <PersonalInfo
          formErrors={formErrors}
          num={num}
          setNum={setNum}
          setData={setData}
          data={data}
        />
      );
    } else if (page === 1) {
      return (
        <InstituteInfo
          formErrors={formErrors}
          setFile1={setFile1}
          file1={file1}
          setData={setData}
          data={data}
        />
      );
    }
  };
  const FormTitle = ["Personal Information", "Institute Information"];
  return (
    <div className="instituse">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <div>
        <Toaster />
      </div>
      <section className="register2">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">New User / Institute</span>
        </header>
        <div className="form-container">
          <div className="header">
            <h2>{FormTitle[page]}</h2>
          </div>
          <div className="body">{displayPage()}</div>
          <div className="footer">
            <button
              className="next mt-3 ms-2 py-1 px-4"
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="next mt-3 ms-2 py-1 px-4"
              onClick={(currPage) => {
                if (page === FormTitle.length - 1) {
                  handleSubmit();
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitle.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </section>
      <div className="background2">
        <img src={institute} alt="" />
      </div>
    </div>
  );
}

export default RegisterInstituse;
