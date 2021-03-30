import React from "react"

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="container container-lg">
        <div className="technology-block">
          <div className="container">
            <div className="technology-row">
              <div className="technology-left">
                <div className="technology-content">
                  <h3>We shape technology that inspires people and grows businesses.</h3>
                  <p>Our technology starts with people because if they’re inspired, you succeed.We deliver expert engineering and stunning design to unleash growth for your business, customers and society. Across 25 global offices, over 1200 experts work at pace to make sure your investment makes a meaningful impact.</p>
                </div>
              </div>
              <div className="technology-right">
                <div className="technology-right-image">
                  <img src={`images/Homepage1-1.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="technology-row">
              <div className="technology-left">
                <div className="technology-left-image">
                  <img src={`images/Homepage2-1.png`} alt="" />
                </div>
              </div>
              <div className="technology-right">
                <div className="technology-content">
                  <h3>A human approach to consulting.</h3>
                  <p>We know digital transformation projects can be long and expensive but we aim to be different.Different means partnership, transparency, and impact. It means driving company-wide change and customer-centered design. Most Importantly, it means delivery. We rigorously unlock value to bring you results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="service-block">
          <div className="service-header">
            <h3>Services</h3>
            <a href="">See all our services</a>
          </div>
          <div className="service-list">
            <a href="" className="service">
              <h3>Unlock Value from Data</h3>
              <p>Become a data-driven organisation</p>
              <span className="service-btn"></span>
            </a>
            <a href="" className="service">
              <h3>Blend Physical and Digital Experiences</h3>
              <p>Create immersive and seamless consumer experiences</p>
              <span className="service-btn"></span>
            </a>
            <a href="" className="service">
              <h3>Create Compelling User Experiences</h3>
              <p>Build lasting relationships with your customers</p>
              <span className="service-btn"></span>
            </a>
            <a href="" className="service">
              <h3>Foster a Digital Culture and Capability</h3>
              <p>Take charge of your digital future</p>
              <span className="service-btn"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="client-block">
          <img src={`images/Gardens-by-the-bay.png`} alt="" />
          <img src={`images/Fujitsu.png`} alt="" />
          <img src={`images/Chr-Hansen.png`} alt="" />
          <img src={`images/HSBC.png`} alt="" />
          <img src={`images/Shake-Shack.png`} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage