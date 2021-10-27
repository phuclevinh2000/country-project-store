import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryParams } from '../../types/types';
import axios from 'axios';
import styled from "styled-components"

const MoreDetail = () => {
  const { id } = useParams<CountryParams>();
  const [country, setCountry] = useState<any>({});

  useEffect(() => {
    //take data from param
    const getCountryData = async () => {
      const response = await axios(`https://restcountries.com/v2/name/${id}`)
      setCountry(response.data)
    };
    getCountryData();
    
  }, [id]);

  // console.log(country[0].name)
  
  return country ? (
    <Container>
      <TopContent>
        {/* <Picture className="avatar"> */}
          {/* <img src={country.flag} alt="#"/>   */}
        {/* </Picture>{' '} */}
        {console.log(country)}
        {/*using subtring to catch the first character of the string and make letter avatar*/}
        <Name>name</Name>
        <Username>uẻnamwe</Username>
        <Box>
          <Option>
            {/* <BusinessIcon /> */}
            <Describle>company</Describle>
          </Option>

          <Option>
            {/* <LocationOnIcon /> */}
            <Describle>city</Describle>
          </Option>

          <Option>
            {/* <PhoneIcon /> */}
            <Describle>describle</Describle>
          </Option>
        </Box>
      </TopContent>
      <BodyContent>
        <HighlightContent>
          <Li>WEBSITE</Li>
          <Information>info</Information>
        </HighlightContent>

        <hr />
        <HighlightContent>
          <Li>EMAIL</Li>
          <Information>email</Information>
        </HighlightContent>

        <hr />

        <HighlightContent>
          <Li>ADDRESS</Li>
          <Information>Street: </Information>
          <Information>Suite: </Information>
          <Information>City: </Information>
          <Information>Zipcode: </Information>
        </HighlightContent>

        <hr />
      </BodyContent>
    </Container>
  ) : (
    <p>Loading...</p>
  );
};

export default MoreDetail;

// const Picture = styled.img``

const Container = styled.div`
    min-height: calc(100vh - 60px); 
    padding: 0 calc(3.5vw + 5px);
    max-width: 1500px; 
    margin: 0 auto;
    background-color: #264653;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .avatar{
        align-self: center;
        width: 100px;
        height: 100px;
        font-size: 35px;
    }
`
const TopContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #2a9d8f;
    padding-top: 15px;
    border-radius: 10px;
`

const Name = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    font-weight: 400;
    font-size: 30px;
`
const Username = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 200;
    font-size: 20px;
    margin-top: -10px;
`

const Box = styled.div`
    display: flex;
    height: 70px;
    margin-top: 17px;
    border: 2px solid rgba(249, 249, 249, 0.1);
    /* border-radius: 0 0 5px 5px; */
    background: #e76f51;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
`
const Option = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Describle = styled.div`
    font-weight: 400;
`
const BodyContent = styled.div`
    padding: 20px;
    background-color: #a0b2a6;
`
const HighlightContent = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: black;
`
const Li = styled.li`
    font-weight: 700;
    font-size: large;
`
const Information = styled.div`
    padding: 10px;
    margin-left: 13px;
    color: #33334d;
    font-weight: 500;
`   
