const show_description = () => {
  const artworks1 = document.getElementById('artworks1')
  const artworks2 = document.getElementById('artworks2')
  const artworks3 = document.getElementById('artworks3')
  document.getElementById('bottles-desc').style.display = "none"
  document.getElementById('pictweet-desc').style.display = "none"
  document.getElementById('FURIMA-desc').style.display = "none"
  document.getElementById('close-btn').style.display = "none"
  const btn = document.getElementById('close-btn')

  artworks1.addEventListener('click', function(){
    document.getElementById('bottles-desc').style.display = "none"
    document.getElementById('pictweet-desc').style.display = "none"
    document.getElementById('FURIMA-desc').style.display = "none"
    document.getElementById('close-btn').style.display = "none"
    document.getElementById('bottles-desc').style.display = "block"
    document.getElementById('close-btn').style.display = "block"
  })
  btn.addEventListener('click', function(){
    document.getElementById('bottles-desc').style.display = "none"
    document.getElementById('close-btn').style.display = "none"
  })

  artworks2.addEventListener('click', function(){
    document.getElementById('bottles-desc').style.display = "none"
    document.getElementById('pictweet-desc').style.display = "none"
    document.getElementById('FURIMA-desc').style.display = "none"
    document.getElementById('close-btn').style.display = "none"
    document.getElementById('pictweet-desc').style.display = "block"
    document.getElementById('close-btn').style.display = "block"
  })
  btn.addEventListener('click', function(){
    document.getElementById('pictweet-desc').style.display = "none"
    document.getElementById('close-btn').style.display = "none"
  })

  artworks3.addEventListener('click', function(){
    document.getElementById('bottles-desc').style.display = "none"
    document.getElementById('pictweet-desc').style.display = "none"
    document.getElementById('FURIMA-desc').style.display = "none"
    document.getElementById('close-btn').style.display = "none"
    document.getElementById('FURIMA-desc').style.display = "block"
    document.getElementById('close-btn').style.display = "block"
  })
  btn.addEventListener('click', function(){
    document.getElementById('FURIMA-desc').style.display = "none"
    document.getElementById('close-btn').style.display = "none"
  })
  
  

}



window.addEventListener("load", show_description)