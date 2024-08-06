function Footer(props: object): any {
    return(
        <div className="Footer bg-gradient-to-b from-white to-neutral-300 flex flex-col font-mono items-center justify-center min-h-[50vh] text-slate-900 tracking-widest w-screen ">
            {/* <div>
                Made by Saadat Ali, 2024
            </div>
            <div className="flex flex-col justify-center items-center min-[900px]:flex-row"> 
                Special thanks to &nbsp;
                <a className="font-bold inline text-blue-800" href="https://openlibrary.org/"> @openlibrary </a>
                &nbsp; for the API
            </div> */}

            <div>
                Made by Saadat Ali, 2024
            </div>
            <div className="flex flex-col min-[900px]:flex-row text-center">
                Special thanks to <a className="font-bold inline text-blue-800" href="https://openlibrary.org/"> &nbsp; @openlibrary &nbsp; </a> for the API
            </div>
        </div>
    );
}

export default Footer;