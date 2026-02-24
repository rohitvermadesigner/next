import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="welcome-section" id="10yearsOfExcellence">
        <Image
          src="https://www.excellenceauditing.com/wp-content/themes/excellenceauditing/assets/images/welcome-720.webp"
          alt=""
          width={1200}
          height={533}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="img-fluid"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <h2 className="heading-2">About Us</h2>
              <p>
                With a decade-long legacy of redefining industry standards, we
                lead with unmatched expertise and a deep commitment to
                simplifying complex business requirements. Our reputation for
                excellence is rooted in quality and integrity, allowing us to
                deliver exceptional, consistent, and client-centric audit and
                assurance, accounting and bookkeeping, taxation, compliance, and
                business advisory services. Licensed by the Department of
                Economic Development and certified by the Ministry of Economy,
                our financial reports are trusted by major banks and approved by
                regulatory bodies across the UAE.
              </p>
              <a href="about-us" className="btn btn-primary">
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
