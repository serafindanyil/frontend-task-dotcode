# Bitcoin Tracker & Interactive Workspace

A Next.js application featuring real-time Bitcoin transaction tracking and an interactive workspace with draggable/resizable blocks.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend-task-dotcode
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create environment variables:

```bash
cp .env.example .env.local
```

Add your Bitcoin WebSocket URL:

```env
NEXT_PUBLIC_BTC_WS_URL=wss://ws.blockchain.info/inv
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Technology Stack & Rationale

### Core Framework

- **Next.js 15**: Modern React framework with excellent developer experience, built-in optimization, and server-side rendering capabilities
- **React 19**: Latest React version with improved performance and new features
- **TypeScript**: Type safety and better developer experience with IntelliSense

### State Management

- **Redux Toolkit**: Simplified Redux with less boilerplate, built-in immutability via Immer
- **Redux Persist**: Automatic state persistence across browser sessions
- **LocalForage**: Enhanced storage solution supporting IndexedDB, WebSQL, and localStorage

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SCSS**: Enhanced CSS with variables, nesting, and mixins
- **BEM Methodology**: Maintainable CSS architecture with clear naming conventions

### Real-time Features

- **WebSocket API**: Direct connection to Blockchain.com for live Bitcoin transactions
- **Custom Throttling**: Performance optimization for high-frequency events

### Interactive Components

- **react-rnd**: Drag-and-drop and resizable components for the interactive workspace
- **Lucide React**: Modern, customizable icon library

## 🏗 Architecture Decisions

### Why Redux Toolkit?

- **Simplified Boilerplate**: Reduces Redux complexity with createSlice
- **Built-in DevTools**: Excellent debugging experience
- **Immer Integration**: Immutable updates with mutable syntax
- **TypeScript Support**: First-class TypeScript integration

### Why LocalForage over localStorage?

- **Better Performance**: IndexedDB for large datasets
- **Fallback Support**: Graceful degradation to WebSQL/localStorage
- **Async Interface**: Non-blocking storage operations
- **Larger Storage Limits**: Handles more data than localStorage

### Why SCSS + Tailwind?

- **Utility Classes**: Rapid prototyping with Tailwind
- **Component Styles**: SCSS for complex component-specific styling
- **BEM Methodology**: Scalable CSS architecture
- **Design System**: CSS custom properties for consistent theming

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
├── components/            # Reusable UI components
│   ├── pages/            # Page-specific components
│   └── ui/               # Generic UI components
├── store/                # Redux store configuration
│   ├── features/         # Feature-based slices
│   └── provider/         # Redux provider wrapper
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── styles/               # Global styles and CSS variables
```

## 🎯 Features

### Bitcoin Tracker

- Real-time transaction monitoring via WebSocket
- Transaction volume calculation
- Connection status indicator
- Persistent transaction history

### Interactive Workspace

- Draggable and resizable blocks
- Persistent block positions
- Z-index management
- Block deletion and restoration
- Grid-based positioning

## 🔧 Development

### Code Quality

- **Clean Code Principles**: Meaningful naming, small functions, DRY principle
- **TypeScript**: Type safety and better developer experience
- **Component Composition**: Reusable and maintainable components
- **Performance Optimization**: Memoization and throttling where needed

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📝 License

ISC License
