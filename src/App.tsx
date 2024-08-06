import { useState, useRef } from 'react'

import SearchArea from "./components/searcharea.tsx";
import Footer from "./components/footer.tsx";
import ShowcaseArea from './components/showcasearea.tsx';

function App() {

  const [bookData, setBookData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const refToShowcase = useRef(null);

  function scrollToShowcase(): void {
    // alert(refToShowcase.current);
    // alert(refToShowcase.current.offsetTop);
    
    // window.scrollTo(0, refToShowcase.current.offsetTop + refToShowcase.current.offsetHeight);
    
    refToShowcase.current.scrollIntoView(
      {
        behavior: "smooth", 
        block: "center"
      }
    );

    // window.scrollBy(0, window.innerHeight);
  }

  return (
    <div className="App flex flex-col items-center">
      <SearchArea bookDataSetter={setBookData} scrollFunc={scrollToShowcase} currPageOffset={currPage}/>
      <a id="showcasearea"></a>
      {/* {(bookData.length === 0) ? (<></>) : (<ShowcaseArea data={bookData} ref={refToShowcase} />)} */}
      <ShowcaseArea data={bookData} ref={refToShowcase} pageGetterSetter={{pageGetter: currPage, pageSetter: setCurrPage}}/>
      <Footer />
    </div>
  );
}

export default App
