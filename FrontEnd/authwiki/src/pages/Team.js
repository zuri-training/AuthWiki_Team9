import React from "react";
import styled from "styled-components";
import Members from "./member";
const Team = () => {
  return (
    <TeamCSS>
      <div class="header">
        <div className="title">
          <div className="select">
            <div>MEET</div> <p>the</p> <div>TEAM</div>
          </div>
          <p>RESPONSIBLE FOR CREATING THE MAGIC & AESTHETICS</p>
        </div>
      </div>
      <div class="team">
        {Members.map((item) => {
          return (
            <div class="member">
              <img
                className="image"
                src={item.image}
                alt={item.name}
                border="0"
              />
              <h4 className="name">{item.name}</h4>
              <h4 className="title">{item.title}</h4>
            </div>
          );
        })}
      </div>
    </TeamCSS>
  );
};

const TeamCSS = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  color: #d3d4cf;
  margin-bottom: 200px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
  }
  .select {
    display: flex;
    gap: 10px;
  }
  .select div {
    font-size: 80px;
  }
  .select p {
    font-size: 30px;
    color: #b392e9;
    align-self: center;
    font-weight: 700;
  }
  .header p {
    font-size: 20px;
    font-weight: 500;
    text-align: left;
  }

  .member {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .member img {
    width: 180px;
    height: 200px;
    border-radius: 50%;
  }
  .name {
    font-size: 20px;
    margin: 0;
    color: #b392e9;
  }
  .team {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 60px;
  }
  .title {
    font-size: 20px;
    margin: 0;
    color: #d3d4cf;
  }
`;

export default Team;
