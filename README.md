
# Bit Test Components

This is a simple test repository, mainly focused to learn bit.dev




## Authors

- [@CodeNameNinja](https://www.github.com/CodeNameNinaja)
## Bit Collection

[Collection](https://bit.dev/codenameninja/test-components)

## Documentation

[Documentation](https://harmony-docs.bit.dev/)

  
## Installation

Install Bit-testing-react with git

```bash
  npm install @codenameninja/test-components.<componentId>
```

## Configure your Scoped Registry
To install components with npm or yarn you might need to configure @codenameninja as a scoped registry.

```bash
  npm config set '@codenameninja:registry' https://node.bit.dev
```
## Usage/Examples

You can now use the component in your app by importing it from your node modules and then using it in your app or component.

```js
app.js
import { Button } from '@yourUserName/componentScopeName.componentID';
...
<Button>click Here</Button>
...
```
## Lessons Learned

Bit is really awesome, and it makes creating a single design platform across applications really easy and simple. 

whats great is that devs from multiple teams can colloborate on components and use them as required. 
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/CodeNameNinja/Bit-testing-react.git
```

Go to the project directory

```bash
  cd Bit-testing-react
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  bit compile
  bit start
```

### bit command not found?

install bvm and bit by following this guide.

[Getting started](https://harmony-docs.bit.dev/getting-started/installing-bit)