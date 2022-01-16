const Card = ({val})=>
{
    return (
        <>
            <div className="col-md-4" id={val.key}>
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="m-0 p-0">{val.name}</h3>
                    </div>
                    <div className="card-body m-0 p-0">
                        <img className="img-fluid text-dark m-0 p-0" onClick={()=>{alert(val.name)}} src={val.url} alt="Image"></img>
                    </div>
                    <div className="card-body">
                        <p>For More Details</p>
                        <button className="btn btn-outline-success float-right">See more..</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;