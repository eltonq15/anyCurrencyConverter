import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { MyCard } from './components/MyCard';
import SelectionField from './components/SelectionField';
import NumberField from './components/NumberField';
import DatePicker from './components/DatePicker';
import { Row } from './components/styled/Row';

export default function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [originCurrency, setOriginCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [text, setText] = useState('');
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    async function fetchData() {

      const response = await fetch(process.env.REACT_APP_HEROKU_API_HOST, {
        method: 'GET'
      });

      const data = await response.json();

      setCurrencyList(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (originCurrency && targetCurrency && amount) {
      const shortOriginCurrencyName = String(originCurrency).split(' -')[0];
      const shortTargetCurrencyName = String(targetCurrency).split(' -')[0];
      const date = formatDate(calendarDate);
      async function fetchData(date, origin) {
        const response = await fetch(`https://api.exchangeratesapi.io/history?start_at=${date}&end_at=${date}&base=${origin}`, {
          method: 'GET',
        });
        const data = await response.json();
        const listaConversao = Object.values(data.rates)[0];
        if (listaConversao) {
          const index = Object.keys(listaConversao).indexOf(shortTargetCurrencyName);
          const valorConvertido = Object.values(listaConversao)[index];
          setText(`${shortOriginCurrencyName} ${Number(amount).toFixed(2)} = ${shortTargetCurrencyName} ${Number(valorConvertido * amount).toFixed(4)}`);
        } else {
          setText('Values were not updated to this date yet.');
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
    event.target.name === 'Origin currency' ? setOriginCurrency(event.target.value) : setTargetCurrency(event.target.value);
  };

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const designedStyle = {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 13,
    color: 'navy',
    background: 'linear-gradient(71deg, rgba(180,187,255,1) 0%, rgba(255,255,255,1) 100%',
    marginTop: '-10px',
    padding: '5px',
    border: '1px solid navy',
    borderRadius: '50vh'
  }

  return (
    <div style={{ height: '100vh', width: '100%', overflowX: 'hidden', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#aaa' }}>
      <Header title='Simple Currency Converter' />
      <MyCard>
        <Row>
          <NumberField
            id='outlined-number'
            label='Amount'
            type='number'
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
            label='Origin currency'
            name='Origin currency'
            id='originCurrency'
            symbols={currencyList}
            value={originCurrency}
            onChange={handleCurrencyChange} />
          <SelectionField
            label='Target currency'
            name='Target currency'
            id='targetCurrency'
            symbols={currencyList}
            value={targetCurrency}
            onChange={handleCurrencyChange} />
        </Row>

        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 20, color: 'navy' }}>{text}</div>
      </MyCard>
      <a href='https://br.linkedin.com/in/elton-alves-ribeiro' rel="noopener noreferrer" target='_blank' style={designedStyle}>Designed by: Elton Alves Ribeiro</a>
    </div>
  );
};
