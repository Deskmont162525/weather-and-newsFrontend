import React from "react";
import { useStyleCardNewsPaper } from "./cardNewsPaper.style";

const CardNewsPaper = ({ ...item }) => {
  const classes = useStyleCardNewsPaper();

  return (
    <div className="col-lg-12 mb-2">
      <div className="card shadow h-100">
        <img
          src={item?.urlToImage}
          className="card-img-top header-img"
          alt="course image"
        />
        <div className="card-body text-secondary">
          <div className="d-flex justify-content-between mb-2">
            <a href="#" className="badge bg-primary text-white p-2">
              Subir
            </a>
          </div>
          <h5 className="card-title">
            <a href={item?.url} target="_blank">{item?.title?.toUpperCase()}</a>
          </h5>

          <p className="mb-2 text-truncate-2">{item?.description}</p>
          <p className="mb-2 text-truncate-2">{item?.content}</p>
        </div>
        <div className="card-footer font footer">
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0">
              <i className="bi bi-stopwatch"></i> {item?.source.name}
            </span>
            <span className="h6 fw-light mb-0">
              <i className="bi bi-table"></i> {item?.publishedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNewsPaper;
