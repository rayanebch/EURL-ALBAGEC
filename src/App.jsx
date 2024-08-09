import { Nav } from "./components";
import { Page1, Page2, Page3 } from "./sections"
import Page4 from "./sections/Page4";

const App = () => (
  
  <main className="font-poppins">
     <Nav></Nav>
     <section>
      <Page1></Page1>
     </section>
     <section>
      <Page2></Page2>
     </section>
     <section>
      <Page3></Page3>
     </section>
     <section>
      <Page4></Page4>
     </section>
  </main>
);
export default App;