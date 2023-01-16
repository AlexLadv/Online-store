import noUiSlider from '../../../../node_modules/nouislider/dist/nouislider';
import './nouislider.min.scss';
import './style.scss';

class Range {
  createRangePrice() {
    const rangeSlider: any = document.getElementById('range-slider');

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [10, 1749],
        connect: true,
        step: 1,
        range: {
          min: [10],
          max: [1749],
        },
      });

      const input0 = document.getElementById('input-0');
      const input1 = document.getElementById('input-1');
      const inputs: any = [input0, input1];

      rangeSlider.noUiSlider.on('update', function (values: { [x: string]: number }, handle: string | number) {
        inputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i: number, value: null) => {
        const arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el: { addEventListener: (arg0: string, arg1: (e: any) => void) => void }, index: number) => {
        el.addEventListener('change', (e: { currentTarget: { value: null } }) => {
          console.log(index);
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }
  }

  createRangeStock() {
    const rangeSlider: any = document.getElementById('range-slider-2');

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [2, 150],
        connect: true,
        step: 1,
        range: {
          min: [2],
          max: [150],
        },
      });

      const input2 = document.getElementById('input-2');
      const input3 = document.getElementById('input-3');
      const inputs: any = [input2, input3];

      rangeSlider.noUiSlider.on('update', function (values: { [x: string]: number }, handle: string | number) {
        inputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i: number, value: null) => {
        const arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el: { addEventListener: (arg0: string, arg1: (e: any) => void) => void }, index: number) => {
        el.addEventListener('change', (e: { currentTarget: { value: null } }) => {
          console.log(index);
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }
  }
}

export { Range };
