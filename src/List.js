import React from 'react';

const List = ({people}) => {
  console.log(people,"people at list")
  return (
    <>
      {people.map((person)=>{
        const {id,name,age,image}=person;
        return <article key ={id} className="person">
           <img src={image} alt="" />
           <div>
            <h4>{name}</h4>
            <p>{age} years</p>
           </div>
        </article>
      })}
    </>
  );
};

export default List;
