import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const InstitutesManagment = () => {

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [institutesInfoList, setInstitutesInfoList] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API_URL}/api/craftsmen/all-craftsmen-users-info`)
            .then((res) => {
                setInstitutesInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className="institutes-managment text-center">
            <div className="container">
                <h1>Institutes Managment Page</h1>
                {institutesInfoList.length > 0 ?
                    /* Start Institutes Info Section */
                    <section className="institutes-info">
                        {institutesInfoList.map((instituteInfo, index) =>
                            /* Start Institute Details Box */
                            <div className="institute-details-box mb-5" key={instituteInfo._id}>
                                <h5 className="mb-4">Institute #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{instituteInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {instituteInfo.file_paths.length > 0 ? <td>
                                                {instituteInfo.file_paths.map((path, index) =>
                                                    <a href={`${BASE_API_URL}/${path}`} target="_blank" className="d-block btn btn-success mb-3" key={index}>Download File {index + 1}</a>
                                                )}
                                            </td> : <td>Sorry Can't Files Added By User !!</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            /* End Individual Details Box */
                        )}
                    </section>
                    // End Individuals Info Section
                    : <p className="alert alert-danger">Sorry' Can't Users Now !!!</p>
                }
            </div>
        </div >
    );
};

export default InstitutesManagment;