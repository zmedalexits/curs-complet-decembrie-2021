import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: #1e212b;
  padding: 4rem 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const UsersWrapper = styled.div`
  min-height: 20rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: #ff8427;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: red;
`;

export const UserCard = styled(Link)`
  width: calc(25% - 3rem);
  margin: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
  background-color: #fafafa;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1rem;
`;

export const Name = styled.h3`
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2b2922;
`;

export const Email = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #999999;
`;
