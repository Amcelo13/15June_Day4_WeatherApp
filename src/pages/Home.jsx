import React, {  useState } from "react";
import "./Home.css";
import { Typography, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Title } = Typography;

function Home({
  bf,
  temp,
  city,
  day,
  weather_nature,
  ico,
  setSearchCity,
  country,
}) {
  const [open, setOpen] = useState(false);

  //SEARCH LOGIC
  const onSearch = (value) => {
    setSearchCity(value);
    setOpen(false);
  };

  return (
    <div className="parent--container" style={{ height: "100%", width: "98%" }}>
      <div className="weather">
        <div className="banner" style={{ background: `url(${bf})` }}>
          <div className="info">
            <Title id="temp">{temp}°C</Title>
            <Title level={6} id="city">
              {city}, {country}
            </Title>
            <Title level={6} id="city1">
              {day}
            </Title>
            <div>
              <img
                style={{
                  height: "10rem",
                  marginTop: "-6rem",
                  paddingLeft: "3rem",
                  color: "white",
                  paddingBottom: "1rem",
                }}
                src={ico}
                alt=""
              />
            </div>
            <Title level={6} id="weather--nature">
              {weather_nature}
            </Title>
          </div>

          <div className="search" onClick={() => setOpen(true)}>
            <SearchOutlined />
          </div>
          <Modal
            title="Search for Cities"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1100}
            footer={null}
            style={{
              position: "fixed",
              marginLeft: "-35rem",
              marginTop: "7rem",
            }}
          >
            <Search 
              placeholder="Enter the city"
              onSearch={onSearch}
              enterButton
              style={{height:"5rem"}}
            />
          </Modal>
        </div>

        <div className="four--days">
          <div className="day--flex">
            <Title level={6} id="day">
              Monday
            </Title>
            <div>
              <Title id="small">30°</Title>
              <Title id="small">Sunny</Title>
            </div>
          </div>
          <div className="day--flex">
            <Title level={6} id="day">
              Tuesday
            </Title>
            <div>
              <Title id="small">30°</Title>
              <Title id="small">Sunny</Title>
            </div>
          </div>
          <div className="day--flex">
            <Title level={6} id="day">
              Wednesday
            </Title>
            <div>
              <Title id="small">30°</Title>
              <Title id="small">Sunny</Title>
            </div>
          </div>
          <div className="day--flex">
            <Title level={6} id="day">
              Thursday
            </Title>
            <div>
              <Title id="small">30°</Title>
              <Title id="small">Sunny</Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
