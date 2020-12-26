import React from "react";
import Logo from "../logo-any.png";
import { Spring } from "react-spring/renderprops";

const HeaderBar = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: "-35px" }}
      to={{ opacity: 1, marginTop: "0", rotate: '180deg' }}
      config={{ delay: 500, duration: 800 }}
    >
      {(props) => (
        <div style={props}>
          <div
            style={{
              height: "35px",
              backgroundColor: "#006e79",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              boxShadow: "0 0px 30px black",
            }}
          >
            <img
              src={Logo}
              alt="Logo any Currency Converter"
              width="350px"
              style={{
                borderRadius: "10px",
                background:
                  "linear-gradient(30deg, rgba(242,179,97,1) 0%, rgba(211,72,97,1) 50%, rgba(160,45,168,1) 100%)",
              }}
            />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default HeaderBar;
