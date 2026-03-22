To create a React UI using the given JSON structure, we can break down the UI into separate components, ensuring we follow best practices for component reusability, separation of concerns, and clean code. Here's an example implementation:

### `App.js`

```javascript
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import './App.css';

const navigationItems = ["Home", "About", "Services", "Team", "Portfolio", "Testimonials", "Blog", "Price Table", "Contact"];

const App = () => {
  const headerData = {
    logo: "ONEX",
    navigation: navigationItems,
  };

  const bannerData = {
    title: "We Believe in Quality",
    subtitle: "Onex Creative Theme",
    buttons: [
      { text: "Discover Now", action: "discover" },
      { text: "Purchase Onex", action: "purchase" },
    ],
  };

  return (
    <div className="App">
      <Header headerData={headerData} />
      <main>
        <Banner bannerData={bannerData} />
      </main>
    </div>
  );
};

export default App;
```

### `Header.js`

```javascript
import React from 'react';

const Header = ({ headerData }) => {
  return (
    <header className="header">
      <div className="logo">{headerData.logo}</div>
      <nav>
        <ul className="navigation">
          {headerData.navigation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```

### `Banner.js`

```javascript
import React from 'react';

const Banner = ({ bannerData }) => {
  return (
    <section className="banner">
      <h1>{bannerData.title}</h1>
      <p>{bannerData.subtitle}</p>
      <div className="banner-buttons">
        {bannerData.buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button.action)}>
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
};

const handleButtonClick = (action) => {
  switch (action) {
    case 'discover':
      console.log("Discover button clicked");
      // Add logic for discover action
      break;
    case 'purchase':
      console.log("Purchase button clicked");
      // Add logic for purchase action
      break;
    default:
      console.log("Unknown action");
  }
};

export default Banner;
```

### `App.css`

```css
.App {
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}

.navigation {
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding: 0;
}

.navigation li {
  cursor: pointer;
}

.banner {
  text-align: center;
  padding: 50px 20px;
  background-color: #f4f4f4;
}

.banner-buttons {
  margin-top: 20px;
}

.banner button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #0073e6;
  color: white;
  border: none;
  cursor: pointer;
}

.banner button:hover {
  background-color: #005bb5;
}
```

### Explanation

1. **Componentization**: We broke down the application into reusable components: `App`, `Header`, and `Banner`.
2. **Props**: Components receive data through props, making them customizable and reusable.
3. **Event Handling**: Button clicks are handled by `handleButtonClick`, allowing actions to be defined for each button.
4. **Styling**: Basic styling is included in `App.css`. Styles can be further refined or extracted into CSS modules based on project needs.
5. **Best Practices**: Components are functional and use React hooks, which are more in line with modern React practices.