import React,{ useState, useEffect } from 'react'

const useWindowScrollPosition = () => {
  const [scroll, setScroll] = useState({
    scrollX : 0,
    scrollY : 0
  })

  useEffect(() =>{
    window.addEventListener('scroll',updateScrollPosition)
  },[])

  const updateScrollPosition = () => {
    setScroll({
      scrollX : window.screenX,
      scrollY : window.scrollY
    })
  }
  return scroll
}

export default useWindowScrollPosition