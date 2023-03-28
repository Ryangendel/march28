
const area = {
  element: document.getElementById('area'), //<div id="area"></div>
  width: 800,
  height: 400,
};

//No need to change the following code
//The initialize function creates the area div on the Html page
function initialize() {
 
  area.element.style.width = area.width + 'px'; //600px <div id="area" width:"600px"></div>
  area.element.style.height = area.height + 'px';//400px
  area.element.src = "https://media-be.chewy.com/wp-content/uploads/2021/06/02112123/American-Bulldog_Featured-Image.jpg"
  // area.element.style.banana = area.height + 'px';//400px
  // document.body.appendChild(area.element);
}

// No need to change the following code
// The moveTo function moves a given ball to a set x and y coordinates on the page
function moveTo(ball, x, y) {
  ball.element.style.marginLeft = x + 'px';
  ball.element.style.marginTop = y + 'px';
}

// No need to change the following code
// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {//40 //400px 360px
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) { //40 800 760px
    ball.dy = -ball.dy;
  }
}

// TODO: implement the create function

new Error ("your dog isnt as cool as my dog")

//const ball1 = create('blue', 4, 3);
function create(color, dx, dy) {
  // const newBall = Object.create(this);
  const newBall = {}
  newBall.dx = dx;//4
  console.log("THIS SHOULDNT RUN")
  newBall.dy = dy;//3
  newBall.width = 40;
  newBall.height = 40;
  
  newBall.element = document.createElement('div');
  newBall.element.style.borderRadius = "10%";
  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = newBall.width + 'px';//40
  newBall.element.style.height = newBall.height + 'px';//40

  // console.log("-------")
  // console.log(newBall)
  // console.log("-------")

  newBall.element.className += ' ball';

  newBall.width = parseInt(newBall.element.style.width);//40
  newBall.height = parseInt(newBall.element.style.height);//40

  area.element.appendChild(newBall.element);//<div id="area"></div>
  return newBall;
}

// TODO: implement the update function
function update(ball, x, y) {
  moveTo(ball, x, y);
  setTimeout(function () {
    changeDirectionIfNecessary(ball, x, y);
    update(ball, x + ball.dx, y + ball.dy);
  }, 1000);
}
//======STARTING
// Uncomment these lines for step 1 of the activity
// This is expected to create 3 balls within the area div
initialize();
const ball1 = create('blue', 4, 3);
const ball2 = create('red', 1, 5);
const ball3 = create('green', 2, 2);
moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);
console.log(ball1)
// //START HERE ON TUESDAY=====================================================================
// // // Uncomment these lines for step 2 of the activity
// // // This is expected to make the 3 balls move around the area div
update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);
update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);

