const Client = () => {
  return (
    <div className="client">
      <h1>Our Clients</h1>
      <span>
        Your Goals, Our Commitment || Inspiring Growth, One Client at a Time.
      </span>
      <div className="clients_container">
        <a href="https://starhomeinterior.com/">
          <div className="client-card">
            <img
              src="https://res.cloudinary.com/clennation/image/upload/v1712761316/SHI-LOGO_2_2_p2jqop.png"
              alt=""
            />
            <p>www.starhomeinterior.com</p>
          </div>
        </a>
        <a href="https://cleannation.in/">
          <div className="client-card">
            <img
              src="https://res.cloudinary.com/clennation/image/upload/v1712761598/SHI-LOGO_2_6_dqaitk.png"
              alt=""
            />
            <p>www.cleannation.com</p>
          </div>
        </a>

        <a href="https://www.ieveera.com/">
          <div className="client-card">
            <img
              src="https://res.cloudinary.com/clennation/image/upload/v1712761316/SHI-LOGO_2_oamuiw.png"
              alt=""
            />
            <p>www.ieveera.com</p>
          </div>
        </a>
        <a href="https://staraluminiums.com/">
          <div className="client-card">
            <img
              src="https://res.cloudinary.com/clennation/image/upload/v1712761316/SHI-LOGO_2_4_h6jhaf.png"
              alt=""
            />
            <p>www.staraluminiums.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Client;
