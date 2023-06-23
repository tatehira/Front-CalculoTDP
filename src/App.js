import React, { useState } from 'react';
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
import categoriaImg from './images/categoria.png';
import memoriaRamImg from './images/memoria-ram.png'; // Importe a imagem da memória RAM

const App = () => {
  // Estado para os campos do usuário
  const [processador, setProcessador] = useState('');
  const [placaVideo, setPlacaVideo] = useState('');
  const [memoriaRam, setMemoriaRam] = useState(null); // Estado para o campo de memória RAM

  // Opções para os campos enum
  const enumOptions = [
    { label: 'Upgrade', value: 'Upgrade' },
    { label: 'Novo', value: 'Novo' },
  ];

  // Manipuladores de mudança dos campos
  const handleProcessadorChange = (e) => {
    setProcessador(e.target.value);
  };

  const handlePlacaVideoChange = (e) => {
    setPlacaVideo(e.target.value);
  };

  const handleMemoriaRamChange = (e) => {
    setMemoriaRam(e.target.value);
  };

  const handleEnumChange = (field, value) => {
    // Implemente a lógica para lidar com a alteração dos campos enum
    // Por exemplo, você pode definir o estado correspondente aqui
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
              value={null} // Defina o estado correspondente
              onChange={(e) => handleEnumChange('hdd', e.target.value)}
            />
          </Field>
          <Field className="spaced-field" imagePath={ssdImg}>
            <EnumSelect
              label="SSD"
              options={[
                { label: 'SATA', value: 'Sata' },
                { label: 'NVME', value: 'Nvme' },
              ]}
              value={null} // Defina o estado correspondente
              onChange={(e) => handleEnumChange('ssd', e.target.value)}
            />
          </Field>
        </div>
        <div className="fields-container">
          <Field className="spaced-field" imagePath={placaMaeImg}>
            <EnumSelect
              label="Placa-mãe"
              options={[
                { label: 'MicroATX', value: 'MicroATX' },
                { label: 'MiniATX', value: 'MiniATX' },
                { label: 'ATX', value: 'ATX' },
                { label: 'ExtendedATX', value: 'ExtendedATX' },
              ]}
              value={null} // Defina o estado correspondente
              onChange={(e) => handleEnumChange('motherboard', e.target.value)}
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
              value={memoriaRam} // Defina o estado correspondente
              onChange={handleMemoriaRamChange}
            />
          </Field>
        </div>
      </div>
    </div>
  );
};

export default App;
