import { useState , useEffect } from "react";
import { BsPersonPlus } from "react-icons/bs";
import back from "../../Assets/images/back.png";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import PersonalInfo from "./steps/PersonalInfo";
import CompanyInfo from "./steps/CompanyInfo";
import corporate from "../../Assets/images/Mask Group -1.png";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function RegisterCorporate() {
  const [formErrors, setFormErrors] = useState({});

  
  const navigate = useNavigate();
  const [num, setNum] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("is-user-login")) {
      navigate("/");
    }
  }, [navigate]);


  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bornDate: "",
    mobileNumber: "",
    fullName: "",
    whatsNumber: "",
    companyName: "",
    typeCompany: "",
    companyRecord: "",
    companyDate: "",
    currentCity: "",
    currentAddress: "",
    detaileBusiness: "",
    companyEmail: "",
    companyMobile: "",
    actualStart: "",
    phoneNumber: "",
    faxNumber: "",
    number_partners: "",
    file_record: "",
    establContract: "",
  });
  const data_ = [
    {
      key: "user_name",
      value: data.username,
    },
    {
      key: "company_name",
      value: data.companyName,
    },
    {
      key: "company_type",
      value: data.typeCompany,
    },
    {
      key: "company_record_history",
      value: data.companyDate,
    },
    {
      key: "city",
      value: data.currentCity,
    },
    {
      key: "current_address",
      value: data.currentAddress,
    },
    {
      key: "current_company_activity_details",
      value: data.detaileBusiness,
    },
    {
      key: "phone_number",
      value: num,
    },
    {
      key: "work_start_date",
      value: data.actualStart,
    },
    {
      key: "landline_number",
      value: data.phoneNumber,
    },
    {
      key: "fax_number",
      value: data.faxNumber,
    },
    {
      key: "number_of_partners",
      value: data.number_partners,
    },
    {
      key: "company_record_number",
      value: data.companyRecord,
    },
    {
      key: "email",
      value: data.companyEmail,
    },
    {
      key: "password",
      value: data.password,
    },
    {
      key: "file1",
      value: data.file_record,
    },
    {
      key: "file2",
      value: data.establContract,
    },
  ];

  //--------------add validation ----------
  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Please enter a username";
    }
    else if (values.password.length < 4) {
      errors.password = "Password must contain more than 4 characters";
    }
    else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    else if(!data.companyName){
      errors.companyName="Please enter the company name"
    }else if(!data.typeCompany){
      errors.typeCompany="Please enter the type of company"
    }
    else if(!data.companyDate){
      errors.companyDate = "Please enter company record history"
    }else if(!data.currentCity){
      errors.currentCity = "Please enter the currnet city"
    }else if(!data.currentAddress){
      errors.currentAddress = "Please enter the currnet address"
    }else if(!data.detaileBusiness){
      errors.detaileBusiness = "Please enter company's detaild business"
    }else if(!data.companyEmail){
      errors.companyEmail = "Please enter the company email"
    }else if(!num){
      errors.num = "Please enter mobile number"
    }else if(!data.actualStart){
      errors.actualStart = "Please enter actual start date"
    }
    else if(!data.number_partners){
      errors.number_partners = "Please enter the number partners"
    }
    else if(!data.companyRecord){
      errors.companyRecord = "Please enter the company record"
    }
    return errors;
  };

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleSubmit = () => {
    setFormErrors(validate(data));
    if (
      !data.password ||
      !data.companyName ||
      !data.number_partners ||
      !data.companyEmail ||
      !data.companyRecord ||
      !data.file_record ||
      !data.establContract
    ) {
      toast.error("Please enter all your data in the fields");
    } else {
      const formData = new FormData();
      data_.map((item) => formData.append(item.key, item.value));
      const errors = Object.values(validate(data));

      if (errors.length === 0) {
        Axios.post(`${BASE_API_URL}/api/companies/add-new-user`, formData)
          .then((res) => {
            const data1 = res.data;
            if (
              data1 ===
              "عذراً البريد الالكتروني الذي أدخلته موجود مسبقاً ،  من فضلك أدخل بريد الكتروني آخر ..."
            ) {
              toast.error(
                "Sorry, the email you entered already exists, please enter another email..."
              );
            } else if (
              data1 ===
              "عذراً ، توجد شركة تحمل نفس رقم السجل ، الرجاء إدخال رقم سجل آخر ..."
            ) {
              toast.error(
                "Sorry, there is a company with the same registration number, please enter another registration number..."
              );
            } else {
              toast.success("Your account has been created successfully");
              localStorage.setItem("number_partners", data.number_partners);
              localStorage.setItem("company_id" , data1);
              setTimeout(() => navigate("/add-partners"), 2000);
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
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
        />
      );
    } else if (page === 1) {
      return (
        <CompanyInfo
          formErrors={formErrors}
          num={num}
          setNum={setNum}
          data={data}
          setData={setData}
        />
      );
    }
  };
  const FormTitle = ["Personal Information", "Company Information"];
  return (
    <div className="registerCorporate">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <div>
        <Toaster />
      </div>
      <section className="register1">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">New User / Corporate</span>
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
        <img src={corporate} alt="" />
      </div>
    </div>
  );
}

export default RegisterCorporate;
