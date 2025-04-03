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
    let person = prompt("Please enter your name (max 20 characters):");
    
    if (person == null || person.trim() === "") {
      text = "Speletajs_132";
    } else {
      text = person.substring(0, 20); 
    }
    document.getElementById("alert").innerHTML = text;
    