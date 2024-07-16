import React from "react";
function DisplayBox(props){
    return(
          <div className="row">
            {
               props.movie.map(
                (m) => {
                    return <Box title={m.title} sourse={m.poster_path}/>
                }
               )
            }

            
          </div>
    )
}
export default DisplayBox


function Box(props){
    return(
        <div className="col-3 mt-4">
            <div className="card overflow-hidden">
                <img src={`https://image.tmdb.org/t/p/w1280` + props.sourse} alt="" />
                <p className="text-center">{props.title}</p>
            </div>
        </div>
    )

}
