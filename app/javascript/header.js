const header_select = () => {
  const category = document.getElementById('category')
  const category2 = document.getElementById('category2')
  const category3 = document.getElementById('category3')
  const category4 = document.getElementById('category4')
  
  category.addEventListener('mouseover', function(){
    category.style.border = "solid 1px white"
  })
  category.addEventListener('mouseout', function(){
    category.style.border = ""
  })

  category2.addEventListener('mouseover', function(){
    category2.style.border = "solid 1px white"
  })
  category2.addEventListener('mouseout', function(){
    category2.style.border = ""
  })

  category3.addEventListener('mouseover', function(){
    category3.style.border = "solid 1px white"
  })
  category3.addEventListener('mouseout', function(){
    category3.style.border = ""
  })

  category4.addEventListener('mouseover', function(){
    category4.style.border = "solid 1px white"
  })
  category4.addEventListener('mouseout', function(){
    category4.style.border = ""
  })
}



window.addEventListener("load", header_select)