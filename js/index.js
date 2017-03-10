window.onload = function(){
  var shopClass_item = document.querySelectorAll('.shopClass_item');
  var shopClass_list = document.querySelectorAll('.shopClass_list');
  for(var i =0; i < shopClass_item.length; i++){
    showClass(i);
  }
  function showClass(index){
    shopClass_item[index].onmouseover = function(){
      shopClass_list[index].style.display = 'block';
    }
    shopClass_item[index].onmouseout = function(){
      shopClass_list[index].style.display = 'none';
    }
  }
}