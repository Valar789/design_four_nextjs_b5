import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">


          <div className="carousel-item active slide1" >
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown"><span>Michel Restaurant</span> </h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <Link href="#menu" ><a  className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a></Link>
                  <Link href="#book-a-table" ><a  className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a></Link>
                </div>
              </div>
            </div>
          </div>


          <div className="carousel-item slide2" >
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <Link href="#menu" ><a  className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a></Link>
                  <Link href="#book-a-table" ><a  className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a></Link>
                </div>
              </div>
            </div>
          </div>


          <div className="carousel-item slide3" >
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <Link href="#menu" ><a  className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a></Link>
                  <Link href="#book-a-table" ><a  className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Link href="#heroCarousel"  ><a className="carousel-control-prev" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a></Link>

        <Link href="#heroCarousel" ><a className="carousel-control-next"  role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a></Link>

      </div>
    </div>
  </section>
  );
}
