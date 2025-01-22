# Mortgage Repayment Calculator

## 📋 Challenge Overview

This project is a Front End Mentor challenge to build a mortgage repayment calculator that looks as close as possible to the provided design. The goal is to practice creating an interactive, responsive application with attention to user experience and interface details.

You can use any tools or frameworks to complete this challenge, so feel free to explore new libraries or tools you're interested in. The aim is to ensure a great experience for the users and a strong adherence to the provided design.

see a preview site:
https://mortgage-payment-react-delfin.vercel.app/

challenge source:
https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73

## ✨ Features

### User Requirements:

- **Input Information:** Users can input mortgage information (e.g., loan amount, interest rate, term) to calculate monthly and total repayments.
- **Form Validation:** Users should see validation messages if any field is incomplete.
- **Keyboard Accessibility:** Users can complete the entire form using only their keyboard, ensuring accessibility for all.
- **Responsive Layout:** The interface should be responsive, providing an optimal viewing experience for different device sizes.
- **Interactive States:** Users should see hover and focus states for all interactive elements, such as buttons and inputs.

## 🚀 Getting Started

### Prerequisites

To run this project, you need:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/delfinjfb/mortgage-payment-femchallenge-.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd mortgage-calculator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To run the development server:

```bash
npm start
# or
yarn start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces
- **SCSS**: For styling the application, providing modular stylesheets
- **React Router**: To navigate between pages such as the Privacy Policy and the main calculator
- **Matomo Analytics** (without cookies): To track usage anonymously for development purposes

## 🖋️ Design Notes

- The design files are included in the project. Follow these closely to ensure the final output matches the desired look.
- Responsive layout is critical: use media queries or CSS-in-JS solutions to ensure proper adaptation for different screen sizes.
- Provide focus styles to ensure that the entire interface is keyboard accessible and usable for all users.

## 📐 Project Structure

- **`public/`**: Contains static assets like images, the HTML template, and other public files.
- **`src/`**: Main source directory for the project:
  - **`components/`**: Holds reusable components such as form elements.
  - **`pages/`**: Full pages, such as `PrivacyPolicy.js`.
  - **`routes/`**: Contains routing logic, managed by `AppRouter.js`.
  - **`styles/`**: Contains SCSS files used for styling.

## 📊 Analytics

This is a personal project, and Matomo Analytics is used to collect anonymized data without using cookies. This helps in understanding usage patterns for development purposes.

## ⚠️ Privacy Policy

This project is non-commercial, and no personal information is collected. You can view the full Privacy Policy [here](http://localhost:3000/privacy-policy).

## 📧 Contact

If you have any questions or want to share your feedback, feel free to contact me.

## 🎨 License

This project is for educational and non-commercial use only, as part of the Front End Mentor challenge.
