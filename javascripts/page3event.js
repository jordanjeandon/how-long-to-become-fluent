$(document).ready(function() {
  mixpanel.track("page3");

  var CurrentDate = new Date();
  CurrentDate.setMonth(CurrentDate.getMonth() + 2);
	var jours = new Array("DIMANCHE", "LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI");
	var mois = new Array("JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE", "JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE", "JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE", "JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE");

	var message = jours[CurrentDate.getDay()] + " ";   // nom du jour
   	message += CurrentDate.getDate() + " ";   // numero du jour
   	message += mois[CurrentDate.getMonth()] + " ";   // mois
   	message += CurrentDate.getFullYear();
  $('#dateOfFluency').html(message)
})

