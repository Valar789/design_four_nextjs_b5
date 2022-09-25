import Link from "next/link";


export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">

        <div className="section-title">
          <h2>Check our tasty <span>Menu</span></h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">Show All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>

        <div className="row menu-container">

          <div className="col-lg-6 menu-item filter-starters">
            <div className="menu-content">
              <Link href="#" ><a >Lobster Bisque</a></Link><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <div className="menu-content">
              <Link href="#" ><a >Bread barrel</a></Link><span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <div className="menu-content">
              <Link href="#" ><a >Crab Cake</a></Link><span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <div className="menu-content">
              <Link href="#" ><a >Caesar Selections</a></Link><span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <div className="menu-content">
              <Link href="#" ><a >Tuscan Grilled</a></Link><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <div className="menu-content">
              <Link href="#" ><a >Mozzarella Stick</a></Link><span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <div className="menu-content">
              <Link href="#" ><a >Greek Salad</a></Link><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <div className="menu-content">
              <Link href="#" ><a >Spinach Salad</a></Link><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <div className="menu-content">
              <Link href="#" ><a >Lobster Roll</a></Link><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
