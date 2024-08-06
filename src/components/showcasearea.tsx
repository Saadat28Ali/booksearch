import { forwardRef } from "react";

import PageSelect from "./pageselect.tsx";

const ShowcaseArea = forwardRef(({ data, pageGetterSetter }: {data: Array<string>, pageGetterSetter: Object}, ref): any =>  {

    if (data.length === 0) return (<div className="ShowcaseArea" ref={ref}></div>)
    else {
        // console.log(data.map((item) => {return item}));
        return(
            <div className="ShowcaseArea flex flex-col items-center justify-start w-screen mt-5 min-[850px]:w-[850px]" ref={ref}>
                {
                    data.map((item) => {
                        console.log(item);
                        return (
                                <div className="flex flex-col min-[900px]:flex-row w-full" id="bookSlot">
                                    <div className="ShowcaseArea_imageframe flex justify-center min-w-[160px] ml-5 my-4">
                                        {/* <img src={item[3]}></img> */}
                                        <picture>
                                            <source srcSet={item[3]}></source>
                                            <img src="https://placehold.co/150x250" className="h-[250px] w-[150px] object-cover"></img>
                                        </picture>
                                    </div>
                                    <div className="ShowcaseArea_textframe mx-5 my-3 min-[900px]:w-full">
                                        <div className="ShowcaseArea_booktitle font-bold tracking-tighter text-7xl text-gray-900"> {item[0].toString()} </div>
                                        {
                                            (typeof(item[1] === "string")) ? 
                                            <p className="ShowcaseArea_bookauthor italic text-2xl text-gray-500 tracking-tighter"> by {item[1]} </p> :
                                            <p className="ShowcaseArea_bookauthor italic text-2xl text-gray-500 tracking-tighter"> by Anonymous </p>
                                        }
                                        <hr className="ShowcaseArea_hr border-neutral-500 mb-1 mt-2"></hr>
                                        <div className="ShowcaseArea_bookgenre overflow-scroll flex flex-wrap min-h-6 justify-end w-full">
                                            {
                                                (typeof(item[2]) === "object") ? 
                                                item[2].map((item1) => {
                                                    return <div className="ShowcaseArea_bookgenre bg-gradient-to-b from-blue-600 to-blue-700 font-mono inline mt-2 mx-1 px-2 py-1 rounded-md text-white text-xs tracking-tightest w-fit" id="genreSlot"> {item1} </div>
                                                }) : [<div className="ShowcaseArea_bookgenre bg-gradient-to-b from-gray-400 to-gray-500 font-mono inline mt-2 mx-1 px-2 py-1 rounded-md text-white text-xs tracking-tightest w-fit"> None </div>]
                                            }
                                        </div>
                                    </div>
                                </div>
                        );
                    })
                }
            
                <PageSelect pageGetterSetter={pageGetterSetter}/>
            </div>
        );
    }
    
});

export default ShowcaseArea;

