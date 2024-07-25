let days = prompt(" choisisser un jour de la semaine.");



if (days == "lundi"){
    document.write("demain on est mardie");
} else if(days == "mardi"){
    document.write("demain on est mercredi");
}else if(days == "mercredi"){
    document.write("demain on est jeudi");
}else if(days == "jeudi"){
    document.write("demain on est vendredi");
}else if(days == "vendredi"){
    document.write("demain on est samedie");
}else if(days == "samedie"){
    document.write("demain on est dimanche");
}else if(days == "dimanche"){
    document.write("demain on est lundi");
}else{
    document.write("false");
}
  // VERSION AVEC LE SWITCH
switch (userDay) {
	case "samedi":
		alert("Demain sera Dimanche");
		break;
	case "dimanche":
		alert("Demain sera Lundi");
		break;
	case "lundi":
		alert("Demain sera Mardi");
		break;
	case "mardi":
		alert("Demain sera Mercredi");
		break;
	case "mercredi":
		alert("Demain sera Jeudi");
		break;
	case "jeudi":
		alert("Demain sera Vendredi");
		break;
	case "vendredi":
		alert("Demain sera Samedi");
		break;
	default:
		alert("Entre un jour de la semaine valide");
}
  
