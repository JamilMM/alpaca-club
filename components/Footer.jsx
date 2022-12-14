import React from 'react';
import Image from 'next/image';
import alpacaicon from '../assets/alpacaico.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <>
            <div className="image-entry">
            <Image src= {alpacaicon} alt="logo picture" height={32} width={32}/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alpaca Toon Club</span>
            </div>    
            </>         
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://discord.gg/JpW5GdSP" target= "_blank"  rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 176 143" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_131_46)">
            <path d="M149.088 11.9265C137.546 6.28174 125.335 2.2709 112.779 0C111.215 2.95557 109.387 6.93083 108.127 10.0934C94.589 7.9656 81.1751 7.9656 67.8858 10.0934C66.6263 6.93155 64.7576 2.95557 63.1791 0C50.6102 2.27194 38.389 6.293 26.8413 11.9559C3.86233 48.2514 -2.36711 83.6442 0.747265 118.536C15.9885 130.433 30.7587 137.659 45.2801 142.388C48.889 137.201 52.0792 131.709 54.8178 125.969C49.604 123.895 44.5776 121.338 39.7986 118.329C41.0563 117.355 42.2843 116.34 43.4809 115.285C72.4398 129.442 103.905 129.442 132.519 115.285C133.721 116.333 134.948 117.348 136.201 118.329C131.414 121.346 126.378 123.908 121.154 125.984C123.908 131.748 127.093 137.245 130.692 142.403C145.227 137.675 160.011 130.448 175.252 118.536C178.907 78.0881 169.009 43.0193 149.088 11.9258V11.9265ZM58.7633 97.0783C50.0699 97.0783 42.9405 88.5953 42.9405 78.2656C42.9405 67.9358 49.918 59.4384 58.7633 59.4384C67.6094 59.4384 74.7381 67.9207 74.5861 78.2656C74.5999 88.5953 67.6094 97.0783 58.7633 97.0783ZM117.236 97.0783C108.542 97.0783 101.414 88.5953 101.414 78.2656C101.414 67.9358 108.391 59.4384 117.236 59.4384C126.082 59.4384 133.211 67.9207 133.059 78.2656C133.059 88.5953 126.082 97.0783 117.236 97.0783V97.0783Z" fill="#5865F2"/>
            </g>
            <defs>
            <clipPath id="clip0_131_46">
            <rect width="176" height="143" fill="white"/>
            </clipPath>
            </defs>
            </svg>
                <span className="sr-only">Discord</span>
            </a>
            
            
            <a href="https://www.instagram.com/alpacatoonclub/" target= "_blank"  rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span className="sr-only">Instagram</span>
            </a>
            <a href="https://twitter.com/AlpacaToon" target= "_blank"  rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter</span>
            </a>
            </div>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">?? 2022 <Link href="/" className="hover:underline">Alpaca Toon Club???</Link>. All Rights Reserved.
    </span>
</footer>
  );
}

export default Footer