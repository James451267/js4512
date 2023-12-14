function protectpasscode() {
  const result = document.getElementById("code").value;
  const passcode = ["00999533", "name"];
  const falsepass = ["password", "idoit", "1234"];
  const form = ["suggest", "suggestion", "add", "new"];
  const paradise = ["paradise", "enter", "door", "doors", "Enter", "fun"]
  
  if (result === "") {
    alert("Type passcode");
  } else {
    if (result === passcode) {
      document.write("<h1>Welcome</h1>");
      alert("Passcode is correct.");
      window.location.assign("https://js6710.w3spaces.com/home.html");
    } else {
      if (falsepass.includes(result)) {
        alert("Correct");
        document.write("<h1>Welcome</h1>");
        window.location.assign("https://tinyurl.com/idoitcom");
      } else {
        if (result === "random") {
        alert("???");
      } else
      if (result === form) {
        alert("Want to add something?");
        window.location.assign("https://forms.gle/TjvbsQhwVtw1bCzh8");
      } else
      if (result === paradise) {
        alert("Paradise");
        window.location.assign("1092paradise.com");
      } else
      if (result === "star") {
        alert("You are small and insignificant");
        window.location.assign("https://stars.chromeexperiments.com/");
      } else{
        if (result === "sky") {
        alert("0");
        window.location.assign("https://www.skywaybridge.com/home.htm");
      } else
      if (result === "list") {
        alert("Enter");
        window.location.assign("https://js6710.w3spaces.com/list.txt");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
      if (result === "e") {
        alert("0");
        window.location.assign("0");
      } else
        alert("Incorrect username or password");
        location.reload();
      }
    }
  }
}
}