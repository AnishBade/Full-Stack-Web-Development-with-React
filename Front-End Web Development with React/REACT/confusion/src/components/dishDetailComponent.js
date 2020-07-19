import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


  const RenderComment=({comments})=>{
    if (comments !== null || comments.length === 0){
          const commentList = comments.map((comment, i) => {
            return(
                <li key={i}>
                  {i+1}.
                {comment.comment}
                  <br/><br/>	      
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
            <br />
            <br />
          </li>	   
            );
          });

        return(
            <div className="col-12 col-md-5 m-1">
              <ul>{commentList}</ul>
            </div>
        );

    }

    else{
      return <div></div>
    }

  }

  const RenderDish=({dish})=>{
    return(
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>


    );
  }

const DishdetailComponent=(props)=>{
  if(props.dish){
    return (
      <div className="container">
        <div className="row">
          
          <RenderDish dish={props.dish}/>
          <RenderComment comments={props.dish.comments}/>
        </div>
      </div>

    );
  }
  else{
    return(
    <div></div>

    );
  }

}


export default DishdetailComponent;