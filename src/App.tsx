import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (startDate && endDate) {
      if (startDate >= endDate) {
        alert("A data final deve ser posterior à data inicial.");
        return;
      }

      const eventData = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };

      // Aqui você enviaria `eventData` para o backend, mas por agora vamos logar no console
      console.log(eventData);
    } else {
      alert("Por favor, preencha ambas as datas.");
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Evento</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data Inicial:</label>
          <br></br>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Selecione a data inicial"
          />
        </div>
        <br></br>
        <div>
          <label>Data Final:</label>
          <br></br>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date as Date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Selecione a data final"
          />
        </div>
        <br></br>
        <button type="submit">Cadastrar Evento</button>
      </form>
    </div>
  );
}

export default App;
