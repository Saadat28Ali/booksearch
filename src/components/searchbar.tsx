function SearchBar({ fetchingSetter, searchFunc}: {fetchingSetter: Function, searchFunc: Function}): any {
    return(
        <div className="SearchBar border-solid border-2 flex justify-between rounded-full hover:bg-white hover:bg-opacity-30 h-14">
            <form className="SearchBar_searchform" onSubmit={
                (event) => {
                            event.preventDefault(); 
                            searchFunc(event.target.getElementsByClassName("SearchBar_textinput")[0].value)}}>
                <input className="SearchBar_textinput bg-transparent min-[700px]:w-96 min-[900px]:w-[600px] outline-none px-4 py-3 text-white transition-all ease-in-out" type="text" placeholder="This is a searchbar"></input>
                <button className="SearchBar_submitbutton bg-white h-[100%] hover:bg-transparent hover:text-white p-4 rounded-r-full text-blue-950 transition-colors ease-in-out" type="submit"> Search </button>
            </form>
        </div>
    );
}

export default SearchBar;