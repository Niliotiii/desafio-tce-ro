import { ValueTransformer } from 'typeorm';
export declare class CpfTransformer implements ValueTransformer {
    to(value: string): string;
    from(value: string): string;
}
