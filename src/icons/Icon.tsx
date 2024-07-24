import React from 'react';

interface IconProps {
    size?: number;
    src: string;
    alt: string;
    className: string;
}

const Icon: React.FC<IconProps> = ({ size = 1, src, alt, className }) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            style={{ width: `${size * 1.5}em`, height: `${size * 1.5}em`, display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.25em' }}
        />
    );
};

export default Icon;
