import React from 'react'

const Roadmap = () => {
  return (
    <div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Brand Awareness</h3>
                <p className="leading-tight text-justify">
                  Launch Website, Twitter, Instagram and Discord to start building a fun community of NFT and Crypto lovers.
                  Marketing Campaigns and Giveaways.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Rewards</h3>
                <p className="leading-tight text-justify">
                  Reward Active and Passionate Members free Alpaca Toon Club NFTs and Special Roles Across Social Media
                  (Discord and Instagram)
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Solana Launch</h3>
                <p className="leading-tight text-justify">
                 Launch The WhiteList And Public Mint For Solana Chain Network. 
                 This will be available exclusively on Solsea.io
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Ethereum Launch</h3>
                <p className="leading-tight text-justify">
                  Exclusive Launch on the most popular NFT Marketplace Opensea.
                  Dates for WhiteList and Public Mint will be available shortly after a successful Solana launch.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Future</h3>
                <p className="leading-tight text-justify">
                 40% of the proceeds from both chain networks will be used to fund a larger project which will enable
                 current and new users to create a free limited NFTs(2D and 3D) using a modern online tool. Its FREE!
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Roadmap