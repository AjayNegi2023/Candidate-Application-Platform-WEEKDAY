import styled from "styled-components";


const Wrapper = styled.div `
margin-top: 2rem;
cursor: pointer;
transition: all 0.3s;
max-width: calc(33.33% - 5rem);
margin: 1rem;
border: 1px solid #ccc;
border-radius: 0.5rem;
padding: 1rem;
display: flex;
flex-direction: column;
overflow: hidden;
position: relative;

&:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

  .container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .logo {
    width: 80px;
    height: 60px;
    border-radius: 10%;
    margin-right: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 0.1rem;
  }

  .company {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .info {
    display: flex;
    align-items: flex-start;
    margin-bottom: -0.7rem;
  }

  .locationIcon{
    color:blue;
  }
  .salaryIcon{
    color:goldenrod;
  }
  .aboutIcon{
    color:blue;
  }
 
  .icon-label {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    width: 120px; 
  }

  .label {
    font-size: 1rem;
    color: #666;
    margin-right: 0.5rem;
  }

  .info-text {
    display: flex;
    flex-direction: column;
  }

  .location,
  .experience {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .vertical-line {
    width: 1px;
    height: 100%;
    border-left: 1px solid #ccc;
    margin: 0 1rem;
    z-index: 1;
  }

  .description {
    font-size: 1rem;
    color: #333;
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text {
    position: relative;
  }

  .read-or-hide {
    position: absolute;
    bottom: 20%;
    left: 25%;
    background-color: rgba(255, 255, 255, 0.8); 
    padding: 4px 8px;
    cursor: pointer;
    z-index: 1;
  }

  .description-bottom {
    opacity: 0.4;
  }

  .expand-button {
    color: #3f51b5;
    font-weight: bold;
    cursor: pointer;
  }

  .apply-button {
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s;
    align-self: flex-end;
    text-decoration: none;
    margin-top: auto;
  }

  .apply-button:hover {
    background-color: #303f9f;
  }
`;

export default Wrapper;