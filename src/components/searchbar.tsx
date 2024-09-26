function SearchBar({ searchFunc }: {searchFunc: Function}): any {
    return(
        <div className="SearchBar border-solid border-2 flex justify-between rounded-full hover:bg-white hover:bg-opacity-30 h-14">
            <form className="SearchBar_searchform" 
            onSubmit={(event) => {
                            event.preventDefault();
                            const target: HTMLElement = event.target as HTMLElement;
                            const input: HTMLInputElement | null = target.querySelector("#SearchBar_textinput");
                            if (input !== null) {
                                searchFunc(input.value);
                            
                            }
            }}
            >
                <input id="SearchBar_textinput" className="SearchBar_textinput bg-transparent min-[700px]:w-96 min-[900px]:w-[600px] outline-none px-4 py-3 text-white transition-all ease-in-out" type="text" placeholder="Enter a book title..."></input>
                <button className="SearchBar_submitbutton bg-white h-[100%] hover:bg-transparent hover:text-white p-4 rounded-r-full text-blue-950 transition-colors ease-in-out" type="submit"> Search </button>
            </form>
        </div>
    );
}

export default SearchBar;
