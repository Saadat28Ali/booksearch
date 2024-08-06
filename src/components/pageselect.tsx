function PageSelect({ pageGetterSetter }: {pageGetterSetter: Object}): any {

    function changePage(increment: boolean): void {
        (increment) ? pageGetterSetter.pageSetter(pageGetterSetter.pageGetter + 1) : 
        pageGetterSetter.pageSetter(pageGetterSetter.pageGetter - 1);
        console.log(pageGetterSetter.pageGetter);
    }

    return(
        <div className="PageSelect border-t-2 border-t-gray-400 border-t-solid flex justify-center mt-10 select-none w-3/6">
            <div
                className="PageSelect_previous bg-gradient-to-b from-blue-600 to-blue-700 flex font-mono h-12 items-center justify-center my-2 ml-2 rounded-md text-white transition-colors ease-in-out w-12 hover:border-2 hover:border-blue-700 hover:font-bold hover:from-white hover:to-white hover:text-blue-700"
                onClick={() => {changePage(false)}}>
                {"<"}
            </div>
            <div 
                className="PageSelect_next bg-gradient-to-b from-blue-600 to-blue-700 flex font-mono h-12 items-center justify-center my-2 mx-2 rounded-md text-white transition-colors ease-in-out w-12 hover:border-2 hover:border-blue-700 hover:font-bold hover:from-white hover:to-white hover:text-blue-700"
                onClick={() => {changePage(true)}}>
                {">"}
            </div>
        </div>
    );
}

export default PageSelect;