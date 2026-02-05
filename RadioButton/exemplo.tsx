// Exemplo de uso dos RadioButtons

const [checked, setChecked] = useState(0);   // 1 = 2h, 2 = 24 h, 3 = nao

<CustomRadioButton
  label="Avisar 2 horas antes"
  value="24"
  selected={checked === 1}
  onPress={() => {setChecked(1), Keyboard.dismiss()}}
/>

<CustomRadioButton
  label="Avisar 24 horas antes"
  value="2"
  selected={checked === 2}
  onPress={() => {setChecked(2), Keyboard.dismiss()}}
/>

<CustomRadioButton
  label="Não avisar"
  value="nao"
  selected={checked === 3}
  onPress={() => {setChecked(3), Keyboard.dismiss()}}
/>