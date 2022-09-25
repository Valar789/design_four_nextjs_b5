import Image from "next/image"; 
import Link from "next/link";

import image1 from "public/img/gallery/gallery-1.jpg" 
import image2 from "public/img/gallery/gallery-2.jpg"
import image3 from "public/img/gallery/gallery-3.jpg"
import image4 from "public/img/gallery/gallery-4.jpg"
import image5 from "public/img/gallery/gallery-5.jpg"
import image6 from "public/img/gallery/gallery-6.jpg"
import image7 from "public/img/gallery/gallery-7.jpg"
import image8 from "public/img/gallery/gallery-8.jpg"


export default function Gallery() {
    return (
        <section id="gallery" className="gallery">
        <div className="container-fluid"/>
  
          <div className="section-title">
            <h2>Some photos from <span>Our Restaurant</span></h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>
  
          <div className="row g-0">
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-1.jpg"  ><a className="gallery-lightbox">
                  <Image src={image1} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-2.jpg" ><a  className="gallery-lightbox">
                  <Image src={image2} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-3.jpg"  ><a className="gallery-lightbox">
                  <Image src={image3} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-4.jpg" ><a  className="gallery-lightbox">
                  <Image src={image4} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-5.jpg" ><a  className="gallery-lightbox">
                  <Image src={image5} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-6.jpg" ><a  className="gallery-lightbox">
                  <Image src={image6} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-7.jpg" ><a  className="gallery-lightbox">
                  <Image src={image7} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <Link href="public/img/gallery/gallery-8.jpg" ><a  className="gallery-lightbox">
                  <Image src={image8} alt="" className="img-fluid"/>
                </a></Link>
              </div>
            </div>
  
          </div>
  

      </section>
    );
}