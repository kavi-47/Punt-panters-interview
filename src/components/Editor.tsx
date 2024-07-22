import React, { useState, useEffect } from 'react';
import FontFamilySelector from './FontFamilySelector';
import FontWeightSelector from './FontWeightSelector';
import ItalicToggle from './ItalicToggle';
import fontsData from '../fonts.json';

const Editor: React.FC = () => {
  const [fontFamily, setFontFamily] = useState<string>('ABeeZee');
  const [fontWeight, setFontWeight] = useState<string>('400');
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [text, setText] = useState<string>('Your text here...');

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('editorSettings') || '{}');
    if (savedSettings) {
      setFontFamily(savedSettings.fontFamily || 'ABeeZee');
      setFontWeight(savedSettings.fontWeight || '400');
      setIsItalic(savedSettings.isItalic || false);
      setText(savedSettings.text || 'Your text here...');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('editorSettings', JSON.stringify({ fontFamily, fontWeight, isItalic, text }));
  }, [fontFamily, fontWeight, isItalic, text]);

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = fontsData[fontFamily]?.[fontWeight + (isItalic ? 'italic' : '')] || '';
    document.head.appendChild(fontLink);
    return () => {
      document.head.removeChild(fontLink);
    };
  }, [fontFamily, fontWeight, isItalic]);

  return (
    <div className="editor-container">
      <div className="controls">
        <FontFamilySelector
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          fontsData={fontsData}
        />
        <FontWeightSelector
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          setFontWeight={setFontWeight}
          fontsData={fontsData}
        />
        <ItalicToggle
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          isItalic={isItalic}
          setIsItalic={setIsItalic}
          fontsData={fontsData}
        />
      </div>
      <div
        className="text-editor"
        contentEditable
        style={{
          fontFamily,
          fontWeight: fontWeight.replace('italic', ''),
          fontStyle: isItalic ? 'italic' : 'normal'
        }}
        onInput={(e) => setText((e.target as HTMLDivElement).innerText)}
      >
        {text}
      </div>
      <div className="action-buttons">
        <button onClick={() => localStorage.setItem('editorSettings', JSON.stringify({ fontFamily, fontWeight, isItalic, text }))}>Save</button>
        <button onClick={() => {
          setFontFamily('ABeeZee');
          setFontWeight('400');
          setIsItalic(false);
          setText('Your text here...');
          localStorage.removeItem('editorSettings');
        }}>Reset</button>
      </div>
    </div>
  );
}

export default Editor;
