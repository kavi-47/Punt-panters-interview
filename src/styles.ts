import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
  }

  .editor-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 1200px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .controls {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .select {
    margin-right: 10px;
    padding: 8px;
    font-size: 16px;
  }

  .italic-toggle {
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    margin-left: 10px;
  }

  .italic-toggle:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .text-editor {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 200px;
    border-radius: 4px;
    background: #fafafa;
    font-size: 16px;
    overflow: auto;
  }

  .action-buttons {
    margin-top: 20px;
  }

  .action-buttons button {
    padding: 8px 16px;
    margin-right: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
  }

  .action-buttons button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
