import React from 'react';
import Icon from './Icon';

const LaughingFaceIcon: React.FC<{ size?: number }> = ({ size }) => {
    return <Icon size={size} src="/emoji/laughing-face.png" alt="Laughing Face" className="laughing-face-icon" />;
};

export default LaughingFaceIcon;
