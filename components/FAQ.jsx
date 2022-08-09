import React from 'react'

const FAQ = () => {
  return (
         
<div className="max-w-screen-xl mx-auto p-8">
    <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
        FAQs
    </h2>
    <ul className="flex items-start gap-8 flex-wrap">
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
                Why are you launching 500 digital collectibles only??
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    We are working hard to expand this number but for now this is the only amount available on the Ethereum and Solana Chain.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
                Will Alpaca Toon Club only be available on Opensea and Solsea?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    Yes. These are the only platforms we intend to launch this project.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
                Why can't I mint on your website?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    We have limited the features on our website for brand awareness but intend to integrate this feature soon in the future.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
                Which platform will you launch the project first?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    Solsea which relies on the Solana Chain Network. We find this cheaper to start then move to Opensea on the Ethereum Chain Network.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
                What is the cost mint on Solsea and Opensea?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                    0.8 ETH for Opensea and 4 SOL for Solsea.
                </p>
            </p>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
                What is Solana blockchain?
            </p>
            <p className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                Solana is public, open-source blockchain that supports smart contracts, NFT and dApps. Its native cryptocurrency is SOL. 
                </p>
            </p>
        </li>
    </ul>
</div>
)
}

export default FAQ