import { useStyleCardNewsPaper } from "./cardNewsPaper.style";

const CardNewsPaper = () => {
  const classes = useStyleCardNewsPaper();
  return (
    <div class="col-lg-12 mb-2">
      <div class="card shadow h-100">
        <img
          src="https://source.unsplash.com/OlSGcrLSYkw"
          class="card-img-top header-img"
          alt="course image"
        />
        <div class="card-body text-secondary">
          <div class="d-flex justify-content-between mb-2">
            <a href="#" class="badge bg-primary text-white p-2">
              All level
            </a>
            <a href="#" class="h6 fw-light mb-0">
              <i class="bi bi-heart-fill"></i>
            </a>
          </div>
          <h5 class="card-title">
            <a href="#">INVESTASI DI PASAR MODAL</a>
          </h5>
          <p class="mb-2 text-truncate-2 font">
            Proposal indulged no do sociable he throwing settling.
          </p>
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-0 small">
              <i class="bi bi-star-fill"></i>
            </li>
            <li class="list-inline-item me-0 small">
              <i class="bi bi-star-fill"></i>
            </li>
            <li class="list-inline-item me-0 small">
              <i class="bi bi-star-fill"></i>
            </li>
            <li class="list-inline-item me-0 small">
              <i class="bi bi-star-fill"></i>
            </li>
            <li class="list-inline-item me-0 small">
              <i class="bi bi-star-half"></i>
            </li>
            <li class="list-inline-item ms-2 h6 fw-light mb-0 font">4.5</li>
          </ul>
          <div class="row mt-2">
            <div class="col d-flex flex-column">
              <img
                class="avatar-img img-thumbnail shadow"
                src="https://source.unsplash.com/bqe0J0b26RQ"
                alt="avatar"
              />
              <a class="h6 mt-1 mb-0" href="#">
                Instructor One
              </a>
              <p class="small font">example@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="card-footer font footer">
          <div class="d-flex justify-content-between">
            <span class="h6 fw-light mb-0">
              <i class="bi bi-stopwatch"></i> 6h 00m
            </span>
            <span class="h6 fw-light mb-0">
              <i class="bi bi-table"></i> 2 session
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNewsPaper;
