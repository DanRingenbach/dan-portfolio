function Project(props) {


  
  return (
     
    <>
      <div className="container mt-3">
        <div className="">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                {props.name}
              </h3>
              <p className="card-text" style={{ display:'flex', alignItems: 'flex-start'}}>{props.descr}</p>
              
              <a
                className="btn btn-primary m-2"
                href={props.deploy}
                role="button"
              >
                Deployed Application
              </a>
              
              <a
                className="btn btn-primary m-2"
                href={props.link}
                role="button"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
