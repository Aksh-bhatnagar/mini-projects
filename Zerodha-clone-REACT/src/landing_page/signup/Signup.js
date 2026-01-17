import { useState } from "react";

export default function SignupBootstrap() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center bg-white">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-8 col-md-5 col-lg-4">
          {/* Header */}
          <div className="text-center mb-4 pt-5">
            <h1 className="h4 fw-semibold text-dark">Open an account</h1>
            <p className="text-muted mt-2">Simple and secure signup</p>
          </div>

          {/* Form */}
          <form>
            <div className="mb-3">
              <label className="form-label text-muted">Mobile number</label>
              <div className="input-group">
                <span className="input-group-text bg-light">+91</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-medium"
            >
              Continue
            </button>
          </form>

          {/* Footer */}
          <p className="text-muted text-center mt-4" style={{ fontSize: "12px", lineHeight: "1.6" }}>
            By continuing, you agree to the
            <br />
            <span className="text-primary">terms & conditions</span> and {" "}
            <span className="text-primary">privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
