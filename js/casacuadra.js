$(document).ready(function(){
  permissionCut();
  panelControl(".openBtn",".closeBtn");
  popupControl(".openPop",".closePop");
  selectComponent();
  funcName();
  sliderfunc();
  quantityComponent("#shoppingBag #countNumb",".countMinus",".countPlus" ,"#totalPrice");
});
function permissionCut(){
  $(".beforeIndex a").click(function(){
      $("#loginPopup").addClass("active");
  });
  $("#loginPopup input.closeBtn").click(function(){
      $("#loginPopup").removeClass("active");
  });
}
function panelControl(openBtn,closeBtn){
  var currentTarget = null;
  $(openBtn).click(function(){
    currentTarget = "#" + $(this).attr("data-target");
    $(currentTarget).addClass("active");
    $("#hideCon").hide();
    $("header").hide();
  });
  $(closeBtn).click(function(){
    $(currentTarget).removeClass("active");
    $("#hideCon").show();
    $("header").show();
  });
};
function popupControl(openBtn,closeBtn){
  var currentTarget = null;
  $(openBtn).click(function(){
    currentTarget = "#" + $(this).attr("data-popup");
    $(currentTarget).addClass("active");
  });
  $(closeBtn).click(function(){
    $(currentTarget).removeClass("active");
  });
}
function selectComponent(){
  $(".selectBox li").click(function(){
    $(".selectBox").toggleClass("active");
    $(".selectBox li").removeClass("active");
    $(this).addClass("active");
  });
}
function funcName(){
  $('#hideBox').click(function(){
    $(this).hide();
    $(".selBox_group").slideDown();
})
}
function sliderfunc(){
  $('.bxslider').bxSlider({
    pagerCustom: ".thumbPager"
  });
}

function quantityComponent(target, minus, plus, price){
  var orderField = $(target);
  var orderCount = $(orderField).val();
  var productPrice = Number($(price).val());
  var totalPrice = $(price);
  $(minus).click(function(){
      orderCount --;
      if(orderCount <= 1){
          orderCount = 1;
      }
      orderField.val(orderCount);
      $(totalPrice).val(productPrice * orderCount);
  });
  $(plus).click(function(){
      orderCount ++;
      if(orderCount >= 99){
          orderCount = 99;
      }
      orderField.val(orderCount);
      $(totalPrice).val(productPrice * orderCount);
  });
}