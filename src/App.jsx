// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import WelcomeMessage from "./components/WelcomeMessage";

// import JSXRules from "./components/JSXRules";

const App = () => {

    const myName = 'Whitney Dev'
    const multiply = (a,b) => a*b
    const specialClass = "whitney is here";

  return <div>
    {/* <Header />
    <Main />
    <Footer />
    <WelcomeMessage />
    <JSXRules /> */}
    <section>
    <p>{2 + 2}</p>
    <h1>{myName}</h1>
    <p>My friends List: { ['me', 'mySelf', 'I']}</p>
    <p>2 * 2 ={multiply( 2,2)}</p>
    <p className = {specialClass}>This is special class</p>
  </section>
  </div>
 
};

export default App;

// const App = () => {
//   return (
//     <section id="section">
//       <h1>My Website</h1>
//       <article>
//         <h2>Welcome To React</h2>
//         <p className = "text">Paragraph Content</p>
//       </article>
//     </section>
//   )
// }