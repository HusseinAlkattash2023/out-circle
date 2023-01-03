import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const IndividualsManagment = () => {

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [individualsInfoList, setIndividualsInfoList] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API_URL}/api/craftsmen/all-craftsmen-users-info`)
            .then((res) => {
                setIndividualsInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className="individuals-managment text-center">
            <div className="container">
                <h1>Individuals Managment Page</h1>
                {individualsInfoList.length > 0 ?
                    /* Start Individuals Info Section */
                    <section className="individuals-info">
                        {individualsInfoList.map((individualInfo, index) =>
                            /* Start Individual Details Box */
                            <div className="individual-details-box mb-5" key={individualInfo._id}>
                                <h5 className="mb-4">Individual #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{individualInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {individualInfo.file_paths.length > 0 ? <td>
                                                {individualInfo.file_paths.map((path, index) =>
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

export default IndividualsManagment;