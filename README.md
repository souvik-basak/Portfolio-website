# My Portfolio Website

This is my personal portfolio website showcasing my technical skills, projects, and experience as a Front-End Web Developer. The site features animations, interactive components, and a contact form using **EmailJS**.

## Technologies Used

The portfolio website is built with the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces.
- **SASS**: A CSS pre-processor to make the CSS more maintainable and easier to write.
- **Framer Motion**: For smooth, interactive animations.
- **Font Awesome**: Used for icons, including brand icons and solid icons.
  - `@fortawesome/free-brands-svg-icons`
  - `@fortawesome/free-solid-svg-icons`
- **GSAP**: For high-performance animations.
- **EmailJS**: For sending contact form data directly to my email.
- **Leaflet**: For rendering maps.
- **Loaders.css**: For pre-loader animations.
- **Animate.css**: For easy, cross-browser CSS animations.
- **React-Router-Dom**: For navigation and routing between different pages.
- **Web Vitals**: For measuring and optimizing performance.

## Features

- **Animated Landing Page**: A visually appealing landing page with smooth animations.
- **Skills Section**: A section that displays my technical skills with drag-and-drop animations.
- **Projects Section**: Showcases my previous work and projects.
- **Interactive Contact Form**: A contact form that allows visitors to send me messages directly via **EmailJS**.
- **Responsive Design**: The website is fully responsive and works well on both desktop and mobile devices.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14.x)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/souvik-basak/portfolio.git
cd portfolio
```

2. **Install the dependencies**:

```bash
npm install
# or
yarn install
```

3. **Start the development server**:

```bash
npm start
# or
yarn start
```

The site should now be running on `http://localhost:3000/`.

### Build for Production

To create a production-ready build of the portfolio, run:

```bash
npm run build
# or
yarn build
```

This will generate a `build` folder with static files ready to be deployed.

### EmailJS Setup

For the contact form to work, you need to configure **EmailJS**:

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Create a new email service, and copy the **Service ID**, **Template ID**, and **User ID**.
3. Update the EmailJS integration in your project:

```js
import emailjs from '@emailjs/browser';

// Inside your form submission handler
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_USER_ID'
)
```

Replace the placeholders with your actual IDs.

## Available Scripts

- **npm start**: Runs the app in development mode.
- **npm run build**: Builds the app for production.
- **npm test**: Launches the test runner.
- **npm run eject**: If you need to customize the configuration beyond `react-scripts`.

## Folder Structure

```bash
my-portfolio/
├── public/
│   ├── index.html      # Main HTML file
│   └── ...
├── src/
│   ├── assets/         # Static assets like images and icons
│   ├── components/     # Reusable React components
│   ├── pages/          # Main pages of the site
│   ├── styles/         # SASS files
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point for React
│   └── ...
├── .gitignore          # Files and directories to ignore in Git
├── package.json        # Project metadata and dependencies
└── README.md           # You are here
```

## Key Dependencies

Here are the main libraries and dependencies used:

- [**React**](https://reactjs.org/)
- [**SASS**](https://sass-lang.com/)
- [**Framer Motion**](https://www.framer.com/motion/)
- [**Font Awesome**](https://fontawesome.com/)
- [**GSAP**](https://greensock.com/gsap/)
- [**EmailJS**](https://www.emailjs.com/)
- [**React Leaflet**](https://react-leaflet.js.org/)
- [**React Loaders**](https://github.com/jonjaques/react-loaders)
- [**Animate.css**](https://animate.style/)
- [**React Router DOM**](https://reactrouter.com/)

## Contributing

This is a personal portfolio website, so contributions are not currently accepted. However, feel free to fork the repository and build your own version!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
