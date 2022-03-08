import React from "react";
import Card from "./Card";

const CardList = ({robots})=>{
    const cardCamponent = robots.map((user,index)=>{
        return <Card  key = {robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email} />

        }
    )
    return(
    <div>
        <React.StrictMode>
                {cardCamponent}
        </React.StrictMode>
  </div>
    );
}

export default CardList;