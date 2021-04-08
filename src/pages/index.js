import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allNews: allContentfulNews (
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMM DD, YYYY")
            description
          }
        }
      },
      latestNews: allContentfulNews (
          sort: {
            fields:publishedDate,
            order:DESC
          },
          limit: 1
        ) {
        edges {
          node {
            title
            slug
            description
            thumbnail {
              file {
                url
              }
            }
            publishedDate(formatString:"MMM DD, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="grid grid-lg">
        <div className="technology-block">
          <div className="grid">
            <div className="technology-row">
              <div className="technology-left">
                <div className="technology-content">
                  <h2>We shape technology that inspires people and grows businesses.</h2>
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
          <div className="grid-fluid">
            <div className="technology-row">
              <div className="technology-left">
                <div className="technology-left-image">
                  <img src={`images/Homepage2-1.png`} alt="" />
                </div>
              </div>
              <div className="technology-right">
                <div className="technology-content">
                  <h2>A human approach to consultings.</h2>
                  <p>We know digital transformation projects can be long and expensive but we aim to be different.Different means partnership, transparency, and impact. It means driving company-wide change and customer-centered design. Most Importantly, it means delivery. We rigorously unlock value to bring you results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="service-block">
          <div className="service-header">
            <h2>Services</h2>
            <Link to="/">See all our services</Link>
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
      <div className="grid">
        <div className="client-block">
          <img src={`images/Gardens-by-the-bay.png`} alt="" />
          <img src={`images/Fujitsu.png`} alt="" />
          <img src={`images/Chr-Hansen.png`} alt="" />
          <img src={`images/HSBC.png`} alt="" />
          <img src={`images/Shake-Shack.png`} alt="" />
        </div>
      </div>
      <div className="grid grid-lg">
        <div className="case-block">
          <div className="grid">
            <div className="header-block">
              <h2>Case closed.<br/>Over 2200 successful projects, worldwide.</h2>
              <Link to="/">Visit our cases</Link>
            </div>
            <div className="case-gallery">
              <div className="case-gallery-item">
                <div className="case-gallery-image">
                  <img src={`images/case-img-1.jpg`} />
                </div>
                <a href="" className="case-gallery-content">
                  <div className="case-study">Case study <span>Shake Shack</span></div>
                  <div className="case-title">Transforming how Shake Shack Delivers Hospitality</div>
                </a>
              </div>
              <div className="case-gallery-item">
                <div className="case-gallery-image">
                  <img src={`images/case-img-2.jpg`} />
                </div>
                <a href="" className="case-gallery-content">
                  <div className="case-study">Case study <span>Mashreq Bank</span></div>
                  <div className="case-title">All-new Retail Banking Platform Built on Sitecore 9.3</div>
                </a>
              </div>
              <div className="case-gallery-item">
                <div className="case-gallery-image">
                  <img src={`images/case-img-3.jpg`} />
                </div>
                <a href="" className="case-gallery-content">
                  <div className="case-study">Case study <span>Chr. Hansen</span></div>
                  <div className="case-title">Ensuring Milk Safety by Making Critical Technology Accessible</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="insight-block">
          <div className="header-block">
            <h2>Latest Insights - We help you stay up to date.</h2>
            <Link to="/">Visit Thought Leadership</Link>
          </div>
          <div className="insight-content">
            <div className="insight-content-left">
              <a href="" className="insight-item">
                <img src={`images/insight-img-1.jpg`} alt="" />
                <div className="insight-details">
                  <span className="position">Head of Product Management</span>
                  <span className="name">Luke Gallimore</span>
                  <span className="time">— &nbsp;10 min. read</span>
                </div>
                <h3 className="insight-title">How to Manage Your Product’s Strategy & Roadmap Throughout its Life Cycle.</h3>
              </a>
            </div>
            <div className="insight-content-right">
              <a href="" className="insight-item">
                <div className="insight-content-block">
                  <div className="insight-details">
                    <span className="position">Marketing Manager</span>
                    <span className="name">Thomas Lockhart</span>
                  </div>
                  <h3 className="insight-title">How Employee Apps Are the Backbone of Successful Enterprises</h3>
                  <span className="time">9 min read</span>
                </div>
                <div className="insight-content-image">
                  <img src={`images/insight-img-2.jpg`} alt="" />
                </div>
              </a>
              <a href="" className="insight-item">
                <div className="insight-content-block">
                  <div className="insight-details">
                    <span className="position">Marketing Manager</span>
                    <span className="name">Thomas Lockhart</span>
                  </div>
                  <h3 className="insight-title">Agile in the face of COVID-19: What it takes to launch a virtual film festival in 14 days</h3>
                  <span className="time">9 min read</span>
                </div>
                <div className="insight-content-image">
                  <img src={`images/insight-img-3.jpg`} alt="" />
                </div>
              </a>
              <a href="" className="insight-item">
                <div className="insight-content-block">
                  <div className="insight-details">
                    <span className="position">Marketing Manager</span>
                    <span className="name">Thomas Lockhart</span>
                  </div>
                  <h3 className="insight-title">How Employee Apps Are the Backbone of Successful Enterprises</h3>
                  <span className="time">9 min read</span>
                </div>
                <div className="insight-content-image">
                  <img src={`images/insight-img-4.jpg`} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-lg">
        <div className="borderless-block">
          <div className="grid">
            <div className="borderless-row">
              <div className="borderless-left">
                <div className="borderless-content">
                  <h2>Bold and Borderless.</h2>
                  <p>We are consultants but, above all, engineers, product experts, and designers who excel at strategy and delivery. While we're experts in the latest technology, we're practitioners of the best. Digital transcends borders and so do we. We select the best people worldwide to bring you boutique service at scale.</p>
                </div>
              </div>
              <div className="borderless-right">
                <div className="borderless-right-image">
                  <img src={`images/borderless-img-1.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid-fluid">
            <div className="borderless-row">
              <div className="borderless-left">
                <div className="borderless-left-image">
                  <img src={`images/borderless-img-2.png`} alt="" />
                </div>
              </div>
              <div className="borderless-right borderless-count">
                <div className="borderless-content">
                  <h2>27.</h2>
                  <h3>Offices Worldwide</h3>
                  <a href="">Locations</a>
                </div>
                <div className="borderless-content">
                  <h2>1200+</h2>
                  <h3>Memebers</h3>
                  <a>Careers</a>
                </div>
                <div className="borderless-content">
                  <h2>2200+</h2>
                  <h3>Cases delivered</h3>
                  <a href="">Cases</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="borderless-right-bottom-image">
              <img src={`images/borderless-img-3.png`} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="news-block">
          <div className="header-block">
            <h2>Latest news.</h2>
            <Link to="/">See all news</Link>
          </div>
          <div className="news-list">
            {data.latestNews.edges.map((edge) => {
              return (
                <a href="" className="news-item news-latest">
                  <div className="news-item-details">
                    <time>{edge.node.publishedDate}</time>
                    <h3>{edge.node.title}</h3>
                    <p>{edge.node.description}</p>
                  </div>
                  <div className="news-item-image">
                    <img src={edge.node.thumbnail.file.url} alt="" />
                  </div>
                </a>
              )
            })}
            {data.allNews.edges.map((edge) => {
              return (
                <a href="" className="news-item">
                  <time>{edge.node.publishedDate}</time>
                  <h3>{edge.node.title}</h3>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage