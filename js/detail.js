window.onload = function(){
  var class_title = document.getElementById('class_title');
  var shopClass_show = document.querySelector('.shopClass_show');
  class_title.onmouseover = function(){
    shopClass_show.style.display = 'block';
    shopClass_show.onmouseover = function(){
      this.style.display = 'block';
    }
    shopClass_show.onmouseout = function(){
      this.style.display = 'none';
    }
    this.onmouseout = function(){
      shopClass_show.style.display = 'none';
    }
  }
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


  var pic = document.getElementById('pic');
  var mag = document.getElementById('magnifier');
  var show = document.getElementById('show_pic');
  var pic_big = document.getElementById('pic_big');
  var bi = document.getElementById('big');
  var left = show.offsetLeft;
  var top = show.offsetTop;
  var m_left,m_top;
  var mag_width = parseInt(getStyle(mag,'width'));
  var mag_height = parseInt(getStyle(mag,'height'));
  var pic_width = pic.offsetWidth;
  var pic_height = pic.offsetHeight;
  pic.onmouseover = function(e){
    e.stopPropagation();
    m_left =e.clientX - left;
    m_top =e.clientY - top;
    if(m_left>=mag_width/2 && m_left<=pic_width-mag_width/2){
      mag.style.left = (m_left-mag_width/2)+"px";
    }else if(m_left<mag_width/2){
      mag.style.left = '0px';
    }else{
      mag.style.left = (pic_width-mag_width)+'px';
    }
    if(m_top>=mag_height/2 && m_top<=(pic_height-mag_height/2)){
      mag.style.top = (m_top-mag_height/2)+"px";
    }else if(m_top<mag_height/2){
      mag.style.top = '0px';
    }else{
      mag.style.top = (pic_height-mag_height)+'px';
    }
    mag.style.display = 'block';
    pic_big.style.display = 'block';
  }
  pic.onmouseout = function(){
    mag.style.display = 'none';
    pic_big.style.display = 'none';
  }
  mag.onmouseover = function(e){
    this.onmousemove = function(e){
      var mag_left = mag.offsetLeft;
      var mag_top = mag.offsetTop;
      var posX = e.clientX-mag_left-left;
      var posY = e.clientY-mag_top-top;
      var new_left = mag_left+posX-mag_width/2;
      var new_top = mag_top+posY-mag_height/2;
      if(new_left>=0&&new_left<=pic_width-mag_width){
        mag.style.left = new_left+"px";
      }else if(new_left<=0){
        mag.style.left = '0px';
      }else if(new_left>=(pic_width-mag_width)){
        mag.style.left = (pic_width-mag_width)+'px';
      }
      if(new_top>=0&&new_top<=pic_height-mag_height){
        mag.style.top = new_top+"px";
      }else if(new_top<=0){
        mag.style.top = '0px';
      }else if(new_top>=(pic_height-mag_height)){
        mag.style.top = (pic_height-mag_height)+'px';
      }

      moveBig();
    }
  }
  function moveBig(){
    var mag_left = mag.offsetLeft;
    var mag_top = mag.offsetTop;
    var newBi_left = Math.ceil(mag_left*20/9);
    var newBi_top = Math.ceil(mag_top*20/9);
    bi.style.left = -newBi_left+'px'; 
    bi.style.top =  -newBi_top+'px';
  }
  function getStyle(obj,attr){
    if(obj.currentStyle){
      return obj.currentStyle[attr];
    }else{
      return getComputedStyle(obj,false)[attr];
    }
  }

  var thums_nav = document.getElementById('thums_nav');
  var oLi = thums_nav.getElementsByTagName('li');
  var normal = document.getElementById('normal');
  var big = document.getElementById('big');
  for(var i = 0; i < oLi.length; i++){
    oLi[i].index = i;
    oLi[i].onmouseover= function(){
      for (var i = oLi.length - 1; i >= 0; i--) {
        oLi[i].removeAttribute('class');
      }
      this.setAttribute('class','active')
      changePic(this.index);
    }
  }
  function changePic(index){
    normal.setAttribute('src','images/products/product01/normal/0'+(index+1)+'.jpg')
    big.setAttribute('src','images/products/product01/big/0'+(index+1)+'.jpg')
  } 

  var pro_intro = document.getElementById('pro_intro');
  var comment = document.getElementById('comment');
  var product_intro = document.getElementById('product_intro');
  pro_intro.onclick = function(){
    var classValue = this.getAttribute('class');
    this.setAttribute('class',classValue+' active');
    comment.removeAttribute('class');
    comment.setAttribute('class',classValue);
    product_intro.style.display = 'block';
  }
  comment.onclick = function(){
    var classValue = this.getAttribute('class');
    this.setAttribute('class',classValue+' active');
    pro_intro.removeAttribute('class');
    pro_intro.setAttribute('class',classValue);
    product_intro.style.display = 'none';
  }
}