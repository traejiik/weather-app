export default function showCustomAlert(message) {
  const alertBox = document.querySelector('.customAlert');
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = message;
  alertBox.classList.add('active');

  document.getElementById('closeAlert').addEventListener('click', () => {
    alertBox.classList.remove('active');
  });
}
