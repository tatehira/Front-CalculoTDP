import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Field from './components/Field';
import EnumSelect from './components/EnumSelect';
import processadorImg from './images/processador.png';
import placaVideoImg from './images/placa-video.png';
import hddImg from './images/hdd.png';
import ssdImg from './images/ssd.png';
import placaMaeImg from './images/placa-mae.png';
import memoriaRamImg from './images/memoria-ram.png';

const App = () => {
  const processadorOptions = [
    "Intel Core i9-11900K",
    "Intel Core i7-11700K",
    "Intel Core i5-11600K",
    "Intel Core i9-10900K",
    "Intel Core i7-10700K",
    "Intel Core i5-10400F",
    "Intel Core i7-9700K",
    "Intel Core i9-12900K",
    "Intel Core i7-12700K",
    "Intel Core i5-12600K",
    "Intel Core i9-11900KF",
    "Intel Core i7-11700KF",
    "Intel Core i9-10900KF",
    "Intel Core i7-10700KF",
    "Intel Core i7-9700KF"
  ];

  const placaVideoOptions = [
    "NVIDIA GeForce RTX 3090",
    "NVIDIA GeForce RTX 3080",
    "NVIDIA GeForce RTX 3070",
    "NVIDIA GeForce RTX 3060 Ti",
    "NVIDIA GeForce RTX 2080 Ti",
    "NVIDIA GeForce RTX 2080 Super",
    "NVIDIA GeForce RTX 2070",
    "NVIDIA GeForce GTX 1660 Super",
    "AMD Radeon RX 6900 XT",
    "AMD Radeon RX 6800 XT",
    "AMD Radeon RX 6800",
    "AMD Radeon RX 6700 XT",
    "AMD Radeon RX 5700 XT",
    "AMD Radeon RX 5600 XT"
  ];

  const ssdOptions = [
    "SSD 120GB",
    "SSD 240GB",
    "SSD 480GB",
    "SSD 1TB",
    "SSD 2TB"
  ];

  const hdOptions = [
    "HD 500GB",
    "HD 1TB",
    "HD 2TB",
    "HD 4TB",
    "HD 8TB"
  ];

  const placaMaeOptions = [
    { label: 'Não Selecionado', value: 0 },
    { label: 'MicroATX', value: 1 },
    { label: 'MiniATX', value: 2 },
    { label: 'ATX', value: 'ATX' },
    { label: 'ExtendedATX', value: 3 }
  ];

  const ramOptions = [
    { label: 'Não Selecionado', value: 0 },
    { label: '4GB', value: 4 },
    { label: '8GB', value: 8 },
    { label: '16GB', value: 16 },
    { label: '32GB', value: 32 }
  ];

  const [processador, setProcessador] = useState('');
  const [placaVideo, setPlacaVideo] = useState('');
  const [ssd, setSsd] = useState(null);
  const [hd, setHd] = useState(null);
  const [placaMae, setPlacaMae] = useState(null);
  const [ram, setRam] = useState(null);
  const [tdpTotal, setTdpTotal] = useState(null);

  const handleProcessadorChange = (event, value) => {
    setProcessador(value);
  };

  const handlePlacaVideoChange = (event, value) => {
    setPlacaVideo(value);
  };

  const handleSsdChange = (event, value) => {
    setSsd(value);
  };

  const handleHdChange = (event, value) => {
    setHd(value);
  };

  const handlePlacaMaeChange = (event, value) => {
    setPlacaMae(value);
  };

  const handleRamChange = (event, value) => {
    setRam(value);
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

  const validateInput = (value, options) => {
    return options.includes(value) ? value : '';
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="form-heading">Calculadora de TDP</h2>
        <div className="fields-container">
          <div className="spaced-field">
            <Field imagePath={processadorImg}>
              <div className="input-container">
                <Autocomplete
                  options={processadorOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="CPU"
                      autoComplete="off"
                      className="custom-autocomplete spaced-field" // Adicione a classe "spaced-field" aqui
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' }, // Defina a largura desejada aqui
                      }}
                    />
                  )}
                  value={processador}
                  onChange={(event, value) =>
                    handleProcessadorChange(event, validateInput(value, processadorOptions))
                  }
                />
              </div>
            </Field>
          </div>
          <div className="spaced-field">
            <Field imagePath={placaVideoImg}>
              <div className="input-container">
                <Autocomplete
                  options={placaVideoOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="GPU"
                      autoComplete="off"
                      className="custom-autocomplete spaced-field" // Adicione a classe "spaced-field" aqui
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' }, // Defina a largura desejada aqui
                      }}
                    />
                  )}
                  value={placaVideo}
                  onChange={(event, value) =>
                    handlePlacaVideoChange(event, validateInput(value, placaVideoOptions))
                  }
                />
              </div>
            </Field>
          </div>
        </div>
        <div className="fields-container">
          <div className="spaced-field">
            <Field imagePath={ssdImg}>
              <div className="input-container">
                <Autocomplete
                  options={ssdOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="SSD"
                      autoComplete="off"
                      className="custom-autocomplete spaced-field" // Adicione a classe "spaced-field" aqui
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' }, // Defina a largura desejada aqui
                      }}
                    />
                  )}
                  value={ssd}
                  onChange={(event, value) =>
                    handleSsdChange(event, validateInput(value, ssdOptions))
                  }
                />
              </div>
            </Field>
          </div>
          <div className="spaced-field">
            <Field imagePath={hddImg}>
              <div className="input-container">
                <Autocomplete
                  options={hdOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="HDD"
                      autoComplete="off"
                      className="custom-autocomplete spaced-field" // Adicione a classe "spaced-field" aqui
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' }, // Defina a largura desejada aqui
                      }}
                    />
                  )}
                  value={hd}
                  onChange={(event, value) =>
                    handleHdChange(event, validateInput(value, hdOptions))
                  }
                />
              </div>
            </Field>
          </div>
        </div>
        <div className="fields-container">
          <div className="spaced-field">
            <Field imagePath={placaMaeImg}>
              <EnumSelect
                label="Placa Mãe"
                options={placaMaeOptions}
                value={placaMae}
                onChange={(event, value) => handlePlacaMaeChange(event, value)}
              />
            </Field>
          </div>
          <div className="spaced-field">
            <Field imagePath={memoriaRamImg}>
              <EnumSelect
                label="RAM"
                options={ramOptions}
                value={ram}
                onChange={(event, value) => handleRamChange(event, value)}
              />
            </Field>
          </div>
        </div>
      </div>
      <button className="submit-button rounded-button" onClick={handleSubmit}>
        Calcular TDP Total
      </button>
      {tdpTotal && <div className="result">TDP Total: {tdpTotal}W</div>}
    </div>
  );
  
}

export default App;
