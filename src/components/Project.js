

function Project(props) {
    console.log(props.descr)
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="card">
            <div className="card-body row">
              <h2 className="card-title">
                <a href={props.link}>{props.name}</a>
              </h2>
              <p className='card-text'>
                  {props.descr}
              </p>
              <img
                className=""
                src={props.image}
                style={{
                  height: "300px",
                  width: "300px",
                  borderRadius: "25px",
                }}
                alt="screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
