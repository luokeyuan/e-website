window.onload = function(){
  var pic = document.getElementById('pic');
  var mag = document.getElementById('magnifier');
  var show = document.getElementById('show_pic');
  var pic_big = document.getElementById('pic_big');
  var bi = document.getElementById('big');
  var left = show.offsetLeft;
  var top = show.offsetTop;
  var m_left,m_top;
  var mag_width = mag.offsetWidth;
  var mag_height = mag.offsetHeight;
  var show_width = show.offsetWidth;
  var show_height = show.offsetHeight;
  pic.onmouseover = function(e){
    e.stopPropagation();
    m_left =e.clientX - left;
    m_top =e.clientY - top;
    if(m_left>=mag_width/2 && m_left<=(show_width-mag_width/2)){
      mag.style.left = (m_left-mag_width/2)+"px";
    }else if(m_left<mag_width/2){
      mag.style.left = '0px';
    }else{
      mag.style.left = (show_width-mag_width)+'px';
    }
    if(m_top>=mag_height/2 && m_top<=(show_height-mag_height/2)){
      mag.style.top = (m_top-mag_height/2)+"px";
    }else if(m_top<mag_height/2){
      mag.style.top = '0px';
    }else{
      mag.style.top = (show_width-mag_width)+'px';
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
      if(new_left>=0&&new_left<=(show_width-mag_width)){
        mag.style.left = new_left+"px";
      }else if(new_left<=0){
        mag.style.left = '0px';
      }else if(new_left>=(show_width-mag_width)){
        mag.style.left = (show_width-mag_width)+'px';
      }
      if(new_top>=0&&new_top<=(show_width-mag_width)){
        mag.style.top = new_top+"px";
      }else if(new_top<=0){
        mag.style.top = '0px';
      }else if(new_top>=(show_width-mag_width)){
        mag.style.top = (show_width-mag_width)+'px';
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
}