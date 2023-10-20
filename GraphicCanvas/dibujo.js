const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

// Fondo
ctx.fillStyle = "rgb(128, 0, 0)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgb(128, 0, 0)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Terreno 
ctx.fillStyle = "rgb(102, 153, 0)";
ctx.beginPath();
ctx.moveTo(0, canvas.height / 1.5);
ctx.lineTo(canvas.width, canvas.height / 1.5);
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgb(102, 153, 0)";
ctx.beginPath();
ctx.moveTo(0, canvas.height / 1.5);
ctx.lineTo(canvas.width, canvas.height / 1.5);
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.closePath();
ctx.fill();

// Casa 
ctx.fillStyle = "rgb(77, 51, 25)";
ctx.fillRect(240, 190, 130, 100);

// Techo
ctx.fillStyle = "rgb(153, 92, 0)";
ctx.beginPath();
ctx.moveTo(220, 190);
ctx.lineTo(390, 190);
ctx.lineTo(305, 120);
ctx.closePath();
ctx.fill();

// Puerta 
ctx.fillStyle = "rgb(77, 25, 25)";
ctx.fillRect(325, 220, 40, 70);

// Circulo
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(333, 260, 3, 0, Math.PI * 2, true);
ctx.fill();

// Ventana
ctx.fillStyle = "rgb(0, 107, 179)";
ctx.fillRect(250, 220, 60, 40, Math.PI * 2);

// Rectangulos
ctx.fillStyle = "black";
ctx.fillRect(250, 240, 60, 1);
ctx.fillStyle = "black";
ctx.fillRect(280, 220, 1, 40);

// Luna
ctx.fillStyle = "whitesmoke";
ctx.beginPath();
ctx.arc(200, 70, 45, 0, Math.PI * 2, true);
ctx.fill();

// Nubes
ctx.fillStyle = "rgb(50, 50, 50)";
ctx.beginPath();
ctx.arc(80, 100, 30, 0, Math.PI * 2, true);
ctx.arc(120, 100, 30, 0, Math.PI * 2, true);
ctx.arc(160, 100, 30, 0, Math.PI * 2, true);
ctx.arc(120, 80, 35, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "rgb(50, 50, 50)";
ctx.beginPath();
ctx.arc(235, 80, 30, 0, Math.PI * 2, true);
ctx.arc(270, 80, 30, 0, Math.PI * 2, true);
ctx.arc(310, 80, 30, 0, Math.PI * 2, true);
ctx.arc(274, 60, 35, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();

// Arbol
ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(30, 250);
ctx.lineTo(90, 250);
ctx.lineTo(60, 200);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgb(77, 25, 25)";
ctx.fillRect(49, 250, 22, 35);
