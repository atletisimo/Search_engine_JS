const search=()=>{
  const search_box=document.getElementById("search-item").value.toUpperCase();
  const storeItems=document.querySelectorAll(".product-list");
  const product=document.querySelectorAll(".product");
  const pname=storeItems.getElementsByTagName("h2");
  for (let i=0;i<pname.length;i++){
    let match=product[i].getElementsByTagName("h2")[0];
    if(match){
    let textvalue=  match.textContent || match.innerHTML
if(textvalue.toUpperCase().indexOf(search_box)>-1){
  product[i].getElementsByClassName.display="";
}else{
  product[i].getElementsByClassName.display='none';
}
    }
  }
}
