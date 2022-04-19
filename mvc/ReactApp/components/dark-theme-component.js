import App from "../src/App.js";

DarkTheme = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);

    React.useEffect(() => {
      if(darkTheme) {
          document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkTheme]);

    return (
        <div>
            <h1>Header</h1>
            <button onClick={() => setDarkTheme(!darkTheme)}>Byt Tema</button>
        </div>
    );
};

export default App;