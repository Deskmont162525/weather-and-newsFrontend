import { useStyleCardNewsPaper } from "./cardNewsPaper.style";

const CardNewsPaper = () => {
  const classes = useStyleCardNewsPaper();
  return (
    <div className="col-lg-12 mb-2">
      <div className="card shadow h-100">
        <img
          src="https://source.unsplash.com/OlSGcrLSYkw"
          className="card-img-top header-img"
          alt="course image"
        />
        <div className="card-body text-secondary">
          <div className="d-flex justify-content-between mb-2">
            <a href="#" className="badge bg-primary text-white p-2">
              All level
            </a>
            <a href="#" className="h6 fw-light mb-0">
              <i className="bi bi-heart-fill"></i>
            </a>
          </div>
          <h5 className="card-title">
            <a href="#">INVESTASI DI PASAR MODAL</a>
          </h5>
          <p className="mb-2 text-truncate-2">
            Proposal indulged no do sociable he throwing settling.
          </p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-0 small">
              <i className="bi bi-star-fill"></i>
            </li>
            <li className="list-inline-item me-0 small">
              <i className="bi bi-star-fill"></i>
            </li>
            <li className="list-inline-item me-0 small">
              <i className="bi bi-star-fill"></i>
            </li>
            <li className="list-inline-item me-0 small">
              <i className="bi bi-star-fill"></i>
            </li>
            <li className="list-inline-item me-0 small">
              <i className="bi bi-star-half"></i>
            </li>
            <li className="list-inline-item ms-2 h6 fw-light mb-0 font">4.5</li>
          </ul>
          <div className="row mt-2">
            <div className="col d-flex flex-column">
              <img
                className="avatar-img img-thumbnail shadow"
                src="https://source.unsplash.com/bqe0J0b26RQ"
                alt="avatar"
              />
              <a className="h6 mt-1 mb-0" href="#">
                Instructor One
              </a>
              <p className="small">example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="card-footer font footer">
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0">
              <i className="bi bi-stopwatch"></i> 6h 00m
            </span>
            <span className="h6 fw-light mb-0">
              <i className="bi bi-table"></i> 2 session
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNewsPaper;
