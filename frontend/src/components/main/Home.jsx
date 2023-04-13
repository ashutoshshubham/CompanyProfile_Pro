import React from 'react'

const Home = () => {
  return (
    <div className='container'>

      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg" alt="" className='w-100' />

      <h1 className='text-center my-5'>WELCOME TO OUR WEBSITE</h1>

      <p className='mt-3 text-center fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magni pariatur eum laborum unde vel repellat aspernatur repudiandae magnam illum nesciunt neque tempore eius, consequuntur temporibus voluptate, nisi in vitae, quisquam voluptates explicabo nemo dolor! Dolores aspernatur veniam cupiditate explicabo velit minima, incidunt ipsum ratione. Veniam voluptatum dolorum minus voluptates, impedit molestias tempore autem quis officia nulla quae sed ea! Doloremque atque nesciunt a beatae iure, temporibus quisquam ducimus repellendus possimus quod tempora. Ullam repellat assumenda totam? Dolorem, eligendi dicta.</p>

      <div className="row">

        <div className="col-md-6 card mt-2">
          <div className="card-body">
            <h3 className="card-title border border-danger border-3 rounded-pill d-inline px-3">About Us</h3>
            <p className="card-text my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus maxime soluta numquam adipisci dolorum velit neque eos natus assumenda doloremque iure vero quas non quasi esse similique, consequatur animi!
            </p>

          </div>
        </div>

        <div className="col-md-6 card mt-2">
          <div className="card-body">
            <h3 className="card-title border border-danger border-3 rounded-pill d-inline px-3">Why Choose Us</h3>
            <p className="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laudantium magni cupiditate, eos doloremque repellat, consequatur illo itaque velit eum dolores nisi accusantium voluptatum dolorum nostrum ratione provident atque aspernatur?
            </p>

          </div>
        </div>

      </div>

      <div className="row">

        <div className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home