import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Field from './components/Field';
import ProcessadorInput from './components/ProcessadorInput';
import PlacaVideoInput from './components/PlacaVideoInput';
import EnumSelect from './components/EnumSelect';
import processadorImg from './images/processador.png';
import placaVideoImg from './images/placa-video.png';
import hddImg from './images/hdd.png';
import ssdImg from './images/ssd.png';
import placaMaeImg from './images/placa-mae.png';
import memoriaRamImg from './images/memoria-ram.png';

const App = () => {
  const [processador, setProcessador] = useState('');
  const [placaVideo, setPlacaVideo] = useState('');
  const [ssd, setSsd] = useState(null);
  const [hd, setHd] = useState(null);
  const [placaMae, setPlacaMae] = useState(null);
  const [ram, setRam] = useState(null);
  const [tdpTotal, setTdpTotal] = useState(null);

  const handleProcessadorChange = (e) => {
    setProcessador(e.target.value);
  };

  const handlePlacaVideoChange = (e) => {
    setPlacaVideo(e.target.value);
  };

  const handleSsdChange = (e) => {
    setSsd(e.target.value);
  };

  const handleHdChange = (e) => {
    setHd(e.target.value);
  };

  const handlePlacaMaeChange = (e) => {
    setPlacaMae(e.target.value);
  };

  const handleRamChange = (e) => {
    setRam(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      processador: processador,
      placaVideo: placaVideo,
      ssd: ssd,
      hd: hd,
      placaMae: placaMae,
      ram: ram
    };

    axios.post('https://localhost:44384/api/ComputersCreate', data)
      .then(response => {
        const { tdpTotal } = response.data;
        setTdpTotal(tdpTotal);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="form-heading">Calculadora de TDP</h2>
        <div className="fields-container">
          <Field imagePath={processadorImg}>
            <ProcessadorInput value={processador} onChange={handleProcessadorChange} />
          </Field>
          <Field imagePath={placaVideoImg}>
            <PlacaVideoInput value={placaVideo} onChange={handlePlacaVideoChange} />
          </Field>
        </div>
        <div className="fields-container">
          <Field className="spaced-field" imagePath={hddImg}>
            <EnumSelect
              label="HDD"
              options={[
                { label: 'HDD Desktop', value: 'HDDDesktop' },
                { label: 'HDD Notebook', value: 'HDDNotebook' },
              ]}
              value={hd}
              onChange={handleHdChange}
            />
          </Field>
          <Field className="spaced-field" imagePath={ssdImg}>
            <EnumSelect
              label="SSD"
              options={[
                { label: 'SATA', value: 'Sata' },
                { label: 'NVME', value: 'Nvme' },
              ]}
              value={ssd}
              onChange={handleSsdChange}
            />
          </Field>
        </div>
        <div className="fields-container">
          <Field className="spaced-field" imagePath={placaMaeImg}>
            <EnumSelect
              label="Placa Mãe"
              options={[
                { label: 'MicroATX', value: 'MicroATX' },
                { label: 'MiniATX', value: 'MiniATX' },
                { label: 'ATX', value: 'ATX' },
                { label: 'ExtendedATX', value: 'ExtendedATX' },
              ]}
              value={placaMae}
              onChange={handlePlacaMaeChange}
            />
          </Field>
          <Field className="spaced-field" imagePath={memoriaRamImg}>
            <EnumSelect
              label="Memória RAM"
              options={[
                { label: 'Single', value: 'Single' },
                { label: 'Dual', value: 'Dual' },
                { label: 'Tri', value: 'Tri' },
                { label: 'Quad', value: 'Quad' },
              ]}
              value={ram}
              onChange={handleRamChange}
            />
          </Field>
        </div>
        <button onClick={handleSubmit}>Calcular</button>
        {tdpTotal && <p>TDP Total: {tdpTotal}</p>}
      </div>
    </div>
  );
};

export default App;
