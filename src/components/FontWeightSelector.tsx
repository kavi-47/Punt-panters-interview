import React from 'react';

interface Props {
  fontFamily: string;
  fontWeight: string;
  setFontWeight: (fontWeight: string) => void;
  fontsData: { [key: string]: { [key: string]: string } };
}

const FontWeightSelector: React.FC<Props> = ({ fontFamily, fontWeight, setFontWeight, fontsData }) => {
  const variants = Object.keys(fontsData[fontFamily] || {});

  return (
    <select
      className="select"
      value={fontWeight}
      onChange={(e) => setFontWeight(e.target.value)}
    >
      {variants.map((variant) => (
        <option key={variant} value={variant}>
          {variant.includes('italic') ? `${variant.replace('italic', '')} Italic` : variant}
        </option>
      ))}
    </select>
  );
}

export default FontWeightSelector;
