(function () {
	//VARIABLE DECLARATION
	var uStatePaths, offers, offersCoordinates, offersData, legend, urlObj, uStates;

	//VARIABLE INSTANTIATION
	offersData = [];
	legend = ["zillow offers", "opendoor", "offerpad", "knock"]
	urlObj = {
		mapdata: "assets/api/us-map-data.json",
		offersdata: "assets/api/offers-data.json",
		coordinatesdata: "assets/api/coordinates-data.json"
	}
	uStates = {};
	this.uStates = uStates;
	initMap()

	uStates.draw = function (id, data) {
		createSvgGroup(id, data);
		addOffersLabels(id, offersData[1].opendoor, "opendoor", 12.5, "value-opendoor");
		addOffersLabels(id, offersData[0].zillowoffers, "zillowoffers", 13, "value-zillowoffers");
		addOffersLabels(id, offersData[3].knock, "knock", 12, "value-knock");
		addOffersLabels(id, offersData[2].offerpad, "offerpad", 11, "value-offerpad");
		creatLegend(id)
	}

	function initMap() {
		getMapData(urlObj)
			.then(function () {
				manipulateOffersData()
				uStates.draw("#statesvg", uStatePaths);
			})
	}
	function createSvgGroup(id, data) {

		d3.select(id).selectAll("g")
			.data(data).enter().append("g")
			.append("path")
			.attr("class", "state")
			.attr("d", function (d) { return d.d; })
			.style("fill", "#ebeff2")
		d3.select(id).selectAll("g").append("svg:text").text(function (d) { return d.id })
			.attr("class", function (d) { return "label-" + d.id })
			.attr("x", function (d, i) { return d.c.x })
			.attr("y", function (d, i) { return d.c.y })
			.attr("text-anchor", "middle")
	}

	function addOffersLabels(id, data, labelClass, r, valuesLabels) {
		d3.select(id).selectAll(labelClass)
			.data(data).enter()
			.append("circle")
			.attr("class", labelClass)
			.attr("cx", function (d, i) { return d.x || getOfferLabelCoordsByStateLabel(d.state).x; })
			.attr("cy", function (d, i) { return d.y || getOfferLabelCoordsByStateLabel(d.state).y })
			.attr("r", function (d, i) { return r })

		d3.select(id).selectAll(valuesLabels)
			.data(data).enter()
			.append("text")
			.text(function (d) { return d.value })
			.attr("class", valuesLabels)
			.attr("x", function (d, i) { return d.x || getOfferLabelCoordsByStateLabel(d.state).x })
			.attr("y", function (d, i) { return 4 + (d.y || getOfferLabelCoordsByStateLabel(d.state).y) })
			.attr("text-anchor", "middle")

	}

	function creatLegend(id) {
		d3.select(id).selectAll("legend")
			.data(legend).enter().append("g")
			.attr("class", "legend")
			.append("circle")
			.attr("class", function (d, i) { return d.replace(" ", "") })
			.attr("cx", function (d, i) { return 700 })
			.attr("cy", function (d, i) { return 30 + 15 * i })
			.attr("r", function (d, i) { return 4 })

		d3.select(id).selectAll("legend-labels")
			.data(legend).enter()
			.append("text")
			.attr("class", "legend-labels")
			.text(function (d) { return d.charAt(0).toUpperCase() + d.slice(1) })
			.attr("x", function (d, i) { return 715 })
			.attr("y", function (d, i) { return 34 + 15 * i })
	}

	function getOfferLabelCoordsByStateLabel(state) {

		var labelCoords = uStatePaths.find(function (uStatePath) {
			return uStatePath.id === state;
		})['c'];

		return {
			x: labelCoords.x,
			y: labelCoords.y + 20
		}
	}

	function manipulateOffersData() {
		offers.forEach(item => {
			var offerItems = item[Object.keys(item)]
			var offerMatch = offersCoordinates.find(e => {
				return Object.keys(item)[0] === Object.keys(e)[0]
			});
			var offerMatchArr = offerMatch[Object.keys(offerMatch)]
			var stateMatch = null;

			offerItems.forEach(e => {
				stateMatch = offerMatchArr.find(d => {
					return e.state === d.state
				})

				if (stateMatch) {
					stateMatch.value = e.value
				} else {
					offerMatchArr.push(e)
				}

			})
			offerMatchArr.forEach(d => {
				if (!d.hasOwnProperty('value')) {
					var index = offerMatchArr.indexOf(d)
					offerMatchArr.splice(index, 1)
				}
			})
			offersData.push(offerMatch)


		})
	}

	function getMarkerData(url) {
		return fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				return result
			})
			.catch(error => console.error('Error:', error));

	}

	function getMapData(urlObj) {
		return fetch(urlObj.mapdata)
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				uStatePaths = result
			})
			.then(function () {
				return Promise.all([getMarkerData(urlObj.offersdata), getMarkerData(urlObj.coordinatesdata)])
					.then((value) => {
						offers = value[0];
						offersCoordinates = value[1];
					})
			})

			.catch(error => console.error('Error:', error));
	}
})();



