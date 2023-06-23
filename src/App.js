import React, { useState } from 'react';
import './App.css';
import ProcessadorInput from './components/ProcessadorInput';
import PlacaVideoInput from './components/PlacaVideoInput';
import EnumSelect from './components/EnumSelect';

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
    <div className="container">
      <div className="fields-container">
        <div className="field">
        <img src="caminho/para/a/imagem/processador.png" alt="Processador" />
          <ProcessadorInput value={processador} onChange={handleProcessadorChange} />
        </div>
        <div className="field">
        <img src="caminho/para/a/imagem/placa_video.png" alt="Placa de Vídeo" />
          <PlacaVideoInput value={placaVideo} onChange={handlePlacaVideoChange} />
        </div>
      </div>
      <div className="enum-container">
        <EnumSelect
          label="HDD"
          options={[
            { label: 'HDD Desktop', value: 'HDDDesktop' },
            { label: 'HDD Notebook', value: 'HDDNotebook' },
          ]}
          value={null} // Defina o estado correspondente
          onChange={(e) => handleEnumChange('hdd', e.target.value)}
        />
        <EnumSelect
          label="SSD"
          options={[
            { label: 'SATA', value: 'Sata' },
            { label: 'NVMe', value: 'Nvme' },
          ]}
          value={null} // Defina o estado correspondente
          onChange={(e) => handleEnumChange('ssd', e.target.value)}
        />
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
        <EnumSelect
          label="Categoria"
          options={enumOptions}
          value={null} // Defina o estado correspondente
          onChange={(e) => handleEnumChange('rotuloCategory', e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
