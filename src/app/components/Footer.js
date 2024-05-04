import Link from "next/link";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer_section">
        <div className="footer_list">
          <ul>
            <li>
              <Link href="/ ">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/ ">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Cancellation & Refund Policy</Link>
            </li>
            <li>
              <Link href="/">Payment Method</Link>
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61553803474245">
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/itorbitnation_/?fbclid=IwAR19Pk2gj6b8F6uvM-he1QtO0UVFxLGlDsdeBQqJeiwkCxMiw13J6HsraGY"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=bixR-KIJKYM"
              >
                Youtube
              </a>
            </li>
            <li>
            Business Listing
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <ul>
            <li>
              Phone : <Link href="tel:+919323969471">8097144808</Link>
            </li>
            <li>____________________________</li>
            <li>
              Yari Road, Versova, Andheri (W)<br></br> Mumbai 400061
            </li>
          </ul>
        </div>
        </div>
        <h6 className="FOOTNAME">@2022 _IT_ORBIT_NATION_ALL OVER INDIA.</h6>
    </section>
  );
};

export default Footer;