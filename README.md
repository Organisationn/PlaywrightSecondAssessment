# 🚀 PlaywrightSecondAssessment

A modern end-to-end test automation framework built using Playwright to validate real-world flight booking workflows. The framework demonstrates scalable design, data-driven testing, and CI/CD integration with database support.

---

## 📌 Project Overview

This project automates the end-to-end flight booking flow on BlazeDemo, covering user interactions from flight search to final purchase confirmation.

This framework demonstrates real-world automation practices including CI/CD integration, environment variable management, and database-driven testing.

  ✅ Page Object Model (POM) for maintainability  
  ✅ Data-driven testing using JSON and Database  
  ✅ Environment variable management using `.env` and `.env.example`  
  ✅ Scalable browser configuration (extendable to cross-browser execution)  
  ✅ Clean and modular test design  

---

## 🏗️ Framework Architecture

```bash
PlaywrightSecondAssessment/
│
├── pages/                 # Page Object Model (POM) classes
│   ├── homePage.js
│   ├── flightsPage.js
│   └── purchasePage.js
│
├── tests/                 # Test specifications
│   ├── bookFlightDb.spec.js
│   └── bookFlightJson.spec.js
│
├── utils/                 # Utility functions
│   └── dbHelper.js
│
├── testdata.json          # JSON test data
├── .env.example           # Environment template
├── playwright.config.js   # Playwright configuration
├── package.json           # Dependencies & scripts
└── README.md              # Project documentation

🔥 Key Features

✅ Page Object Model (POM)
* Encapsulates UI elements and actions in reusable classes
* Improves readability, reusability, and maintenance
* Separates test logic from UI interactions

✅ Data-Driven Testing

📄 JSON-Based Testing
* Test data stored in testdata.json
* Enables easy modification without code changes

🗄️ Database-Based Testing
* Fetches test data dynamically using dbHelper.js
* Validates application behavior with database-driven inputs
* Simulates real-world enterprise testing scenarios

✅ Environment Configuration
* Uses .env for local execution
* .env.example provided as template (best practice)
* Keeps sensitive data secure and configurable

✅ CI/CD Integration
* Integrated with GitHub Actions for automated execution
* Uses MySQL service container during pipeline run
* Seeds database dynamically before test execution
* Uses environment variables and secrets for configuration

✅ Reporting
* Uses Playwright HTML reporter
* Generates detailed execution reports
* Reports uploaded as artifacts in CI runs

✅ Playwright Capabilities Used
* Auto-waiting mechanism (reduces flaky tests)
* Parallel execution (locally)
* Retry mechanism in CI
* Screenshot, video, and trace capture on failure

⚙️ Installation & Setup

1️⃣ Clone repository
git clone https://github.com/Organisationn/PlaywrightSecondAssessment.git
cd PlaywrightSecondAssessment

2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

▶️ Running Tests
Run all tests
npx playwright test

Run specific test
npx playwright test tests/bookFlightJson.spec.js

Run in headed mode
npx playwright test --headed

📊 Test Execution Flow
1. Navigate to BlazeDemo application
2. Select departure and destination cities
3. Search available flights
4. Choose a specific flight
5. Fill passenger and payment details
6. Complete booking
7. Validate confirmation message

🧠 Design Principles
* Clean and modular structure
* Reusability through POM
* Separation of concerns
* Scalable and maintainable design

🚀 Future Enhancements
* Support for multiple environments (QA, staging, production)
* Advanced Playwright fixtures for reusable setup
* Enable full cross-browser execution

💼 Resume Highlights
* Designed and implemented Playwright-based automation for flight booking workflow
* Applied Page Object Model (POM) for scalable test architecture
* Implemented data-driven testing using JSON and database
* Integrated CI/CD using GitHub Actions and Jenkinns with MySQL container setup
* Managed environment configuration using .env and secrets
* Built a maintainable and extensible automation framework

🤝 Conclusion
This project demonstrates a real-world automation framework that combines UI testing, database integration, and CI/CD practices, making it suitable for enterprise-level QA automation scenarios.

⭐ If you like this project, consider giving it a star!

