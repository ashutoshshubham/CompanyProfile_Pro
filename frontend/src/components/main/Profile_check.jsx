import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Profile_check = () => {

    // const fetchProfiles = async () => {
    //     const res = await fetch('http://localhost:5000/company/getall');
    //     console.log(res.status)

    //     const data = await res.json();
    //     console.log(data);
    //     setProfile(data)
    // }

    const { id } = useParams();
    // console.log(id);
    const [ProfileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getProfileByid = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/company/getbyid/' + id);
        console.log(res.status);

        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProfileData(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfileByid();
    }, []);










    return (
        <div className='container'>

            <div className="card w-50 mx-auto mt-5">
                <div className="card-body">
                    <h3 className="card-title text-center"><b>AUTHENTICATE</b></h3>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="form12">
                            Enter Password
                        </label>
                        <input type="text" id="form12" className="form-control" />
                    </div>



                    <button type="button" className="btn btn-primary">
                        Button
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Profile_check