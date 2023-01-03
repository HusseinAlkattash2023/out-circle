import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const HandcraftsManagment = () => {

    const BASE_API_URL = useSelector(state => state.BASE_API_URL);

    const [craftsmenInfoList, setCraftsmenInfoList] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API_URL}/api/craftsmen/all-craftsmen-users-info`)
            .then((res) => {
                setCraftsmenInfoList(res.data);
            })
            .catch(err => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className="handcraft-managment text-center">
            <div className="container">
                <h1>Handcraft Managment Page</h1>
                {craftsmenInfoList.length > 0 ?
                    /* Start Handcrafts Info Section */
                    <section className="handcrafts-info">
                        {craftsmenInfoList.map((craftsmanInfo, index) =>
                            /* Start Handcraft Details Box */
                            <div className="handcraft-details-box mb-5" key={craftsmanInfo._id}>
                                <h5 className="mb-4">Handcraft #{index + 1} info :</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold p-3">User Name</td>
                                            <td className="p-3">{craftsmanInfo.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Files</td>
                                            {craftsmanInfo.file_paths.length > 0 ? <td>
                                                {craftsmanInfo.file_paths.map((path, index) =>
                                                    <a href={`${BASE_API_URL}/${path}`} target="_blank" className="d-block btn btn-success mb-3" key={index}>Download File {index + 1}</a>
                                                )}
                                            </td> : <td>Sorry Can't Files Added By User !!</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            /* End Handcraft Details Box */
                        )}
                    </section>
                    // End Handcrafts Info Section
                    : <p className="alert alert-danger">Sorry' Can't Users Now !!!</p>
                }
            </div>
        </div >
    );
};

export default HandcraftsManagment;