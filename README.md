# FinTech Services Web Application

A comprehensive fintech web application built with Express.js, EJS, and Tailwind CSS, providing government schemes information, financial consultancy, budgeting tools, and loan management features.

## Features

- **Government Schemes**: Browse and search available schemes for rural students, businesswomen, and farmers
- **Financial Consultancy**: Book appointments with financial experts
- **Budget Planning**: Track expenses and manage budgets with visual charts
- **Loan Management**: Compare loan options and calculate EMIs

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fintech-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
fintech-services/
├── app.js              # Express application setup
├── data/
│   └── schemes.json    # Sample schemes data
├── public/
│   ├── css/           # Compiled CSS files
│   ├── js/            # Client-side JavaScript
│   └── images/        # Image assets
├── views/
│   ├── partials/      # EJS partials (header, footer)
│   ├── index.ejs      # Home page
│   ├── schemes.ejs    # Government schemes page
│   ├── consultancy.ejs # Financial consultancy page
│   ├── budgeting.ejs  # Budget planning page
│   └── loanHub.ejs    # Loan management page
└── package.json
```

## Technologies Used

- **Express.js**: Web application framework
- **EJS**: Templating engine
- **Tailwind CSS**: Utility-first CSS framework
- **Chart.js**: JavaScript charting library
- **Node.js**: Runtime environment

## Features in Detail

### Government Schemes
- Search and filter schemes by category and state
- Detailed information about each scheme
- Required documents list
- Application process guidance

### Financial Consultancy
- View consultant profiles and expertise
- Book appointments
- Real-time availability checking
- Consultation history

### Budget Planning
- Income and expense tracking
- Category-wise expense analysis
- Visual charts and reports
- Export functionality

### Loan Management
- EMI calculator
- Loan comparison tools
- Various loan types
- Application process

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons by [Heroicons](https://heroicons.com/)
- UI Components inspired by [Tailwind UI](https://tailwindui.com/) 