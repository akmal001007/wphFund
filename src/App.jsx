import './App.css'
import CampaignBanner from './components/CampaignBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialMedia from './components/SocialMedia'

function App() {

  return (
   <div className='app'>
    <Header />
    <SocialMedia />
    {/* <Hero /> */}
    <CampaignBanner />
   </div>
  )
}

export default App
