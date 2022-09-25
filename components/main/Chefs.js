import Image from "next/image"; 
import Link from "next/link";

import image1 from "public/img/chefs/chefs-1.jpg"
import image2 from "public/img/chefs/chefs-2.jpg" 
import image3 from "public/img/chefs/chefs-3.jpg"

export default function Chefs() {
    return (
      <section id="chefs" className="chefs">
      <div className="container">

        <div className="section-title">
          <h2>Our Proffesional <span>Chefs</span></h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="member">
              <div className="pic"><Image src={image1} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Master Chef</span>
                <div className="social">
                  <Link href="" ><a ><i className="bi bi-twitter"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-facebook"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-instagram"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-linkedin"></i></a></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member">
              <div className="pic"><Image src={image2}className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Patissier</span>
                <div className="social">
                  <Link href="" ><a ><i className="bi bi-twitter"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-facebook"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-instagram"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-linkedin"></i></a></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member">
              <div className="pic"><Image src={image3} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>Cook</span>
                <div className="social">
                  <Link href="" ><a ><i className="bi bi-twitter"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-facebook"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-instagram"></i></a></Link>
                  <Link href="" ><a ><i className="bi bi-linkedin"></i></a></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    );
}