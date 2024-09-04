function letMeLaugh() {
	fetch("translation_multinlingue.json")
		
		.then((data) => data.json())
		
		.then((res) => {
			console.log(res);
			 
			localStorage.setItem("avatar", res.icon_url);
			results.innerHTML = `
         <img src=${res.icon_url} alt="Avatar de Chuck" />
         <p>${res.value}</p>
         `;
		});
    }
     btn.addEventListener("click", letMeLaugh);