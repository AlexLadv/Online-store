import './card-button.scss';

export default function createCardButton(text: string, className: string) {
  const buttonContainer = new DocumentFragment();

  const button = document.createElement('button');
  button.classList.add('card-button');
  button.classList.add(className);
  button.innerText = text;
  buttonContainer.append(button);

  return buttonContainer;
}
