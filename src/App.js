import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Field from './components/Field';
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
    "Default",
    "SSD Sata",
    "SSD Nvme"
  ];

  const hdOptions = [
    "Default",
    "HD Desktop",
    "HD Notebook"
  ];

  const placaMaeOptions = [
    "Default",
    "MicroATX",
    "MiniATX",
    "ATX",
    "ExtendedATX"
  ];

  const ramOptions = [
    "Default",
    "Single Channel",
    "Dual Channel",
    "Tri Channel",
    "Quad Channel"
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
      cpu: processador,
      gpu: placaVideo,
      tdpCpu: 0,
      tdpGpu: 0,
      tdpRamSingles: 0,
      tdpRamDual: 0,
      tdpRamTri: 0,
      tdpRamQuad: 0,
      tdpHDDPC: 0,
      tdpHDDNote: 0,
      tdpSSDSata: 0,
      tdpSSDNvme: 0,
      tdpDefault: 0,
      tdpTotal: 0,
      tdpMotherboardMini: 0,
      tdpMotherboardMicro: 0,
      tdpMotherboardATX: 0,
      tdpMotherboardExtended: 0,
      ram: ram,
      hdd: hd,
      ssd: ssd,
      motherboard: placaMae
    };

    axios.post('https://localhost:44384/api/Computer/ComputersCreate', data)
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
        <h1 className="form-heading">Calculadora de TDP</h1>
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
                      className="custom-autocomplete spaced-field"
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' },
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
                      className="custom-autocomplete spaced-field"
                      inputProps={{
                        ...params.inputProps,

                        style: { width: '200px' },
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
                      className="custom-autocomplete spaced-field"
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' },
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
                      className="custom-autocomplete spaced-field"
                      inputProps={{
                        ...params.inputProps,
                        style: { width: '200px' },
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
              <Autocomplete
                options={placaMaeOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Placa Mãe"
                    autoComplete="off"
                    className="custom-autocomplete spaced-field"
                    inputProps={{
                      ...params.inputProps,
                      style: { width: '200px' },
                    }}
                  />
                )}
                value={placaMae}
                onChange={(event, value) =>
                  handlePlacaMaeChange(event, validateInput(value, placaMaeOptions))
                }
              />
            </Field>
          </div>
          <div className="spaced-field">
            <Field imagePath={memoriaRamImg}>
              <Autocomplete
                options={ramOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="RAM"
                    autoComplete="off"
                    className="custom-autocomplete spaced-field"
                    inputProps={{
                      ...params.inputProps,
                      style: { width: '200px' },
                    }}
                  />
                )}
                value={ram}
                onChange={(event, value) =>
                  handleRamChange(event, validateInput(value, ramOptions))
                }
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
};

export default App;
