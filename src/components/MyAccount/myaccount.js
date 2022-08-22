import React from "react";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import DeleteIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BsChevronCompactRight } from "react-icons/bs";
import "./myaccount.css";

const Myaccount = () => {
    return (
    <div className="container w-100 border border-top-0">
        <div className="d-flex p-3">
        <p className="p-2 color">Home</p>
        <p className="p-2">
            <BsChevronCompactRight className="butt3" />
        </p>
        <p className="p-2">My Account</p>
        </div>
        <div>
        <p className="fs-3 ps-4 d-flex justify-content-start">My Account</p>
        </div>
        <hr className="w-100 px-3" />
        <div className="row col-12">
        <div className=" col-xl-3 d-xl-block  d-none ">
            <div className="d-flex flex-column leftside">
            <button type="button" class=" py-3 side w-75">
                Account Info
            </button>
            <button type="button" class=" py-3 side w-75">
                Saved Addresses
            </button>
            <button type="button" class=" py-3 side w-75">
                My Orders
            </button>
            <button type="button" class=" py-3 side w-75">
                Saved Cards
            </button>
            <button type="button" class=" py-3 side w-75">
                talabat Pay
            </button>
            </div>
        </div>
        <div className=" col-xl-9 col-12">
            <form>
            <div className="row 12">
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-4 px-2"
                    style={{ color: "gray" }}
                >
                    Email
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 ms-4 "
                    placeholder=""
                />
                <a class="word mx-3 color d-xl-block  d-none">CHANGE EMAIL</a>
                <a class="word color d-xl-block  d-none">CHANGE PASSWORD</a>
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-4"
                    style={{ color: "gray" }}
                >
                    First Name
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 "
                    placeholder=""
                />
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-4"
                    style={{ color: "gray" }}
                >
                    Last Name
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 "
                    placeholder=""
                />
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-5"
                    style={{ color: "gray" }}
                >
                    Gender
                </label>
                <div class="btn-group w-50">
                    <a href="#" class="btn btn-ligt  px-3 border-light but">
                    male
                    </a>
                    <a href="#" class="btn btn-light px-3 but but2">
                    {" "}
                    female
                    </a>
                </div>
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-2"
                    style={{ color: "gray" }}
                >
                    Date of birth
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 "
                    placeholder=""
                />
                </div>
                <div className="row col-12">
                <div class="mb-3 col-4">
                <div className="d-flex flex-column">
                    <div className="d-felx ">
                    <div class="form-check d-flex">
                        <input
                        class="form-check-input me-1"
                        type="text"
                        id="disabledFieldsetCheck"
                      />
                      <label
                        class="form-check-label "
                        for="disabledFieldsetCheck"
                        style={{ color: "gray" }}
                      >
                        Subscribe <br />
                        to our <br /> Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check d-flex">
                      <input
                        class="form-check-input me-1"
                        type="text"
                        id="disabledFieldsetCheck"
                      />
                      <label
                        class="form-check-label"
                        for="disabledFieldsetCheck"
                        style={{ color: "gray" }}
                      >
                        Subscribe <br /> to SMS
                      </label>
                    </div>
                  </div>
                </div>
                </div>
                <div className="pt-0 mt-5 col-6">
                  <button
                    type="submit"
                    class="btn text-light px-4 "
                    style={{ backgroundColor: "#0BA64D" }}
                  >
                    UPDATE
                  </button>
                </div>
              
              </div>

              {/* <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a><a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Myaccount;
