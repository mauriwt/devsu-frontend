import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bp-boton',
  templateUrl: './bp-boton.component.html',
  styleUrls: ['./bp-boton.component.scss']
})
export class BpBotonComponent {

  public buttonText = '';
  public clases = 'buttonMenu';

	@Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}
	get name(): string {
		return this.buttonText;
	}

  @Input()
  set class(valor: string) {
		this.clases += ' ' + valor;
	}
  get valor(): string {
		return this.clases;
	}

	@Input() color: string = '0068B4';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

	constructor() {}

	onClick() {
		this.btnClick.emit();
	}

}
