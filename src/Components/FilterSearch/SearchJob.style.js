import styled from 'styled-components';

const Wrapper = styled.div `
  margin-top: 20px;

  .search-job-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 20px 5px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 8px;
  }

  .filter {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .filter label {
    margin-bottom: 5px;
  }

  .select-box,
  .input-box,
  .input-box-company,
  .input-box-location {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box; 
  }

  @media screen and (min-width: 768px) {
    .search-job-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }

    .filter {
      flex: 1; 
      margin-right: 10px; 
      margin-bottom: 0;
    }

    .filter:last-child {
      margin-right: 0;
    }
  }
`;

export default Wrapper;