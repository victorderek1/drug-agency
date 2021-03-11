function searchMe() {
  let searchBtn = document.getElementById('search');
  console.log(searchBtn);
  searchBtn.classList.remove("d-none");
  setTimeout(()=>{
    searchBtn.classList.add("d-none");
  },10000)

}
