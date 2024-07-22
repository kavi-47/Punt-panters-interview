import React from 'react';

interface Props {
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
  fontsData: { [key: string]: { [key: string]: string } };
}

const FontFamilySelector: React.FC<Props> = ({ fontFamily, setFontFamily, fontsData }) => {
  return (
    <select
      className="select"
      value={fontFamily}
      onChange={(e) => setFontFamily(e.target.value)}
    >
      {Object.keys(fontsData).map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
}

export default FontFamilySelector;
