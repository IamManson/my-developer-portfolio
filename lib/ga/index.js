// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', G-L8DPRDNRTJ, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }