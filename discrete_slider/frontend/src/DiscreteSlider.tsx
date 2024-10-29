import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { Slider, styled } from "@material-ui/core";

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

// const options = ["green", "eggs", "and", "ham"]

// function valuetext(value: number) {
//   return `${value}°C`;
// }

function createMarks(labels: string[]): any[] {
  return labels.map((label, index) => { return { value: index, label: label } });
}

class DiscreteSlider extends StreamlitComponentBase {
  public state = { numClicks: 0, isFocused: false }

  public render = (): ReactNode => {

    const vMargin = 7;
    const hMargin = 20;
    // const width = this.props.width;

    const StyledSlider = styled(Slider)({
      margin: `${vMargin}px ${hMargin}px`,
      width: this.props.width - (hMargin * 2)
    });  

    // get options from streamlit
    const options = this.props.args["options"];

    return (
      <StyledSlider
        aria-label="Restricted values"
        defaultValue={0}
        min= {0}
        max={options.length - 1}
        // getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="off"
        //marks={marks}
        marks={createMarks(options)}
        onChangeCommitted={(event, value) => {
          const selectedOption = options[Number(value)];
          Streamlit.setComponentValue(selectedOption);
        }}
        disabled={this.props.disabled}
      />
    );
  }
}

export default withStreamlitConnection(DiscreteSlider)
