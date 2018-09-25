import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'ts-button',
  styleUrl: 'ts-button.css',
  shadow: true
})
export class TsButton {

  @Listen('body:click')
  handleClick(e) {
    e.target.classList.toggle('ts-active');
  }

  @Prop() class: string;
  @Prop() text: string;

  render() {
    return (
      <button class={this.class}>
        <span>{this.text}</span>
      </button>
    );
  }
}
