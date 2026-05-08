import "./home.css"

function Casa() {
  return (
    <section>
      <div className="container">
      
        <div className="casa-maior">
          <img src="https://media.licdn.com/dms/image/v2/D4E22AQGvDqlxiM0LRw/feedshare-shrink_800/B4EZfAUJdoHwAk-/0/1751278213725?e=2147483647&v=beta&t=5YiB5w3wU6am4HAyjS2K_ve6drZP3dnQ7MxhGq0SwpY" />
          <div className="footer">
            <h2>Casa 245</h2>
            <span>R$ 1200,00</span>
          </div>
          <div className="footer">
            <span><i className="fa-solid fa-location-dot"></i> São Paulo</span>
            <button className="reserva">Reservar</button>
          </div>
          <p className="descricao">Aluga-se casa perto do centro com 150 metros quadrados, próximo à hospitais, mercados e centros logísticos</p>
        </div>

      </div>
    </section>
  )
}

export default Casa