import Image from 'next/image'
import heroImg from '../assets/nftart.jpg'
import Hero from '../components/Hero'
import Head from 'next/head'
import Story from "../components/Story";



export default function Home() {
  return(
    <div>   
      <Head>
        <title>Alpaca Toon Club</title>
        <meta name='description' content='Generated by create next app'/>
        <link rel='icon' href='/alpacaico.png'/>
        </Head> 

       
      <Hero heading='The Alpaca Toon Club' message='Alpaca NFTs Available Soon On Solsea.io and Opensea' />
      <Story />
     
    </div>
  ) 
}
