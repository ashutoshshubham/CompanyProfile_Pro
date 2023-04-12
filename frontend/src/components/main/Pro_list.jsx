import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';


const Pro_list = () => {

  const [profile, setProfile] = useState([])

  // const [imageData, setImageData] = useState([])


  const fetchProfiles = async () => {
    const res = await fetch('http://localhost:5000/company/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    setProfile(data)
  }

  const filterCompanies = async (category, value) => {
    
    const res = await fetch('http://localhost:5000/company/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    let filtered = data.filter(data => ( data[category].toLowerCase().includes(value.toLowerCase()) ))
    console.log(filtered);
    setProfile(filtered)

  }

  //   const fetchImages = async () => {
  //     const res = await fetch('http://localhost:5000/image/getall');
  //     console.log(res.status)

  //     const data = await res.json();
  //     console.log(data);
  //     setImageData(data)
  //   }

  useEffect(() => {
    fetchProfiles();
  }, [])

  //   useEffect(() => {
  //     fetchImages();
  //   }, [])

  const deleteProfile = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/company/delete/' + id, {
      method: "DELETE",
    })
    console.log(res.status);
    if (res.status === 200) {
      fetchProfiles();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile Deleted Successfully'
      })
    }
  }

  //   const deleteImage = async (id) => {
  //     console.log(id);
  //     const res = await fetch('http://localhost:5000/image/delete/' + id, {
  //       method: 'DELETE',
  //     })
  //     console.log(res.status);
  //     if (res.status === 200) {
  //       fetchImages();
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Success',
  //         text: 'Image Deleted Successfully'
  //       })
  //     }
  //   }

  return (
    <div className='container'>
      <button onClick={() => {filterCompanies('type', 'sales')}}>Sales</button>
      {/* <h1 className='text-center mt-3'>ALL PROFILES HERE</h1> */}
      {profile.map((profiles) => (

        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title"><b>Company Name - </b>{profiles.name}</h5>
            <div>
              <p>
                <b>Company Type - </b>{profiles.type}
              </p>
            </div>
            <div>
              <p>
                <b>Departments - </b>{profiles.departments}
              </p>
            </div>
            <div>
              <p>
                <b>Description - </b>{profiles.working}
              </p>
            </div>
            <div>
              <p>
                <b>Email - </b>{profiles.email}
              </p>
            </div>
            <div>
              <p>
                <b>Contact - </b>{profiles.contact}
              </p>
            </div>
            <div>
              <p>
                <b>Address - </b>{profiles.address}
              </p>
            </div>


            {/* <button type="button" className="btn btn-danger" onClick={() => (deleteProfile(profiles._id))}>
              Delete Profile
            </button> */}
          </div>
        </div>
        // <Accordion sx={{marginTop:'20px', marginBottom:'20px'}}>
        //   <AccordionSummary
        //     expandIcon={<ExpandMoreIcon />}
        //     aria-controls="panel1a-content"
        //     id="panel1a-header"
        //   >
        //     <Typography>
        //       <h2>Company Name - {profiles.name}</h2>
        //     </Typography>
        //   </AccordionSummary>
        //   <AccordionDetails>
        //     <Typography>
        //       <h4>Company Type - {profiles.type}</h4>
        //     </Typography>
        //     <Typography>
        //       Departments - {profiles.departments}
        //     </Typography>
        //     <Typography>
        //       Description - {profiles.working}
        //     </Typography>
        //     <Typography>
        //       Email - {profiles.email}
        //     </Typography>
        //     <Typography>
        //       Contact - {profiles.contact}
        //     </Typography>
        //     <Typography>
        //       Address - {profiles.address}
        //     </Typography>
        //   </AccordionDetails>

        //   <Button variant="contained" sx={{marginLeft:'15px', marginBottom:'15px'}} color='error' onClick={() => (deleteProfile(profiles._id))}>Delete Profile</Button>
        // </Accordion>



      ))}
      {/* {imageData.map((img) => (
        <div className="card">
          <div className="card-body">

            <img src={img.images} alt="" />

            <div>
              <button type="button" className="btn btn-primary" onClick={() => { deleteImage(img._id) }}>
                Delete Image
              </button>
            </div>
          </div>
        </div>

      ))} */}




      <div className='my-5'>
        <Link to='/homepage' className='mt-3'><b>Back</b></Link>
      </div>

    </div>
  )
}

export default Pro_list

