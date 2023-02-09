        const button = document.querySelector('button');
		const body = document.querySelector('body');
		const colors = //['Red','Voilet','Purple','Green','Grey','Orange','syan','Blue','yellow','Navyblue']
		['#fbcc74','#c1fb74','#7bfb74','#74fbb8','#74fbf6','#74d2fb','#74aafb',
		'#7484fb','#9274fb','#c774fb','#fb74f8','#fb74ce','#fb74b3','#fb749f','#fb7486','#fb7474']
		body.style.backgroundColor = '#43ff64d9'
		button.addEventListener('click',changebackground)
		function changebackground(){
		const colorIndex = parseInt(Math.random()*colors.length)
		body.style.backgroundColor = colors[colorIndex]
		}