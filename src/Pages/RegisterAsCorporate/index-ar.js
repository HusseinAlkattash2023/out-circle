import React, { useState, useEffect } from "react";
import { BsPersonPlus } from "react-icons/bs";
import back from "../../Assets/images/back.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonalInfoAr from "./steps/PersonalInfo/index-ar";
import CompanyInfoAr from "./steps/CompanyInfo/index-ar";
import corporate from "../../Assets/images/ar_photo/corporate.png";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function RegisterCorporateAr() {
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
      errors.username = "من فضلك ادخل اسم المستخدم";
    } else if (values.password.length < 8) {
      errors.password = "كلمة المرور يجب ان تحوي 8 محارف على الأقل";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "يجب ان تتطابق كلمات المرور";
    } else if(!data.companyName){
      errors.companyName="من فضلك أدخل اسم الشركة"
    }else if(!data.typeCompany){
      errors.typeCompany="من فضلك أدخل نوع الشركة"
    }
    else if(!data.companyDate){
      errors.companyDate = "من فضلك أدخل تاريخ سجل الشركة"
    }else if(!data.currentCity){
      errors.currentCity = "من فضلك أدخل اسم المحافظة"
    }else if(!data.currentAddress){
      errors.currentAddress = "من فضلك أدخل العنوان الحالي"
    }else if(!data.detaileBusiness){
      errors.detaileBusiness = "من فضلك أدخل تفاصيل نشاط الشركة الحالي"
    }else if(!data.companyEmail){
      errors.companyEmail = "من فضلك أدخل البريد الألكتروني للشركة"
    }else if(!num){
      errors.num = "من فضلك أدخل رقم الموبايل"
    }else if(!data.actualStart){
      errors.actualStart = "من فضلك أدخل تاريخ بدء العمل الفعلي"
    }
    else if(!data.number_partners){
      errors.number_partners = "من فضلك أدخل عدد الشركاء"
    }
    else if(!data.companyRecord){
      errors.companyRecord = "من فضلك أدخل رقم سجل الشركة"
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
      toast.error("من فضلك أدخل كامل بياناتك في الحقول");
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
                "عذراً البريد الالكتروني الذي أدخلته موجود مسبقاً ،  من فضلك أدخل بريد الكتروني آخر"
              );
            } else if (
              data1 ===
              "عذراً ، توجد شركة تحمل نفس رقم السجل ، الرجاء إدخال رقم سجل آخر ..."
            ) {
              toast.error(
                "عذراً ، توجد شركة تحمل نفس رقم السجل ، الرجاء إدخال رقم سجل آخر"
              );
            } else {
              toast.success("تم إنشاء حسابك بنجاح");
              localStorage.setItem("number_partners", data.number_partners);
              setTimeout(() => navigate("/add-partners-ar"), 2000);
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
        <PersonalInfoAr
          formErrors={formErrors}
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
        />
      );
    } else if (page === 1) {
      return (
        <CompanyInfoAr
          formErrors={formErrors}
          num={num}
          setNum={setNum}
          data={data}
          setData={setData}
        />
      );
    }
  };
  const FormTitle = ["معلومات شخصية", "معلومات الشركة"];
  return (
    <div className="registerCorporate">
      <header>
        <Link to="/register-ar" className="back_ar">
          <span>رجوع</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <div>
        <Toaster />
      </div>
      <section className="register1_ar">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">مستخدم جديد / شركة</span>
        </header>
        <div className="form-container">
          <div className="header">
            <h2>{FormTitle[page]}</h2>
          </div>
          <div className="body">{displayPage()}</div>
          <div className="footer">
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
              {page === FormTitle.length - 1 ? "إرسال" : "التالي"}
            </button>
            <button
              className="next mt-3 ms-2 py-1 px-4"
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
            >
              السابق
            </button>
          </div>
        </div>
      </section>
      <div className="background2-ar">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
}

export default RegisterCorporateAr;
