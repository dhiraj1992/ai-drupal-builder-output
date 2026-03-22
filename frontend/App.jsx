To create a React UI based on the provided JSON data, we can break down the components into manageable pieces, following best practices such as using functional components and leveraging React's composition capabilities.

### Create the Components:

1. **Header Component:**
    ```jsx
    import React from 'react';

    const Header = ({ logo, navigation }) => {
      return (
        <header>
          <div className="logo">
            {logo}
          </div>
          <nav>
            <ul>
              {navigation.map((navItem, index) => (
                <li key={index}>
                  <a href={`#${navItem.toLowerCase().replace(/ /g, '-')}`}>{navItem}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      );
    };

    export default Header;
    ```

2. **HeroSection Component:**
    ```jsx
    import React from 'react';

    const HeroSection = ({ backgroundImage, text, buttons }) => {
      const heroStyle = {
        background: `url(${backgroundImage}) no-repeat center center/cover`,
        height: '100vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      };

      return (
        <section style={heroStyle}>
          <h1>{text.line1}</h1>
          <h2>{text.line2}</h2>
          <div>
            {buttons.map((button, index) => (
              <a key={index} href={button.link} className="hero-button">
                {button.text}
              </a>
            ))}
          </div>
        </section>
      );
    };

    export default HeroSection;
    ```

3. **App Component:**
    ```jsx
    import React from 'react';
    import Header from './Header';
    import HeroSection from './HeroSection';

    const appData = {
      header: {
        logo: "ONEX",
        navigation: ["Home", "About", "Services", "Team", "Portfolio", "Testimonials", "Blog", "Price Table", "Contact"]
      },
      heroSection: {
        backgroundImage: "dinnerware with wooden utensils",
        text: { line1: "We Believe in Quality", line2: "Onex Creative Theme" },
        buttons: [
          { text: "Discover Now", link: "#discover" },
          { text: "Purchase Onex", link: "#purchase" }
        ]
      }
    };

    const App = () => {
      return (
        <div>
          <Header logo={appData.header.logo} navigation={appData.header.navigation} />
          <HeroSection
            backgroundImage={appData.heroSection.backgroundImage}
            text={appData.heroSection.text}
            buttons={appData.heroSection.buttons}
          />
        </div>
      );
    };

    export default App;
    ```

### Best Practices Used:

- **Functional Components**: These offer a simpler way to create components, especially when state management is not required or can be handled using hooks if needed.
  
- **Composition**: Components are composed together in a modular and reusable manner which enhances maintainability and testability.

- **CSS Flexbox**: Used in the HeroSection for centering content both vertically and horizontally.

- **Dynamic Rendering**: Map functions for dynamic content rendering. For instance, navigation links and buttons are generated from arrays.

- **Accessibility**: Using semantic HTML elements such as `<header>`, `<nav>`, `<ul>` aids in building accessible applications.

This setup can be easily expanded with additional styling and functionality as needed. Make sure to replace `"dinnerware with wooden utensils"` in `HeroSection` with an actual URL or path to the image to have the background display correctly.