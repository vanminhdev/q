const confirmBtn = document.querySelector('.button--confirm');
const cancelBtn = document.querySelector('.button--cancel');
const dialog = document.querySelector('.dialog__overplay');
const dialogButton = document.querySelector('dialog__button');
const arEmoji = document.querySelector('.arEmoji');

const replaceBtn = () => {
  let confirmStyle = getComputedStyle(confirmBtn);
  let topConfirm = confirmStyle.top;
  let leftConfirm = confirmStyle.left;

  let cancelStyle = getComputedStyle(cancelBtn);
  let topCancel = cancelStyle.top;
  let leftCancel = cancelStyle.left;

  // Set confirmBtn position based on cancelBtn position
  confirmBtn.style.top = topCancel;
  confirmBtn.style.left = leftCancel;
  // Set cancelBtn position based on confirmBtn position
  cancelBtn.style.top = topConfirm;
  cancelBtn.style.left = leftConfirm;
}

const moveBtn = () => {
  // Random position
  let rdTop = Math.floor(Math.random() * 100);
  let rdLeft = Math.floor(Math.random() * 100);

  rdTop = (rdTop > 90) ? rdTop - 10 : rdTop;
  rdLeft = (rdLeft > 90) ? rdLeft - 10 : rdLeft;

  cancelBtn.style.top = `${rdTop}%`;
  cancelBtn.style.left = `${rdLeft}%`;
}

const handleCancelBtn = () => {
  let rdBtn = Math.floor(Math.random() * 100);
  // Replace or Move
  (rdBtn > 50) ? replaceBtn() : moveBtn();
}

const handleConfirmBtn = () => {
  // Show dialog
  dialog.style.display = 'block';
  arEmoji.src = './arEmoji_2.jpg';  
};

// Hide dialog
const hideDialog = () => dialog.style.display = 'none';