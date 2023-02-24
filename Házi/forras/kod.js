function menetidoSzamol() {
    let megallo1 = document.getElementById("megallo1").value;
    let megallo2 = document.getElementById("megallo2").value;

    let menetido = window.open("", "MsgWindow", "width=200,height=100");
    if (megallo1 != megallo2) {
       menetido.document.write("Menetido:" + (megallo2-megallo1) + "perc.");
    }
    else if(megallo1==megallo2){
        menetido.document.write("Hiba: Azonos megállókat választott ki!");

    }
}