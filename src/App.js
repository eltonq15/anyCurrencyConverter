import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { MyCard } from './components/MyCard';
import SelectionField from './components/SelectionField';
import NumberField from './components/NumberField';
import DatePicker from './components/DatePicker';
import { Row } from './components/styled/Row';
import Logo from './logo-any.png';
import ImageAvatar from './components/Avatar'

export default function App() {
  const [currencyList, setCurrencyList] = useState([
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
    height:'20px',
    color: 'navy',
    background: 'linear-gradient(71deg, #7fd5e4 0%, rgba(255,255,255,1) 100%',
    marginTop: '-10px',
    padding: '8px',
    border: '1px solid navy',
    borderRadius: '50vh'
  }

  const textBoxStyle = {
    background: 'rgb(242,179,97)',
    background: 'linear-gradient(30deg, rgba(242,179,97,1) 0%, rgba(211,72,97,1) 50%, rgba(160,45,168,1) 100%)',
    marginBottom: '30px',
    margin: '13%',
    padding: '20px',
    borderRadius: '20px',
    border: '2px white solid',
    color: 'white',
    boxShadow: '5px -5px 5px gray'
  };

  return (
    <div style={{ height: '100vh', width: '100%', overflowX: 'hidden', display: 'flex', alignItems: 'center', flexDirection: 'column',     background: 'linear-gradient(329.54deg, #8009ab 0%, #4d0269k 100%)'}}>
      <div style={{ height: '35px', backgroundColor: '#006e79', display: 'flex', justifyContent: 'center',width:'100%', padding: '20px' }}>
        <img src={Logo} alt="Logo any Currency Converter" width='350px' style={{borderRadius: '10px', background: 'linear-gradient(30deg, rgba(242,179,97,1) 0%, rgba(211,72,97,1) 50%, rgba(160,45,168,1) 100%)'}}/>
      </div>
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
        </Row>
        <Row>
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
        <div style={{ color: 'navy', display: 'flex', justifyContent: 'center', height: '50px' }}>{text}</div>
      </MyCard>
      <span style={{display: 'flex',alignItems:'center', justifyContent:'center'}}>
      <ImageAvatar/>
      <a href='https://br.linkedin.com/in/elton-alves-ribeiro' rel="noopener noreferrer" target='_blank' style={designedStyle}> Designed by: Elton Alves Ribeiro</a>

      </span>
      <div style={{ marginTop: '35vh', display: 'flex', flexDirection: 'column' }}>
        <div style={textBoxStyle}>
          <h1 style={{ textAlign: 'center' }}>What is any currency converter used for? </h1>
          <h2 style={{ textAlign: 'justify' }}>It’s a completely free web service used to provide people, real-time currency rates, being fed hourly with reliable values
          of reliable bank APIs, in order to help people to compare currencies according to specific dates and to take better decisions,
        for example, when is the better date to buy or sell (exchange).</h2>
        </div>
        <div style={textBoxStyle}>
          <h1 style={{ textAlign: 'center' }}>Why are there so many different currencies? </h1>
          <h2 style={{ textAlign: 'justify', marginBottom: '30px' }}>Despite we’re living in a
          globalized world, each country has its own policy, own Market, taxes and different ways to deal with its
          own economy. As far as strategic decisions need to be taken by government people to control the inner
          flux of Money, it becomes almost mandatory for countries to adopt a currency for trading and economic
           purposes, in order to keep the balance. </h2>
        </div>
        <div style={textBoxStyle}>
          <h1 style={{ textAlign: 'center' }}>How to compare currency rates in AnyCurrency? </h1>
          <h2 style={{ textAlign: 'justify', marginBottom: '30px' }}>It’s quite simple to compare currencies using
          this website, all you have to do is select the origin and target currency, as it comes already with
          the default amount (1.00) and date (current date). So let’s suppose you live in USA and you’re going
          to have those dream vacations in Brazil, well... you have no idea on how much this currency costs..
          in the origin field you can insert your currency (American dollar, or USD) and in the second field,
          insert the corresponding currency (Brazilian Real, or BRL). As long as you fill these two fields,
          the converted amount will show up automatically, and voilá... you can also change currencies
           whenever you’d like to :D</h2>
        </div>
        <div style={textBoxStyle}>
          <h1 style={{ textAlign: 'center' }}>Why are there ads on this page? </h1>
          <h2 style={{ textAlign: 'justify', marginBottom: '30px' }}>As any common web page, we have costs to keep
          this page “on air”, such as hosting prices, database keeping, API prices (not cheap), and other fees...
          That’s why we highly ask for your comprehension, as our main focus is to provide updated currency rates
          conversions with fidelity and speed, and above all, completely for free. This ads might annoy you
          sometimes, but they are necessary for us.</h2>
        </div>
        <div style={textBoxStyle}>
          <h1 style={{ textAlign: 'center' }}>Money movement </h1>
          <h2 style={{ textAlign: 'justify', marginBottom: '30px' }}>Dollar value might vary depending on many
          points, one of them, as pre-explained before, is the offer and demand case, when a coutry gets some
          loan with its neighbour i.e. and when the deadline has come, the country decides to pay and generates
          a movement of billions of dollars, affecting directly  the way that actions, and trade Markets behave.
          </h2>
        </div>
      </div >
    </div >
  );
}
