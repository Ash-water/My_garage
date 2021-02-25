const selection = () => {

  const select1 = document.getElementById("select1")
  select1.addEventListener('mouseover', function(){
    select1.classList.remove('toplist');
    select1.classList.add('toplist2');
  })
  select1.addEventListener('mouseout', function(){
    select1.classList.remove('toplist2');
    select1.classList.add('toplist')
  })

  const select2 = document.getElementById("select2")
  select2.addEventListener('mouseover', function(){
    select2.classList.remove('toplist');
    select2.classList.add('toplist2');
  })
  select2.addEventListener('mouseout', function(){
    select2.classList.remove('toplist2');
    select2.classList.add('toplist');
  })

  const select3 = document.getElementById("select3")
  select3.addEventListener('mouseover', function(){
    select3.classList.remove('toplist');
    select3.classList.add('toplist2');
  })
  select3.addEventListener('mouseout', function(){
    select3.classList.remove('toplist2');
    select3.classList.add('toplist');
  })

  const select4 = document.getElementById("select4")
  select4.addEventListener('mouseover', function(){
    select4.classList.remove('toplist');
    select4.classList.add('toplist2');
  })
  select4.addEventListener('mouseout', function(){
    select4.classList.remove('toplist2');
    select4.classList.add('toplist');
  })
}
window.addEventListener("load", selection)