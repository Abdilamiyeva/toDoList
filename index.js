
  let todoList = [
    {
            id: 1,
            title: 'Vazifa junatishim kerak',
            isFinished: false
          }
  ];

function vazifaQoshish() {
  const id = parseInt(prompt('Vaifa ID sini  kiriting:'));
  const title = prompt('Vazifa  nomini  kiriting:');
  const isFinished = false;

  const todo = {
    id: id,
    title: title,
    isFinished: isFinished
  };

  todoList.push(todo);
  console.log(`Vazifa qo'shildi.`)
}

function vazifaStatusiniOzgartirish() {
  const id =parseInt(prompt(`Statusini o'zgartirmoqchi bo'lgan vazifa ID sini kiriting:`))
  const todo = vazifaniIdBoyichaTopish(id);

  if (todo) {
    const isFinished = confirm(`Todo holatini o'zgartirasizmi (Tugallangan / Tugallanmagan)?`);
    todo.isFinished = isFinished;
    console.log( `
    Vazifa statusi  o'zgartirildi.`);
  } else {
    console.log('Kiritgan ID topilmadi');
  }
}

function vazifaOchirish() {
  const id =parseInt(prompt(`O'chirmoqchi bo'lgan vazifa ID sini  kiriting:`)); 
  const index = vazifaIDBoyichaIndex(id);

  if (index !== -1) {
    todoList.splice(index, 1);
    console.log(`Vazifa  o'chirildi.`);
  } else {
    console.log('Kiritgan ID topilmadi');
  }
}

function barchaVazifalar() {
  console.log('Barcha Vazifalar :');
  console.log(todoList);
}

function tugallanganVazifalar() {
  const tugallanganVazifalar = todoList.filter(todo => todo.isFinished);
  console.log('Tugallangan vazifalar :');
  console.log(tugallanganVazifalar);
}

function tugallanmaganVazifalar() {
  const tugallanmaganVazifalar = todoList.filter(todo => !todo.isFinished);
  console.log('Tugallanmagan vazifalar:');
  console.log(tugallanmaganVazifalar);
}

function  vazifaniIdBoyichaTopish(id) {
  return todoList.find(todo => todo.id === id);
}

function vazifaIDBoyichaIndex(id) {
  return todoList.findIndex(todo => todo.id === id);
}
vazifaQoshish();
let choice;
while (choice !== 0) {
  choice = parseInt(prompt(`Quyidagilardan birini tanlang :
  1. Vazifa qo'shish
  2. Vazifa statusini o'zgartirish
  3. Vazifani ochirish
  4. Barcha vazifalarni ko'rish
  5. Tugallangan vazifalarni ko'rish 
  6. Tugallanmagan vazifalarni ko'rish 
  0. Dasturni to'xtatish `));

  switch (choice) {
    case 1:
      vazifaQoshish();
      break;
    case 2:
      vazifaStatusiniOzgartirish();
      break;
    case 3:
      vazifaOchirish();
      break;
    case 4:
      barchaVazifalar();
      break;
    case 5:
      tugallanganVazifalar();
      break;
    case 6:
      tugallanmaganVazifalar();
      break;
    case 0:
      console.log('Tamom');
      break;
    default:
      console.log('Menudagilardan birini tanlang ! ');
  }
}
