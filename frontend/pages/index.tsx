import Link from 'next/link';
import styled, { keyframes } from 'styled-components';


const Showcase = styled.div`
  background: url('../images/showcase.jpg') no-repeat center center/cover;
  height: 100vh;
  position: relative; /* If absolute is inside the parent, parent element should be relative */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  color: white;

  h1 {
    margin-top: 260px;
    font-size: 2.6rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 0 20px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(27, 27, 27, 0.5);
  }

  & * {
    z-index: 1;
  }

  div {
    button {
      background-color: transparent;
      color: white;
      font-size: 2.4rem;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }

`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 10px 30px;
  color: #fff;
  background-color: transparent;
  border: white 2px solid;

  &:hover {
    background: linear-gradient(
      150deg,
      rgba(61, 221, 196, 1) 29%,
      rgba(65, 198, 223, 1) 62%,
      rgba(142, 223, 249, 0.9962359943977591) 100%
    );
  }
`;

export default function Index() {

  return (
    <>
      <Showcase>
        <h1>With Life Manager, you can make your life better.</h1>
        <p>Record your favorite motivative streaming content!</p>
        <Link href='/streams'>
          <Button>
            CHECK IN
          </Button>
        </Link>
      </Showcase>
    </>
  );
}
