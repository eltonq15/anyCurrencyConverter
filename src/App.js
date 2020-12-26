import React, { useState, useEffect } from "react";
import { MyCard } from "./components/MyCard";
import SelectionField from "./components/SelectionField";
import NumberField from "./components/NumberField";
import DatePicker from "./components/DatePicker";
import { Row } from "./components/styled/Row";
import ImageAvatar from "./components/Avatar";
import HeaderBar from "./components/HeaderBar";
import { Spring } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Money1 from "./money1.jpg";
import Money2 from "./money2.jpg";
import Money3 from "./money3.jpg";
import Money4 from "./money4.jpg";

export default function App() {
  const [currencyList] = useState([
    "AUD - Australian Dollar",
    "BGN - Bulgarian Lev",
    "BRL - Brazilian Real",
    "CAD - Canadian Dollar",
    "CHF - Swiss Franc",
    "CNY - Chinese Yuan",
    "CZK - Czech Republic Koruna",
    "DKK - Danish Krone",
    "EUR - Euro",
    "GBP - British Pound Sterling",
    "HKD - Hong Kong Dollar",
    "HRK - Croatian Kuna",
    "HUF - Hungarian Forint",
    "IDR - Indonesian Rupiah",
    "ILS - Israeli New Sheqel",
    "INR - Indian Rupee",
    "ISK - Icelandic Króna",
    "JPY - Japanese Yen",
    "KRW - South Korean Won",
    "MXN - Mexican Peso",
    "MYR - Malaysian Ringgit",
    "NOK - Norwegian Krone",
    "NZD - New Zealand Dollar",
    "PHP - Philippine Peso",
    "PLN - Polish Zloty",
    "RON - Romanian Leu",
    "RUB - Russian Ruble",
    "SEK - Swedish Krona",
    "SGD - Singapore Dollar",
    "THB - Thai Baht",
    "TRY - Turkish Lira",
    "USD - United States Dollar",
    "ZAR - South African Rand",
  ]);
  const [originCurrency, setOriginCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [text, setText] = useState("");
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    if (originCurrency && targetCurrency && amount) {
      const shortOriginCurrencyName = String(originCurrency).split(" -")[0];
      const shortTargetCurrencyName = String(targetCurrency).split(" -")[0];
      const date = formatDate(calendarDate);
      async function fetchData(date, origin) {
        const response = await fetch(
          `https://api.exchangeratesapi.io/history?start_at=${date}&end_at=${date}&base=${origin}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        const listaConversao = Object.values(data.rates)[0];
        if (listaConversao) {
          const index = Object.keys(listaConversao).indexOf(
            shortTargetCurrencyName
          );
          const valorConvertido = Object.values(listaConversao)[index];
          setText(
            `${shortOriginCurrencyName} ${Number(amount).toFixed(
              2
            )} = ${shortTargetCurrencyName} ${Number(
              valorConvertido * amount
            ).toFixed(4)}`
          );
        } else {
          setText("Values were not updated to this date yet.");
        }
      }
      fetchData(date, shortOriginCurrencyName, shortTargetCurrencyName);
    }
  }, [amount, targetCurrency, originCurrency, calendarDate]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (date) => {
    setCalendarDate(date);
  };

  const handleCurrencyChange = (event) => {
    event.target.name === "Origin currency"
      ? setOriginCurrency(event.target.value)
      : setTargetCurrency(event.target.value);
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const designedStyle = {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    fontSize: 13,
    height: "20px",
    color: "navy",
    background: "linear-gradient(71deg, #61abb8 0%, #ccf2f8 100%",
    marginTop: "-10px",
    padding: "8px",
    border: "1px solid navy",
    borderRadius: "50vh",
  };

  const textBoxStyle = {
    background: "linear-gradient(30deg, #145763 0%, #242525 100%)",
    marginBottom: "30px",
    margin: "15% 10% 5% 10%",
    padding: "20px",
    borderRadius: "20px",
    border: "2px white solid",
    color: "white",
    boxShadow: "black 15px 15px 40px",
  };

  return (
    <Parallax pages={5} style={{ backgroundColor: "#854040d9" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100vw",
            background: "linear-gradient(179.54deg, #16a397 0%, #000000 100%)",
          }}
        >
          <HeaderBar />
          <Spring
            from={{ opacity: 0, marginTop: "85px", transform: "scale(0.5)" }}
            to={{ opacity: 1, marginTop: "50px", transform: "scale(1)" }}
            config={{ delay: 500, duration: 800 }}
          >
            {(props) => (
              // ==================== PÁGINA 1 ====================
              <ParallaxLayer offset={0} speed={-1.5}>
                <div style={props}>
                  <MyCard>
                    <Row>
                      <NumberField
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                      />
                      <DatePicker
                        label="Day of conversion"
                        value={calendarDate}
                        onChange={handleDateChange}
                      />
                    {/* </Row>
                    <Row> */}
                      <SelectionField
                        label="Origin currency"
                        name="Origin currency"
                        id="originCurrency"
                        symbols={currencyList}
                        value={originCurrency}
                        onChange={handleCurrencyChange}
                      />
                      <SelectionField
                        label="Target currency"
                        name="Target currency"
                        id="targetCurrency"
                        symbols={currencyList}
                        value={targetCurrency}
                        onChange={handleCurrencyChange}
                      />
                    </Row>
                    <div
                      style={{
                        color: "navy",
                        display: "flex",
                        justifyContent: "center",
                        height: "50px",
                      }}
                    >
                      {text}
                    </div>
                  </MyCard>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImageAvatar />
                    <a
                      href="https://br.linkedin.com/in/elton-alves-ribeiro"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={designedStyle}
                    >
                      {" "}
                      Designed by: Elton Alves Ribeiro
                    </a>
                  </span>
                </div>
              </ParallaxLayer>
            )}
          </Spring>
        </div>

        {/* ==================== IMAGEM 1 ==================== */}
        <ParallaxLayer
          offset={0.999999}
          speed={0.55}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={Money1}
            alt="Money and currency"
            style={
              window.matchMedia("(min-width: 800px)").matches
                ? {
                    width: "100%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
                : {
                    width: "150%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
            }
          />
        </ParallaxLayer>

        {/* ==================== PÁGINA 2 ==================== */}
        <ParallaxLayer offset={1} speed={0.4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              boxShadow: "0 0 10px black",
              background:
                "linear-gradient(179.54deg, #153269f2 0%, #000000 100%)",
            }}
          >
            <div style={textBoxStyle}>
              <h1 style={{ textAlign: "center" }}>
                What is any currency converter used for?{" "}
              </h1>
              <h2 style={{ textAlign: "justify", fontSize: "1.1rem" }}>
                It’s a completely free web service used to provide people,
                real-time currency rates, being fed hourly with reliable values
                of reliable bank APIs, in order to help people to compare
                currencies according to specific dates and to take better
                decisions, for example, when is the better date to buy or sell
                (exchange).
              </h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* ==================== IMAGEM 2 ==================== */}
        <ParallaxLayer
          offset={1.999999}
          speed={0.55}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={Money2}
            alt="Money and currency"
            style={
              window.matchMedia("(min-width: 800px)").matches
                ? {
                    width: "100%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
                : {
                    width: "150%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
            }
          />
        </ParallaxLayer>

        {/* ==================== PÁGINA 3 ==================== */}
        <ParallaxLayer offset={2} speed={0.4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              boxShadow: "0 0 10px black",
              background:
                "linear-gradient(179.54deg, #5e0707f2 0%, #000000 100%)",
            }}
          >
            <div style={textBoxStyle}>
              <h1 style={{ textAlign: "center" }}>
                Why are there so many different currencies?{" "}
              </h1>
              <h2
                style={{
                  textAlign: "justify",
                  marginBottom: "30px",
                  fontSize: "1.1rem",
                }}
              >
                Despite we’re living in a globalized world, each country has its
                own policy, own Market, taxes and different ways to deal with
                its own economy. As far as strategic decisions need to be taken
                by government people to control the inner flux of Money, it
                becomes almost mandatory for countries to adopt a currency for
                trading and economic purposes, in order to keep the balance.{" "}
              </h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* ==================== IMAGEM 3 ==================== */}
        <ParallaxLayer
          offset={2.999999}
          speed={0.55}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={Money3}
            alt="Money and currency"
            style={
              window.matchMedia("(min-width: 800px)").matches
                ? {
                    width: "100%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
                : {
                    width: "150%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
            }
          />
        </ParallaxLayer>

        {/* ==================== PÁGINA 4 ==================== */}
        <ParallaxLayer offset={3} speed={0.4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              boxShadow: "0 0 10px black",
              background:
                "linear-gradient(179.54deg, #231635f2 0%, #100c1f 100%)",
            }}
          >
            <div style={textBoxStyle}>
              <h1 style={{ textAlign: "center" }}>Money movement </h1>
              <h2
                style={{
                  textAlign: "justify",
                  marginBottom: "30px",
                  fontSize: "1.1rem",
                }}
              >
                Dollar value might vary depending on many points, one of them,
                as pre-explained before, is the offer and demand case, when a
                coutry gets some loan with its neighbour i.e. and when the
                deadline has come, the country decides to pay and generates a
                movement of billions of dollars, affecting directly the way that
                actions, and trade Markets behave.
              </h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* ==================== IMAGEM 4 ==================== */}
        <ParallaxLayer
          offset={3.999999}
          speed={0.55}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={Money4}
            alt="Money and currency"
            style={
              window.matchMedia("(min-width: 800px)").matches
                ? {
                    width: "100%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
                : {
                    width: "150%",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px black",
                  }
            }
          />
        </ParallaxLayer>

        {/* ==================== PÁGINA 5 ==================== */}
        <ParallaxLayer offset={4} speed={0.4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              boxShadow: "0 0 10px black",
              background:
                "linear-gradient(179.54deg, #ffb100f2 0%, #100c1f 100%)",
            }}
          >
            <div style={textBoxStyle}>
              <h1 style={{ textAlign: "center" }}>
                How to compare currency rates in AnyCurrency?{" "}
              </h1>
              <h2
                style={{
                  textAlign: "justify",
                  marginBottom: "30px",
                  fontSize: "1.1rem",
                }}
              >
                It’s quite simple to compare currencies using this website, all
                you have to do is select the origin and target currency. 
                So let’s suppose you live in USA and you’re going to have
                those dream vacations in Brazil, well... you have no idea on how
                much this currency costs.. in the origin field you can insert
                your currency (American dollar, or USD) and in the second field,
                insert the corresponding currency (Brazilian Real, or BRL). As
                long as you fill these two fields, the converted amount will
                show up automatically, and voilá... you can also change
                currencies whenever you’d like to :D
              </h2>
            </div>
          </div>
        </ParallaxLayer>
        {/* <div style={textBoxStyle}>
          <h1 style={{ textAlign: "center" }}>
            Why are there ads on this page?{" "}
          </h1>
          <h2 style={{ textAlign: "justify", marginBottom: "30px" }}>
            As any common web page, we have costs to keep this page “on air”,
            such as hosting prices, database keeping, API prices (not cheap),
            and other fees... That’s why we highly ask for your comprehension,
            as our main focus is to provide updated currency rates conversions
            with fidelity and speed, and above all, completely for free. This
            ads might annoy you sometimes, but they are necessary for us.
          </h2>
        </div> */}
      </div>
    </Parallax>
  );
}
