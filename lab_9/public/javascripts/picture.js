!function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=10)}({10:function(t,e){var n=document.location.href.split("/pictures/")[1].split("#")[0];function r(t,e,n){$.ajax({url:t,type:n,data:e})}$(document).ready(function(){$("#modalDelete").click(function(){r("/pictures/deletePicture",{id:n},"POST"),setTimeout(function(){document.location.href="/pictures"},400)}),$("#__save").click(function(){r("/pictures/renamePicture",{id:n,name:$("#changeName").val(),author:$("#changeAuthor").val(),date:$("#changeYear").val(),description:$("#changeDes").val(),inAuction:null,beginning_price:$("#changePrice_").val(),min_step:$("#changeMin_").val(),max_step:$("#changeMax_").val()},"PUT"),$("#td1").text($("#changeName").val()),$("#td2").text($("#changeAuthor").val()),$("#td3").text($("#changeYear").val()),$("#td4").text($("#changeDes").val()),""!=$("#changePrice_").val()&&($("#td5").text("Yes"),$("#td6").text($("#changePrice_").val()),$("#td7").text($("#changeMin_").val()),$("#td8").text($("#changeMax_").val()))}),$("#save").click(function(){r("/pictures/addInAuction",{id:n,inAuction:!0,beginning_price:$("#changePrice").val(),min_step:$("#changeMin").val(),max_step:$("#changeMax").val()},"PUT"),$("#addAuction").text("Remove from auction"),$("#addAuction").attr({form:"removePicFromAuc",href:"#modalRemovePic"}),$("#tab tr:last").after('<tr id="tr5"><td>Up for bidding?<td id="td5">Yes</tr><tr id="tr6"><td>Starting price<td id="td6">'+$("#changePrice").val()+'</tr><tr id="tr7"><td>Lowest bid<td id="td7">'+$("#changeMin").val()+'</tr><tr id="tr8"><td>Highest bid<td id="td8">'+$("#changeMax").val()+"</tr>")}),$("#removePicButton").click(function(){r("/pictures/removeFromAuction",{id:n},"PUT"),$("#tr5").remove(),$("#tr6").remove(),$("#tr7").remove(),$("#tr8").remove(),$("#addAuction").text("Add to auction"),$("#addAuction").attr({form:"addPicToAuc",href:"#modalAddPic"})})})}});