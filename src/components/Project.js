function Project(props) {
  return (
     
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="card">
            <div className="card-body row">
              <h2 className="card-title">
                <a href={props.link}>{props.name}</a>
              </h2>
              <p className="card-text">{props.descr}</p>
              <img
                className=""
                src={props.image}
                style={{
                  height: "300px",
                  width: "300px",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="screenshot"
              />
              <a
                className="btn btn-primary mt-2"
                href={props.deploy}
                role="button"
              >
                Deployed Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
