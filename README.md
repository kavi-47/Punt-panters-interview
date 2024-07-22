React Text Editor

A simple text editor application built with React and TypeScript. This editor allows users to select font families, adjust font weights, toggle italic styling, and has auto-save functionality using local storage.

Features

  Font Family Selector: Choose from a list of Google Fonts.
  Font Weight Selector: Select appropriate font weights based on the chosen font family.
  Italic Toggle: Enable or disable italic styling if supported by the selected font variant.
  Auto-Save: Save editor content and settings to local storage.
  Reset Functionality: Reset editor content and settings to default.

File Structure

  src/index.tsx: Entry point of the application.
  src/App.tsx: Main application component.
  src/styles.ts: Global styles for the application.
  src/components/Editor.tsx: Main editor component containing the font selectors and editor area.
  src/components/FontFamilySelector.tsx: Dropdown for selecting font families.
  src/components/FontWeightSelector.tsx: Dropdown for selecting font weights.
  src/components/ItalicToggle.tsx: Button for toggling italic styling.
  src/punt_frontend.json: JSON file containing font data and URLs.

Usage

  1.Select Font Family: Use the font family dropdown to choose a Google Font.
  2.Select Font Weight: Choose the appropriate font weight from the weight dropdown.
  3.Toggle Italic: Click the italic button to enable or disable italic styling.
  4.Edit Text: Click inside the text editor area and start typing. The text will reflect the selected font family, weight, and italic settings.
  5.Save: Click the Save button to store the current settings and content in local storage.
  6.Reset: Click the Reset button to revert to default settings and clear local storage.

Contact

For any questions or issues, please contact kavitnj2004@gmail.com.
