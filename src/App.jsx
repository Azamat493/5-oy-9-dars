import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import FeaturesSection from './components/FeaturesSection'
import CategoriesSection from './components/CategoriesSection'
import Sell from './components/Sell'
import Models from './components/Models'
import Reviews from './components/Reviews'
import AboutSection from './components/AboutSection'
import ArticlesSection from './components/ArticlesSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeaturesSection/>
      <CategoriesSection/>
      <Sell/>
      <Models/>
      <Reviews/>
      <AboutSection/>
      <ArticlesSection/>
      <NewsletterSection/>
      <Footer/>
    </div>
  )
}

export default App