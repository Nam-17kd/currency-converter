# Currency Converter

A real-time currency converter built with React + Vite + Tailwind CSS.

## Features
- Convert between 100+ currencies
- Real-time exchange rates from live API
- Swap currencies with one click
- Clean, responsive UI with glassmorphism design
- Smooth animations and transitions
- Works on mobile and desktop

## Tech Stack
- **React 19** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Hooks** - useCurrencyInfo for API calls
- **ESLint** - Code quality

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## How to Use
1. Enter the amount you want to convert
2. Select source currency (From)
3. Select target currency (To)
4. Click "Convert" to see the result
5. Use "Swap" button to quickly reverse currencies

## API
Uses [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) for real-time exchange rates.

## Project Structure
```
src/
├── components/
│   ├── ConverterForm.jsx    # Main form logic
│   └── InputBox.jsx         # Reusable input component
├── hooks/
│   └── useCurrencyInfo.js   # Custom hook for API calls
├── App.jsx                  # Main app component
└── main.jsx                 # Entry point
```

## Color Scheme
- Primary: Blue (#2563EB)
- Secondary: Amber (#F59E0B)
- Backgrounds: Dark slate with glassmorphism effect

## Future Enhancements
- Conversion history
- Favorite currency pairs
- Offline fallback with local storage
- Exchange rate trends
- Multi-language support
