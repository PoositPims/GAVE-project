import React from "react";

function SocialMediaContact() {
  return (
    <div className="container-80 ps-5 me-1">
      <h4 className="text-primary fw-bold mt-3 " style={{ marginLeft: "20px" }}>
        ติดตาม GAVE ในช่องทางอื่น ๆ
      </h4>
      <div className="bg-white" style={{ width: "500px", marginLeft: "20px" }}>
        <div className="d-flex justify-content-evenly mt-3 pt-3">
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="text-decoration-none d-flex"
          >
            <img
              src="facebook.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <p>GAVE Thailand</p>
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/"
            className="text-decoration-none d-flex"
          >
            <img
              src="instagram.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <p>GAVE Thailand</p>
            </div>
          </a>
        </div>
        {/*  */}

        <div className="d-flex justify-content-evenly mt-3 pb-3 pt-3">
          <a
            target="_blank"
            href="https://twitter.com/"
            className="text-decoration-none d-flex"
          >
            <img
              src="twitter.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <p>GAVE Thailand</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://line.me/th/ "
            className="text-decoration-none d-flex"
          >
            <img
              src="line.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <p>GAVE.Thailand</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaContact;
