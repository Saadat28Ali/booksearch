function Spinner({ fetchingStatus }: {fetchingStatus: Boolean}): any {
    if (fetchingStatus) {
        return(
            <div className="Spinner border-2 border-solid border-white border-opacity-35 min-h-8 min-w-8 my-4 rounded-full">
                <div className="Spinner_innercircleinvisible animate-spin h-8 m-[3px] w-8 rounded-full">
                    <div className="Spinner_innercircle bg-white h-2 w-2 rounded-full"></div>
                </div>
            </div>
        );
    }
    else {
        return(
            // <div className="Spinner min-h-8 min-w-8 my-5 invisible">
            //     spinner
            // </div>
            <div className="Spinner border-2 border-solid border-white min-h-8 min-w-8 my-4 invisible">
                <div className="Spinner_innercircleinvisible h-8 m-[3px] w-8">
                    <div className="Spinner_innercircle h-2 w-2"></div>
                </div>
            </div>
        )
    }
}

export default Spinner;