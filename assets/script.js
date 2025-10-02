// Factorial recursivo
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
function calcularFactorial() {
  const n = parseInt(document.getElementById("factorialInput").value);
  document.getElementById("resultadoFactorial").innerText =
    `Factorial(${n}) = ${factorial(n)}`;
}

// Fibonacci recursivo
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function calcularFibonacci() {
  const n = parseInt(document.getElementById("fibonacciInput").value);
  document.getElementById("resultadoFibonacci").innerText =
    `Fibonacci(${n}) = ${fibonacci(n)}`;
}

// Torres de Hanoi
function hanoi(n, from, to, aux, result) {
  if (n === 1) {
    result.push(`Mover disco de ${from} a ${to}`);
    return;
  }
  hanoi(n - 1, from, aux, to, result);
  result.push(`Mover disco de ${from} a ${to}`);
  hanoi(n - 1, aux, to, from, result);
}
function resolverHanoi() {
  const n = parseInt(document.getElementById("hanoiInput").value);
  let result = [];
  hanoi(n, "A", "C", "B", result);
  document.getElementById("resultadoHanoi").innerText = result.join("\n");
}

// Fractal - Triángulo de Sierpinski
function drawTriangle(ctx, x, y, size) {
  if (size < 10) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x - size / 2, y + size);
  ctx.closePath();
  ctx.stroke();

  drawTriangle(ctx, x, y, size / 2);
  drawTriangle(ctx, x - size / 2, y + size / 2, size / 2);
  drawTriangle(ctx, x + size / 2, y + size / 2, size / 2);
}

function dibujarFractal() {
  const canvas = document.getElementById("canvasFractal");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTriangle(ctx, 250, 10, 480);
}
