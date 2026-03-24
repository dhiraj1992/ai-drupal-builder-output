To create a React UI based on the provided JSON structure, we will break it down into components, ensuring we follow best practices such as component reuse, separation of concerns, and maintaining state where necessary. Here is a basic implementation:

### Step 1: Create `Header` Component

```jsx
// components/Header.js
import React from 'react';

const Header = ({ logo, navigation }) => (
  <header>
    <div className="logo">{logo}</div>
    <nav>
      <ul>
        {navigation.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
```

### Step 2: Create `Banner` Component

```jsx
// components/Banner.js
import React from 'react';

const Banner = ({ backgroundImage, slogan, title, buttons }) => (
  <section 
    className="banner" 
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="banner-content">
      <h1>{title}</h1>
      <p>{slogan}</p>
      <div className="banner-buttons">
        {buttons.map((button, index) => (
          <a 
            key={index} 
            href="#" 
            className="button"
          >
            {button.text}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Banner;
```

### Step 3: Create `App` Component

```jsx
// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

const data = {
  header: {
    logo: "ONEX",
    navigation: ["Home", "About", "Services", "Team", "Portfolio", "Testimonials", "Blog", "Price Table", "Contact"]
  },
  main: {
    banner: {
      backgroundImage: "plate with wooden utensils",
      slogan: "We Believe in Quality",
      title: "ONEX Creative Theme",
      buttons: [
        { text: "Discover Now", action: "link" },
        { text: "Purchase Onex", action: "link" }
      ]
    }
  }
};

const App = () => (
  <div>
    <Header
      logo={data.header.logo}
      navigation={data.header.navigation}
    />
    <Banner 
      backgroundImage={data.main.banner.backgroundImage}
      slogan={data.main.banner.slogan}
      title={data.main.banner.title}
      buttons={data.main.banner.buttons}
    />
  </div>
);

export default App;
```

### Step 4: Basic Styling

Assuming you are using a CSS-in-JS solution like `styled-components`, or you could opt for a regular CSS file:

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: white;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-size: cover;
  padding: 5rem 0;
}

.banner-content {
  text-align: center;
}

.banner-buttons .button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.banner-buttons .button:hover {
  background-color: #e94e3d;
}
```

### Step 5: Apply Styles and Test

Ensure you've imported the styles into your `App.js` file if you're using standard CSS:

```jsx
import './styles.css';
```

This setup breaks down your UI into reusable components, keeping your codebase scalable and maintainable. Adjust the stylesheet paths and images as per your project structure.