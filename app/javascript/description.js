const show_app = () => {

  const bottles = document.getElementById('bottles')
  const pictweet = document.getElementById('pictweet')
  const FURIMA = document.getElementById('FURIMA')
  
  const show_b = document.getElementById('show-app1')
  const show_p = document.getElementById('show-app2')
  const show_f = document.getElementById('show-app3')
  
  bottles.addEventListener('click', function(){
    if (this.getAttribute("style") == "border-bottom: solid 1px white;") {
      this.removeAttribute("style", "border-bottom: solid 1px white;")
    } else {
      this.setAttribute("style", "border-bottom: solid 1px white;")
    }

    if (pictweet.getAttribute("style") == "border-bottom: solid 1px white;") {
      pictweet.removeAttribute("style", "border-bottom: solid 1px white;")
    }

    if (FURIMA.getAttribute("style") == "border-bottom: solid 1px white;") {
      FURIMA.removeAttribute("style", "border-bottom: solid 1px white;")
    }

    if  (show_b.getAttribute("style") == "display:block;") {
      show_b.removeAttribute("style", "display:block;")
    } else {
      show_b.setAttribute("style", "display:block;")
    }

    if  (show_p.getAttribute("style") == "display:block;") {
      show_p.removeAttribute("style", "display:block;")
    }
    
    if  (show_f.getAttribute("style") == "display:block;") {
      show_f.removeAttribute("style", "display:block;")
    }
    
  })

  pictweet.addEventListener('click', function(){

    if (this.getAttribute("style") == "border-bottom: solid 1px white;") {
      this.removeAttribute("style", "border-bottom: solid 1px white;")
    } else {
      this.setAttribute("style", "border-bottom: solid 1px white;")
    }

    if (bottles.getAttribute("style") == "border-bottom: solid 1px white;") {
      bottles.removeAttribute("style", "border-bottom: solid 1px white;")
    }

    if (FURIMA.getAttribute("style") == "border-bottom: solid 1px white;") {
      FURIMA.removeAttribute("style", "border-bottom: solid 1px white;")
    }

    if  (show_p.getAttribute("style") == "display:block;") {
      show_p.removeAttribute("style", "display:block;")
    } else {
      show_p.setAttribute("style", "display:block;")
    }

    if  (show_b.getAttribute("style") == "display:block;") {
      show_b.removeAttribute("style", "display:block;")
    }

    if  (show_f.getAttribute("style") == "display:block;") {
      show_f.removeAttribute("style", "display:block;")
    } 

  })

  FURIMA.addEventListener('click', function(){

    if (this.getAttribute("style") == "border-bottom: solid 1px white;") {
      this.removeAttribute("style", "border-bottom: solid 1px white;")
    } else {
      this.setAttribute("style", "border-bottom: solid 1px white;")
    }

    if (bottles.getAttribute("style") == "border-bottom: solid 1px white;") {
      bottles.removeAttribute("style", "border-bottom: solid 1px white;")
    }

    if (pictweet.getAttribute("style") == "border-bottom: solid 1px white;") {
      pictweet.removeAttribute("style", "border-bottom: solid 1px white;")
    }

    if  (show_f.getAttribute("style") == "display:block;") {
      show_f.removeAttribute("style", "display:block;")
    } else {
      show_f.setAttribute("style", "display:block;")
    }

    if  (show_p.getAttribute("style") == "display:block;") {
      show_p.removeAttribute("style", "display:block;")
    }
    
    if  (show_b.getAttribute("style") == "display:block;") {
      show_b.removeAttribute("style", "display:block;")
    }

  })

}


window.addEventListener("load", show_app)