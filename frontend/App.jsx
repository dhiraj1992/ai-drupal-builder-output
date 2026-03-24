To create a React UI based on the provided JSON structure, we'll break down the UI into meaningful components, each dealing with its own specific part of the UI. We'll use modern React practices, including functional components and hooks. Below is a simple implementation:

```jsx
// App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const data = {
    header: {
      logo: "ONEX",
      navigation: [
        { name: "Home", link: "#", active: true },
        { name: "About", link: "#" },
        { name: "Services", link: "#" },
        { name: "Team", link: "#" },
        { name: "Portfolio", link: "#" },
        { name: "Testimonials", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Price Table", link: "#" },
        { name: "Contact", link: "#" }
      ]
    },
    main: {
      hero_section: {
        image: "plate and utensils",
        slogan: "We Believe in Quality",
        title: "ONEX Creative Theme",
        buttons: [
          { text: "Discover Now", link: "#" },
          { text: "Purchase Onex", link: "#" }
        ]
      }
    }
  };

  return (
    <div className="App">
      <Header logo={data.header.logo} navigation={data.header.navigation} />
      <Main heroSection={data.main.hero_section} />
    </div>
  );
}

export default App;
```

```jsx
// components/Header.js
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ logo, navigation }) => {
  return (
    <header>
      <div className="logo">{logo}</div>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
};

export default Header;
```

```jsx
// components/Main.js
import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ heroSection }) => {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${heroSection.image})` }}>
        <div className="overlay">
          <h1>{heroSection.title}</h1>
          <p>{heroSection.slogan}</p>
          <div className="hero-buttons">
            {heroSection.buttons.map((button, index) => (
              <a key={index} href={button.link} className="btn">
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

Main.propTypes = {
  heroSection: PropTypes.shape({
    image: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Main;
```

```css
/* App.css */
body, html {
  margin: 0;
  font-family: Arial, sans-serif;
}

.App {
  text-align: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li.active a {
  border-bottom: 2px solid #fff;
}

.hero {
  height: 100vh;
  background-size: cover;
  color: white;
  position: relative;
}

.hero .overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-buttons .btn {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
}
```

### Explanation
1. **Separation of Components**: We’ve divided the UI into `Header` and `Main` components, which keeps the code modular and readable.
2. **PropTypes**: We've used `PropTypes` to define the required structure for props passed into our components, helping catch bugs by verifying that the data received by the component is correct.
3. **CSS**: Basic CSS is there to style the components, with `App.css` providing the styles for the overall layout and individual components.
4. **Flexbox**: Used for header and hero section styling, making the layout responsive and clean.

This setup makes further enhancements and maintenance more straightforward as the application scales.