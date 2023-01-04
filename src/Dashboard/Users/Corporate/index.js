import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const CorporateManagment = () => {

    const navigate = useNavigate();

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [companiesInfoList, setCompaniesInfoList] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("admin_login")) {
            navigate("/dashboard/admin/login");
          }
        axios.get(`${BASE_API_URL}/api/companies/all-compaines`)
            .then((res) => {
                setCompaniesInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL , navigate]);

    return (
        <div className="corporate-managment text-center">
            <div className="container">
                <h1>Corporate Managment Page</h1>
                {companiesInfoList.length > 0 ?
                    /* Start Companies Info Section */
                    <section className="companies-info">
                        {companiesInfoList.map((companyInfo, index) =>
                            /* Start Company Details Box */
                            <div className="company-details-box mb-5" key={companyInfo._id}>
                                <h5 className="mb-4">Corporate #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{companyInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Company Name</td>
                                            <td className="p-3">{companyInfo.company_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Type Of Company</td>
                                            <td className="p-3">{companyInfo.company_type}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Company Record Number</td>
                                            <td className="p-3">{companyInfo.company_record_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Company Record Date</td>
                                            <td className="p-3">{companyInfo.company_record_history}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Current City</td>
                                            <td className="p-3">{companyInfo.city}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Current Address</td>
                                            <td className="p-3">{companyInfo.current_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Company's detailed bussiness</td>
                                            <td className="p-3">{companyInfo.current_company_activity_details}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Company Email Address</td>
                                            <td className="p-3">{companyInfo.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Company Mobile Number</td>
                                            <td className="p-3">{companyInfo.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Actual Start Date</td>
                                            <td className="p-3">{companyInfo.work_start_date}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Phone Number</td>
                                            <td className="p-3">{companyInfo.landline_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Fax Number</td>
                                            <td className="p-3">{companyInfo.fax_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Number Of Partners</td>
                                            <td className="p-3">{companyInfo.number_of_partners}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {companyInfo.file_paths.length > 0 ? <td>
                                                {companyInfo.file_paths.map((path, index) =>
                                                    <a href={`${BASE_API_URL}/${path}`} target="_blank" className="d-block btn btn-success mb-3" key={index}>Download File {index + 1}</a>
                                                )}
                                            </td> : <td>Sorry Can't Files Added By User !!</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            // End Company Details Box
                        )}
                    </section>
                    // End Companies Info Section
                    : <p className="alert alert-danger">Sorry' Can't Users Now !!!</p>
                }
            </div>
        </div>
    );
};

export default CorporateManagment;