import React from 'react';

function Download() {
  const resumeUrl = 'https://drive.google.com/file/d/17ruKFuSYvQoMNhSiRHg_ZuKQx_93Tbta/view?usp=sharing';

  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className='div-download'>
      <button className='button-download' onClick={handleDownload}>Baixar Currículo</button>
    </div>
  );
}

export default Download;
