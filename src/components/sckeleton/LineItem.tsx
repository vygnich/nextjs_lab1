import React from "react";
export default function LineItem(){
return(<>
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
            <svg className="w-full  text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <div className="flex items-center justify-between w-full pt-1">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></h2>


            </div>
        </div>
    </div>
</>)
}