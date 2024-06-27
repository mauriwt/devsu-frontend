export class ElemtFormBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  min: number;
  max: number;
  len: number;
  ValorFechaMinimo: Date | undefined;
  ValorFechaMaximo: Date | undefined;
  pattern: { regex: any, mensaje: string };
  async: { funcion: any, mensaje: string };
  custom: { funcion: any, mensaje: string };
  order: number;
  controlType: string;
  type: string | number | Date;
  campocascade: string;
  options: any;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    min?: number,
    max?: number,
    len?: number;
    ValorFechaMinimo?: Date;
    ValorFechaMaximo?: Date;
    pattern?: any,
    async?: any;
    custom?: any;
    type?: string,
    campocascade?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.min = options.min || 0;
    this.max = options.max || 0;
    this.len = options.len || 0;
    this.ValorFechaMaximo = options.ValorFechaMaximo;
    this.ValorFechaMinimo = options.ValorFechaMinimo;
    this.pattern = options.pattern || '';
    this.async = options.async || '';
    this.custom = options.custom || '';
    this.campocascade = options.campocascade || '';
  }
}
