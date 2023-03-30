window.onload=function(){
    const input = document.getElementById("myInput").addEventListener("blur", function() {
        document.addEventListener("keydown", myInputFunction);
    });
    }
    const myInputFunction = function(event) {
      const input = document.getElementById("myInput");
      if (event.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    
      } else if (event.key !== "Meta"&&event.key !== "Enter"&&event.key !== "Dead" && event.key !== "Shift" && event.key !== "CapsLock" && event.key !== "Control" && event.key !== "Alt" && event.key !== "Escape" && event.key !== "Tab" && event.key !== "ControlZ" && event.key !== "ControlX" && event.key !== "ControlC" && event.key !== "ControlA")
      {
        input.value += event.key;
      }
    };
    document.addEventListener("keydown", myInputFunction);
     
    function disable(){
        document.removeEventListener("keydown", myInputFunction);
    
    } 
    