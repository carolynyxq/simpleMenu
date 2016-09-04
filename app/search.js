var arr=[
  {id:"F001",name:"香菇腊肠土豆焖饭",img:"001.jpg",img_lg:"001-lg.jpg"},
  {id:"F002",name:"蛋包饭",img:"002.jpg",img_lg:"002-lg.jpg"},
  {id:"F003",name:"香菇油饭",img:"003.jpg",img_lg:"003-lg.jpg"},
  {id:"F004",name:"香米红薯粥",img:"004.jpg",img_lg:"004-lg.jpg"},
  {id:"F005",name:"桃花泛",img:"005.jpg",img_lg:"005-lg.jpg"},
  {id:"F006",name:"皮蛋瘦肉粥",img:"006.jpg",img_lg:"006-lg.jpg"},
  {id:"F007",name:"生炒糯米饭",img:"007.jpg",img_lg:"007-lg.jpg"},
  {id:"F008",name:"腊肠煲仔饭",img:"008.jpg",img_lg:"008-lg.jpg"},
  {id:"F009",name:"原味大米戚风蛋糕",img:"009.jpg",img_lg:"009-lg.jpg"},
  {id:"F0010",name:"黑米大米粥",img:"010.jpg",img_lg:"010-lg.jpg"},
  {id:"F0011",name:"黄瓜爱心大米饼",img:"011.jpg",img_lg:"011-lg.jpg"},
  {id:"F0012",name:"山药香米粥",img:"012.jpg",img_lg:"012-lg.jpg"}
];
$(function(){
  $("#food").keyup(function(evt){
    var searchKwd=$("#food").val();
    var flag=0;
    $("#searchPop").empty();
    // if( $("#food").val() && evt.keyCode == "13")
    if( $("#food").val())
    {
      $.each(arr,function(index,obj){
        //console.log(typeof obj.name);
        var name=obj.name;
        if(name.indexOf(searchKwd)!=-1){
          //console.log(obj.name);
          flag=1;
          $("#searchPop").append("<a class='list-group-item' href='javascript:void(0);'>"+obj.name+"</a>");
        }
      });
      if(!flag){
        $("#searchPop").append("<li class='list-group-item'>暂未收录您所需菜品</li>");
      }
    }
  });
});