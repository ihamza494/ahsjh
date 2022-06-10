import React from "react";

const useEffectAPI = () => {
  return (
    <>
      <h2>List of Movies</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="#" className="rounded" width="155" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textLeft">Hamza</h4>
                  <span className="textLeft">Web Developer</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded">
                    <div className="d-flex flex-column">
                      <span className="Articles">Articles</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Followers">Followers</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="Ratings">Ratings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default useEffectAPI;
