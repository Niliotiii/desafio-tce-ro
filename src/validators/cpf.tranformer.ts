import { ValueTransformer } from 'typeorm';

export class CpfTransformer implements ValueTransformer {
  to(value: string): string {
    return value.replace(/[^\d]+/g, '');
  }

  from(value: string): string {
    return value;
  }
}