import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import corporate from "../../Assets/images/Mask Group -1.png";
import "./index.css";
import { BsPersonPlus } from "react-icons/bs";
import Axios from "axios";
import Partner from "../../Components/PartnerInfo/index";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const AddPartners = () => {
  const navigate = useNavigate();
  const [partnersInfo, setPartnersInfo] = useState([]);
  const number_of_partners = localStorage.getItem("number_partners");
  const company_id = localStorage.getItem("company_id");
  const [formErrors , setFormErrors] = useState({});

  const [data, setData] = useState({
    full_name: "",
    birthday: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
    land_phone_extension: "",
    participation_rate: "",
  });

  const validate =()=>{
    const errors ={};
    if(!data.full_name){
      errors.full_name = "Please enter this field"
    }
    return errors;
  }


  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);
  


  const handleSubmit = (e) => {
    e.preventDefault();
      Axios.post(`${BASE_API_URL}/api/partners/add-partners?company_id=${company_id}` , {
        partners_info: partnersInfo,
    })
    .then(() => {
      toast.success("Partner information has been added successfully")
      setTimeout(() => {
        navigate("/login")
      }, 2000);
    })
    .catch(err => console.log(err));
    
  };
  return (
    <div className="add_parteners">
      <div><Toaster/></div>
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">add partners</span>
        </header>
        <form className="form-container">
          <div className="body">
            {(() => {
              const arr = [];
              for (let i = 0; i < number_of_partners; i++) {
                arr.push(
                  <div key={i}>
                    <Partner
                      formErrors={formErrors}
                      setData={setData}
                      data={data}
                      num={i}
                      setPartnersInfo={setPartnersInfo}
                      partnersInfo={partnersInfo}
                    />
                  </div>
                );
              }
              return arr;
            })()}
          </div>
          <div className="footer">
            <button className="mt-3" onClick={handleSubmit}>
              REGISTER
            </button>
          </div>
        </form>
      </section>
      <div className="background2">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
};

export default AddPartners;
