'use-strict'

console.log('test');

init();

function init(){
  let btn = document.createElement('div');
  btn.id = 'btn';
  btn.removeAttribute('id');
  btn.classList.add('btn');
  btn.classList.remove('btn');
  let text = document.createTextNode('안녕하세요 nodeText 입니다.');
  btn.appendChild(text);
  document.body.appendChild(btn);

  let box = document.createElement('div');
  box.classList.add('box_items');
  let boxText = document.createTextNode('this is box item');
  box.appendChild(boxText);
  document.body.appendChild(box);

  let wrap = document.createElement('div');
  wrap.id = 'wrap';
  let container = document.createElement('div');
  container.id = 'container';
  let content = document.createElement('div');
  content.id = 'content';
  contentText = document.createTextNode('content 입니다만 무슨 문제라도?');
  content.appendChild(contentText);
  let br = document.createElement('br');
  let input = document.createElement('input');
  input.classList.add('insult');
  inputText = document.createTextNode('입력하세요');
  input.appendChild(inputText);
  let uList = document.createElement('ul');
  uList.id = 'lnb'
  let list = document.createElement('li');
  listText = document.createTextNode('이것은 li, 나는 li for 돌리는 데 실패했다.');
  list.appendChild(listText);

  wrap.appendChild(container);
  wrap.appendChild(content);
  uList.appendChild(list);
  container.appendChild(uList);
  content.appendChild(br);
  content.appendChild(input);
  document.body.appendChild(wrap);
}
