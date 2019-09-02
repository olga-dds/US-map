(function () {
		var allOffers = [
			{state: "HI",stateLabels:{x:289 ,y:546}},
			{state: "AK",stateLabels:{x:110 ,y:500}},
			{state: "FL",stateLabels:{x:770 ,y:505},offers:{opendoor:{value:124,x:742,y:487}}},
			{state: "SC",stateLabels:{x:762 ,y:370}},
			{state: "GA",stateLabels:{x:718 ,y:399},offers: {zillowoffers:{value:81,x:730,y:414},knock:{value:51,x:711,y:375}}},
			{state: "AL",stateLabels:{x:658 ,y:402},offers: {offerpad:{value:97,x:662,y:423}}},
			{state: "NC",stateLabels:{x:775 ,y:328},offers: {zillowoffers:{value:84,x:810,y:341}}},
			{state: "TN",stateLabels:{x:659 ,y:340}},
			{state: "RI",stateLabels:{x:877 ,y:170}},
			{state: "CT",stateLabels:{x:859 ,y:178}},
			{state: "MA",stateLabels:{x:874 ,y:158}},
			{state: "ME",stateLabels:{x:895 ,y:88}},
			{state: "NH",stateLabels:{x:866 ,y:140}},
			{state: "VT",stateLabels:{x:846 ,y:126}},
			{state: "NY",stateLabels:{x:815 ,y:154},offers: {offerpad:{value:9,x:760,y:172}}},
			{state: "NJ",stateLabels:{x:839 ,y:215}},
			{state: "PA",stateLabels:{x:785 ,y:209}},
			{state: "DE",stateLabels:{x:830 ,y:239}},
			{state: "MD",stateLabels:{x:804 ,y:240}},
			{state: "WV",stateLabels:{x:747 ,y:265}},
			{state: "KY",stateLabels:{x:672 ,y:301}},
			{state: "OH",stateLabels:{x:702 ,y:240},offers:{opendoor:{value:63,x:742,y:235}}},
			{state: "MI",stateLabels:{x:657 ,y:175}},
			{state: "WY",stateLabels:{x:299 ,y:180},offers: {offerpad:{value:74,x:344,y:157}}},
			{state: "MT",stateLabels:{x:280 ,y:87}, offers: {opendoor:{value:24,x:240,y:110}}},
			{state: "ID",stateLabels:{x:192 ,y:149},offers: {knock:{value:44,x:250,y:159}}},
			{state: "WA",stateLabels:{x:124 ,y:49}},
			{state: "DC",stateLabels:{x:804 ,y:248}},
			{state: "TX",stateLabels:{x:409 ,y:447}, offers: {zillowoffers:{value:99,x:528,y:478},offerpad:{value:12,x:421,y:505},knock:{value:12,x:305,y:426}}},
			{state: "CA",stateLabels:{x:70 ,y:265}, offers: {zillowoffers:{value:511,x:152,y:351},knock:{value:214,x:103,y:307}}},
			{state: "AZ",stateLabels:{x:200 ,y:363},offers: {offerpad:{value:157,x:180,y:360}}},
			{state: "NV",stateLabels:{x:140 ,y:235},offers: {offerpad:{value:25,x:140,y:200}}},
			{state: "UT",stateLabels:{x:223 ,y:255}},
			{state: "CO",stateLabels:{x:322 ,y:271}, offers: {zillowoffers:{value:12,x:350,y:285},opendoor:{value:52,x:286,y:267},knock:{value:10,x:376,y:305}}},
			{state: "NM",stateLabels:{x:302,y:369},offers: {zillowoffers:{value:73,x:352,y:390}}},
			{state: "OR",stateLabels:{x:105 ,y:125}},
			{state: "ND",stateLabels:{x:418 ,y:97}, offers: {knock:{value:23,x:435,y:110}}},
			{state: "SD",stateLabels:{x:417 ,y:164}},
			{state: "NE",stateLabels:{x:423 ,y:223}, offers: {opendoor:{value:16,x:454,y:208}}},
			{state: "IA",stateLabels:{x:525 ,y:213}},
			{state: "MS",stateLabels:{x:600 ,y:412},offers:{opendoor:{value:312,x:612,y:405}}},
			{state: "IN",stateLabels:{x:645 ,y:254}, offers: {knock:{value:95,x:632,y:222}}},
			{state: "IL",stateLabels:{x:597 ,y:259}, offers: {zillowoffers:{value:105,x:595,y:262}}},
			{state: "MN",stateLabels:{x:508 ,y:130}},
			{state: "WI",stateLabels:{x:576 ,y:151}, offers: {zillowoffers:{value:60,x:612,y:197}}},
			{state: "MO",stateLabels:{x:545 ,y:293},offers: {offerpad:{value:37,x:550,y:333}}},
			{state: "AR",stateLabels:{x:551 ,y:369}},
			{state: "OK",stateLabels:{x:460 ,y:359}, offers: {opendoor:{value:71,x:427,y:382},knock:{value:55,x:475,y:341}}},
			{state: "KS",stateLabels:{x:443,y:290}},
			{state: "LA",stateLabels:{x:553 ,y:449}},
			{state: "VA",stateLabels:{x:787 ,y:279}}
		 ]

				var sampleData ={};	/* Sample random data. */	
			["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
			"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
			"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
			"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
			"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
				.forEach(function(d){ 
					var stateoffers = allOffers.find(e=>{
						return e.state === d
					})
			
					if(stateoffers.hasOwnProperty('offers')){
						sampleData[d]={offers:stateoffers.offers,state:stateoffers.state,stateLabel:stateoffers.stateLabels}; 
					}
				});
			/* draw states on id #statesvg */	
			uStates.draw("#statesvg", sampleData);
			console.log(allOffers)
})();


