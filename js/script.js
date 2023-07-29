if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var icon = document.getElementById("icon");
	
	icon.onclick = function(){
		document.body.classList.toggle("dark-theme");
		if(document.body.classList.contains("dark-theme")){
			icon.src="./assets/images/sun.png";
		}
		else{
			icon.src="./assets/images/moon.png"
		}
	}
