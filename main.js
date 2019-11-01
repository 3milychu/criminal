var what = new Audio('audio/what.mp3')
	ok = new Audio('audio/ok.mp3')
	unfair = new Audio('audio/unfair.mp3')
	sounds_good = new Audio('audio/soundsgood.mp3')
	bueno = new Audio('audio/bueno.mp3')
	pobre = new Audio('audio/pobre.mp3')
	keyi = new Audio('audio/keyi.mp3')
	kewu = new Audio('audio/kewu.mp3')
	criminal = new Audio('audio/criminal.mp3')

d3.csv('data/propublica.csv')
	.then(function(data){
		console.log(data)
		drawPeople(data)
		play_button = document.querySelector('#play')
		play_button.onclick=function(){
			console.log('click')
			play_button.style.display="none";
			sonify(data);
		}
	})
	.catch(function(error){

	})


function playVerdict(data, counter){

	if (data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="1"){
		criminal.currentTime = 0;
		criminal.play();
	}

	if (data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1"){
		criminal.currentTime = 0;
		criminal.play();
	}

	if (data[counter]['African_American'] =="0" && data[counter]['Asian']=="0" && data[counter]['Native_American']=="0" && data[counter]['Other']=="0") {
		if(data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1"){
			// sounds_good.currentTime = 0;
			// sounds_good.play();
		}
		if(data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="0"){
			// sounds_good.currentTime = 0;
			// sounds_good.play();
		}
		if(data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="0"){
			unfair.currentTime = 0;
			unfair.play();
		}

	} else {
		if (data[counter]['African_American']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1") {
			// ok.currentTime = 0;
			// ok.play();
		} else if (data[counter]['Asian']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1"){
			keyi.currentTime = 0;
			keyi.play();
		} else if (data[counter]['Hispanic']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1"){
			bueno.currentTime = 0;
			bueno.play();
		} else if (data[counter]['Native_American']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1"){
			
		} else if (data[counter]['Other']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="1"){
			// sounds_good.currentTime = 0;
			// sounds_good.play();
		} else if (data[counter]['African_American']=="1" && data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="0") {
			// ok.currentTime = 0;
			// ok.play();
		} else if (data[counter]['Asian']=="1" && data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="0"){
			keyi.currentTime = 0;
			keyi.play();
		} else if (data[counter]['Hispanic']=="1" && data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="0"){
			bueno.currentTime = 0;
			bueno.play();
		} else if (data[counter]['Native_American']=="1" && data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="0"){
			
		} else if (data[counter]['Other']=="1" && data[counter]['score_factor']=="0" && data[counter]['Two_yr_Recidivism']=="0"){
			// sounds_good.currentTime = 0;
			// sounds_good.play();
		} else if (data[counter]['African_American']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="0"){
			what.currentTime = 0;
			what.play();
		} else if (data[counter]['Asian']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="0"){
			kewu.currentTime = 0;
			kewu.play();
		} else if (data[counter]['Hispanic']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="0"){
			pobre.currentTime = 0;
			pobre.play();
		} else if (data[counter]['Native_American']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="0"){

		} else if (data[counter]['Other']=="1" && data[counter]['score_factor']=="1" && data[counter]['Two_yr_Recidivism']=="0"){
			unfair.currentTime = 0;
			unfair.play();
		}
	}
}

function playPriors(data, counter){
	if (data[counter]['Number_of_Priors']<8){
		bin1 = new Audio('audio/bin1.mp3')
		bin1.play()
	} else if (data[counter]['Number_of_Priors']>=8 && data[counter]['Number_of_Priors']<16) {
		bin2 = new Audio('audio/bin2.mp3')
		bin2.play()
	} else if (data[counter]['Number_of_Priors']>=16 && data[counter]['Number_of_Priors']<24) {
		bin3 = new Audio('audio/bin3.mp3')
		bin3.play()
	} else if (data[counter]['Number_of_Priors']>=24 && data[counter]['Number_of_Priors']<32) {
		bin4 = new Audio('audio/bin4.mp3')
		bin4.play()
	} else if (data[counter]['Number_of_Priors']>=32 && data[counter]['Number_of_Priors']<40) {
		bin5 = new Audio('audio/bin5.mp3')
		bin5.play()
	}
}

function playFelonies(data,counter){
	if(data[counter]['Misdemeanor']=="0"){
		felony = new Audio('audio/felony.mp3')
		felony.play()
	}
}

function playFemale(data,counter){
	if(data[counter]['Female']=="1"){
		female = new Audio('audio/female.mp3')
		female.play()
	}
}

function sonify(data){
	var counter = -1;
	setInterval(function() {
		if(counter<6172){
			counter++
			container = document.querySelector('#track1')
			person = document.querySelector('#person'+counter)
			hover(person)
			target=person.offsetLeft - window.innerWidth/2;
			container.scrollTo({
			  left: target,
			  behavior: 'smooth'
			});
			playVerdict(data,counter)
			playPriors(data, counter)
			playFelonies(data,counter)
			playFemale(data,counter)
			// console.log(data[counter])
			// setTimeout(function() {
			// 	animatethis($('#track1'), 10000);
			// },1500)
			}


	},808)
}

function animatethis(targetElement, speed) {
    var scrollWidth = $(targetElement).get(0).scrollWidth;
    var clientWidth = $(targetElement).get(0).clientWidth;
    $(targetElement).animate({ scrollLeft: scrollWidth},
    {	easing: 'linear',
        duration: speed,
        complete: function () {
            targetElement.animate({ scrollLeft: 0 },
            {	easing: 'linear',
                duration: speed,
                complete: function () {
                    animatethis(targetElement, speed);
                }
            });
        }
    });
};


function hover(element){
	element.style.borderBottom='#CCCCCC 1em solid'
	tooltip = element.querySelector('.tooltip')
	tooltip.style.opacity="1"
}

function drawPeople(data){
	target = document.querySelector('#track1')
	for(i=0;i<data.length;i++){
		holder = document.createElement('div')
		holder.setAttribute('class','holder')
		person = document.createElement('div')
		var race;
		if (data[i]['African_American']=="1"){
			race = 'aa'
		} else if (data[i]['Asian']=="1"){
			race = 'as'
		} else if (data[i]['Hispanic']=="1"){
			race = 'his'
		} else if (data[i]['Native_American']=="1"){
			race = 'na'
		} else if (data[i]['Other']=="1") {
			race = 'other'
		} else {
			race = 'w'
		}
		var predicted;
		var actual;
		tooltip = document.createElement('div')
		tooltip.setAttribute('class','tooltip')
		if (data[i]['score_factor']=='0'){
			predicted = "<div class='noreoffend'>Will not reoffend</div>"
		} else {
			predicted = "<div class='reoffend'>Will reoffend</div>"
		}
		if (data[i]['Two_yr_Recidivism']=='0'){
			actual = "<div class='noreoffend'>Did not reoffend</div>"
		} else {
			actual = "<div class='reoffend'>Did reoffend</div>"
		}
		person.innerHTML="<div class='priors'><h3>"+data[i]['Number_of_Priors']+"</h3></div>"
		tooltip.innerHTML='<item>Predicted '+ predicted + '</item><br><item>Actual ' + actual + '</item>';
		holder.appendChild(tooltip)
		holder.setAttribute('id','person'+i)
		person.setAttribute('class',race)
		holder.appendChild(person)
		target.appendChild(holder)
	}
}