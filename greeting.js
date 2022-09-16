const block = document.querySelector('.block');

let position = 0;
let positionTop= 0;

const move = () => {
      if (position <= 460 && positionTop == 0) {
        position += 16;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
      } else if (position >= 460 && positionTop <= 460) {
        positionTop += 16;
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100);
      } else if (positionTop >= 460 && position != 0) {
        position -= 16;
        block.style.left = `${position}px`;
        setTimeout(move, 100);
      } else if (position == 0 && positionTop != 0) {
        positionTop -= 16;
        block.style.top = `${positionTop}px`;
        setTimeout(move, 100);
      }
    };
    
    move();

    
//2 задание 

let i = 0;

function my_function() {
    i++;
    console.log('Прошло ' + i + " сек.");
}
setInterval(my_function,1000);