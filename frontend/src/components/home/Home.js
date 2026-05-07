import "./home.css"

function Home() {
  return (
    <section>
      <div className="container casas">
      
        <div className="casa">
          <img src="https://media.licdn.com/dms/image/v2/D4E22AQGvDqlxiM0LRw/feedshare-shrink_800/B4EZfAUJdoHwAk-/0/1751278213725?e=2147483647&v=beta&t=5YiB5w3wU6am4HAyjS2K_ve6drZP3dnQ7MxhGq0SwpY" />
          <div className="footer">
            <h2>Casa 245</h2>
            <span>R$ 1200,00</span>
          </div>
        </div>

        <div className="casa">
          <img src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTE3OTM5My1pbWFnZS1rd3Z5MG94eC5qcGc.jpg" />
          <div className="footer">
            <h2>Casa 245</h2>
            <span>R$ 1200,00</span>
          </div>
        </div>

        <div className="casa">
          <img src="https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI=" />
          <div className="footer">
            <h2>Casa 245</h2>
            <span>R$ 1200,00</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home