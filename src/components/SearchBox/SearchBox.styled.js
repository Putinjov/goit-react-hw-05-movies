import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   align-item:center;
    margin-left: 100px;
    gap:30px;

  form{
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 15px;
    margin-top: 5px;
    }


  input {
    padding: 7px;
    width: 200px;
    height: calc(1.5rem + 2px);
    border: 1px solid #272727;
    border-radius: 5px;
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}


  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;

    input {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;

export const Header = styled.h2`
font-size: 30px;
`;
