import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true
})
export class MyOtherComponent {

  @Prop() placeholder: string;

  render() {
    return (
      <div>
        <input type="text" placeholder={this.placeholder} />
      </div>
    );
  }
}