import React from "react";
function SearchBox(props){
   return(
    <div className="row">
        <input type="text"  onKeyUp={(e) => props.SearchHandlerBar(e.target.value)} placeholder="Etner the text" />
    </div>
   )
}
export default SearchBox;