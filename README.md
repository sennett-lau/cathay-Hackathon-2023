# Next Chakra Starter

## Description
A Next 13 template with Chakra UI, TailwindCSS, Redux Toolkit, and TypeScript. Eslint, Prettier, and Husky are also included for code linting and formatting.

## Table of Contents
- [File Structure](#file-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Implementation](#implementation)
- [Contributing](#contributing)
- [License](#license)

## File Structure
```
.
├── .husky
│   └── _                               # Git hooks
├── public
│   ├── assets                          # Public assets
│   ├── fonts
│   │   ├── Raleway                     # Raleway font
│   │   └── ...                         # Other fonts
│   ├── favicon.ico
│   └── ...
├── src
│   ├── api
│   │   ├── axios.ts                    # Axios instances
│   │   └── ...
│   ├── component
│   │   ├── common
│   │   │   ├── Header.tsx              # Header component
│   │   │   ├── Footer.tsx              # Footer component
│   │   │   └── ...
│   │   ├── logo
│   │   │   └── ...
│   │   └── ...
│   ├── config
│   │   ├── index.ts                    # Config entry point
│   │   └── env.ts                      # Environment variables
│   ├── hook
│   │   └── ...                         # Folder for custom hooks
│   ├── layout
│   │   ├── Layout                      # Layout Component
│   │   └── ...                         # Folder for page layouts
│   ├── pages
│   │   ├── _app.tsx                    # Next default app component
│   │   ├── _document.tsx               # Next default document component
│   │   ├── index.tsx                   # Home page
│   │   └── ...                         # Other pages
│   ├── store
│   │   ├── index.ts                    # Store entry point
│   │   ├── controlSlice.ts             # Control slice, a sample slice
│   │   └── ...                         # Other slices can be added here
│   ├── styles
│   │   ├── theme
│   │   │   ├── index.ts                # Chakra UI Theme
│   │   │   ├── colors.ts               # Chakra UI Colors
│   │   │   └── ...
│   │   ├── global.css                  # Global styles
│   │   ├── fonts.css                   # Font faces
│   │   └── ...
│   ├── types
│   │   ├── index.ts                    # TypeScript types entry point
│   │   └── ...
│   └── utils
│   │   ├── index.ts                    # Utility functions entry point
│   │   └── ...
├── .gitignore                          # Git ignore
├── package.json                        # Project dependencies
├── README.md                           # Project README
└── ...
```

## Prerequisites
- [Node.js](https://nodejs.org/en/)

## Installation
Run the command below to install the dependencies
```bash
npm install
```

## Implementation
Run the command below to start the development server
```bash
npm run dev
```

Run the command below to build the project
```bash
npm run build
```

Run the command below to start the production server
```bash
npm run start
```

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### General Steps
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This library is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file