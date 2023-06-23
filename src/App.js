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

const App = () => {
  // Estado para os campos do usuário
  const [processador, setProcessador] = useState('');
  const [placaVideo, setPlacaVideo] = useState('');

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
                { label: 'NVMe', value: 'Nvme' },
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
          <Field className="spaced-field" imagePath={categoriaImg}>
            <EnumSelect
              label="Categoria"
              options={enumOptions}
              value={null} // Defina o estado correspondente
              onChange={(e) => handleEnumChange('rotuloCategory', e.target.value)}
            />
          </Field>
        </div>
      </div>
    </div>
  );
};

export default App;