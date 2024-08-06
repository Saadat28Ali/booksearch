import SearchBar from "./searchbar.tsx";
import Spinner from "./spinner.tsx";

import axios from "axios";

import { useState, useEffect, useRef } from "react";

function SearchArea({ bookDataSetter, scrollFunc, currPageOffset }: {bookDataSetter: Function, scrollFunc: Function, currPageOffset: any}): any {

    const [fetching, setFetching] = useState(false);
    // let searchParam = useRef("");

    function fetchData(search_param: string): any {
        if (search_param === "") return;
        console.log("FETCHING");
        // const search_param: String = event.target.getElementsByClassName("SearchBar_textinput")[0].value;

        setFetching(true);
        axios({
            method: "GET",
            url: "https://openlibrary.org/search.json", 
            params: {
                title:  search_param, 
                offset: 5*currPageOffset, 
                limit: 5
            }
        }).then(
            (response: any) => {
                // console.log(response);
                let setThis = [];
                let curr_book = [];
                let item = null;
                for (let index in response.data.docs) {
                    item = response.data.docs[index];
                    curr_book = [];
                    // console.log(item.author_name[0]);
                    curr_book.push(
                        item.title, 
                        (typeof(item.author_name[0] !== "undefined")) ? item.author_name[0] : "", 
                        (typeof(item.subject) !== "undefined") ? item.subject.slice(0, 7) : "", 
                        (typeof(item.isbn) !== "undefined") ? `https://covers.openlibrary.org/b/ISBN/${item.isbn[0]}-M.jpg` : ""
                    );
                    setThis.push(curr_book);
                }
                // console.log(setThis);
                bookDataSetter(setThis);
                scrollFunc();
            }
        ).catch(
            (error) => {
                console.log(error.message);
            }
        )
        .finally(
            () => {
                setFetching(false);
            }
        );
    }

    // useEffect(fetchData(searchParam.current), [currPageOffset]);

    return(
        <div className="SearchArea bg-gradient-to-br from-blue-700 to-blue-950 flex flex-col items-center justify-center w-screen min-h-screen text-white ">
            <h1 className="SearchArea_Header leading-loose text-2xl tracking-tighter"> Search for a book! </h1>
            <SearchBar fetchingSetter={setFetching} searchFunc={fetchData}/>
            <Spinner fetchingStatus={fetching}/>
        </div>
    );
}

export default SearchArea;
