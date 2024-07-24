import React from 'react';
import Icon from './Icon';

const HeartIcon: React.FC<{ size?: number }> = ({ size }) => {
    return <Icon size={size} src="/emoji/heart.png" alt="Heart" className="heart-icon" />;
};

export default HeartIcon;
