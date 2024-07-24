import React from 'react';
import Icon from './Icon';

const SnowflakeIcon: React.FC<{ size?: number }> = ({ size }) => {
    return <Icon size={size} src="/emoji/snowflake.png" alt="Snowflake" className="snowflake-icon" />;
};

export default SnowflakeIcon;
