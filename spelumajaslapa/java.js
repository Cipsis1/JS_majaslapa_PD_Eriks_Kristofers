function laiks(){
    const now = new Date();
    const formatetsLaiks = now.getFullYear() + "-" +
    String(now.getMonth()+1).padStart(2, '0') + "-" +
    String(now.getDate()).padStart(2, '0')+ " " +
    String(now.getHours()).padStart(2, '0')+ ":" +
    String(now.getMinutes()).padStart(2, '0')+ ":" +
    String(now.getSeconds()).padStart(2, '0');
   
    document.getElementById("laiks").textContent = formatetsLaiks;
  }
   
  laiks();
  setInterval(laiks,1000)
 

    let text;
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
      text = "Speletajs_132";
    } else {
      text =  person ;
    }
    document.getElementById("alert").innerHTML = text;
  