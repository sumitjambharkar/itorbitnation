import Link from "next/link";


const Banner = () => {
  return (
    <>
      <div className="banner">
      <div className="banner_box">
        <h1>Digital Marketing Agency || Digital Marketing Institute</h1>
        <h6>We are currently inventing and changing the future.</h6>
        <div className="banner_button">
        <button className="dsbtn"><a href="tel:918097144808" target="_blank">Call Us</a></button>
          
        <button className="dsbtn"><Link href='/inquiry'> Inquiry </Link></button>
         
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
