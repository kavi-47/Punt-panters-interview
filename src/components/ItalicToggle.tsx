import React, { useEffect } from 'react';

interface Props {
  fontFamily: string;
  fontWeight: string;
  isItalic: boolean;
  setIsItalic: (isItalic: boolean) => void;
  fontsData: { [key: string]: { [key: string]: string } };
}

const ItalicToggle: React.FC<Props> = ({ fontFamily, fontWeight, isItalic, setIsItalic, fontsData }) => {
  const variants = Object.keys(fontsData[fontFamily] || {});
  const weightOnly = fontWeight.replace('italic', '');
  const italicExists = variants.includes(`${weightOnly}italic`);

  useEffect(() => {
    if (!italicExists && isItalic) {
      setIsItalic(false);
    }
  }, [fontFamily, fontWeight, isItalic, italicExists, setIsItalic]);

  return (
    <button
      className="italic-toggle"
      disabled={!italicExists}
      onClick={() => setIsItalic(!isItalic)}
    >
      Italic
    </button>
  );
}

export default ItalicToggle;
