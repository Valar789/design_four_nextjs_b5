export default function TopBar() {
  return (
    <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
      <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
      <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
    </div>
  </section>
  );
}
